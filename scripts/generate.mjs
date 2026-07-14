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

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderStatBand } from "./render-statband.mjs";
import { renderHeader } from "./render-headers.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://satohub.ai";
const EXPORT_URL = process.env.INDEX_EXPORT_URL || `${SITE}/api/export/index.json`;
const REGISTRY_URL = `${SITE}/api/registry/search`;

const CONFIG = JSON.parse(readFileSync(join(ROOT, "repo.config.json"), "utf8"));

const args = process.argv.slice(2);
const localIdx = args.indexOf("--local");
const localPath = localIdx >= 0 ? args[localIdx + 1] : null;

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
  try {
    const res = await fetch(REGISTRY_URL, { headers: { "user-agent": "satohub-index-generator" } });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json.agents) ? json.agents : [];
  } catch {
    return [];
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

function renderCommunity() {
  const lines = [
    `- 𝕏 **[@SatoHub](${CONFIG.x_url})** — daily onchain-agent signal`,
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

  const scored = resources.filter((r) => r.trust_score != null).length;
  const verified = resources.filter((r) => r.verified_install).length;
  const { body, toc } = renderSections(resources);
  const movers = renderMovers(resources);
  const support = renderSupport();
  const spotlight = renderSpotlight(resources);

  // daily-refreshed stat band (dark/light pair)
  for (const variant of ["dark", "light"]) {
    writeFileSync(
      join(ROOT, "assets", `statband-${variant}.svg`),
      renderStatBand({ entries: resources.length, scored, verified, date: today, variant })
    );
  }

  const tocExtras = [
    spotlight ? `- [⬡ Top of the index](#-top-of-the-index)` : null,
    movers ? `- [📈 Movers (7d)](#-movers-7d)` : null,
    `- [Live agents (Passport registry)](#live-agents-passport-registry)`,
    `- [Standards & protocols](#standards--protocols)`,
    `- [New this week](#new-this-week)`,
    `- [Community](#community)`,
    support ? `- [Support the index](#support-the-index)` : null,
  ].filter(Boolean).join("\n");

  const readme = `<div align="center">

${picture("banner", "Onchain Agents — the scored, daily-updated index of the crypto agent stack", 880)}

# Onchain Agents

**The scored, daily-updated index of the onchain agent stack** — every framework, MCP server, wallet, payment rail, data feed, and live agent, tracked and scored daily.

${picture("statband", `${resources.length} entries · ${scored} scored · ${verified} verified installs · updated ${today}`, 760)}

[<img src="https://img.shields.io/badge/𝕏_Follow_@SatoHub-0c0f16?style=for-the-badge&logoColor=white" alt="Follow SatoHub on X">](${CONFIG.x_url})

🔌 [**Query it from your agent** — MCP quickstart](docs/connect-mcp.md)

🛠️ [**Build your agent** — Agent Architect](BUILDER.md) · <sub>describe it in a sentence, get the stack → [satohub.ai/build](${withUtm(`${SITE}/build`)})</sub>

🖥️ [**SATO OS — Onchain Agent Mission Control**](SATO-OS.md) · <sub>run it on any chain, any model, your machine</sub>

**[Index](#index)**${spotlight ? ` | **[⬡ Top](#-top-of-the-index)**` : ""}${movers ? ` | **[📈 Movers](#-movers-7d)**` : ""} | **[Live Agents](#live-agents-passport-registry)** | **[Standards](#standards--protocols)** | **[New this week](#new-this-week)** | **[Contribute](#contributing)** | **[satohub.ai ↗](${withUtm(SITE)})**

</div>

---

<div align="center">
<img src="assets/demo.gif" alt="An agent querying the index live over MCP" width="820">
</div>

Built for agents as much as humans: a stable [\`data/index.json\`](data/index.json) (versioned schema), [\`data/index.csv\`](data/index.csv), [\`llms.txt\`](llms.txt), and a [live MCP endpoint](docs/connect-mcp.md) your agent can query directly.

\`\`\`sh
curl -s ${SITE}/api/export/index.json | jq '.resources[0]'
\`\`\`

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

Add a project via the [**add-project issue form**](../../issues/new?template=add-project.yml) — submissions flow into the Sato Hub review pipeline (conservative statuses, evidence-gated verification) and appear both here and on [satohub.ai](${withUtm(SITE)}). Something wrong with an entry? [Report it](../../issues/new?template=report-project.yml). Direct PRs to the data files are overwritten by the nightly render; PR the [generator](scripts/generate.mjs) or docs instead. See [CONTRIBUTING.md](CONTRIBUTING.md).

Listed already? Embed your [Sato Score badge](${withUtm(`${SITE}/sato-score`)}): \`${SITE}/api/badge/<your-slug>\`.

---

<sub>Maintained by [Sato Hub](${withUtm(SITE)}) — the agent builder hub for crypto. Index auto-rendered daily from the public export (\`${SITE}/api/export/index.json\`). Catalog data **CC-BY-4.0** (attribution: *data by satohub.ai*); tooling **MIT © Prime Signal LLC**. Scores and liveness are informational signals, not endorsements or financial advice ([NEUTRALITY.md](NEUTRALITY.md) · [cite this dataset](CITATION.cff)). Last render: ${today}.</sub>
`;

  writeFileSync(join(ROOT, "README.md"), readme);
  mkdirSync(join(ROOT, "data"), { recursive: true });
  writeFileSync(
    join(ROOT, "data", "index.json"),
    JSON.stringify({ ...exp, agents }, null, 2) + "\n"
  );
  writeFileSync(join(ROOT, "data", "index.csv"), toCsv(resources));

  console.log(
    `rendered ${resources.length} entries (${scored} scored, ${verified} verified installs, ${agents.length} passports${movers ? ", movers on" : ""}${support ? ", support on" : ""}${CONFIG.discord_url ? ", discord on" : ""})`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
