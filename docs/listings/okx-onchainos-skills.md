---
title: "OKX OnchainOS Skills — Sato Hub index"
description: "Agent skills for OKX OnchainOS: wallet, token discovery, market data, and DEX swaps."
canonical: "https://satohub.ai/resources/okx-onchainos-skills"
canonical_url: "https://satohub.ai/resources/okx-onchainos-skills"
layout: "default"
page_type: "listing"
item_name: "OKX OnchainOS Skills"
code_repository: "https://github.com/okx/onchainos-skills"
software_url: "https://satohub.ai/resources/okx-onchainos-skills"
application_category: "Skill Repo"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-16"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Payments & agent commerce"
    url: "https://satohubai.github.io/onchain-agents/categories/payments"
  - name: "OKX OnchainOS Skills"
    url: "https://satohubai.github.io/onchain-agents/listings/okx-onchainos-skills"
---

# OKX OnchainOS Skills

Agent skills for OKX OnchainOS: wallet, token discovery, market data, and DEX swaps.

Sato Score: **⬡ 66** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Solana, Ethereum, Base, BNB Chain, Arbitrum, Polygon
- **Standards:** x402
- **Interfaces:** plugin, contract
- **Use cases:** trading, payments, wallets, data, security, build
- **Creator:** OKX
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity today
- **GitHub stars:** 331
- **Deploys as:** Claude Code, Cursor, Codex CLI, OpenCode, MCP server
- **Works with:** Aave, Lido, PancakeSwap, Kamino, NAVI, Polymarket, Hyperliquid, Morpho, x402, MPP, a2a-pay

## Deploy spec

```sh
npx skills add okx/onchainos-skills
# CLI: curl -sSL https://raw.githubusercontent.com/okx/onchainos-skills/main/install.sh | sh
```

- **Entry:** 16 okx-* skills route to the onchainos CLI, e.g. `onchainos token report --address <addr> --chain solana`; MCP: `claude mcp add --scope user onchainos-cli onchainos mcp`
- **Runtime:** Agent Skill bundle + onchainos CLI (also an MCP server)
- **Requires:** OKX_API_KEY + OKX_SECRET_KEY + OKX_PASSPHRASE (OKX dev portal; sandbox keys for testing only)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-06-16

## What we checked

- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[GitHub](https://github.com/okx/onchainos-skills) · [Sato Hub page ↗](https://satohub.ai/resources/okx-onchainos-skills?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `okx-onchainos-skills`. https://satohub.ai/resources/okx-onchainos-skills — retrieved 2026-09-16.

[← All layers](../index.md)
