---
title: "PRXVT — Sato Hub index"
description: "Open-source privacy SDK that adds unlinkable, zero-knowledge payments on top of the x402 agent payment standard."
canonical: "https://satohub.ai/resources/prxvt"
layout: "default"
---

# PRXVT

Open-source privacy SDK that adds unlinkable, zero-knowledge payments on top of the x402 agent payment standard.

Sato Score: **⬡ 68** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Security Tool
- **Type:** Infrastructure
- **Chains:** Ethereum, Base, Polygon
- **Standards:** x402, erc-8183, a2a
- **Interfaces:** sdk
- **Use cases:** payments, privacy, security, build
- **Creator:** PRXVT
- **Open source:** Yes
- **Status:** Early
- **Deploys as:** npm
- **Works with:** x402

## Deploy spec

```sh
npm install @prxvt/sdk
```

- **Entry:** import { PrivacySDK } from '@prxvt/sdk'; const sdk = new PrivacySDK({ chain: 'base' })
- **Runtime:** node
- **Requires:** A funding private key to deposit USDC and create the initial private note (per README quick-start)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.prxvt.com) · [Docs](https://github.com/prxvt/sdk) · [GitHub](https://github.com/prxvt) · [Sato Hub page ↗](https://satohub.ai/resources/prxvt?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `prxvt`. https://satohub.ai/resources/prxvt — retrieved 2026-09-20.

[← All layers](../index.md)
