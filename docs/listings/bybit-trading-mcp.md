---
title: "Bybit Trading MCP — Sato Hub index"
description: "Official Bybit MCP for market data, trading, positions, wallet, and portfolio via REST and WebSocket."
canonical: "https://satohub.ai/resources/bybit-trading-mcp"
layout: "default"
---

# Bybit Trading MCP

Official Bybit MCP for market data, trading, positions, wallet, and portfolio via REST and WebSocket.

Sato Score: **⬡ 82** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, wallets, data
- **Creator:** Bybit
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity today
- **GitHub stars:** 31
- **Deploys as:** npx (zero-install stdio)
- **Works with:** Claude Desktop, Cursor, VS Code

## Deploy spec

```sh
npx bybit-official-trading-server@latest
```

- **Entry:** npx bybit-official-trading-server@latest (stdio MCP; 22 market-data tools work with no key, 206 total tools with BYBIT_API_KEY + BYBIT_API_SECRET)
- **Runtime:** node
- **Requires:** BYBIT_API_KEY + BYBIT_API_SECRET (HMAC) or BYBIT_API_KEY + BYBIT_API_PRIVATE_KEY_PATH (RSA) — only for trading/account tools; market-data tools are keyless
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.bybit.com/) · [Docs](https://bybit-exchange.github.io/docs/v5/intro) · [GitHub](https://github.com/bybit-exchange/trading-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/bybit-trading-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bybit-trading-mcp`. https://satohub.ai/resources/bybit-trading-mcp — retrieved 2026-09-17.

[← All layers](../index.md)
