---
title: "CSPR.trade MCP — Sato Hub index"
description: "Non-custodial MCP for trading on CSPR.trade, the leading Casper Network DEX, with a public hosted endpoint."
canonical: "https://satohub.ai/resources/cspr-trade-mcp"
canonical_url: "https://satohub.ai/resources/cspr-trade-mcp"
layout: "default"
page_type: "listing"
item_name: "CSPR.trade MCP"
code_repository: "https://github.com/make-software/cspr-trade-mcp"
software_url: "https://cspr.trade"
application_category: "Trading Tool"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-04-28"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Trading & DeFi venues"
    url: "https://satohubai.github.io/onchain-agents/categories/trading-venues"
  - name: "CSPR.trade MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/cspr-trade-mcp"
---

# CSPR.trade MCP

Non-custodial MCP for trading on CSPR.trade, the leading Casper Network DEX, with a public hosted endpoint.

Sato Score: **⬡ 57** (Medium), +4 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Chains:** Unknown
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 1
- **Deploys as:** hosted endpoint, self-hosted (npm/stdio/http)
- **Works with:** Claude Desktop, Cursor, OpenClaw, ClawHub

## Deploy spec

```sh
npm install @make-software/cspr-trade-mcp
```

- **Entry:** {"mcpServers": {"cspr-trade": {"url": "https://mcp.cspr.trade/mcp"}}}
- **Runtime:** Node.js (npm package, MCP server) or hosted HTTP endpoint
- **Requires:** CSPR_TRADE_NETWORK — optional, set to "testnet" for self-hosted testnet deployment
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 59 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://cspr.trade) · [Docs](https://mcp.cspr.trade) · [GitHub](https://github.com/make-software/cspr-trade-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/cspr-trade-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cspr-trade-mcp`. https://satohub.ai/resources/cspr-trade-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
