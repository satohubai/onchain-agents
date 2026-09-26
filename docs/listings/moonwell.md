---
title: "Moonwell — Sato Hub index"
description: "Open lending and borrowing protocol on Base, included as a launch-day Base MCP skill plugin."
canonical: "https://satohub.ai/resources/moonwell"
layout: "default"
---

# Moonwell

Open lending and borrowing protocol on Base, included as a launch-day Base MCP skill plugin.

Sato Score: **⬡ 45** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** DeFi Tool
- **Chains:** Base, Optimism
- **Open source:** Yes
- **Status:** Active

## Deploy spec

```sh
npm install @moonwell-fi/moonwell-sdk
yarn add @moonwell-fi/moonwell-sdk
```

- **Entry:** import { createMoonwellClient } from '@moonwell-fi/moonwell-sdk'; const moonwellClient = createMoonwellClient({ networks: { base: { rpcUrls: ["https://base.llamarpc.com"] }, optimism: { rpcUrls: ["https://optimism.llamarpc.com"] } } });
- **Runtime:** Node.js/TypeScript (npm package, SDK)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://moonwell.fi/) · [GitHub](https://github.com/moonwell-fi) · [Sato Hub page ↗](https://satohub.ai/resources/moonwell?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `moonwell`. https://satohub.ai/resources/moonwell — retrieved 2026-09-26.

[← All layers](../index.md)
