---
title: "Metaplex Agent Kit (mpl-agent) — Sato Hub index"
description: "Solana program binding a verifiable on-chain identity PDA to an agent, so agents can hold assets without exposing a private key."
canonical: "https://satohub.ai/resources/metaplex-agent-kit"
layout: "default"
---

# Metaplex Agent Kit (mpl-agent)

Solana program binding a verifiable on-chain identity PDA to an agent, so agents can hold assets without exposing a private key.

Sato Score: **⬡ 59** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Solana
- **Open source:** Yes
- **Status:** Early
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 2

## Deploy spec

```sh
npm install @metaplex-foundation/mpl-agent-registry
```

- **Entry:** import { registerIdentityV1, findAgentIdentityV1Pda, fetchAgentIdentityV1 } from '@metaplex-foundation/mpl-agent-registry'
- **Runtime:** Node.js (npm package) / Rust crate
- **License:** Unknown (Metaplex NFT Open Source License, non-SPDX)
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.metaplex.com/docs/agents) · [GitHub](https://github.com/metaplex-foundation/mpl-agent) · [Sato Hub page ↗](https://satohub.ai/resources/metaplex-agent-kit?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `metaplex-agent-kit`. https://satohub.ai/resources/metaplex-agent-kit — retrieved 2026-09-19.

[← All layers](../index.md)
