---
title: "Bridge — Sato Hub index"
description: "Stablecoin payments infrastructure (acquired by Stripe) offering an orchestration, issuance, cards, and wallet API for moving money onchain."
canonical: "https://satohub.ai/resources/bridge-xyz"
layout: "default"
---

# Bridge

Stablecoin payments infrastructure (acquired by Stripe) offering an orchestration, issuance, cards, and wallet API for moving money onchain.

Sato Score: **⬡ 40** (Medium), +5 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Multichain
- **Open source:** No
- **Status:** Active

## Deploy spec

```sh
curl --location --request POST 'https://api.bridge.xyz/v0/transfers' --header 'Api-Key: <API Key>' --header 'Idempotency-Key: <Unique Idempotency Key>' --data-raw '{"on_behalf_of": "cust_alice", "sour
```

- **Entry:** POST https://api.bridge.xyz/v0/transfers
- **Runtime:** REST API (any HTTP client; no SDK install documented)
- **Requires:** Api-Key header (Bridge-issued API key), Idempotency-Key header (unique per request)
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.bridge.xyz) · [Docs](https://apidocs.bridge.xyz) · [Sato Hub page ↗](https://satohub.ai/resources/bridge-xyz?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bridge-xyz`. https://satohub.ai/resources/bridge-xyz — retrieved 2026-09-21.

[← All layers](../index.md)
