---
title: "Purple Flea Trading — Sato Hub index"
description: "API and MCP server for trading 275+ perpetual futures (crypto, stocks, commodities, forex) on Hyperliquid."
canonical: "https://satohub.ai/resources/purple-flea-trading"
canonical_url: "https://satohub.ai/resources/purple-flea-trading"
layout: "default"
page_type: "listing"
item_name: "Purple Flea Trading"
code_repository: "https://github.com/purple-flea/agent-trading"
software_url: "https://purpleflea.com/"
application_category: "Trading Tool"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-03-19"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Trading & DeFi venues"
    url: "https://satohubai.github.io/onchain-agents/categories/trading-venues"
  - name: "Purple Flea Trading"
    url: "https://satohubai.github.io/onchain-agents/listings/purple-flea-trading"
---

# Purple Flea Trading

API and MCP server for trading 275+ perpetual futures (crypto, stocks, commodities, forex) on Hyperliquid.

Sato Score: **⬡ 34** (Low), -8 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Chains:** Hyperliquid
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 0

## Deploy spec

```sh
git clone https://github.com/purple-flea/agent-trading.git
cd agent-trading
npm install
npm run dev
```

- **Entry:** npm run dev (dev, hot reload, http://localhost:3003) or npm start (production, compiled server)
- **Runtime:** Node.js (REST API server, NOT an MCP server per its own docs)
- **Requires:** ENCRYPTION_KEY (production only — AES-256-GCM secret used to encrypt stored Hyperliquid signing keys. RISK: handles user signing-key material server-side), PORT (optional, default 3003), TRADING_API_KEY (optional, per README described as 'API key for MCP server'), hl_wallet_address + hl_signing_key (required per-account via POST /v1/auth/register against the hosted API at trading.purpleflea.com — RISK: submits a Hyperliquid signing key to a third-party service)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 57.6% of our checks succeeded over 59 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://purpleflea.com/) · [Docs](https://trading.purpleflea.com/v1/docs) · [GitHub](https://github.com/purple-flea/agent-trading) · [Sato Hub page ↗](https://satohub.ai/resources/purple-flea-trading?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `purple-flea-trading`. https://satohub.ai/resources/purple-flea-trading — retrieved 2026-09-16.

[← All layers](../index.md)
