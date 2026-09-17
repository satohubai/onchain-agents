---
title: "DeFi Trading MCP — Sato Hub index"
description: "MCP server that turns an AI assistant into an autonomous DeFi trading agent."
canonical: "https://satohub.ai/resources/defi-trading-mcp"
layout: "default"
---

# DeFi Trading MCP

MCP server that turns an AI assistant into an autonomous DeFi trading agent.

Sato Score: **⬡ 51** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Polygon, Arbitrum, Optimism, BNB Chain, Avalanche, Berachain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading
- **Creator:** edkdev
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 52
- **Deploys as:** npm package, MCP server (Claude Code, Claude Desktop, Cursor, Kiro IDE)
- **Works with:** CoinGecko, Alchemy

## Deploy spec

```sh
npx defi-trading-mcp@latest
npm install -g defi-trading-mcp
```

- **Entry:** { "mcpServers": { "defi-trading": { "command": "npx", "args": ["defi-trading-mcp@latest"], "env": { "USER_PRIVATE_KEY": "...", "USER_ADDRESS": "0x...", "COINGECKO_API_KEY": "..." } } } }
- **Runtime:** Node.js
- **Requires:** USER_PRIVATE_KEY + USER_ADDRESS (hot EVM wallet — executes swaps), COINGECKO_API_KEY, optional ALCHEMY_API_KEY
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[GitHub](https://github.com/edkdev/defi-trading-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/defi-trading-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `defi-trading-mcp`. https://satohub.ai/resources/defi-trading-mcp — retrieved 2026-09-17.

[← All layers](../index.md)
