---
title: "Solana Agent Kit — Sato Hub index"
description: "SendAI's open-source toolkit connecting AI agents to Solana protocol actions."
canonical: "https://satohub.ai/resources/solana-agent-kit"
canonical_url: "https://satohub.ai/resources/solana-agent-kit"
layout: "default"
page_type: "listing"
item_name: "Solana Agent Kit"
code_repository: "https://github.com/sendaifun/solana-agent-kit"
software_url: "https://kit.sendai.fun"
application_category: "Skill Repo"
operating_system: "Any"
license_url: "https://www.apache.org/licenses/LICENSE-2.0"
license_name: "Apache-2.0"
date_modified: "2026-05-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Solana Agent Kit"
    url: "https://satohubai.github.io/onchain-agents/listings/solana-agent-kit"
---

# Solana Agent Kit

SendAI's open-source toolkit connecting AI agents to Solana protocol actions.

Sato Score: **⬡ 76** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Solana
- **Interfaces:** sdk, plugin
- **Use cases:** trading, build
- **Creator:** SendAI
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 1.7k
- **Deploys as:** npm, MCP server, Self-hosted
- **Works with:** Jupiter, Raydium, Orca, Meteora, Drift, Wormhole, deBridge, Pyth, LangChain, Vercel AI SDK, Turnkey, Privy

## Deploy spec

```sh
npm install solana-agent-kit
```

- **Entry:** import { SolanaAgentKit, KeypairWallet, createVercelAITools } from "solana-agent-kit"; const agent = new SolanaAgentKit(wallet /* KeypairWallet */, rpcUrl, { /* config + optional model keys */ }); const tools = createVercelAITools(agent, agent.actions);
- **Runtime:** Node.js
- **Requires:** a Solana wallet adapter (e.g. KeypairWallet from a Keypair), Solana RPC URL, optional LLM key for AI tool factories
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://kit.sendai.fun) · [Docs](https://docs.sendai.fun) · [GitHub](https://github.com/sendaifun/solana-agent-kit) · [Sato Hub page ↗](https://satohub.ai/resources/solana-agent-kit?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `solana-agent-kit`. https://satohub.ai/resources/solana-agent-kit — retrieved 2026-09-14.

[← All layers](../index.md)
