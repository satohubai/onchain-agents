---
title: "monapi — Sato Hub index"
description: "One-line x402 paywall SDK for monetizing APIs and MCP servers with per-route USDC pricing."
canonical: "https://satohub.ai/resources/monapi"
layout: "default"
---

# monapi

One-line x402 paywall SDK for monetizing APIs and MCP servers with per-route USDC pricing.

Sato Score: **⬡ 52** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Base, Arbitrum, Polygon
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 0

## Deploy spec

```sh
npm install @monapi/sdk @x402/express
npm install @monapi/sdk @x402/next
npm install @monapi/sdk @x402/mcp
```

- **Entry:** import { monapi } from "@monapi/sdk"; app.use(monapi({ wallet: "0xYourWalletAddress", price: 0.01 }));
- **Runtime:** Node.js >=18 (npm package; x402 payment middleware for Express 4+/Next.js 13+/MCP SDK 1+)
- **Requires:** MONAPI_WALLET — EVM wallet address that receives payments (public address, not a secret)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://monapi.dev) · [Docs](https://github.com/DenisTheM/monapi/blob/main/packages/sdk/README.md) · [GitHub](https://github.com/DenisTheM/monapi) · [Sato Hub page ↗](https://satohub.ai/resources/monapi?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `monapi`. https://satohub.ai/resources/monapi — retrieved 2026-09-26.

[← All layers](../index.md)
