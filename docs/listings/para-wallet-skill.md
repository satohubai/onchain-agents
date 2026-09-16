---
title: "Para Wallet Skill — Sato Hub index"
description: "Portable SKILL.md for Para's MPC embedded-wallet SDK, letting coding agents wire up seedless wallet auth/signing for Solana, EVM, and Cosmos."
canonical: "https://satohub.ai/resources/para-wallet-skill"
canonical_url: "https://satohub.ai/resources/para-wallet-skill"
layout: "default"
page_type: "listing"
item_name: "Para Wallet Skill"
software_url: "https://getpara.com"
application_category: "Wallet Infrastructure"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-16"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Wallets, keys & permissions"
    url: "https://satohubai.github.io/onchain-agents/categories/wallets-keys"
  - name: "Para Wallet Skill"
    url: "https://satohubai.github.io/onchain-agents/listings/para-wallet-skill"
---

# Para Wallet Skill

Portable SKILL.md for Para's MPC embedded-wallet SDK, letting coding agents wire up seedless wallet auth/signing for Solana, EVM, and Cosmos.

Sato Score: **⬡ 35** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Solana, Ethereum, Cosmos
- **Open source:** No
- **Status:** Active

## Deploy spec

```sh
mkdir -p ~/.claude/skills/para && curl -sL https://docs.getpara.com/skill.md > ~/.claude/skills/para/SKILL.md
npm install -g @getpara/cli
para login
para create my-app
```

- **Entry:** para (CLI: `para init`, `para keys get --copy`); app integration via `npm install @getpara/react-sdk` and wrapping the app with <ParaProvider>
- **Runtime:** Node.js (Para CLI + React SDK); ships as an agent skill file
- **Requires:** NEXT_PUBLIC_PARA_API_KEY (Para API key; para_beta_* for development, para_prod_* for production)
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 59 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://getpara.com) · [Docs](https://docs.getpara.com/skill.md) · [Sato Hub page ↗](https://satohub.ai/resources/para-wallet-skill?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `para-wallet-skill`. https://satohub.ai/resources/para-wallet-skill — retrieved 2026-09-16.

[← All layers](../index.md)
