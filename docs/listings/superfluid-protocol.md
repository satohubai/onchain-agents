---
title: "Superfluid — Sato Hub index"
description: "Real-time token-streaming protocol enabling per-second payment flows, usable as an agent subscription/payroll primitive."
canonical: "https://satohub.ai/resources/superfluid-protocol"
layout: "default"
---

# Superfluid

Real-time token-streaming protocol enabling per-second payment flows, usable as an agent subscription/payroll primitive.

Sato Score: **⬡ 52** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** DeFi Tool
- **Chains:** Multichain
- **Open source:** Yes
- **Status:** Active

## Deploy spec

```sh
npm install ethers@5.7.2
npx create-next-app@latest my-superfluid-app
cd my-superfluid-app
```

- **Entry:** CFAv1Forwarder contract 0xcfA132E353cB4E398080B9700609bb008eceB125 (money streaming) and GDAv1Forwarder 0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08 (distribution pools), called via ethers.js
- **Runtime:** Node.js (ethers.js against Superfluid forwarder contracts; no dedicated SDK install in the current quickstart)
- **Requires:** EVM RPC endpoint and a signer for transactions (not enumerated as env vars on the quickstart page); RISK: streaming transactions require a funded signing key
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.superfluid.org) · [Docs](https://docs.superfluid.org) · [GitHub](https://github.com/superfluid-finance) · [Sato Hub page ↗](https://satohub.ai/resources/superfluid-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `superfluid-protocol`. https://satohub.ai/resources/superfluid-protocol — retrieved 2026-09-21.

[← All layers](../index.md)
