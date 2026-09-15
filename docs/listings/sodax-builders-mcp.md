---
title: "SODAX Builders MCP — Sato Hub index"
description: "MCP server giving AI coding agents live access to SODAX's cross-network DeFi API across 20+ chains."
canonical: "https://satohub.ai/resources/sodax-builders-mcp"
canonical_url: "https://satohub.ai/resources/sodax-builders-mcp"
layout: "default"
page_type: "listing"
item_name: "SODAX Builders MCP"
code_repository: "https://github.com/gosodax/builders-sodax-mcp-server"
software_url: "https://builders.sodax.com"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-08-03"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "SODAX Builders MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/sodax-builders-mcp"
---

# SODAX Builders MCP

MCP server giving AI coding agents live access to SODAX's cross-network DeFi API across 20+ chains.

Sato Score: **⬡ 79** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Ethereum, Base, Arbitrum, Optimism, Polygon
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 9

## Deploy spec

```sh
pnpm install
pnpm dev
pnpm build
pnpm start
```

- **Entry:** {"mcpServers": {"sodax-builders": {"url": "https://builders.sodax.com/mcp"}}}
- **Runtime:** Node.js >=22.9.0 (TypeScript, pnpm) — hosted remote endpoint also available
- **Requires:** PORT — optional, default 3000, TRANSPORT — optional, default http, NODE_ENV — set to production for deployment, LOG_LEVEL — optional, default info, DISCORD_WEBHOOK_URL — optional, for Discord alerts, .env.example provided as a template
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 58 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://builders.sodax.com) · [Docs](https://docs.sodax.com) · [GitHub](https://github.com/gosodax/builders-sodax-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/sodax-builders-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `sodax-builders-mcp`. https://satohub.ai/resources/sodax-builders-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
