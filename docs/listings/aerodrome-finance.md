---
title: "Aerodrome — Sato Hub index"
description: "Spot DEX and liquidity marketplace on Base, with open-source contracts and third-party swap APIs/SDKs."
canonical: "https://satohub.ai/resources/aerodrome-finance"
layout: "default"
---

# Aerodrome

Spot DEX and liquidity marketplace on Base, with open-source contracts and third-party swap APIs/SDKs.

Sato Score: **⬡ 58** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Base
- **Interfaces:** rest-api, contract
- **Use cases:** trading, security
- **Open source:** Yes
- **Status:** Active

## Deploy spec

```sh
forge install
forge build
forge test
```

- **Entry:** forge build (aerodrome-finance/contracts repo)
- **Runtime:** Foundry (Solidity contracts repo; no client SDK)
- **Requires:** BASE_RPC_URL (mandatory for mainnet fork tests), BLOCK_NUMBER (optional, consistent fork state)
- **License:** Unknown (README references Apache Foundation licensing guidelines; see LICENSE/NOTICE)
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://aerodrome.finance/) · [Docs](https://aerodrome.finance/docs) · [GitHub](https://github.com/aerodrome-finance) · [Sato Hub page ↗](https://satohub.ai/resources/aerodrome-finance?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `aerodrome-finance`. https://satohub.ai/resources/aerodrome-finance — retrieved 2026-09-14.

[← All layers](../index.md)
