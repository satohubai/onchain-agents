---
title: "Agenti — Sato Hub index"
description: "Gives any AI agent a crypto wallet to pay x402 APIs, receive USDC, and check balances."
canonical: "https://satohub.ai/resources/agenti"
canonical_url: "https://satohub.ai/resources/agenti"
layout: "default"
page_type: "listing"
item_name: "Agenti"
code_repository: "https://github.com/nirholas/agenti"
software_url: "https://agenti.cash"
application_category: "Wallet Infrastructure"
operating_system: "Any"
license_name: "Unknown (repo README states all rights reserved; not an open-source SPDX license)"
date_modified: "2026-09-15"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Agenti"
    url: "https://satohubai.github.io/onchain-agents/listings/agenti"
---

# Agenti

Gives any AI agent a crypto wallet to pay x402 APIs, receive USDC, and check balances.

Sato Score: **⬡ 66** (Medium), +10 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

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
- **Activity:** Active — last activity 1 day ago
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

- Live endpoint probed by us: 0% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://agenti.cash) · [GitHub](https://github.com/nirholas/agenti) · [Sato Hub page ↗](https://satohub.ai/resources/agenti?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `agenti`. https://satohub.ai/resources/agenti — retrieved 2026-09-16.

[← All layers](../index.md)
