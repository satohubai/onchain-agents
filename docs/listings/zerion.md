---
title: "Zerion — Sato Hub index"
description: "Wallet and DeFi data provider offering portfolio, positions, transactions, PnL, and prices across many chains, with an agent-accessible API."
canonical: "https://satohub.ai/resources/zerion"
layout: "default"
---

# Zerion

Wallet and DeFi data provider offering portfolio, positions, transactions, PnL, and prices across many chains, with an agent-accessible API.

Sato Score: **⬡ 85** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Arbitrum, Optimism, Polygon, Avalanche, BNB Chain, Multichain, Solana, Tron, Monad
- **Standards:** x402, mcp
- **Interfaces:** mcp, rest-api, cli
- **Use cases:** trading, payments, wallets, data
- **Creator:** Zerion
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity 1 day ago
- **GitHub stars:** 59
- **Deploys as:** npm, MCP server, API
- **Works with:** 0x, x402, MPP, Open Wallet Standard, Uniswap, Li.Fi, MoonPay

## Deploy spec

```sh
npm install -g zerion-cli
npx -y zerion-cli init
```

- **Entry:** zerion analyze <address\|ens>   # CLI # also runs as an MCP server — see docs /build-with-ai/mcp
- **Runtime:** Node.js >=20
- **Requires:** ZERION_API_KEY (free from dashboard.zerion.io), optional WALLET_PRIVATE_KEY for swaps/signing
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://zerion.io/) · [Docs](https://developers.zerion.io/introduction) · [GitHub](https://github.com/zeriontech/zerion-ai) · [Sato Hub page ↗](https://satohub.ai/resources/zerion?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `zerion`. https://satohub.ai/resources/zerion — retrieved 2026-09-25.

[← All layers](../index.md)
