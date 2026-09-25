---
title: "Jupiter — Sato Hub index"
description: "Solana swap aggregator that routes trades across DEXs via a widely used API and SDKs."
canonical: "https://satohub.ai/resources/jupiter-aggregator"
layout: "default"
---

# Jupiter

Solana swap aggregator that routes trades across DEXs via a widely used API and SDKs.

Sato Score: **⬡ 84** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Solana
- **Standards:** mcp
- **Interfaces:** mcp, sdk, rest-api, contract
- **Use cases:** trading, security, build
- **Creator:** Jupiter Exchange
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity 2 days ago
- **Deploys as:** API, SDK, npm, MCP server
- **Works with:** MCP, REST API, CLI

## Deploy spec

```sh
npm install @jup-ag/api
```

- **Entry:** import { createJupiterApiClient } from '@jup-ag/api'; const jupiterQuoteApi = createJupiterApiClient(config);
- **Runtime:** Node.js (npm package)
- **Requires:** API_KEY (optional, Pro plan via portal.jup.ag), PRIVATE_KEY (for signing swap transactions — wallet private-key custody risk)
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://jup.ag/) · [Docs](https://dev.jup.ag/docs) · [GitHub](https://github.com/jup-ag) · [Sato Hub page ↗](https://satohub.ai/resources/jupiter-aggregator?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `jupiter-aggregator`. https://satohub.ai/resources/jupiter-aggregator — retrieved 2026-09-25.

[← All layers](../index.md)
