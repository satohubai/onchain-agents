---
title: "Uniswap — Sato Hub index"
description: "Leading multichain spot DEX with v4 hooks, official SDKs, and a hosted Trading API."
canonical: "https://satohub.ai/resources/uniswap"
layout: "default"
---

# Uniswap

Leading multichain spot DEX with v4 hooks, official SDKs, and a hosted Trading API.

Sato Score: **⬡ 80** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Ethereum, Base, Arbitrum, Optimism, Polygon, Robinhood Chain, Multichain
- **Standards:** mcp
- **Interfaces:** mcp, sdk, rest-api, contract
- **Use cases:** trading, security, build
- **Creator:** Uniswap Labs
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 4 days ago
- **Deploys as:** API, SDK
- **Works with:** UniswapX, Permit2, Universal Router

## Deploy spec

```sh
npx skills add Uniswap/uniswap-ai
```

- **Entry:** Claude Code plugin marketplace: /plugin marketplace add uniswap/uniswap-ai then /plugin install uniswap-trading — installs the swap-integration skill (Uniswap swaps via Trading API, Universal Router, or SDKs)
- **Runtime:** node
- **Requires:** Uniswap Trading API key (free signup at the developer dashboard) — only needed if the swap-integration skill calls the hosted Swapping API rather than the on-chain SDK/Universal Router path, Wallet/signer for on-chain execution
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://uniswap.org/) · [Docs](https://docs.uniswap.org/) · [GitHub](https://github.com/Uniswap) · [Sato Hub page ↗](https://satohub.ai/resources/uniswap?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `uniswap`. https://satohub.ai/resources/uniswap — retrieved 2026-09-25.

[← All layers](../index.md)
