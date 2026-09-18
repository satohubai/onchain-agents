---
title: "Crypto APIs MCP Servers — Sato Hub index"
description: "Official Crypto APIs MCP suite: hosted endpoint plus per-package servers for balances, blocks, txs, fees, and market data."
canonical: "https://satohub.ai/resources/cryptoapis-mcp"
layout: "default"
---

# Crypto APIs MCP Servers

Official Crypto APIs MCP suite: hosted endpoint plus per-package servers for balances, blocks, txs, fees, and market data.

Sato Score: **⬡ 63** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** wallets, data
- **Creator:** Crypto APIs
- **Open source:** Unknown
- **Status:** Unknown
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 0
- **Deploys as:** npm/npx, Docker, Hosted API (multi-tenant HTTP)
- **Works with:** Claude Desktop, Claude Code, Cursor, Windsurf, n8n

## Deploy spec

```sh
connect to https://ai.cryptoapis.io/mcp with header x-api-key: YOUR_KEY (multi-tenant, no self-hosting needed)
or self-host one domain: npx @cryptoapis-io/mcp-address-latest --api-key YOUR_API_KEY
or install all domains: npm install @cryptoapis-io/mcp
```

- **Entry:** {"mcpServers": {"cryptoapis": {"url": "https://ai.cryptoapis.io/mcp", "headers": {"x-api-key": "YOUR_API_KEY"}}}}
- **Runtime:** remote
- **Requires:** Crypto APIs API key (app.cryptoapis.io/api-keys), passed via the x-api-key header
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 98.5% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://cryptoapis.io) · [Docs](https://github.com/CryptoAPIs-io/cryptoapis-mcp-hub) · [GitHub](https://github.com/CryptoAPIs-io/cryptoapis-mcp-hub) · [Sato Hub page ↗](https://satohub.ai/resources/cryptoapis-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cryptoapis-mcp`. https://satohub.ai/resources/cryptoapis-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
