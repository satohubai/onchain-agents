---
title: "ChainGPT Claude Skill — Sato Hub index"
description: "Web3 toolkit for Claude Code: 140 custody-free MCP tools for EVM and Solana DeFi, DEX, and perps."
canonical: "https://satohub.ai/resources/chaingpt-claude-skill"
canonical_url: "https://satohub.ai/resources/chaingpt-claude-skill"
layout: "default"
page_type: "listing"
item_name: "ChainGPT Claude Skill"
code_repository: "https://github.com/ChainGPT-org/chaingpt-claude-skill"
software_url: "https://docs.chaingpt.org/dev-docs-b2b-saas-api-and-sdk"
application_category: "Skill Repo"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-06-29"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "ChainGPT Claude Skill"
    url: "https://satohubai.github.io/onchain-agents/listings/chaingpt-claude-skill"
---

# ChainGPT Claude Skill

Web3 toolkit for Claude Code: 140 custody-free MCP tools for EVM and Solana DeFi, DEX, and perps.

Sato Score: **⬡ 62** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Ethereum, Solana, Tron, Base
- **Standards:** x402, mcp
- **Interfaces:** plugin, mcp
- **Use cases:** trading, payments, wallets, build
- **Creator:** ChainGPT
- **Open source:** Yes
- **Status:** Early
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 11
- **Deploys as:** Claude Code plugin, MCP server
- **Works with:** 1inch, Jupiter, Aave, Lido, EigenLayer, Pendle, Morpho, Hyperliquid, Polymarket, Across, x402

## Deploy spec

```sh
/plugin marketplace add ChainGPT-org/chaingpt-claude-skill
/plugin install chaingpt@chaingpt-claude-skill
/reload-plugins
```

- **Entry:** Claude Code plugin: 24 sub-skills + 154 chaingpt_* MCP tools over stdio (single-step /plugin install does NOT work — use the marketplace flow)
- **Runtime:** Claude Code plugin (marketplace) + MCP server (@chaingpt/mcp-server, stdio)
- **Requires:** Claude Code host, CHAINGPT_API_KEY (app.chaingpt.org) for product tools, wallet key for policy-gated agent-wallet signing
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Docs](https://docs.chaingpt.org/dev-docs-b2b-saas-api-and-sdk) · [GitHub](https://github.com/ChainGPT-org/chaingpt-claude-skill) · [Sato Hub page ↗](https://satohub.ai/resources/chaingpt-claude-skill?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `chaingpt-claude-skill`. https://satohub.ai/resources/chaingpt-claude-skill — retrieved 2026-09-14.

[← All layers](../index.md)
