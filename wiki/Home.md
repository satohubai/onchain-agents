Rendered from satohub.ai data; canonical: https://satohub.ai

# Onchain Agents — the index wiki

[**onchain-agents**](https://github.com/satohubai/onchain-agents) is a daily-rendered, machine-readable index of what onchain AI agents are built from: agent runtimes, onchain action kits, MCP servers, wallets and key management, data tools, payment rails, identity and trading venues. Every product listing carries a **Sato Score** — a 0–100 measure of how open, active and verifiable it is.

It is not a ranking of quality, safety or returns. See [Sato Score Methodology](Sato-Score-Methodology).

## Where things are

| | |
|---|---|
| The index itself | [README](https://github.com/satohubai/onchain-agents#readme) — the stack layer by layer, then every listing |
| Browsable pages | https://satohubai.github.io/onchain-agents/ — one page per layer and per listing |
| The data | [`data/index.json`](https://github.com/satohubai/onchain-agents/blob/main/data/index.json), [`data/index.csv`](https://github.com/satohubai/onchain-agents/blob/main/data/index.csv), [`llms.txt`](https://github.com/satohubai/onchain-agents/blob/main/llms.txt) |
| Live API | `https://satohub.ai/api/export/index.json` (also `.csv`, `.ndjson`) |
| Live MCP | `https://satohub.ai/api/mcp` — see [Connect over MCP](Connect-over-MCP) |
| Add a project | [open an `add-project` issue](https://github.com/satohubai/onchain-agents/issues/new?labels=add-project) |

## This wiki

- [Sato Score Methodology](Sato-Score-Methodology) — what the score measures, what it refuses to measure
- [Taxonomy](Taxonomy) — entity classes, resource types, interfaces, standards
- [Glossary](Glossary) — the vocabulary of the agent economy
- [Standards](Standards) — ERC-8004, x402, MCP, A2A, ERC-7715, EIP-7702, and who implements each
- [How to cite](How-to-cite) — the dataset is CC-BY-4.0; here is the attribution
- [Connect over MCP](Connect-over-MCP) — point your agent at the live index

## How it stays current

The index is **pull-based**: a nightly GitHub Action re-renders it from the public Sato Hub export. Nothing upstream pushes here, and no listing is hand-typed into the repo — a wrong entry is wrong in exactly one place, and gets fixed there.

Catalog data is **CC-BY-4.0** (attribution: *data by satohub.ai*); the tooling is MIT. Scores and liveness are informational signals, not endorsements or financial advice.
