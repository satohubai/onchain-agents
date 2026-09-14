#!/usr/bin/env node
// Regenerate the data-driven pages of the repo wiki.
//
// The wiki is NOT rendered nightly like /docs. Most of it is prose written once
// (Home, Sato-Score-Methodology, Taxonomy, How-to-cite, Connect-over-MCP) and
// edited by hand. Two pages are derived from the index and would rot if they
// were not:
//
//   Standards.md — which listings implement each standard, counted from the
//                  nightly data/index.json. Field-only, never the equivalent
//                  tag: a tag means "works with", the `standards` field means
//                  "implements", and folding them together disagrees with the
//                  directory filter and the export.
//   Glossary.md  — term and definition from data/glossary.json, exported from
//                  the app repo (scripts/export-comparisons.mjs --glossary-out).
//                  Editorial prose, so it moves rarely; the link to the
//                  canonical page is what carries the current measurement.
//
// Usage:
//   node scripts/wiki-sync.mjs --wiki <path to cloned .wiki.git>
//   node scripts/wiki-sync.mjs --wiki <path> --check   # exit 1 if stale
//
// Writes only when content changed, so a weekly job commits movement rather
// than a re-stamped date.

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://satohub.ai";

const args = process.argv.slice(2);
const wikiIdx = args.indexOf("--wiki");
const WIKI = wikiIdx >= 0 ? args[wikiIdx + 1] : join(ROOT, "..", "onchain-agents.wiki");
const CHECK = args.includes("--check");

const index = JSON.parse(readFileSync(join(ROOT, "data", "index.json"), "utf8"));
const resources = (index.resources || []).filter((r) => r.status !== "Deprecated");
const today = new Date().toISOString().slice(0, 10);

const esc = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();

// Standards the wiki describes. `match` is the canonical `standards` value.
const STANDARDS = [
  {
    id: "erc-8004",
    title: "ERC-8004",
    what: "An Ethereum standard for a singleton on-chain agent registry: an agent (or its operator) registers an identity contract-side, and anyone can read the registration back from the chain rather than trusting a directory.",
    notes:
      "The deployed identity registry is a plain ERC-721, with no resolveByAddress — so the readable proof is a non-zero balanceOf for an owner, and the agent id comes from the Registered event. Registration proves a key registered. It says nothing about what the agent does.",
  },
  {
    id: "x402",
    title: "x402",
    what: "An HTTP payment protocol: a server answers 402 with a price, the caller pays in stablecoin and retries the request with proof of payment attached. No account, no API key, no checkout page.",
    notes:
      "A listing tagged x402 has declared that it implements the standard. Whether it settles real payments is a separate measurement, and it is published per venue rather than summed.",
  },
  {
    id: "mcp",
    title: "MCP (Model Context Protocol)",
    what: "The protocol agents use to call tools. An MCP server exposes a typed tool list over stdio or Streamable HTTP; a client initializes, lists tools, and calls them.",
    notes:
      "This index is itself queryable over MCP at " + SITE + "/api/mcp — read-only, no auth. An MCP server that answers an initialize and a tools/list is live; that is a liveness check, not a quality one.",
  },
  {
    id: "a2a",
    title: "A2A (Agent-to-Agent)",
    what: "A protocol for agents to discover and delegate tasks to each other, advertised by an agent card at /.well-known/agent-card.json.",
    notes:
      "Sato Hub does not publish an agent card of its own: we do not implement A2A, and publishing a card would be a claim that breaks the first time an orchestrator sends a task.",
  },
  {
    id: "erc-7715",
    title: "ERC-7715",
    what: "A permissions standard: a wallet grants a scoped, revocable permission to a session key, so an agent can act within a spending envelope instead of holding the account key.",
    notes: "A granted permission bounds what an agent can spend. It does not bound what it decides to do inside those bounds.",
  },
  {
    id: "eip-7702",
    title: "EIP-7702",
    what: "Lets an externally owned account temporarily execute as a smart contract for one transaction, which is how an EOA gets batching, sponsorship and session keys without migrating to a contract account.",
    notes: "It is an account-abstraction primitive, not an agent standard — it shows up here because agent wallets use it.",
  },
];

