---
title: "Masumi Network — Sato Hub index"
description: "Cardano-based payment and identity protocol letting AI agents pay each other via escrow with on-chain audit trails."
canonical: "https://satohub.ai/resources/masumi-network"
layout: "default"
---

# Masumi Network

Cardano-based payment and identity protocol letting AI agents pay each other via escrow with on-chain audit trails.

Sato Score: **⬡ 54** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Unknown
- **Open source:** Yes
- **Status:** Active
- **Works with:** LangChain, CrewAI, AutoGen, Agno, Anthropic SDK, OpenAI Agents SDK, A2A, AP2, x402

## Deploy spec

```sh
git clone https://github.com/masumi-network/masumi-payment-service.git
cd masumi-payment-service
pnpm install
cp .env.example .env
```

- **Entry:** pnpm run dev (masumi-payment-service)
- **Runtime:** Node.js >=20 + PostgreSQL >=13 (pnpm; payment service node)
- **Requires:** DATABASE_URL, ENCRYPTION_KEY, Blockfrost keys
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.masumi.network/) · [Docs](https://www.masumi.network/dev) · [GitHub](https://github.com/masumi-network) · [Sato Hub page ↗](https://satohub.ai/resources/masumi-network?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `masumi-network`. https://satohub.ai/resources/masumi-network — retrieved 2026-09-19.

[← All layers](../index.md)
