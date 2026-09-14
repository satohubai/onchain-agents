---
title: "Haiku DeFi MCP — Sato Hub index"
description: "DeFi execution MCP: swaps, lending, bridges, yield discovery, and portfolio analysis with external wallet signing."
canonical: "https://satohub.ai/resources/haiku-defi-mcp"
layout: "default"
---

# Haiku DeFi MCP

DeFi execution MCP: swaps, lending, bridges, yield discovery, and portfolio analysis with external wallet signing.

Sato Score: **⬡ 58** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading, wallets
- **Creator:** Haiku
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 2
- **Deploys as:** npm install / npx
- **Works with:** Claude Desktop

## Deploy spec

```sh
npm install haiku-mcp-server
```

- **Entry:** npx haiku-mcp-server (add --http [--port=N] for HTTP transport)
- **Runtime:** Node.js
- **Requires:** HAIKU_API_KEY (optional, higher rate limits), HAIKU_BASE_URL (optional, default https://api.haiku.trade/v1), WALLET_PRIVATE_KEY (optional, 0x hex — risk: controls funds for self-contained execution), RPC_URL_{chainId} (optional override)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://haiku.trade) · [Docs](https://github.com/Haiku-Trading/haiku-mcp-server) · [GitHub](https://github.com/Haiku-Trading/haiku-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/haiku-defi-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `haiku-defi-mcp`. https://satohub.ai/resources/haiku-defi-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
