---
title: "Ophis — Sato Hub index"
description: "Intent-based DEX aggregator for agents — natural-language swap intents settled via batch auction across 11+ EVM chains plus Solana."
canonical: "https://satohub.ai/resources/ophis-dex-aggregator"
layout: "default"
---

# Ophis

Intent-based DEX aggregator for agents — natural-language swap intents settled via batch auction across 11+ EVM chains plus Solana.

Sato Score: **⬡ 65** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** DeFi Tool
- **Chains:** Ethereum, Optimism, BNB Chain, Gnosis, Polygon, Base, Arbitrum, Avalanche, Solana, Multichain
- **Open source:** Partial
- **Status:** Early
- **Activity:** Active — last activity 2 days ago
- **GitHub stars:** 4

## Deploy spec

```sh
npm install @ophis/sdk
```

- **Entry:** @ophis/sdk (TypeScript import) for programmatic trade intents; MCP server lives at apps/mcp-server (Cloudflare Worker), hosted at mcp.ophis.fi
- **Runtime:** Node.js >=20.19 (pnpm 9 monorepo) + Rust backend; TypeScript SDK package
- **License:** GPL-3.0
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://ophis.fi) · [GitHub](https://github.com/ophis-fi/ophis) · [Sato Hub page ↗](https://satohub.ai/resources/ophis-dex-aggregator?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `ophis-dex-aggregator`. https://satohub.ai/resources/ophis-dex-aggregator — retrieved 2026-09-26.

[← All layers](../index.md)
