---
title: "Brickken — Sato Hub index"
description: "Institutional RWA tokenization platform (ISO 27001/27701/27018, MiCA-aligned) with a no-code issuer studio and an API integration tier."
canonical: "https://satohub.ai/resources/brickken"
canonical_url: "https://satohub.ai/resources/brickken"
layout: "default"
page_type: "listing"
item_name: "Brickken"
software_url: "https://www.brickken.com/"
application_category: "DeFi Tool"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Trading & DeFi venues"
    url: "https://satohubai.github.io/onchain-agents/categories/trading-venues"
  - name: "Brickken"
    url: "https://satohubai.github.io/onchain-agents/listings/brickken"
---

# Brickken

Institutional RWA tokenization platform (ISO 27001/27701/27018, MiCA-aligned) with a no-code issuer studio and an API integration tier.

Sato Score: **⬡ 29** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** DeFi Tool
- **Chains:** Base, Ethereum, Polygon, BNB Chain
- **Open source:** No
- **Status:** Active

## Deploy spec

```sh
npm install -g brickken-cli
brickken --version
```

- **Entry:** brickken <command> (x402-only auth; high-level commands are prepare-only by default, add --execute to sign and send)
- **Runtime:** Node.js (npm CLI package brickken-cli)
- **Requires:** BRICKKEN_PRIVATE_KEY (0x... — signs transactions and x402 payments locally; private key custody risk, do not hardcode), BRICKKEN_RPC_URL (blockchain RPC endpoint), BASE_URL (API endpoint, e.g. https://api.sandbox.brickken.com), CHAIN (chain id, e.g. 11155111 for Sepolia), WALLET (signer address)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 22.8% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.brickken.com/) · [Sato Hub page ↗](https://satohub.ai/resources/brickken?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `brickken`. https://satohub.ai/resources/brickken — retrieved 2026-09-14.

[← All layers](../index.md)
