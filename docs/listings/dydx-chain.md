---
title: "dYdX — Sato Hub index"
description: "Perpetual futures DEX running on its own Cosmos SDK app-chain with REST/WebSocket and gRPC APIs."
canonical: "https://satohub.ai/resources/dydx-chain"
layout: "default"
---

# dYdX

Perpetual futures DEX running on its own Cosmos SDK app-chain with REST/WebSocket and gRPC APIs.

Sato Score: **⬡ 83** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Cosmos, Ethereum, Base, Arbitrum, Polygon, Avalanche, Optimism, Solana
- **Interfaces:** sdk, rest-api, contract
- **Use cases:** trading, data, security, build
- **Creator:** dYdX Trading Inc.
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 2 days ago
- **GitHub stars:** 345
- **Deploys as:** npm, pip, API, Self-hosted
- **Works with:** Cosmos SDK, CometBFT

## Deploy spec

```sh
npm install @dydxprotocol/v4-client-js
```

- **Entry:** import { CompositeClient } from '@dydxprotocol/v4-client-js'
- **Runtime:** node
- **Requires:** A dYdX (Cosmos-derived) wallet mnemonic/private key with USDC collateral to place orders; read-only market data needs only the public REST/WS/gRPC endpoints
- **License:** AGPL-3.0 (modified — subject to dYdX Terms of Use)
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 71 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://dydx.exchange/) · [Docs](https://docs.dydx.exchange/) · [GitHub](https://github.com/dydxprotocol/v4-chain) · [Sato Hub page ↗](https://satohub.ai/resources/dydx-chain?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `dydx-chain`. https://satohub.ai/resources/dydx-chain — retrieved 2026-09-23.

[← All layers](../index.md)
