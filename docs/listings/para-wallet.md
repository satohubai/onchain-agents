---
title: "Para — Sato Hub index"
description: "MPC embedded-wallet platform (SOC 2 Type II) with an MCP server for AI agents to create and sign wallets across chains."
canonical: "https://satohub.ai/resources/para-wallet"
canonical_url: "https://satohub.ai/resources/para-wallet"
layout: "default"
page_type: "listing"
item_name: "Para"
code_repository: "https://github.com/getpara/para-wallet-mcp"
software_url: "https://developer.getpara.com"
application_category: "Wallet Infrastructure"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Wallets, keys & permissions"
    url: "https://satohubai.github.io/onchain-agents/categories/wallets-keys"
  - name: "Para"
    url: "https://satohubai.github.io/onchain-agents/listings/para-wallet"
---

# Para

MPC embedded-wallet platform (SOC 2 Type II) with an MCP server for AI agents to create and sign wallets across chains.

Sato Score: **⬡ 48** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Multichain
- **Open source:** Partial
- **Status:** Active

## Deploy spec

```sh
git clone https://github.com/getpara/para-wallet-mcp.git
cd para-wallet-mcp
npm install
npm run build
```

- **Entry:** {"mcpServers": {"para-wallet": {"command": "node", "args": ["/path/to/para-wallet-mcp/dist/index.js"], "env": {"PARA_API_KEY": "your_api_key_here"}}}}
- **Runtime:** Node.js (TypeScript MCP server, built with npm)
- **Requires:** PARA_API_KEY — required, obtained from developer.getpara.com; server IP must be allowlisted with Para. RISK: the key grants MPC wallet creation/signing authority via the Para API — treat as a credential
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://developer.getpara.com) · [Docs](https://developer.getpara.com) · [GitHub](https://github.com/getpara/para-wallet-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/para-wallet?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `para-wallet`. https://satohub.ai/resources/para-wallet — retrieved 2026-09-14.

[← All layers](../index.md)
