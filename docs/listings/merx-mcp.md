---
title: "MERX MCP — Sato Hub index"
description: "TRON infrastructure MCP (hosted SSE + local stdio): energy/bandwidth prices, resource optimization, and TRC-20 stablecoin payments."
canonical: "https://satohub.ai/resources/merx-mcp"
layout: "default"
---

# MERX MCP

TRON infrastructure MCP (hosted SSE + local stdio): energy/bandwidth prices, resource optimization, and TRC-20 stablecoin payments.

Sato Score: **⬡ 84** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Tron
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** payments, identity
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 3
- **Deploys as:** npm
- **Works with:** Claude, Cursor

## Deploy spec

```sh
npm install -g merx
```

- **Entry:** npx merx-mcp
- **Runtime:** Node.js 18+ (for local stdio mode)
- **Requires:** MERX_API_KEY (authentication API key from merx.exchange account), TRON_PRIVATE_KEY (optional, 64-char hex — risk: enables write/trading operations, controls funds)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/Hovsteder/merx-mcp) · [Docs](https://merx.exchange/docs) · [GitHub](https://github.com/Hovsteder/merx-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/merx-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `merx-mcp`. https://satohub.ai/resources/merx-mcp — retrieved 2026-09-24.

[← All layers](../index.md)
