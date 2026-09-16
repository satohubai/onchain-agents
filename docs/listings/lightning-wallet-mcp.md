---
title: "Lightning Wallet MCP — Sato Hub index"
description: "Bitcoin Lightning wallet MCP and CLI for agent payments: invoices, sends, and L402 support."
canonical: "https://satohub.ai/resources/lightning-wallet-mcp"
canonical_url: "https://satohub.ai/resources/lightning-wallet-mcp"
layout: "default"
page_type: "listing"
item_name: "Lightning Wallet MCP"
code_repository: "https://github.com/lightningfaucet/lightning-wallet-mcp"
software_url: "https://github.com/lightningfaucet/lightning-wallet-mcp"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-15"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Lightning Wallet MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/lightning-wallet-mcp"
---

# Lightning Wallet MCP

Bitcoin Lightning wallet MCP and CLI for agent payments: invoices, sends, and L402 support.

Sato Score: **⬡ 73** (High), +10 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Bitcoin
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, cli
- **Use cases:** payments, wallets
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity today
- **GitHub stars:** 9
- **Deploys as:** npm
- **Works with:** Claude Code, OpenClaw, Cursor

## Deploy spec

```sh
npm install -g lightning-wallet-mcp
```

- **Entry:** npx lightning-wallet-mcp (CLI: lw)
- **Runtime:** Node.js
- **Requires:** LIGHTNING_WALLET_API_KEY (obtained via registration), PRE_PAYMENT_HOOK_URL (optional), PRE_PAYMENT_HOOK_TIMEOUT_MS (optional, default 3000), PRE_PAYMENT_HOOK_FAIL_MODE (optional, default 'closed')
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/lightningfaucet/lightning-wallet-mcp) · [Docs](https://github.com/lightningfaucet/lightning-wallet-mcp) · [GitHub](https://github.com/lightningfaucet/lightning-wallet-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/lightning-wallet-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `lightning-wallet-mcp`. https://satohub.ai/resources/lightning-wallet-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
