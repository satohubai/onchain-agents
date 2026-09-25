---
title: "Hyperliquid — Sato Hub index"
description: "Onchain perpetual futures and spot DEX running on its own L1 with an HyperEVM smart-contract layer."
canonical: "https://satohub.ai/resources/hyperliquid"
layout: "default"
---

# Hyperliquid

Onchain perpetual futures and spot DEX running on its own L1 with an HyperEVM smart-contract layer.

Sato Score: **⬡ 76** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Multichain, Hyperliquid
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, contract
- **Use cases:** trading, wallets, security
- **Creator:** Hyperliquid
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity 1 day ago
- **Deploys as:** API, SDK
- **Works with:** CCXT, Python SDK, TypeScript SDK

## Deploy spec

```sh
pip install hyperliquid-python-sdk
```

- **Entry:** from hyperliquid.info import Info; from hyperliquid.utils import constants; info = Info(constants.TESTNET_API_URL, skip_ws=True)
- **Runtime:** python
- **Requires:** Wallet private key / API-wallet key only for trading & account-state actions (Info read-only queries need no key)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** failed
- **As of:** 2026-09-21

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://app.hyperliquid.xyz/) · [Docs](https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api) · [GitHub](https://github.com/hyperliquid-dex) · [Sato Hub page ↗](https://satohub.ai/resources/hyperliquid?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `hyperliquid`. https://satohub.ai/resources/hyperliquid — retrieved 2026-09-25.

[← All layers](../index.md)
