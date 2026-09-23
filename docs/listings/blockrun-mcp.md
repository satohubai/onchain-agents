---
title: "BlockRun MCP — Sato Hub index"
description: "MCP server giving AI agents live data — markets, crypto, research, X — billed per call via x402 micropayments."
canonical: "https://satohub.ai/resources/blockrun-mcp"
layout: "default"
---

# BlockRun MCP

MCP server giving AI agents live data — markets, crypto, research, X — billed per call via x402 micropayments.

Sato Score: **⬡ 91** (High), +2 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Base, Solana
- **Standards:** x402, mcp
- **Interfaces:** mcp
- **Use cases:** payments, data
- **Creator:** BlockRun Labs, Inc.
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity 1 day ago
- **GitHub stars:** 394
- **Deploys as:** npm package, MCP server
- **Works with:** Claude Code, Claude Desktop, Cursor, Windsurf, ChatGPT Desktop

## Deploy spec

```sh
npx -y @blockrun/mcp
claude mcp add blockrun -s user -- npx -y @blockrun/mcp@latest
```

- **Entry:** { "mcpServers": { "blockrun": { "command": "npx", "args": ["-y", "@blockrun/mcp"] } } }
- **Runtime:** Node.js
- **Requires:** ~$5 USDC on Base or Solana in an auto-created wallet (pay-per-call), optional SOLANA_WALLET_KEY
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://blockrun.ai) · [Docs](https://blockrun.ai/docs) · [GitHub](https://github.com/BlockRunAI/blockrun-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/blockrun-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `blockrun-mcp`. https://satohub.ai/resources/blockrun-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
