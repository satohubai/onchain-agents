---
title: "ZeroDev — Sato Hub index"
description: "ERC-4337 smart-account SDK (Kernel) with session keys, gas sponsorship, and batched transactions for agent wallets."
canonical: "https://satohub.ai/resources/zerodev"
layout: "default"
---

# ZeroDev

ERC-4337 smart-account SDK (Kernel) with session keys, gas sponsorship, and batched transactions for agent wallets.

Sato Score: **⬡ 48** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Multichain
- **Open source:** Partial
- **Status:** Active

## Deploy spec

```sh
npm i @zerodev/sdk @zerodev/ecdsa-validator
npm i --save-dev @types/node tslib
```

- **Entry:** import { createKernelAccount, createKernelAccountClient, createZeroDevPaymasterClient } from "@zerodev/sdk"; import { signerToEcdsaValidator } from "@zerodev/ecdsa-validator"
- **Runtime:** Node.js (npm packages @zerodev/sdk + @zerodev/ecdsa-validator)
- **Requires:** ZeroDev RPC URL (project-scoped endpoint from the ZeroDev dashboard), A signer private key — the quickstart generates one locally via viem generatePrivateKey(); RISK: a production deployment supplies its own signing key
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 60 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://zerodev.app) · [Docs](https://docs.zerodev.app) · [GitHub](https://github.com/zerodevapp) · [Sato Hub page ↗](https://satohub.ai/resources/zerodev?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `zerodev`. https://satohub.ai/resources/zerodev — retrieved 2026-09-17.

[← All layers](../index.md)
