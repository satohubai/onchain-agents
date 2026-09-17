---
title: "Avantis — Sato Hub index"
description: "Onchain perpetuals exchange on Base for crypto, forex, and commodities, with a dedicated Base MCP skill."
canonical: "https://satohub.ai/resources/avantis"
layout: "default"
---

# Avantis

Onchain perpetuals exchange on Base for crypto, forex, and commodities, with a dedicated Base MCP skill.

Sato Score: **⬡ 49** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Chains:** Base
- **Open source:** Partial
- **Status:** Active

## Deploy spec

```sh
pip install avantis-trader-sdk
```

- **Entry:** trader_client = TraderClient("https://mainnet.base.org"); trader_client.set_local_signer("0xYOUR_PRIVATE_KEY")
- **Runtime:** Python (pip package, trader SDK)
- **Requires:** Local signer private key — 0x... wallet key passed to set_local_signer(); wallet private key, high-risk if exposed
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 60 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.avantisfi.com/) · [GitHub](https://github.com/Avantis-Labs) · [Sato Hub page ↗](https://satohub.ai/resources/avantis?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `avantis`. https://satohub.ai/resources/avantis — retrieved 2026-09-17.

[← All layers](../index.md)
