---
title: "Orderly Network — Sato Hub index"
description: "Omnichain orderbook trading infrastructure exposing REST and WebSocket APIs and SDKs for DEX builders."
canonical: "https://satohub.ai/resources/orderly-network"
layout: "default"
---

# Orderly Network

Omnichain orderbook trading infrastructure exposing REST and WebSocket APIs and SDKs for DEX builders.

Sato Score: **⬡ 69** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Multichain, Ethereum, Arbitrum, Base, Solana
- **Standards:** mcp
- **Interfaces:** mcp, sdk, rest-api, contract
- **Use cases:** trading, data, security, build
- **Creator:** Orderly Network
- **Open source:** Partial
- **Status:** Active
- **Deploys as:** SDK, API, MCP server, CLI
- **Works with:** REST API, WebSocket API, MCP server

## Deploy spec

```sh
npm install @orderly.network/hooks @orderly.network/core @orderly.network/types
```

- **Entry:** import { useOrderEntry } from '@orderly.network/hooks'; import { OrderSide, OrderType } from '@orderly.network/types'; const { onSubmit } = useOrderEntry({ symbol: 'PERP_ETH_USDC', side: OrderSide.BUY, order_type: OrderType.LIMIT, order_price: 2000, order_quantity: 0.1 }); await onSubmit();   // note: @orderly.network/mcp-server is docs-only, not trade execution
- **Runtime:** Node.js / TypeScript (React hooks)
- **Requires:** a wallet signer (EVM/Solana), brokerId, Orderly accountId + API key/secret (Ed25519)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 93.9% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://orderly.network/) · [Docs](https://orderly.network/docs/build-on-omnichain/evm-api/introduction) · [GitHub](https://github.com/OrderlyNetwork) · [Sato Hub page ↗](https://satohub.ai/resources/orderly-network?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `orderly-network`. https://satohub.ai/resources/orderly-network — retrieved 2026-09-18.

[← All layers](../index.md)
