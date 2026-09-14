#!/usr/bin/env node
// Onchain Agents index generator.
// Renders README.md + data/index.json + data/index.csv + the stat-band SVGs
// from the public Sato Hub export feed (https://satohub.ai/api/export/index.json)
// and repo.config.json (community links, donations, UTM).
//
// Usage:
//   node scripts/generate.mjs                      # fetch the live export
//   node scripts/generate.mjs --local export.json  # render from a local export file
//
// Tooling: MIT © Prime Signal LLC. Catalog data: CC-BY-4.0, data by satohub.ai.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderStatBand } from "./render-statband.mjs";
import { renderHeader } from "./render-headers.mjs";
import { sanitizeRegistryResponse } from "./public-agent-boundary.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://satohub.ai";
const EXPORT_URL = process.env.INDEX_EXPORT_URL || `${SITE}/api/export/index.json`;
const REGISTRY_URL = `${SITE}/api/registry/search`;

const CONFIG = JSON.parse(readFileSync(join(ROOT, "repo.config.json"), "utf8"));

const args = process.argv.slice(2);
const localIdx = args.indexOf("--local");
const localPath = localIdx >= 0 ? args[localIdx + 1] : null;
const registryLocalIdx = args.indexOf("--registry-local");
const registryLocalPath = registryLocalIdx >= 0 ? args[registryLocalIdx + 1] : null;

// ---------- funnel: UTM on every satohub.ai link ----------

function withUtm(url) {
  if (!url || !url.startsWith(SITE)) return url;
  const u = CONFIG.utm || {};
  const qs = `utm_source=${u.source || "github"}&utm_medium=${u.medium || "index"}&utm_campaign=${u.campaign || "onchain-agents"}`;
  return url.includes("?") ? `${url}&${qs}` : `${url}?${qs}`;
}

// ---------- fetch ----------

async function loadExport() {
  if (localPath) return JSON.parse(readFileSync(localPath, "utf8"));
  const res = await fetch(EXPORT_URL, { headers: { "user-agent": "satohub-index-generator" } });
  if (!res.ok) throw new Error(`export fetch failed: ${res.status}`);
  return res.json();
}

async function loadRegistry() {
  if (registryLocalPath) {
    const json = JSON.parse(readFileSync(registryLocalPath, "utf8"));
    return sanitizeRegistryResponse(json, "local registry fixture");
  }

  let response;
  try {
    response = await fetch(REGISTRY_URL, { headers: { "user-agent": "satohub-index-generator" } });
  } catch {
    return [];
  }
  if (!response.ok) return [];

  // Parse + schema/privacy validation deliberately sit outside the network
  // fallback. A malformed or private-bearing response must stop publication.
  const json = await response.json();
  return sanitizeRegistryResponse(json);
}

// The MCP tool count is READ from the live server, never typed here — the
// toolset has grown five times since this repo was created and a hard-coded
// number would be wrong within the week. If the probe fails we say "the tool
// list" and link to it rather than print a count we cannot stand behind.
const MCP_URL = process.env.INDEX_MCP_URL || `${SITE}/api/mcp`;

async function loadToolCount() {
  try {
    const res = await fetch(MCP_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json, text/event-stream",
        "user-agent": "satohub-index-generator",
      },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list" }),
      signal: AbortSignal.timeout(20_000),
    });
    if (!res.ok) return null;
    const text = await res.text();
    // Streamable HTTP replies are SSE-framed: one `data:` line carries the JSON.
    const payload = text.trim().startsWith("{")
      ? text
      : text.split("\n").find((l) => l.startsWith("data:"))?.slice(5).trim();
    if (!payload) return null;
    const tools = JSON.parse(payload)?.result?.tools;
    return Array.isArray(tools) && tools.length > 0 ? tools.length : null;
  } catch {
    return null;
  }
}

// ---------- rendering helpers ----------

const LIVENESS_DOT = { Active: "🟢", Recent: "🟡", Quiet: "🟠", Dormant: "⚪" };