function standardsPage() {
  const rows = STANDARDS.map((s) => {
    const impls = resources
      .filter((r) => (r.standards || []).some((v) => String(v).toLowerCase() === s.id))
      .sort((a, b) => (b.trust_score ?? -1) - (a.trust_score ?? -1) || a.name.localeCompare(b.name));
    const top = impls.slice(0, 8);
    return (
      `## ${s.title}\n\n${s.what}\n\n**What it is not.** ${s.notes}\n\n` +
      (impls.length
        ? `**${impls.length} listings in this index declare \`${s.id}\` in their \`standards\` field.** Highest-scored first:\n\n` +
          `| Listing | What it is | ⬡ Score |\n|---|---|---|\n` +
          top
            .map(
              (r) =>
                `| [${esc(r.name)}](${SITE}/resources/${r.slug}) | ${esc(String(r.description_short || "").slice(0, 90))} | ${r.trust_score ?? "—"} |`
            )
            .join("\n") +
          (impls.length > top.length ? `\n\n[All ${impls.length} →](${SITE}/standards/${s.id})` : "")
        : `No listing in this index currently declares \`${s.id}\` in its \`standards\` field. That is a gap in our coverage, not a claim that none exists.`)
    );
  }).join("\n\n");

  return (
    `Rendered from satohub.ai data; canonical: ${SITE}/standards\n\n` +
    `# Standards\n\n` +
    `The standards an onchain agent can implement, and which listings in this index declare each one. Counts come from the \`standards\` field only — a **tag** means "works with", the field means "implements", and the two disagree on purpose.\n\n` +
    `A declared standard is self-reported unless a check is named next to it. Nothing here is a safety, quality or returns claim.\n\n` +
    `Generated ${today} from \`data/index.json\` (${resources.length} listings).\n\n` +
    rows +
    `\n\n---\n\n[Home](Home) · [Glossary](Glossary) · [Taxonomy](Taxonomy) · [satohub.ai standards ↗](${SITE}/standards)\n`
  );
}

function glossaryPage() {
  const path = join(ROOT, "data", "glossary.json");
  if (!existsSync(path)) return null;
  const g = JSON.parse(readFileSync(path, "utf8"));
  const body = (g.terms || [])
    .map(
      (t) =>
        // The one-line definition plus the link, not the full entry: a wiki
        // page that reproduces the whole glossary is a second copy to keep in
        // sync, and the canonical page is where the measurement lives.
        `**${esc(t.term)}** — ${t.short} [Full entry ↗](${t.canonical})`
    )
    .join("\n\n");
  return (
    `Rendered from satohub.ai data; canonical: ${SITE}/glossary\n\n` +
    `# Glossary\n\n` +
    `${g.count} terms from the onchain agent economy. Each entry says what the thing is and what it is not; the linked page is where Sato Hub measures it, because a number in prose rots and a page does not.\n\n` +
    `Generated ${today}.\n\n` +
    body +
    `\n\n---\n\n[Home](Home) · [Standards](Standards) · [satohub.ai glossary ↗](${SITE}/glossary)\n`
  );
}

// The prose pages live in wiki/ and are seeded only when MISSING from the wiki
// clone — an edit made in the wiki UI is never clobbered by this job. The two
// derived pages are always rewritten, because their source is the index.
function seedStatic() {
  let seeded = 0;
  let names = [];
  try {
    names = readdirSync(join(ROOT, "wiki")).filter((f) => f.endsWith(".md") && f !== "README.md");
  } catch {
    return 0;
  }
  for (const name of names) {
    const abs = join(WIKI, name);
    if (existsSync(abs)) continue;
    if (CHECK) {
      console.error(`missing ${name}`);
      seeded++;
      continue;
    }
    writeFileSync(abs, readFileSync(join(ROOT, "wiki", name), "utf8"));
    console.log(`seeded ${name}`);
    seeded++;
  }
  return seeded;
}

const pages = { "Standards.md": standardsPage(), "Glossary.md": glossaryPage() };

let stale = seedStatic();
for (const [name, content] of Object.entries(pages)) {
  if (content == null) {
    console.error(`skip ${name}: no source data`);
    continue;
  }
  const abs = join(WIKI, name);
  let prev = null;
  try {
    prev = readFileSync(abs, "utf8");
  } catch {}
  // The generated-on line moves every run; compare everything else so an
  // unchanged index does not produce a commit.
  const strip = (s) => String(s ?? "").replace(/^Generated \d{4}-\d{2}-\d{2}.*$/m, "");
  if (strip(prev) === strip(content)) {
    console.log(`unchanged ${name}`);
    continue;
  }
  stale++;
  if (CHECK) {
    console.error(`stale ${name}`);
    continue;
  }
  writeFileSync(abs, content);
  console.log(`wrote ${name} (${content.length} bytes)`);
}

if (CHECK && stale) process.exit(1);
