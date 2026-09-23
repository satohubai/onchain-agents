---
title: "Bankr — Sato Hub index"
description: "Crypto execution layer and cross-chain wallet that lets agents and users trade, bridge, and manage assets via natural language, plus a skills…"
canonical: "https://satohub.ai/resources/bankr"
layout: "default"
---

# Bankr

Crypto execution layer and cross-chain wallet that lets agents and users trade, bridge, and manage assets via natural language, plus a skills marketplace and an x402 cloud for spinning up pay-per-call agent endpoints.

Sato Score: **⬡ 87** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Base, Ethereum, Polygon, Arbitrum, Solana, Bitcoin, BNB Chain, Multichain, Hyperliquid, Robinhood Chain
- **Standards:** x402, a2a
- **Interfaces:** ui, plugin
- **Use cases:** payments, trading, launch, wallets
- **Creator:** Bankr
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity today
- **GitHub stars:** 1.2k
- **Deploys as:** CLI, npm, API, Claude Plugin
- **Works with:** Uniswap, Alchemy, Zerion, Base, Shopify, x402

## Deploy spec

```sh
npm install -g @bankr/cli
```

- **Entry:** bankr login    # creates an agent wallet + API key bankr launch
- **Runtime:** Hosted agent + skills collection (CLI: @bankr/cli)
- **Requires:** Bankr wallet (created by bankr login), x402 USDC on Base for many skills, per-skill API keys (Alchemy/QuickNode/Zerion)
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://bankr.bot/) · [Docs](https://docs.bankr.bot/) · [GitHub](https://github.com/BankrBot/skills) · [Sato Hub page ↗](https://satohub.ai/resources/bankr?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bankr`. https://satohub.ai/resources/bankr — retrieved 2026-09-23.

[← All layers](../index.md)