function esc(s) {
  return String(s ?? "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
}

// Description discipline (public-apis pattern): one scannable line per cell.
function clip(s, max = 110) {
  const t = esc(s);
  if (t.length <= max) return t;
  return t.slice(0, max).replace(/[\s,;:·—-]+\S*$/, "") + "…";
}

function fmtStars(n) {
  if (n == null) return "";
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function chainCell(rawChains) {
  const chains = (rawChains || []).filter((c) => c && !/^(unknown|n\/a|none)$/i.test(c));
  if (chains.length === 0) return "—";
  const shown = chains.slice(0, 3).join(", ");
  return chains.length > 3 ? `${shown} +${chains.length - 3}` : shown;
}

function picture(base, alt, width) {
  return `<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/${base}-dark.svg">
  <img src="assets/${base}-light.svg" alt="${alt}" width="${width}">
</picture>`;
}

function row(r, { withCategory = false } = {}) {
  const link = r.github_url || r.website_url || r.docs_url || withUtm(r.detail_url);
  const detail = withUtm(r.detail_url);
  const name = `[${esc(r.name)}](${link})`;
  const score = r.trust_score != null ? `[⬡ ${r.trust_score}](${detail})` : `[—](${detail})`;
  const activity = r.liveness ? `${LIVENESS_DOT[r.liveness] || ""} ${r.liveness}` : "—";
  const stars = r.github_stars != null ? `★ ${fmtStars(r.github_stars)}` : "—";
  const install = r.verified_install ? "✓" : "";
  const cat = withCategory ? ` ${r.category} |` : "";
  return `| ${name} |${cat} ${clip(r.description_short)} | ${chainCell(r.chains_supported)} | ${score} | ${activity} | ${stars} | ${install} |`;
}

const TABLE_HEAD = `| Name | What it is | Chains | ⬡ Score | Activity | ★ | ✓ |
|---|---|---|---|---|---|---|`;

// Section order — taxonomy-informed grouping of directory categories, each
// with a one-line definition + Related cross-links (awesome-selfhosted pattern).
const SECTIONS = [
  { title: "Agent Frameworks", glyph: "⬡", accent: "signal", cats: ["Agent Framework"], blurb: "build & run agents — onchain-native frameworks and general harnesses", related: ["Skills & Plugins", "Developer Tools"] },
  { title: "MCP Servers", glyph: "⇄", accent: "cyan", cats: ["MCP"], blurb: "plug-in tool servers your agent calls over the Model Context Protocol", related: ["Skills & Plugins", "Data & APIs"] },
  { title: "Wallet Infrastructure", glyph: "◈", accent: "warn", cats: ["Wallet Infrastructure"], blurb: "keys, wallets, and signing rails that let agents hold and move assets", related: ["Trading & DeFi", "Security"] },
  { title: "Trading & DeFi", glyph: "↗", accent: "violet", cats: ["Trading Tool", "DeFi Tool"], blurb: "DEXs, perps, swaps, and DeFi tooling agents trade through", related: ["Wallet Infrastructure", "Data & APIs"] },
  { title: "Data & APIs", glyph: "◎", accent: "blue", cats: ["Data Tool", "API / SDK"], blurb: "market data, chain data, and SDKs that feed agent decisions", related: ["MCP Servers", "Trading & DeFi"] },
  { title: "Developer Tools", glyph: "⊕", accent: "signal", cats: ["Developer Tool"], blurb: "scaffolds, testing, and infra for building onchain agents", related: ["Agent Frameworks"] },
  { title: "Skills & Plugins", glyph: "✦", accent: "violet", cats: ["Skill Repo"], blurb: "reusable skill packs and plugins that teach agents new tricks", related: ["MCP Servers", "Agent Frameworks"] },
  { title: "Launchpads & Marketplaces", glyph: "▲", accent: "cyan", cats: ["Agent Launchpad", "Agent Marketplace"], blurb: "venues where agents launch, list, and get hired", related: ["Live Onchain Agents (directory)"] },
  { title: "Security", glyph: "◇", accent: "warn", cats: ["Security Tool"], blurb: "audit, monitoring, and safety tooling for agent operations", related: ["Wallet Infrastructure"] },
  { title: "Live Onchain Agents (directory)", glyph: "●", accent: "signal", cats: ["Onchain Agent"], blurb: "deployed agents listed in the directory (registered ones live in the Passport section)", related: ["Launchpads & Marketplaces"] },
  { title: "Research & Reference", glyph: "≡", accent: "blue", cats: ["Research Tool", "Research Paper"], blurb: "papers, research tooling, and reference material (not scored — see methodology)", related: [] },
  { title: "Other", glyph: "○", accent: "signal", cats: ["Other"], blurb: "everything that doesn't fit a shelf yet", related: [] },
];

// Sub-grouping for oversized sections (kills the 77-row wall): bucket by
// use-case facet, in this priority order.
const SUBGROUP_THRESHOLD = 30;
const USECASE_BUCKETS = [
  ["Trading & DeFi", ["trading"]],
  ["Data & Analytics", ["data"]],
  ["Payments", ["payments"]],
  ["Wallets & Identity", ["wallets", "identity"]],
  ["Privacy & Security", ["privacy", "security"]],
  ["Build & Infra", ["build", "launch"]],
];

function anchor(title) {
  return title.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/ /g, "-");
}

const BACK_TO_INDEX = `**[⬆ Back to Index](#index)**`;

function directoryLink(cats) {
  return withUtm(`${SITE}/directory?category=${encodeURIComponent(cats[0])}`);
}

function sortRows(rows) {
  rows.sort((a, b) => (b.trust_score ?? -1) - (a.trust_score ?? -1) || (b.github_stars ?? 0) - (a.github_stars ?? 0));
  return rows;
}

// Writes the dark/light header SVG pair for a section and returns the
// <picture> block that replaces the plain markdown heading. The explicit
// <a id> anchors (written by callers) keep every TOC/nav link working.
function makeBanner(slugBase, { title, kicker = null, glyph = "⬡", accent = "signal" }) {
  mkdirSync(join(ROOT, "assets", "headers"), { recursive: true });
  // Dark only — the brand never sits on a light background (BRAND.md); the
  // panel reads as a dark card on GitHub light mode, like the site's shots.
  writeFileSync(
    join(ROOT, "assets", "headers", `${slugBase}.svg`),
    renderHeader({ title, kicker, glyph, accent })
  );
  return `<img src="assets/headers/${slugBase}.svg" alt="${title.replace(/"/g, "&quot;")}" width="920">`;
}

function sectionHeader(sec, count) {
  const related = (sec.related || [])
    .map((t) => `[${t}](#${anchor(t)})`)
    .join(" · ");
  const meta = [
    `**${count}** entries`,
    sec.blurb,
    related ? `Related: ${related}` : null,
    `[Browse + filter on satohub.ai →](${directoryLink(sec.cats)})`,
  ].filter(Boolean).join(" · ");
  const banner = makeBanner(anchor(sec.title), {
    title: sec.title,
    kicker: sec.blurb.split("—")[0].trim(),
    glyph: sec.glyph,
    accent: sec.accent,
  });
  return `<a id="${anchor(sec.title)}"></a>\n${banner}\n\n<sub>${meta}</sub>`;
}

function renderRows(rows) {
  return `${TABLE_HEAD}\n${rows.map((r) => row(r)).join("\n")}`;
}

function renderSectionBody(sec, rows) {
  if (rows.length <= SUBGROUP_THRESHOLD) return renderRows(sortRows(rows));
  // bucket by first matching use-case facet
  const buckets = new Map(USECASE_BUCKETS.map(([name]) => [name, []]));
  const general = [];
  for (const r of rows) {
    const uses = r.use_cases || [];
    const hit = USECASE_BUCKETS.find(([, keys]) => keys.some((k) => uses.includes(k)));
    if (hit) buckets.get(hit[0]).push(r);
    else general.push(r);
  }
  if (general.length) buckets.set("General", general);
  const parts = [];
  for (const [name, group] of buckets) {
    if (group.length === 0) continue;
    parts.push(`<a id="${anchor(`${sec.title} ${name}`)}"></a>\n#### ${name} (${group.length})\n\n${renderRows(sortRows(group))}`);
  }
  return parts.join("\n\n");
}

function renderSections(resources) {
  const used = new Set();
  const parts = [];
  const toc = [];
  for (const sec of SECTIONS) {
    const rows = resources.filter((r) => sec.cats.includes(r.category));
    rows.forEach((r) => used.add(r.slug));
    if (rows.length === 0) continue;
    toc.push(`- [${sec.title}](#${anchor(sec.title)}) (${rows.length})`);
    parts.push(`${sectionHeader(sec, rows.length)}\n\n${renderSectionBody(sec, rows)}\n\n${BACK_TO_INDEX}`);
  }
  const leftovers = resources.filter((r) => !used.has(r.slug));
  if (leftovers.length > 0) {
    toc.push(`- [Uncategorized](#uncategorized) (${leftovers.length})`);
    parts.push(`<a id="uncategorized"></a>\n${makeBanner("uncategorized", { title: "Uncategorized", glyph: "○", accent: "signal" })}\n\n${renderRows(sortRows(leftovers))}\n\n${BACK_TO_INDEX}`);
  }
  return { body: parts.join("\n\n"), toc: toc.join("\n") };
}

// ccxt-style tier: the best of the whole index, surfaced before the categories.
function renderSpotlight(resources) {
  const top = sortRows(resources.filter((r) => r.trust_score != null)).slice(0, 15);
  if (top.length === 0) return null;
  const head = `| Name | Category | What it is | Chains | ⬡ Score | Activity | ★ | ✓ |\n|---|---|---|---|---|---|---|---|`;
  return `${head}\n${top.map((r) => row(r, { withCategory: true })).join("\n")}`;
}

function renderMovers(resources) {
  const moved = resources.filter(
    (r) => r.trust_score_delta_7d != null && Math.abs(r.trust_score_delta_7d) >= 3 && r.trust_score != null
  );
  if (moved.length === 0) return null;
  const line = (r) => {
    const d = r.trust_score_delta_7d;
    const arrow = d > 0 ? "⬆" : "⬇";
    const sign = d > 0 ? `+${d}` : `${d}`;
    return `- ${arrow} **${sign}** [${esc(r.name)}](${withUtm(r.detail_url)}) — ${r.trust_score - d} → ${r.trust_score}`;
  };
  const risers = moved.filter((r) => r.trust_score_delta_7d > 0).sort((a, b) => b.trust_score_delta_7d - a.trust_score_delta_7d).slice(0, 5);
  const fallers = moved.filter((r) => r.trust_score_delta_7d < 0).sort((a, b) => a.trust_score_delta_7d - b.trust_score_delta_7d).slice(0, 5);
  const parts = [];
  if (risers.length) parts.push(risers.map(line).join("\n"));
  if (fallers.length) parts.push(fallers.map(line).join("\n"));
  return `Sato Score changes over the last 7 days, computed from the daily snapshot history — a moving list only a daily pipeline can produce.\n\n${parts.join("\n")}`;
}

// ---------- numbers this week (from the adoption export) ----------
// The README is the most-landed-on page Sato Hub has. These are the figures
// nobody else publishes, each with its method and sample beside it. Nothing
// is summed across venues or chains; a rate below the publishable sample is
// shown as "sample too small" rather than as a number.
const ADOPTION_URL = process.env.INDEX_ADOPTION_URL || `${SITE}/api/export/adoption.json`;
const NUMBERS = [
  { venue: "x402", stage: "answers_402", label: "Catalogued x402 resources that actually answer HTTP 402", venuePath: "x402" },
  { venue: "x402", stage: "settled_to_catalogued_seller", label: "USDC settlements to catalogued x402 sellers (nominal, 7d)", venuePath: "x402" },
  { venue: "x402", stage: "settled_to_catalogued_seller_real", label: "…excluding sellers classified as machine noise", venuePath: "x402" },
  { venue: "x402", stage: "settled_to_catalogued_seller_real_artemis", label: "…under the Artemis–Visa rule (≥3 tx from ≥2 payers)", venuePath: "x402" },
  { venue: "erc8004", stage: "registration_file_resolves", label: "ERC-8004 registration files that resolve", venuePath: "erc8004", perChain: true },
  { venue: "erc8004", stage: "mcp_endpoint_answers", label: "Declared MCP endpoints that answer a handshake", venuePath: "erc8004", perChain: true },
  { venue: "erc8004", stage: "registered", label: "ERC-8004 agents registered", venuePath: "erc8004", perChain: true },
];

async function loadAdoption() {
  const localIdx = args.indexOf("--adoption-local");
  if (localIdx >= 0) return JSON.parse(readFileSync(args[localIdx + 1], "utf8"));
  try {
    const res = await fetch(ADOPTION_URL, { headers: { accept: "application/json" }, signal: AbortSignal.timeout(20000) });
    if (!res.ok) return null;
    return await res.json();
  } catch { return null; }
}

function fmtNum(v, unit) {
  if (v == null) return null;
  const pct = /percent/i.test(unit || "");
  return pct ? `${Number(v).toLocaleString("en-US", { maximumFractionDigits: 1 })}%` : Number(v).toLocaleString("en-US");
}

// Track 5 C5.3: an 8-week text sparkline from adoption.json trend_8w. Block
// characters render on GitHub without an asset; a null week is a gap (·),
// never a zero. Fewer than two known points → no line.
function spark(trend) {
  if (!Array.isArray(trend)) return "";
  const known = trend.filter((v) => v != null).map(Number);
  if (known.length < 2) return "";
  const lo = Math.min(...known), hi = Math.max(...known);
  const bars = "▁▂▃▄▅▆▇█";
  return trend.map((v) => (v == null ? "·" : bars[hi === lo ? 3 : Math.round(((Number(v) - lo) / (hi - lo)) * 7)])).join("");
}

function renderNumbers(adoption) {
  if (!adoption?.measurements?.length) return null;
  const rows = [];
  for (const n of NUMBERS) {
    const ms = adoption.measurements.filter((m) => m.venue === n.venue && m.stage === n.stage && !m.platform_host);
    if (!ms.length) continue;
    const probedOrCount = ms.filter((m) => m.sample_size == null || Number(m.sample_size) > 0);
    const list = n.perChain
      ? probedOrCount.sort((a, b) => (Number(b.sample_size ?? b.value) || 0) - (Number(a.sample_size ?? a.value) || 0)).slice(0, 4)
      : probedOrCount.slice(0, 1);
    for (const m of list) {
      const thin = m.sample_size != null && m.publishable_rate === false;
      const val = m.value == null ? "unknown" : thin ? "sample too small" : fmtNum(m.value, m.unit);
      const n_ = m.sample_size != null ? ` <sub>n=${m.sample_size}</sub>` : "";
      const chain = n.perChain && m.chain ? ` · ${esc(m.chain)}` : "";
      const link = withUtm(`${SITE}/agent-economy/${n.venuePath}`);
      rows.push(`| ${esc(n.label)}${chain} | **${val}**${n_} | <code>${spark(m.trend_8w)}</code> | [method ↗](${link}) |`);
    }
  }
  if (!rows.length) return null;
  const week = adoption.week ? ` (week ${esc(adoption.week)})` : "";
  return `Measured by Sato Hub from public sources${week}; each row names its venue, chain and sample on its page. Rows are never added together — one unit means something different in each. "unknown" is a measurement that could not be taken, never zero.\n\n| Figure | This week | 8 weeks | |\n|---|---|---|---|\n${rows.join("\n")}`;
}

function renderRegistry(agents) {
  if (agents.length === 0) {
    return `*No public passports yet — [register your agent](${withUtm(`${SITE}/agents/register`)}) to appear here. Wallet-signature registration issues a passport instantly.*`;
  }
  const head = `| Agent | What it does | Chains | Wallet | On-chain checks | Passport |\n|---|---|---|---|---|---|`;
  const rows = agents.map((a) => {
    const name = a.website_url || a.repo_url ? `[${esc(a.name)}](${a.website_url || a.repo_url})` : esc(a.name);
    const wallet = a.wallet_verified ? "✓ key-verified" : "self-reported";
    const checks = a.onchain
      ? Object.entries(a.onchain).filter(([, v]) => v === true || v === "verified").map(([k]) => k).join(", ") || "—"
      : "—";
    return `| ${name} | ${esc(a.description)} | ${chainCell(a.chains_supported)} | ${wallet} | ${checks} | [passport](${withUtm(a.profile_url)}) |`;
  });
  return `${head}\n${rows.join("\n")}`;
}

function renderNewThisWeek(resources, now) {
  const cutoff = now - 7 * 86400_000;
  const fresh = resources
    .filter((r) => r.date_added && new Date(r.date_added).getTime() >= cutoff)
    .sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
  if (fresh.length === 0) return `*No new entries this week. Full history: [changelog](${withUtm(`${SITE}/changelog`)}).*`;
  const shown = fresh.slice(0, 10);
  const rest = fresh.length - shown.length;
  const lines = shown.map((r) => `- **[${esc(r.name)}](${withUtm(r.detail_url)})** (${r.category}) — ${clip(r.description_short)}`);
  if (rest > 0) lines.push(`- …and **${rest} more** this week — [full changelog →](${withUtm(`${SITE}/changelog`)})`);
  return lines.join("\n");
}

// The README renders from the catalog export, so site features have never
// appeared here — a reader of this repo could not tell that the same data is
// callable, checkable and citable. This section is that map. Everything in it
// is keyless and free; the tool count is probed live (see loadToolCount).
function renderUseTheData(toolCount) {
  const tools = toolCount ? `**${toolCount} tools**` : `the [tool list](${withUtm(`${SITE}/mcp`)})`;
  return `| Surface | What it does | Call it |
|---|---|---|
| **MCP** | ${tools} over Streamable HTTP — search the index, read agent-economy numbers, look up a Passport, run a Preflight, ask for a route | \`${SITE}/api/mcp\` · [quickstart](docs/connect-mcp.md) |
| **Skill / plugin** | the same tools plus a guide on when to use them, for Claude Code, Codex, Cursor, Hermes | \`npx skills add satohubai/sato-hub-skill\` · \`/plugin marketplace add satohubai/sato-plugins\` |
| **Preflight** | check a repo, package, MCP endpoint, ERC-8004 agent or ERC-20 token **before** you install, connect, pay or trade — every verdict names the rule that decided it, and \`unknown\` stays unknown | \`GET ${SITE}/api/preflight\` · [the page](${withUtm(`${SITE}/preflight`)}) |
| **Preflight in CI** | the same check across a whole lockfile on every push, SARIF findings, plus a badge. \`unknown\` can never fail your build | [\`satohubai/preflight-action\`](https://github.com/satohubai/preflight-action) · \`POST ${SITE}/api/preflight/batch\` |
| **Sato Route** | which venue to swap, hire an agent, launch a token or pay over x402 — the fee disclosed (including at zero) and every reason named. Recommend-only: it signs nothing and holds nothing | \`GET ${SITE}/api/route/{swap,agent,launch,x402,lp}\` · [the page](${withUtm(`${SITE}/route`)}) |
| **Sato Bot** | a goal in plain words → a build plan made of real listings from this index | [\`/satobot\`](${withUtm(`${SITE}/satobot`)}) · \`POST ${SITE}/api/satobot/plan\` |
| **Deploy spec** | the machine-readable install manifest behind the ✓ column — what a project installs as, and what we reproduced | [the standard](${withUtm(`${SITE}/docs/deploy-spec`)}) |
| **Signed responses** | responses can be signed Ed25519 so a downstream agent can verify a figure came from here unaltered | [JWKS](${SITE}/.well-known/jwks.json) · [key metadata](${SITE}/.well-known/sato-signing.json) |
| **Bulk export** | the whole catalog, JSON · CSV · NDJSON, CC-BY-4.0 | \`${SITE}/api/export/index.json\` · [all datasets](${withUtm(`${SITE}/data`)}) · [OpenAPI](${SITE}/api/openapi.json) |

No key, no account, no rate-limit deal to sign. A Sato Score is a measure of how
open, active and verifiable a project is — [not a safety, quality or returns
grade](docs/sato-score.md).`;
}

function renderCommunity() {
  const lines = [
    CONFIG.x_url ? `- 𝕏 **[@SatoHub](${CONFIG.x_url})** — daily onchain-agent signal` : null,
    `- 🛠️ **[The Builder](${withUtm(`${SITE}/build`)})** — describe your agent, get the stack ([about](BUILDER.md))`,
  ];
  if (CONFIG.discord_url) lines.push(`- 💬 **[Discord](${CONFIG.discord_url})** — the builder channel`);
  if (CONFIG.newsletter_url)
    lines.push(`- ✉️ **[Sato Hub Briefing](${withUtm(CONFIG.newsletter_url)})** — the weekly digest, by email`);
  return lines.join("\n");
}

function renderSupport() {
  const { eth, sol, btc } = CONFIG.donations || {};
  if (!eth && !sol && !btc) return null;
  const lines = [];
  if (eth) lines.push(`- **Ethereum · Base · Arbitrum:** \`${eth}\``);
  if (sol) lines.push(`- **Solana:** \`${sol}\``);
  if (btc) lines.push(`- **Bitcoin:** \`${btc}\``);
  return `Donations fund the data infrastructure (daily pipelines, verification harness) — never placement. Placement is not for sale ([NEUTRALITY.md](NEUTRALITY.md)).\n\n${lines.join("\n")}`;
}

// ---------- answer-first: the stack, layer by layer ----------
// This section exists because of how the repo is actually read: an LLM asked
// "what do I build an onchain agent with?" fetches the README and truncates it
// at 10-50 KB. Everything above the answer is a tax on being quotable, so the
// answer goes first and stays small. Tables are DERIVED — nothing here is typed
// by hand, and "highest-scored" is the only claim the data supports.

const lower = (v) => String(v ?? "").toLowerCase();
const hasAny = (arr, keys) => (arr || []).some((v) => keys.includes(lower(v)));

// Layers are NOT exclusive: an x402 MCP server belongs in both the MCP layer
// and the payments layer, and a reader looking for either should find it.
const LAYERS = [
  {
    slug: "agent-frameworks",
    title: "Agent runtimes & frameworks",
    n: 6,
    what: "The loop that runs the agent: prompting, memory, tool calls, scheduling. Pick this first — it decides what everything else plugs into.",
    match: (r) => r.category === "Agent Framework",
    choose:
      "Score measures openness and activity, not adoption. A closed-source framework scores low because its code cannot be read, not because it is worse at running agents.",
  },
  {
    slug: "action-kits",
    title: "Onchain action kits & SDKs",
    n: 6,
    what: "Libraries that turn an agent's decision into a signed transaction — swap, transfer, mint, stake — without writing the chain plumbing yourself.",
    match: (r) =>
      r.category !== "Agent Framework" &&
      (r.category === "Developer Tool" ||
        r.resource_type === "Framework" ||
        (r.category === "API / SDK" && hasAny(r.use_cases, ["build", "wallets"]))),
    choose:
      "Check the Chains column before the score: an action kit that does not cover your chain is the wrong kit at any score.",
  },
  {
    slug: "mcp-servers",
    title: "MCP servers",
    n: 8,
    what: "Tool servers your agent calls over the Model Context Protocol. This is the largest layer in the index and the fastest-moving.",
    match: (r) => r.category === "MCP" || hasAny(r.standards, ["mcp"]),
    choose:
      "An MCP server is a remote process you hand your agent's tool calls to. Read what it asks for — a key, a signer, shell access — before you connect it.",
  },
  {
    slug: "wallets-keys",
    title: "Wallets, keys & permissions",
    n: 6,
    what: "Where the agent's key lives and what it is allowed to do: embedded wallets, MPC, smart accounts, session keys and spend permissions.",
    match: (r) => r.category === "Wallet Infrastructure",
    choose:
      "The score says nothing about custody. Read the open-source status and the project's own docs on who can move funds; this index does not audit key handling.",
  },
  {
    slug: "data-rpc",
    title: "Data, RPC & indexing",
    n: 6,
    what: "What the agent knows before it acts: RPC access, market data, chain indexing, wallet and token analytics.",
    match: (r) =>
      r.category === "Data Tool" ||
      ((r.category === "API / SDK" || r.category === "MCP") &&
        hasAny(r.tags, ["rpc", "market-data", "indexer", "analytics", "wallet-data", "portfolio"])),
    choose: null,
  },
  {
    slug: "payments",
    title: "Payments & agent commerce",
    n: 6,
    what: "How agents pay and get paid: x402 (HTTP 402 plus stablecoin), agent commerce protocols, and the stablecoin rails underneath.",
    match: (r) =>
      hasAny(r.standards, ["x402"]) ||
      hasAny(r.tags, [
        "x402",
        "payments",
        "micropayments",
        "agent-payments",
        "agent-commerce",
        "stablecoin",
        "stablecoins",
        "usdc",
      ]),
    choose:
      "x402 support in this index means the standard is declared. Whether an endpoint actually answers HTTP 402 is measured separately — see Numbers this week.",
  },
  {
    slug: "identity-discovery",
    title: "Identity, discovery & standards",
    n: 6,
    what: "How an agent is identified and found by other agents: ERC-8004 registration, MCP discovery, A2A agent cards.",
    match: (r) =>
      hasAny(r.standards, ["erc-8004", "erc-8183", "a2a"]) ||
      hasAny(r.tags, ["identity", "erc-8004", "a2a", "standard", "reputation"]),
    choose:
      "Registering an identity proves a key controls a record. It is not a claim about the agent behind it, and nothing in this layer verifies behaviour.",
  },
  {
    slug: "security",
    title: "Security & preflight",
    n: 6,
    what: "Checks you run before an agent installs, connects, signs or trades: contract and token screening, endpoint checks, monitoring.",
    match: (r) => r.category === "Security Tool",
    choose:
      "Nothing in this layer makes an agent safe. These tools surface signals; the decision, and the loss, stay yours.",
  },
  {
    slug: "trading-venues",
    title: "Trading & DeFi venues",
    n: 6,
    what: "Where the agent actually trades: DEXs, aggregators, perps, lending and yield venues with programmatic access.",
    match: (r) => r.category === "Trading Tool" || r.category === "DeFi Tool",
    choose:
      "No performance, returns or profitability is measured here, and none is implied by a score.",
  },
];

function relDays(iso) {
  if (!iso) return "—";
  const ms = Date.now() - new Date(iso).getTime();
  if (!Number.isFinite(ms)) return "—";
  const d = Math.floor(ms / 86_400_000);
  if (d <= 0) return "today";
  if (d === 1) return "1 day ago";
  if (d < 31) return `${d} days ago`;
  const m = Math.floor(d / 30);
  if (m < 24) return `${m} month${m > 1 ? "s" : ""} ago`;
  return `${Math.floor(d / 365)} years ago`;
}

// The Checked column: what WE checked, named by the check. Never a safety mark.
function checkedCell(r) {
  if (r.verified_install) return "install reproduced";
  if (r.observed_success_pct != null && r.observed_days != null) return "live probed";
  return "";
}

function layerRows(resources, layer) {
  return sortRows(resources.filter((r) => r.trust_score != null && layer.match(r))).slice(0, layer.n);
}

function stackTable(rows) {
  const head = `| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|`;
  const body = rows
    .map((r) => {
      const link = r.github_url || r.website_url || r.docs_url || withUtm(r.detail_url);
      return `| [${esc(r.name)}](${link}) | ${clip(r.description_short, 80)} | ${chainCell(r.chains_supported)} | ${r.trust_score ?? "—"} | ${relDays(r.last_activity_at)} | ${checkedCell(r)} |`;
    })
    .join("\n");
  return `${head}\n${body}`;
}

function renderStack(resources, { forDocs = false } = {}) {
  const parts = [];
  for (const layer of LAYERS) {
    const rows = layerRows(resources, layer);
    if (rows.length === 0) continue;
    const total = resources.filter(layer.match).length;
    const href = forDocs ? `categories/${layer.slug}.md` : `docs/categories/${layer.slug}.md`;
    parts.push(
      `### ${layer.title}\n\n${layer.what}\n\n${stackTable(rows)}\n\n` +
        `<sub>Highest-scored in this layer, ${rows.length} of ${total}. [All ${total} →](${href})</sub>` +
        (layer.choose ? `\n\n**How to choose.** ${layer.choose}` : "")
    );
  }
  return parts.join("\n\n");
}

// Example stacks, composed only of listings in this index and picked by score
// within each layer. They are examples of how the layers fit together, not
// recommendations, and no combination here has been run end to end by us.
const STARTING_STACKS = [
  { name: "Trade on Base", goal: "An agent that watches a market and swaps on Base.", layers: ["agent-frameworks", "action-kits", "wallets-keys", "data-rpc", "trading-venues"], chain: "base" },
  { name: "Trade on Solana", goal: "The same shape, on Solana.", layers: ["agent-frameworks", "action-kits", "wallets-keys", "data-rpc", "trading-venues"], chain: "solana" },
  { name: "Get paid per call", goal: "An agent that sells a service and settles over x402.", layers: ["agent-frameworks", "mcp-servers", "wallets-keys", "payments", "identity-discovery"] },
  { name: "Research and report", goal: "A read-only agent: no keys, no signing, chain data in and text out.", layers: ["agent-frameworks", "mcp-servers", "data-rpc", "security"] },
  { name: "Discoverable by other agents", goal: "An agent other agents can find, verify and call.", layers: ["agent-frameworks", "identity-discovery", "mcp-servers", "payments"] },
];

const LAYER_SHORT = {
  "agent-frameworks": "Runtime",
  "action-kits": "Actions",
  "mcp-servers": "Tools",
  "wallets-keys": "Wallet",
  "data-rpc": "Data",
  payments: "Payments",
  "identity-discovery": "Identity",
  security: "Checks",
  "trading-venues": "Venue",
};

function renderStartingStacks(resources) {
  const byLayer = new Map(LAYERS.map((l) => [l.slug, l]));
  const out = [];
  for (const stack of STARTING_STACKS) {
    const picks = [];
    const used = new Set();
    for (const slug of stack.layers) {
      const layer = byLayer.get(slug);
      if (!layer) continue;
      let pool = resources.filter((r) => r.trust_score != null && layer.match(r) && !used.has(r.slug));
      // A chain-specific stack never falls back to an off-chain pick: a layer
      // with nothing on that chain is simply absent from the example.
      if (stack.chain) pool = pool.filter((r) => hasAny(r.chains_supported, [stack.chain, "multichain"]));
      const pick = sortRows(pool)[0];
      if (!pick) continue;
      used.add(pick.slug);
      picks.push(`**${LAYER_SHORT[slug]}** [${esc(pick.name)}](${withUtm(pick.detail_url)})`);
    }
    if (picks.length < 3) continue;
    out.push(`- **${stack.name}** — ${stack.goal}  \n  ${picks.join(" → ")}`);
  }
  if (!out.length) return null;
  return `Five ways the layers fit together, each built only from listings in this index and picked by the highest Sato Score in each layer. These are **examples, not endorsements** — we have not run these combinations end to end, and a higher score does not mean a better fit for your problem.\n\n${out.join("\n")}`;
}

// ---------- generated pages (GitHub Pages source: branch main, path /docs) ----------

const WRITTEN = new Set();

function writeIfChanged(relPath, content) {
  const abs = join(ROOT, relPath);
  WRITTEN.add(relPath);
  let prev = null;
  try {
    prev = readFileSync(abs, "utf8");
  } catch {}
  if (prev === content) return false;
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content);
  return true;
}

