---
title: "Rootstock MCP Server — Sato Hub index"
description: "Official Rootstock MCP: wallets, RBTC/ERC-20 balances and transfers, tx status, and contract deployment."
canonical: "https://satohub.ai/resources/rootstock-mcp"
layout: "default"
---

# Rootstock MCP Server

Official Rootstock MCP: wallets, RBTC/ERC-20 balances and transfers, tx status, and contract deployment.

Sato Score: **⬡ 64** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Bitcoin
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** wallets
- **Creator:** RootstockLabs
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 3
- **Deploys as:** npm
- **Works with:** Cursor, Claude Desktop

## Deploy spec

```sh
npx -y @rsksmart/rsk-mcp-server
```

- **Entry:** MCP client config: { "command": "npx", "args": ["-y", "@rsksmart/rsk-mcp-server"] }
- **Runtime:** node
- **Requires:** Wallet private key/import needed for wallet-management, transfer, and contract-deployment tools (see repo docs)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://rootstock.io) · [GitHub](https://github.com/rsksmart/rsk-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/rootstock-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `rootstock-mcp`. https://satohub.ai/resources/rootstock-mcp — retrieved 2026-09-25.

[← All layers](../index.md)
