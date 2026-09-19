---
title: "Lucid Agents — Sato Hub index"
description: "Commerce SDK for bootstrapping AI agents that can pay, sell, and transact onchain."
canonical: "https://satohub.ai/resources/lucid-agents"
layout: "default"
---

# Lucid Agents

Commerce SDK for bootstrapping AI agents that can pay, sell, and transact onchain.

Sato Score: **⬡ 71** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Type:** Framework
- **Chains:** Base, Ethereum, Solana
- **Standards:** x402, erc-8004, mcp, a2a
- **Interfaces:** mcp, sdk
- **Use cases:** payments, wallets, identity, build
- **Creator:** daydreamsai
- **Open source:** Yes
- **Status:** Early
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 196
- **Deploys as:** self-hosted, library, npm
- **Works with:** Hono, Express, Next.js, TanStack, x402, A2A, ERC-8004, MCP

## Deploy spec

```sh
bunx @lucid-agents/cli my-agent
npm install @lucid-agents/core @lucid-agents/http
```

- **Entry:** import { createAgent } from '@lucid-agents/core'; import { http } from '@lucid-agents/http'; const agent = await createAgent({ name: 'my-agent', version: '1.0.0' }).use(http()).build();
- **Runtime:** Node.js / Bun / TypeScript
- **Requires:** an LLM key, optional AGENT_WALLET_PRIVATE_KEY + PAYMENTS_RECEIVABLE_ADDRESS for commerce
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Docs](https://docs.daydreams.systems/) · [GitHub](https://github.com/daydreamsai/lucid-agents) · [Sato Hub page ↗](https://satohub.ai/resources/lucid-agents?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `lucid-agents`. https://satohub.ai/resources/lucid-agents — retrieved 2026-09-19.

[← All layers](../index.md)
