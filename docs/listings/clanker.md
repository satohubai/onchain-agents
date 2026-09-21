---
title: "Clanker — Sato Hub index"
description: "Agent that deploys tokens on Base when tagged on Farcaster."
canonical: "https://satohub.ai/resources/clanker"
layout: "default"
---

# Clanker

Agent that deploys tokens on Base when tagged on Farcaster.

Sato Score: **⬡ 47** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Onchain Agent
- **Type:** Framework
- **Chains:** Base, Arbitrum, BNB Chain
- **Interfaces:** sdk
- **Use cases:** launch, payments
- **Open source:** Partial
- **Status:** Active
- **Deploys as:** Hosted, Agent skill

## Deploy spec

```sh
npm install clanker-sdk viem
```

- **Entry:** import { Clanker } from 'clanker-sdk'; const clanker = new Clanker({ wallet, publicClient }); await clanker.deployToken(tokenConfig);
- **Runtime:** Node.js (TypeScript SDK, npm package)
- **Requires:** PRIVATE_KEY — wallet private key for signing token-deployment transactions (custody risk: key is used directly by the SDK for signing)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://clanker.world) · [GitHub](https://github.com/clanker-devco) · [Sato Hub page ↗](https://satohub.ai/resources/clanker?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `clanker`. https://satohub.ai/resources/clanker — retrieved 2026-09-21.

[← All layers](../index.md)
