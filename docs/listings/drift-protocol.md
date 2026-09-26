---
title: "Drift Protocol — Sato Hub index"
description: "Open-source Solana perpetual futures DEX with TypeScript and Python SDKs and a self-hosted HTTP gateway."
canonical: "https://satohub.ai/resources/drift-protocol"
layout: "default"
---

# Drift Protocol

Open-source Solana perpetual futures DEX with TypeScript and Python SDKs and a self-hosted HTTP gateway.

Sato Score: **⬡ 81** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Solana
- **Interfaces:** sdk, rest-api, contract
- **Use cases:** trading, data, security, build
- **Creator:** Drift Protocol
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 395
- **Deploys as:** Self-hosted, Docker
- **Works with:** Solana, Jupiter, TypeScript SDK, Python SDK, Anchor, Data API

## Deploy spec

```sh
npm install @drift-labs/sdk
```

- **Entry:** import { DriftClient } from '@drift-labs/sdk'
- **Runtime:** node
- **Requires:** A funded Solana keypair (private key) with USDC deposited into a Drift subaccount to trade; read-only queries need only an RPC connection
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 98.6% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://drift.trade/) · [Docs](https://docs.drift.trade/) · [GitHub](https://github.com/drift-labs/protocol-v2) · [Sato Hub page ↗](https://satohub.ai/resources/drift-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `drift-protocol`. https://satohub.ai/resources/drift-protocol — retrieved 2026-09-26.

[← All layers](../index.md)
