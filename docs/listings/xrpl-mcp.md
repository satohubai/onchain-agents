---
title: "XRPL MCP (RomThpt) — Sato Hub index"
description: "Community MCP server providing blockchain services for the XRP Ledger ecosystem."
canonical: "https://satohub.ai/resources/xrpl-mcp"
canonical_url: "https://satohub.ai/resources/xrpl-mcp"
layout: "default"
page_type: "listing"
item_name: "XRPL MCP (RomThpt)"
code_repository: "https://github.com/RomThpt/mcp-xrpl"
software_url: "https://github.com/RomThpt/mcp-xrpl"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-02-28"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "XRPL MCP (RomThpt)"
    url: "https://satohubai.github.io/onchain-agents/listings/xrpl-mcp"
---

# XRPL MCP (RomThpt)

Community MCP server providing blockchain services for the XRP Ledger ecosystem.

Sato Score: **⬡ 47** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** XRP Ledger
- **Standards:** mcp
- **Interfaces:** mcp
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 7

## Deploy spec

```sh
git clone https://github.com/RomThpt/mcp-xrpl.git
cd mcp-xrpl
npm install
npm run build
```

- **Entry:** npm start (stdio mode)
- **Runtime:** Node.js 18.0.0+
- **Requires:** DEFAULT_SEED (optional, XRPL wallet seed for automatic connection — risk: seed used for transaction signing, keep secure per README), XRPL_NETWORK (default testnet; options mainnet/testnet/devnet)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/RomThpt/mcp-xrpl) · [GitHub](https://github.com/RomThpt/mcp-xrpl) · [Sato Hub page ↗](https://satohub.ai/resources/xrpl-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `xrpl-mcp`. https://satohub.ai/resources/xrpl-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