// Only generated directories are pruned; hand-written docs are never touched.
function pruneGenerated(dir) {
  let entries = [];
  try {
    entries = readdirSync(join(ROOT, dir));
  } catch {
    return 0;
  }
  let removed = 0;
  for (const f of entries) {
    if (!f.endsWith(".md")) continue;
    const rel = `${dir}/${f}`;
    if (WRITTEN.has(rel)) continue;
    rmSync(join(ROOT, rel));
    removed++;
  }
  return removed;
}

function frontMatter(fields) {
  const yaml = Object.entries(fields)
    .map(([k, v]) => `${k}: ${JSON.stringify(String(v))}`)
    .join("\n");
  return `---\n${yaml}\n---\n\n`;
}

function listRow(r) {
  const link = r.github_url || r.website_url || r.docs_url || withUtm(r.detail_url);
  return `| [${esc(r.name)}](${link}) | ${clip(r.description_short, 100)} | ${chainCell(r.chains_supported)} | ${r.trust_score ?? "—"} | ${relDays(r.last_activity_at)} | [satohub.ai](${withUtm(r.detail_url)}) · [detail](../listings/${r.slug}.md) |`;
}

function renderCategoryPage(layer, rows, today) {
  const sorted = sortRows(rows.slice());
  const installs = sorted
    .filter((r) => r.deploy_spec?.install?.length || r.install)
    .slice(0, 40)
    .map((r) => `- **${esc(r.name)}** — \`${esc(String((r.deploy_spec?.install || [r.install])[0])).slice(0, 120)}\``)
    .join("\n");
  return (
    frontMatter({
      title: `${layer.title} — Onchain Agents index`,
      description: layer.what,
      canonical: `${SITE}/directory`,
      layout: "default",
    }) +
    `# ${layer.title}\n\n${layer.what}\n\n` +
    `**${sorted.length} listings**, ordered by Sato Score — a 0–100 measure of how open, active and verifiable a project is, [not a safety or returns grade](../sato-score.md). Rendered ${today} from the public Sato Hub export.\n\n` +
    `| Name | What it is | Chains | ⬡ Score | Last activity | Links |\n|---|---|---|---|---|---|\n` +
    sorted.map(listRow).join("\n") +
    `\n\n## Install lines\n\nWhere a project publishes one, as recorded in its deploy spec:\n\n` +
    (installs || "*None published in this layer yet.*") +
    `\n\n[← All layers](../index.md) · [satohub.ai directory ↗](${withUtm(`${SITE}/directory`)})\n`
  );
}

