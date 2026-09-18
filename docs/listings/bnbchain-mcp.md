---
title: "BNB Chain MCP — Sato Hub index"
description: "Developer MCP tools for AI crypto agents on BNB Chain: DeFi trading, DEX swaps, and contract deployment."
canonical: "https://satohub.ai/resources/bnbchain-mcp"
layout: "default"
---

# BNB Chain MCP

Developer MCP tools for AI crypto agents on BNB Chain: DeFi trading, DEX swaps, and contract deployment.

Sato Score: **⬡ 81** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** BNB Chain
- **Standards:** mcp
- **Interfaces:** mcp, contract
- **Use cases:** trading, data
- **Creator:** nirholas
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity 11 days ago
- **GitHub stars:** 32
- **Deploys as:** MCP server, npx (stdio), HTTP mode, SSE mode
- **Works with:** Claude Desktop, Cursor, VS Code, ChatGPT

## Deploy spec

```sh
npx -y @nirholas/bnbchain-mcp@latest
```

- **Entry:** { "mcpServers": { "bnb-chain-mcp": { "command": "npx", "args": ["-y", "@nirholas/bnbchain-mcp@latest"] } } }
- **Runtime:** Node.js >=18
- **Requires:** all optional — PRIVATE_KEY for tx/write mode (read-only without), optional COINGECKO_API_KEY etc.
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 25.8% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://bnbchainmcp.vercel.app) · [Docs](https://bnbchainmcp.vercel.app) · [GitHub](https://github.com/nirholas/bnbchain-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/bnbchain-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bnbchain-mcp`. https://satohub.ai/resources/bnbchain-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
