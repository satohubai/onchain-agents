---
title: "Privy — Sato Hub index"
description: "Embedded and server wallet infrastructure used to give agents secure key management."
canonical: "https://satohub.ai/resources/privy"
layout: "default"
---

# Privy

Embedded and server wallet infrastructure used to give agents secure key management.

Sato Score: **⬡ 83** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Ethereum, Base, Solana, Multichain
- **Interfaces:** rest-api
- **Use cases:** payments, wallets
- **Creator:** Privy
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity 4 days ago
- **Deploys as:** API, SDK, Hosted
- **Works with:** REST API, Node.js SDK, React SDK, Swift SDK, Android SDK, Unity SDK, Go SDK, Ruby SDK

## Deploy spec

```sh
npm install @privy-io/node
```

- **Entry:** import { PrivyClient } from '@privy-io/node'; const privy = new PrivyClient({ appId: process.env.PRIVY_APP_ID, appSecret: process.env.PRIVY_APP_SECRET }); const wallet = await privy.wallets().create({ chain_type: 'ethereum' });
- **Runtime:** Node.js
- **Requires:** PRIVY_APP_ID + PRIVY_APP_SECRET (server-to-server), authorization keys for signing/transactions
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://privy.io) · [Docs](https://docs.privy.io) · [GitHub](https://github.com/privy-io) · [Sato Hub page ↗](https://satohub.ai/resources/privy?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `privy`. https://satohub.ai/resources/privy — retrieved 2026-09-21.

[← All layers](../index.md)