function renderListingPage(r, today) {
  const facts = [];
  const push = (k, v) => {
    if (v == null || v === "" || (Array.isArray(v) && v.length === 0)) return;
    facts.push(`- **${k}:** ${Array.isArray(v) ? v.map(esc).join(", ") : esc(v)}`);
  };
  const score =
    r.trust_score != null
      ? `**⬡ ${r.trust_score}** (${r.trust_tier || "—"})` +
        (r.trust_score_delta_7d != null && r.trust_score_delta_7d !== 0
          ? `, ${r.trust_score_delta_7d > 0 ? "+" : ""}${r.trust_score_delta_7d} over 7 days`
          : "") +
        (r.provisional ? " — provisional, thin evidence so far" : "")
      : "not scored (non-product listing)";
  push("Category", r.category);
  push("Type", r.resource_type);
  push("Chains", (r.chains_supported || []).filter(Boolean));
  push("Standards", r.standards);
  push("Interfaces", r.interfaces);
  push("Use cases", r.use_cases);
  push("Creator", r.creator_name);
  push("Open source", r.open_source_status);
  push("Status", r.status);
  push("Activity", r.liveness ? `${r.liveness} — last activity ${relDays(r.last_activity_at)}` : null);
  push("GitHub stars", r.github_stars != null ? fmtStars(r.github_stars) : null);
  push("Deploys as", r.deployment_options);
  push("Works with", (r.supported_integrations || []).slice(0, 12));

  const ds = r.deploy_spec;
  const deploy = ds
    ? `\n## Deploy spec\n\n` +
      (ds.install?.length
        ? "```sh\n" + ds.install.slice(0, 4).map((i) => String(i).slice(0, 200)).join("\n") + "\n```\n\n"
        : "") +
      (ds.entry ? `- **Entry:** ${esc(ds.entry)}\n` : "") +
      (ds.runtime ? `- **Runtime:** ${esc(ds.runtime)}\n` : "") +
      (ds.requires?.length ? `- **Requires:** ${ds.requires.slice(0, 10).map(esc).join(", ")}\n` : "") +
      (ds.license ? `- **License:** ${esc(ds.license)}\n` : "") +
      (ds.mcp_native != null ? `- **MCP native:** ${ds.mcp_native ? "yes" : "no"}\n` : "") +
      (ds.deploy_status ? `- **Deploy status:** ${esc(ds.deploy_status)}\n` : "") +
      (ds.as_of ? `- **As of:** ${esc(ds.as_of)}\n` : "")
    : "";

  const checks = [];
  if (r.verified_install)
    checks.push(
      `Install reproduced in an isolated container${r.install_verified_at ? ` on ${esc(r.install_verified_at)}` : ""}.`
    );
  if (r.observed_success_pct != null && r.observed_days != null)
    checks.push(
      `Live endpoint probed by us: ${r.observed_success_pct}% of our checks succeeded over ${r.observed_days} days. That is a success rate of our checks, not the project's uptime.`
    );
  checks.push(
    `Verification status: **${esc(r.verification_status || "Unverified")}**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.`
  );

  const links = [
    r.website_url ? `[Website](${r.website_url})` : null,
    r.docs_url ? `[Docs](${r.docs_url})` : null,
    r.github_url ? `[GitHub](${r.github_url})` : null,
    r.detail_url ? `[Sato Hub page ↗](${withUtm(r.detail_url)})` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    frontMatter({
      title: `${r.name} — Sato Hub index`,
      description: clip(r.description_short, 150),
      canonical: r.detail_url || SITE,
      layout: "default",
    }) +
    `# ${esc(r.name)}\n\n${esc(r.description_short)}\n\n` +
    `Sato Score: ${score} — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).\n\n` +
    `## Facts\n\n${facts.join("\n")}\n${deploy}` +
    `\n## What we checked\n\n${checks.map((c) => `- ${c}`).join("\n")}\n\n` +
    `## Links\n\n${links}\n\n` +
    `## Cite\n\n> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry \`${r.slug}\`. ${r.detail_url || SITE} — retrieved ${today}.\n\n` +
    `[← All layers](../index.md)\n`
  );
}

