---
title: "Ultrade MCP — Sato Hub index"
description: "MCP server for Ultrade's order-book DEX — wallet, market, and order tools for AI trading agents."
canonical: "https://satohub.ai/resources/ultrade-mcp"
layout: "default"
---

# Ultrade MCP

MCP server for Ultrade's order-book DEX — wallet, market, and order tools for AI trading agents.

Sato Score: **⬡ 46** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Multichain
- **Open source:** Yes
- **Status:** Early
- **Activity:** Dormant — last activity 16 months ago
- **GitHub stars:** 5

## Deploy spec

```sh
git clone https://github.com/ultrade-org/ultrade-mcp.git
cd ultrade-mcp
npm install
npm run build
```

- **Entry:** dist/index.js
- **Runtime:** Node.js >=23.6.1
- **Requires:** ALGORAND_NETWORK, ALGORAND_ALGOD_API, ALGORAND_ALGOD, ALGORAND_ALGOD_PORT, ALGORAND_TOKEN, ALGORAND_AGENT_WALLET_ACTIVE (wallet key/mnemonic — full signing custody; treat as a hot-wallet risk), ULTRADE_API_URL, ITEMS_PER_PAGE
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 60 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://smithery.ai/server/@ultrade-org/ultrade-mcp) · [GitHub](https://github.com/ultrade-org/ultrade-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/ultrade-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `ultrade-mcp`. https://satohub.ai/resources/ultrade-mcp — retrieved 2026-09-17.

[← All layers](../index.md)
