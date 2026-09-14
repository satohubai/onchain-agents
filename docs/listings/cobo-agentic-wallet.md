---
title: "Cobo Agentic Wallet — Sato Hub index"
description: "Non-custodial MPC wallet for AI agents with cryptographically enforced human rules, plus a WaaS Skill for building wallet apps via natural language."
canonical: "https://satohub.ai/resources/cobo-agentic-wallet"
canonical_url: "https://satohub.ai/resources/cobo-agentic-wallet"
layout: "default"
page_type: "listing"
item_name: "Cobo Agentic Wallet"
software_url: "https://www.cobo.com/agentic-wallet"
application_category: "Wallet Infrastructure"
application_subcategory: "MPC non-custodial agent wallet + WaaS Skill"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Cobo Agentic Wallet"
    url: "https://satohubai.github.io/onchain-agents/listings/cobo-agentic-wallet"
---

# Cobo Agentic Wallet

Non-custodial MPC wallet for AI agents with cryptographically enforced human rules, plus a WaaS Skill for building wallet apps via natural language.

Sato Score: **⬡ 48** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Ethereum, Solana, Base, Multichain, Polygon, Hyperliquid
- **Standards:** x402, mcp
- **Interfaces:** mcp, plugin
- **Use cases:** payments, wallets
- **Creator:** Cobo
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** CLI, SDK, MCP server, npm, pip
- **Works with:** MCP, LangChain, OpenAI Agents, CrewAI, Agno, Python, TypeScript

## Deploy spec

```sh
pip install cobo-cli
cobo skill install claude
cobo skill install cursor
cobo skill install all --scope local
```

- **Entry:** Prefix agent prompts with "/cobo-waas" (e.g. "/cobo-waas set up the dev environment and list my wallets")
- **Runtime:** Python (Cobo CLI, 3.9+)
- **Requires:** Cobo Portal account, OAuth login (dev) or manual public-key registration (prod) — Cobo is a custodial/MPC wallet-as-a-service; wallet keys are held by Cobo's infrastructure, not the caller
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.cobo.com/agentic-wallet) · [Docs](https://www.cobo.com/developers/v2/guides/overview/cobo-waas-skill) · [Sato Hub page ↗](https://satohub.ai/resources/cobo-agentic-wallet?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cobo-agentic-wallet`. https://satohub.ai/resources/cobo-agentic-wallet — retrieved 2026-09-14.

[← All layers](../index.md)