function renderDocsIndex(resources, today) {
  return (
    frontMatter({
      title: "The onchain agent stack, layer by layer",
      description:
        "What to build an onchain agent with: frameworks, action kits, MCP servers, wallets, data, payment rails, identity, security and trading venues — scored and updated daily.",
      canonical: SITE,
      layout: "default",
    }) +
    `# The onchain agent stack, layer by layer\n\n` +
    `A daily-rendered index of what onchain AI agents are built from — ${resources.length} listings, each with a 0–100 Sato Score of how open, active and verifiable it is. Rendered ${today}. Catalog data CC-BY-4.0, attribution: data by satohub.ai.\n\n` +
    renderStack(resources, { forDocs: true }) +
    `\n\n## Every layer in full\n\n` +
    LAYERS.map((l) => `- [${l.title}](categories/${l.slug}.md)`).join("\n") +
    `\n\n## Reference\n\n- [Sato Score methodology](sato-score.md)\n- [Taxonomy](taxonomy.md)\n- [Connect over MCP](connect-mcp.md)\n- [Full index on GitHub](https://github.com/satohubai/onchain-agents)\n- [satohub.ai ↗](${withUtm(SITE)})\n`
  );
}

const DOCS_CONFIG = `# GitHub Pages config. Source: branch main, path /docs.
title: Onchain Agents — the scored index of the crypto agent stack
description: >-
  What onchain AI agents are built from: frameworks, MCP servers, wallets,
  payment rails, data tools and trading venues, each with a 0-100 Sato Score
  of how open, active and verifiable it is. Rendered daily. CC-BY-4.0.
theme: jekyll-theme-minimal
url: https://satohubai.github.io
baseurl: /onchain-agents
markdown: kramdown
plugins:
  - jekyll-seo-tag
`;

