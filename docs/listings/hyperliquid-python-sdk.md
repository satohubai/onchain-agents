---
title: "Hyperliquid Python SDK — Sato Hub index"
description: "The official open-source Python SDK for programmatic trading on the Hyperliquid perpetuals DEX."
canonical: "https://satohub.ai/resources/hyperliquid-python-sdk"
layout: "default"
---

# Hyperliquid Python SDK

The official open-source Python SDK for programmatic trading on the Hyperliquid perpetuals DEX.

Sato Score: **⬡ 76** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Arbitrum, Multichain, Hyperliquid
- **Interfaces:** sdk, rest-api, contract
- **Use cases:** trading, data, security, build
- **Creator:** Hyperliquid
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 1.8k
- **Deploys as:** Self-hosted, pip
- **Works with:** Hyperliquid API

## Deploy spec

```sh
pip install hyperliquid-python-sdk
```

- **Entry:** from hyperliquid.info import Info from hyperliquid.utils import constants info = Info(constants.TESTNET_API_URL, skip_ws=True) # trading: cp examples/config.json.example examples/config.json, edit, then run examples/basic_order.py
- **Runtime:** Python
- **Requires:** examples/config.json with account_address + secret_key (wallet), optional API wallet from app.hyperliquid.xyz/API
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api) · [Docs](https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api) · [GitHub](https://github.com/hyperliquid-dex/hyperliquid-python-sdk) · [Sato Hub page ↗](https://satohub.ai/resources/hyperliquid-python-sdk?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `hyperliquid-python-sdk`. https://satohub.ai/resources/hyperliquid-python-sdk — retrieved 2026-09-25.

[← All layers](../index.md)
