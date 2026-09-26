---
title: "x402node MCP — Sato Hub index"
description: "MCP server that discovers x402-paid APIs via CDP Bazaar and handles USDC micropayments on Base."
canonical: "https://satohub.ai/resources/x402node-mcp"
layout: "default"
---

# x402node MCP

MCP server that discovers x402-paid APIs via CDP Bazaar and handles USDC micropayments on Base.

Sato Score: **⬡ 57** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Base, Solana
- **Standards:** x402, mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** payments, wallets
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 1
- **Deploys as:** npm
- **Works with:** Claude, Cursor

## Deploy spec

```sh
git clone https://github.com/x402node/x402-mcp
cd x402-mcp
npm install
cp .env.example .env
```

- **Entry:** node mcp-server.js
- **Runtime:** Node.js
- **Requires:** X402_PRIVATE_KEY (Base EOA private key, hex 0x-prefixed, with USDC on Base mainnet — risk: controls funds), MAX_PRICE_USD (optional, default $0.10 per call spending cap)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/x402node/x402-mcp) · [GitHub](https://github.com/x402node/x402-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/x402node-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `x402node-mcp`. https://satohub.ai/resources/x402node-mcp — retrieved 2026-09-26.

[← All layers](../index.md)
