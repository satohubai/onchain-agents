---
title: "OKX OnchainOS Skills — Sato Hub index"
description: "Agent skills for OKX OnchainOS: wallet, token discovery, market data, and DEX swaps."
canonical: "https://satohub.ai/resources/okx-onchainos-skills"
layout: "default"
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
- **Activity:** Active — last activity 2 days ago
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

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `okx-onchainos-skills`. https://satohub.ai/resources/okx-onchainos-skills — retrieved 2026-09-20.

[← All layers](../index.md)