// ---------- llms.txt ----------
// Generated, not hand-maintained: the previous hand-written copy claimed
// "12 read-only tools" long after the server had grown past it.
const TOOLS_URL = process.env.INDEX_TOOLS_URL || `${SITE}/api/mcp/tools.json`;

async function loadToolMeta() {
  const localIdx = args.indexOf("--tools-local");
  if (localIdx >= 0) return JSON.parse(readFileSync(args[localIdx + 1], "utf8"));
  try {
    const res = await fetch(TOOLS_URL, {
      headers: { accept: "application/json", "user-agent": "satohub-index-generator" },
      signal: AbortSignal.timeout(20_000),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return typeof json?.count === "number" ? json : null;
  } catch {
    return null;
  }
}

function renderLlms(resources, tools, today) {
  const raw = "https://raw.githubusercontent.com/satohubai/onchain-agents/main";
  const writes = tools?.write_tools?.length || 0;
  const toolLine = tools?.count
    ? `${tools.count} tools over Streamable HTTP (${tools.count - writes} read, ${writes} write)`
    : "the live tool list";
  const writeLine = writes ? ` — write tools: ${tools.write_tools.join(", ")}` : "";
  return `# Onchain Agents — the scored, daily-updated index of the crypto agent stack

> ${resources.length} listings of what onchain AI agents are built from: agent frameworks,
> onchain action kits, MCP servers, wallets and key management, data and RPC,
> x402 payment rails, identity standards (ERC-8004, A2A), security tooling and
> trading venues. Rendered daily from satohub.ai. Last render: ${today}.
> Every product listing carries a Sato Score: 0-100, measuring how OPEN, ACTIVE
> and VERIFIABLE a project is. It is NOT a safety, quality, security or returns
> grade, and nothing here is financial advice. Self-reported is not verified.
> Catalog data CC-BY-4.0, attribution: data by satohub.ai.

## Start here

- [The stack, layer by layer](${raw}/README.md): the answer to "what do I build an onchain agent with" — nine layers, each a table of the highest-scored listings with chains, score, last activity and what we checked. It is the first section of the README.
- [Pages site](https://satohubai.github.io/onchain-agents/): the same, one page per layer
- Starting stacks: five example layer combinations built only from listings in this index — examples, not endorsements (README, after the stack section)

## Layers (one page each)

${LAYERS.map((l) => `- [${l.title}](${raw}/docs/categories/${l.slug}.md): ${l.what}`).join("\n")}

## Per-listing pages

- Every listing has a page at ${raw}/docs/listings/<slug>.md — facts, deploy spec, what we checked, links, citation
- Slugs are the \`slug\` field in data/index.json

## Data (stable, versioned)

- [index.json](${raw}/data/index.json): full index, schema_version field, one object per resource
- [index.csv](${raw}/data/index.csv): flat CSV of the same
- [Live export feed](${SITE}/api/export/index.json): the upstream source; also .csv and .ndjson, with ?category= ?chain= ?standard= ?use_case= slices
- [All datasets](${SITE}/datasets): every published dataset and its license
- [Schemas](${SITE}/schemas): versioned JSON Schemas for these formats
- [OpenAPI](${SITE}/api/openapi.json): every public operation

## Query it live over MCP

- [MCP endpoint](${SITE}/api/mcp): ${toolLine}${writeLine}
- [Tool list as JSON](${SITE}/api/mcp/tools.json): names, descriptions and input schemas
- [Connection guide](${raw}/docs/connect-mcp.md)
- Skill: \`npx skills add satohubai/sato-hub-skill\` · Plugin: \`/plugin marketplace add satohubai/sato-plugins\`

## Docs

- [Sato Score methodology](${raw}/docs/sato-score.md): what the 0-100 score measures and what it does not
- [Taxonomy](${raw}/docs/taxonomy.md): entity classes, resource types, interfaces, standards facets
- [Neutrality](${raw}/NEUTRALITY.md): placement is not for sale
- [Reporting a problem with an entry](${raw}/SECURITY.md)
- [Cite this dataset](${raw}/CITATION.cff) · [dataset record](${SITE}/datasets/onchain-agents-index)
- [Status of these surfaces](${SITE}/status/sato-hub)

## Related

- [Agent Passports](${SITE}/agents): registered agents with on-chain verification checks and machine-readable manifests
- [Agent Architect / Builder](${SITE}/build): describe an agent in plain language, get a build plan made of listings from this index
- [SATO OS](${raw}/SATO-OS.md): self-hosted mission control for running an onchain agent
- [satohub.ai](${SITE}): the full product
`;
}

// ---------- outputs ----------

function toCsv(resources) {
  const cols = [
    "slug", "name", "category", "entity_class", "resource_type", "description_short",
    "website_url", "github_url", "docs_url", "chains_supported", "standards",
    "status", "open_source_status", "trust_score", "trust_tier", "trust_score_delta_7d", "liveness",
    "github_stars", "verified_install", "date_added", "detail_url",
  ];
  const escCsv = (v) => {
    if (v == null) return "";
    const s = Array.isArray(v) ? v.join(";") : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [cols.join(",")];
  for (const r of resources) lines.push(cols.map((c) => escCsv(r[c])).join(","));
  return lines.join("\n") + "\n";
}

async function main() {
  const exp = await loadExport();
  const agents = await loadRegistry();
  const resources = exp.resources;
  const now = Date.now();
  const today = new Date(now).toISOString().slice(0, 10);

  // Coverage-first stats: use export.aggregates when the feed has it
  // (server-computed, single definition via earnedVerification); otherwise
  // fall back to computing the legacy scored/verified counts locally so the
  // generator still runs unchanged against older feeds.
  const agg = exp.aggregates || null;
  const scored = agg ? agg.scored : resources.filter((r) => r.trust_score != null).length;
  const verified = resources.filter((r) => r.verified_install).length;
  const { body, toc } = renderSections(resources);
  const movers = renderMovers(resources);
  const numbers = renderNumbers(await loadAdoption());
  const support = renderSupport();
  const spotlight = renderSpotlight(resources);
  const useTheData = renderUseTheData(await loadToolCount());
  const stack = renderStack(resources);
  const startingStacks = renderStartingStacks(resources);

  // daily-refreshed stat band (dark/light pair)
  for (const variant of ["dark", "light"]) {
    writeFileSync(
      join(ROOT, "assets", `statband-${variant}.svg`),
      agg
        ? renderStatBand({
            entries: agg.resources,
            chains: agg.chains,
            scored: agg.scored,
            checked: agg.independently_checked,
            date: today,
            variant,
          })
        : renderStatBand({ entries: resources.length, scored, verified, date: today, variant })
    );
  }

  const statBandAlt = agg
    ? `${agg.resources} resources · ${agg.chains} chains · ${agg.scored} scored · ${agg.independently_checked} independently checked · updated ${today}`
    : `${resources.length} entries · ${scored} scored · ${verified} verified installs · updated ${today}`;

  // Coverage-first intro line, only when the feed carries aggregates —
  // verbatim explainer sentence from the site's directory band (Global
  // Constraints), so the two surfaces never drift apart.
  const coverageLine = agg
    ? `**${agg.scored} scored** (evidence-only Sato Score, every product) · **${agg.independently_checked} independently checked ✓** (${agg.checked_legs.reproduced} installs reproduced in isolated containers, ${agg.checked_legs.reviewed} evidence-reviewed, ${agg.checked_legs.probed} live endpoints probed) — and growing.

<sub>Every product listing carries a Sato Score — a 0–100 measure of how open, active, and verifiable it is. Independently checked means we reproduced its documented install in an isolated container, reviewed its verification evidence, or probed its live endpoint ourselves.</sub>
`
    : "";

  const tocExtras = [
    `- [The stack, layer by layer](#the-stack-layer-by-layer)`,
    `- [Starting stacks](#starting-stacks)`,
    `- [Use the data](#use-the-data)`,
    spotlight ? `- [⬡ Top of the index](#-top-of-the-index)` : null,
    movers ? `- [📈 Movers (7d)](#-movers-7d)` : null,
    numbers ? `- [📊 Numbers this week](#-numbers-this-week)` : null,
    `- [Live agents (Passport registry)](#live-agents-passport-registry)`,
    `- [Standards & protocols](#standards--protocols)`,
    `- [New this week](#new-this-week)`,
    `- [Community](#community)`,
    support ? `- [Support the index](#support-the-index)` : null,
  ].filter(Boolean).join("\n");

  const readme = `# Onchain Agents

**The scored, daily-updated index of the onchain agent stack** — every framework, MCP server, wallet, payment rail, data feed, and live agent, tracked and scored daily.

- **What this is.** ${resources.length} listings of what onchain AI agents are actually built from, across ${agg ? agg.chains : "many"} chains, rendered daily from a public export. Nothing is listed automatically and placement is not for sale.
- **What a Sato Score is.** A 0–100 measure of how **open, active and verifiable** a project is, computed from evidence only. It is **not** a safety, quality, security or returns grade, and self-reported is never treated as verified.
- **How current it is.** Re-rendered every day; \`Last activity\` is observed, not claimed. \`unknown\` means we could not measure it, never zero.
- **License.** Catalog data CC-BY-4.0 (*data by satohub.ai*); tooling MIT. Free JSON, CSV and NDJSON, plus a live MCP endpoint — no key, no account.

<a id="the-stack-layer-by-layer"></a>
## The stack, layer by layer

Nine layers, from the runtime down to the venue. Each table is the **highest-scored** listings in that layer — highest-scored is not "best", and a score measures openness, activity and verifiability, nothing else. \`Checked\` says what *we* did: reproduced the documented install in an isolated container, or probed the live endpoint.

${stack}

<a id="starting-stacks"></a>
## Starting stacks

${startingStacks || "*Not enough scored listings to compose example stacks.*"}

Per-layer pages with every listing: [docs/index.md](docs/index.md) · per-listing pages: [docs/listings/](docs/listings/) · the full index is [below](#index).

---

<div align="center">

${picture("banner", "Onchain Agents — the scored, daily-updated index of the crypto agent stack", 880)}

${picture("statband", statBandAlt, 760)}
${coverageLine}
${CONFIG.x_url ? `[<img src="https://img.shields.io/badge/𝕏_Follow_@SatoHub-0c0f16?style=for-the-badge&logoColor=white" alt="Follow SatoHub on X">](${CONFIG.x_url})` : ""}

🔌 **Query it from your agent** — one click:

[<img src="https://img.shields.io/badge/Add_to-Cursor-0c0f16?style=for-the-badge&logoColor=white" alt="Add to Cursor">](cursor://anysphere.cursor-deeplink/mcp/install?name=satohub&config=eyJ1cmwiOiJodHRwczovL3NhdG9odWIuYWkvYXBpL21jcCJ9)
[<img src="https://img.shields.io/badge/Add_to-VS_Code-0c0f16?style=for-the-badge&logoColor=white" alt="Add to VS Code">](https://vscode.dev/redirect/mcp/install?name=satohub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A//satohub.ai/api/mcp%22%7D)

<sub>Claude Desktop: paste \`https://satohub.ai/api/mcp\` into Settings → Connectors. Claude Code: \`claude mcp add --transport http satohub https://satohub.ai/api/mcp\`. Everything else → [MCP quickstart](docs/connect-mcp.md)</sub>

🛠️ [**Build your agent** — Agent Architect](BUILDER.md) · <sub>describe it in a sentence, get the stack → [satohub.ai/build](${withUtm(`${SITE}/build`)})</sub>

🖥️ [**SATO OS — Onchain Agent Mission Control**](SATO-OS.md) · <sub>run it on any chain, any model, your machine</sub>

**[The stack](#the-stack-layer-by-layer)** | **[Starting stacks](#starting-stacks)** | **[Index](#index)**${spotlight ? ` | **[⬡ Top](#-top-of-the-index)**` : ""}${movers ? ` | **[📈 Movers](#-movers-7d)**` : ""} | **[Live Agents](#live-agents-passport-registry)** | **[Standards](#standards--protocols)** | **[New this week](#new-this-week)** | **[Contribute](#contributing)** | **[satohub.ai ↗](${withUtm(SITE)})**

</div>

---

<div align="center">
<img src="assets/demo.gif" alt="An agent querying the index live over MCP" width="820">
</div>

Built for agents as much as humans: a stable [\`data/index.json\`](data/index.json) (versioned schema), [\`data/index.csv\`](data/index.csv), [\`llms.txt\`](llms.txt), and a [live MCP endpoint](docs/connect-mcp.md) your agent can query directly.

\`\`\`sh
curl -s ${SITE}/api/export/index.json | jq '.resources[0]'
\`\`\`

<a id="use-the-data"></a>
## Use the data

${useTheData}

## Legend

- **⬡ Score** — the [Sato Score](docs/sato-score.md): a 0–100 evidence-based measure of how **open, active, and verifiable** a project is. It is *not* a safety, quality, or returns grade ([NEUTRALITY.md](NEUTRALITY.md)). Click a score for the full report.
- **Activity** — observed liveness: 🟢 Active (≤30d) · 🟡 Recent (≤90d) · 🟠 Quiet (≤1y) · ⚪ Dormant.
- **★** — GitHub stars (refreshed daily).
- **✓** — install reproduced by our Docker verification harness ([methodology](docs/sato-score.md)).
- Every score links to the project's page on [satohub.ai](${withUtm(SITE)}) — full detail, provenance, and score history live there.
- Want the stack picked *for* you? [**The Builder**](BUILDER.md) turns "what my agent should do" into a grounded plan from this index.

## Index

${toc}
${tocExtras}
${spotlight ? `\n<a id="-top-of-the-index"></a>\n${makeBanner("top-of-the-index", { title: "Top of the index", kicker: "the 15 highest Sato Scores, all categories", glyph: "⬡", accent: "signal" })}\n\n<sub>Openness, activity, and verifiability — [not a safety grade](docs/sato-score.md).</sub>\n\n${spotlight}\n\n${BACK_TO_INDEX}\n` : ""}
${body}
${movers ? `\n<a id="-movers-7d"></a>\n${makeBanner("movers", { title: "Movers (7d)", kicker: "score changes from the daily snapshot history", glyph: "△", accent: "cyan" })}\n\n${movers}\n\n${BACK_TO_INDEX}\n` : ""}
${numbers ? `\n<a id="-numbers-this-week"></a>\n${makeBanner("numbers", { title: "Numbers this week", kicker: "measured from public sources, method beside each", glyph: "#", accent: "blue" })}\n\n${numbers}\n\n${BACK_TO_INDEX}\n` : ""}
<a id="live-agents-passport-registry"></a>
${makeBanner("live-agents", { title: "Live agents", kicker: "the Agent Passport registry", glyph: "●", accent: "violet" })}

Registered agents with **Sato Agent Passports** — machine-readable manifests plus on-chain verification checks (ERC-8004 registration, MCP/A2A endpoint probes, x402, wallet activity). Wallet verification proves control of a key, never product quality.

${renderRegistry(agents)}

${BACK_TO_INDEX}

<a id="standards--protocols"></a>
${makeBanner("standards", { title: "Standards & protocols", kicker: "the rails the agent economy runs on", glyph: "⊞", accent: "blue" })}

| Standard | What it is | Where it shows up here |
|---|---|---|
| [MCP](https://modelcontextprotocol.io) | Model Context Protocol — how agents call tools | The MCP Servers section; this index itself is [queryable over MCP](docs/connect-mcp.md) |
| [ERC-8004](${withUtm(`${SITE}/resources/erc-8004`)}) | On-chain agent identity/registration registry | Passport on-chain checks; live registered-agent count on satohub.ai |
| [x402](${withUtm(`${SITE}/use-cases/payments`)}) | HTTP-native payments for agents (402 + USDC) | Standards facet on listings; passport x402 checks |
| A2A | Agent-to-agent discovery (\`agent-card.json\`) | Passport endpoint probes |

<a id="new-this-week"></a>
${makeBanner("new-this-week", { title: "New this week", kicker: "fresh entries from the daily pipeline", glyph: "✦", accent: "warn" })}

${renderNewThisWeek(resources, now)}

${BACK_TO_INDEX}

<a id="community"></a>
${makeBanner("community", { title: "Community", kicker: "where the signal lives", glyph: "◇", accent: "cyan" })}

${renderCommunity()}
${support ? `\n<a id="support-the-index"></a>\n${makeBanner("support", { title: "Support the index", kicker: "funds data infrastructure, never placement", glyph: "◈", accent: "signal" })}\n\n${support}\n` : ""}
<a id="contributing"></a>
${makeBanner("contributing", { title: "Contributing", kicker: "add a project · report an entry", glyph: "⊕", accent: "signal" })}

Add a project: the [**add-project issue form**](../../issues/new?template=add-project.yml), or PR a \`proposals/<slug>.json\` ([schema](proposals/README.md)) — both land in the Sato Hub review inbox; nothing is listed automatically (conservative statuses, evidence-gated verification). Accepted projects appear both here and on [satohub.ai](${withUtm(SITE)}). Something wrong with an entry? [Report it](../../issues/new?template=report-project.yml). Direct PRs to the data files are overwritten by the nightly render; PR the [generator](scripts/generate.mjs) or docs instead. See [CONTRIBUTING.md](CONTRIBUTING.md).

Listed already? Embed your [Sato Score badge](${withUtm(`${SITE}/sato-score`)}): \`${SITE}/api/badge/<your-slug>\` — or the shields JSON at \`${SITE}/api/badge/<your-slug>.json\`.

### Cite this dataset

Weekly tagged releases carry the day's \`index.json\` + \`index.csv\` as assets, so a citation can pin a version. Machine-readable metadata: [CITATION.cff](CITATION.cff) · [dataset.jsonld](dataset.jsonld) (schema.org Dataset) · [.zenodo.json](.zenodo.json).${CONFIG.doi ? ` Concept DOI: [${CONFIG.doi}](https://doi.org/${CONFIG.doi}).` : ""}

> Sato Hub. *Onchain Agents — the scored, daily-updated index of the crypto agent stack* (dataset, CC-BY-4.0). https://github.com/satohubai/onchain-agents — retrieved ${today}.

---

<sub>Maintained by [Sato Hub](${withUtm(SITE)}) — the agent builder hub for crypto. Index auto-rendered daily from the public export (\`${SITE}/api/export/index.json\`). Catalog data **CC-BY-4.0** (attribution: *data by satohub.ai*); tooling **MIT © Prime Signal LLC**. Scores and liveness are informational signals, not endorsements or financial advice ([NEUTRALITY.md](NEUTRALITY.md) · [cite this dataset](CITATION.cff)). Last render: ${today}.</sub>
`;

  writeFileSync(join(ROOT, "README.md"), readme);

  // ---- generated pages: GitHub Pages source is branch main, path /docs ----
  // Pages are written only when their content changed, so a nightly commit
  // reflects real movement rather than a re-stamped date on 382 files.
  let pagesChanged = 0;
  writeIfChanged("docs/_config.yml", DOCS_CONFIG);
  if (writeIfChanged("docs/index.md", renderDocsIndex(resources, today))) pagesChanged++;
  for (const layer of LAYERS) {
    const rows = resources.filter(layer.match);
    if (rows.length === 0) continue;
    if (writeIfChanged(`docs/categories/${layer.slug}.md`, renderCategoryPage(layer, rows, today))) pagesChanged++;
  }
  for (const r of resources) {
    if (!r.slug) continue;
    if (writeIfChanged(`docs/listings/${r.slug}.md`, renderListingPage(r, today))) pagesChanged++;
  }
  const pruned = pruneGenerated("docs/categories") + pruneGenerated("docs/listings");

  writeIfChanged("llms.txt", renderLlms(resources, await loadToolMeta(), today));
  // schema.org Dataset record for the repo itself. GitHub strips <script> from
  // READMEs, so JSON-LD cannot live there; this file is the machine-readable
  // twin of CITATION.cff and what a crawler / Zenodo importer can read.
  writeFileSync(
    join(ROOT, "dataset.jsonld"),
    JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "Dataset",
        name: "Onchain Agents — the scored, daily-updated index of the crypto agent stack",
        description:
          `${resources.length} listings of what onchain AI agents are built from — frameworks, MCP servers, wallets, payment rails, data tools, live agents — each with category, chains, standards, a liveness signal and a Sato Score (0-100, how open, active and verifiable; not a safety or returns grade). Rendered daily from the public Sato Hub export.`,
        url: "https://github.com/satohubai/onchain-agents",
        sameAs: [`${SITE}/data#index`, `${SITE}/api/export/index.json`],
        license: "https://creativecommons.org/licenses/by/4.0/",
        isAccessibleForFree: true,
        creator: { "@type": "Organization", name: "Sato Hub", url: SITE },
        publisher: { "@type": "Organization", name: "Sato Hub", url: SITE },
        keywords: ["onchain agents", "ai agents", "crypto", "mcp", "erc-8004", "x402", "web3", "dataset"],
        dateModified: today,
        temporalCoverage: "2026-06-11/..",
        version: today,
        ...(CONFIG.doi ? { identifier: `https://doi.org/${CONFIG.doi}` } : {}),
        distribution: [
          { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: "https://raw.githubusercontent.com/satohubai/onchain-agents/main/data/index.json" },
          { "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: "https://raw.githubusercontent.com/satohubai/onchain-agents/main/data/index.csv" },
          { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: `${SITE}/api/export/index.json` },
          { "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: `${SITE}/api/export/index.csv` },
          { "@type": "DataDownload", encodingFormat: "application/x-ndjson", contentUrl: `${SITE}/api/export/index.ndjson` },
        ],
      },
      null,
      2
    ) + "\n"
  );
  mkdirSync(join(ROOT, "data"), { recursive: true });
  writeFileSync(
    join(ROOT, "data", "index.json"),
    JSON.stringify({ ...exp, agents }, null, 2) + "\n"
  );
  writeFileSync(join(ROOT, "data", "index.csv"), toCsv(resources));

  console.log(
    agg
      ? `rendered ${resources.length} entries (${pagesChanged} pages written, ${pruned} pruned, ${agg.scored} scored, ${agg.independently_checked} independently checked, ${agents.length} passports${movers ? ", movers on" : ""}${support ? ", support on" : ""}${CONFIG.discord_url ? ", discord on" : ""})`
      : `rendered ${resources.length} entries (${pagesChanged} pages written, ${pruned} pruned, ${scored} scored, ${verified} verified installs, ${agents.length} passports${movers ? ", movers on" : ""}${support ? ", support on" : ""}${CONFIG.discord_url ? ", discord on" : ""})`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
