---
title: "NFTGo — Sato Hub index"
description: "Official MCP server for NFTGo's Ethereum NFT analytics API: collections, assets, market data, and wallet holdings."
canonical: "https://satohub.ai/resources/nftgo-mcp"
layout: "default"
---

# NFTGo

Official MCP server for NFTGo's Ethereum NFT analytics API: collections, assets, market data, and wallet holdings.

Sato Score: **⬡ 47** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Ethereum
- **Open source:** Partial
- **Status:** Early
- **Activity:** Dormant — last activity 17 months ago
- **GitHub stars:** 4

## Deploy spec

```sh
pnpm install
pnpm build
```

- **Entry:** {"mcpServers": {"nftgoapi": {"command": "npx", "args": ["-y", "@nftgo/mcp-nftgo-api", "NFTGO-API-KEY"]}}}
- **Runtime:** Node.js (npm/pnpm package, run via npx)
- **Requires:** NFTGO-API-KEY (required, passed as CLI arg — free key at https://nftgo.io/developers)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 27.9% of our checks succeeded over 61 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://nftgo.io) · [Docs](https://docs.nftgo.io/reference/introduction) · [GitHub](https://github.com/NFTGo/mcp-nftgo-api) · [Sato Hub page ↗](https://satohub.ai/resources/nftgo-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `nftgo-mcp`. https://satohub.ai/resources/nftgo-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
