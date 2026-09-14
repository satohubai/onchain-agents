---
title: "Zerion — Sato Hub index"
description: "Wallet and DeFi data provider offering portfolio, positions, transactions, PnL, and prices across many chains, with an agent-accessible API."
canonical: "https://satohub.ai/resources/zerion"
canonical_url: "https://satohub.ai/resources/zerion"
layout: "default"
page_type: "listing"
item_name: "Zerion"
code_repository: "https://github.com/zeriontech/zerion-ai"
software_url: "https://zerion.io/"
application_category: "Data Tool"
application_subcategory: "Wallet portfolio & DeFi data API"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-11"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Zerion"
    url: "https://satohubai.github.io/onchain-agents/listings/zerion"
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
- **Activity:** Active — last activity 3 days ago
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
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://zerion.io/) · [Docs](https://developers.zerion.io/introduction) · [GitHub](https://github.com/zeriontech/zerion-ai) · [Sato Hub page ↗](https://satohub.ai/resources/zerion?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `zerion`. https://satohub.ai/resources/zerion — retrieved 2026-09-14.

[← All layers](../index.md)
