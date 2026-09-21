---
title: "Lido MCP — Sato Hub index"
description: "MCP server for Lido liquid staking: stake, unstake, wrap, vote, and monitor yields on Ethereum."
canonical: "https://satohub.ai/resources/lido-mcp-ghost-clio"
layout: "default"
---

# Lido MCP

MCP server for Lido liquid staking: stake, unstake, wrap, vote, and monitor yields on Ethereum.

Sato Score: **⬡ 48** (Medium), +2 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Ethereum
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 2
- **Works with:** Claude Desktop, Cursor

## Deploy spec

```sh
git clone https://github.com/ghost-clio/lido-mcp.git
cd lido-mcp
npm install
npm run build
```

- **Entry:** {"mcpServers": {"lido": {"command": "node", "args": ["/path/to/lido-mcp/dist/index.js"], "env": {"ETH_RPC_URL": "https://eth.llamarpc.com", "ETH_PRIVATE_KEY": "0x..."}}}}
- **Runtime:** Node.js (built to dist/index.js)
- **Requires:** ETH_RPC_URL — optional, defaults to https://eth.llamarpc.com, ETH_PRIVATE_KEY — RISK: hex-encoded private key, only required for write operations (staking/voting transactions); read-only tools work without it per the README
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/ghost-clio/lido-mcp) · [GitHub](https://github.com/ghost-clio/lido-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/lido-mcp-ghost-clio?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `lido-mcp-ghost-clio`. https://satohub.ai/resources/lido-mcp-ghost-clio — retrieved 2026-09-21.

[← All layers](../index.md)
