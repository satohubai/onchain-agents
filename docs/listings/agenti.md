---
title: "Agenti — Sato Hub index"
description: "Gives any AI agent a crypto wallet to pay x402 APIs, receive USDC, and check balances."
canonical: "https://satohub.ai/resources/agenti"
layout: "default"
---

# Agenti

Gives any AI agent a crypto wallet to pay x402 APIs, receive USDC, and check balances.

Sato Score: **⬡ 66** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Ethereum, Base, Arbitrum, Polygon, Solana
- **Standards:** x402, mcp
- **Interfaces:** mcp, sdk
- **Use cases:** payments, wallets, build
- **Creator:** nirholas
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity 7 days ago
- **GitHub stars:** 79
- **Deploys as:** npm, MCP server
- **Works with:** Claude, LangChain, AutoGen, CrewAI, MCP, x402

## Deploy spec

```sh
npm i @agenti/sdk
npm i @agenti/core
git clone https://github.com/nirholas/agenti && cd agenti && pnpm install
```

- **Entry:** import { agenti } from '@agenti/sdk'; const agent = agenti({ evm: { privateKey: process.env.AGENT_KEY } });
- **Runtime:** Node.js (TypeScript SDK)
- **Requires:** AGENT_KEY / AGENTI_EVM_PRIVATE_KEY (raw EVM private key — high custody risk, agent controls funds), SOLANA_PRIVATE_KEY / AGENTI_SOLANA_PRIVATE_KEY (raw Solana private key — high custody risk), ANTHROPIC_API_KEY (LLM integration)
- **License:** Unknown (repo README states all rights reserved; not an open-source SPDX license)
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 0% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://agenti.cash) · [GitHub](https://github.com/nirholas/agenti) · [Sato Hub page ↗](https://satohub.ai/resources/agenti?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `agenti`. https://satohub.ai/resources/agenti — retrieved 2026-09-23.

[← All layers](../index.md)
