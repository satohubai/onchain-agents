---
title: "CoW Protocol — Sato Hub index"
description: "Intent-based trading protocol with batch-auction solvers, MEV protection, and a developer API and SDK."
canonical: "https://satohub.ai/resources/cow-protocol"
layout: "default"
---

# CoW Protocol

Intent-based trading protocol with batch-auction solvers, MEV protection, and a developer API and SDK.

Sato Score: **⬡ 65** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Ethereum, Base, Arbitrum, Polygon
- **Interfaces:** sdk, rest-api, contract
- **Use cases:** trading, wallets, security, build
- **Creator:** CoW DAO
- **Open source:** Yes
- **Status:** Active
- **Deploys as:** API, SDK
- **Works with:** SDK, API, CoW AMM

## Deploy spec

```sh
pnpm add @cowprotocol/cow-sdk
```

- **Entry:** import { OrderBookApi, TradingSdk } from '@cowprotocol/cow-sdk' — post intents/orders against the CoW Protocol order book (api.cow.fi)
- **Runtime:** node
- **Requires:** Wallet/signer to sign orders, Optional CoW API key (X-API-Key header) for partners needing higher rate limits — not required for basic swaps
- **License:** MIT OR Apache-2.0
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://cow.fi/) · [Docs](https://docs.cow.fi/) · [GitHub](https://github.com/cowprotocol) · [Sato Hub page ↗](https://satohub.ai/resources/cow-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cow-protocol`. https://satohub.ai/resources/cow-protocol — retrieved 2026-09-26.

[← All layers](../index.md)
