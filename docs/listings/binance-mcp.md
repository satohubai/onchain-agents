---
title: "Binance MCP Server (community) — Sato Hub index"
description: "Community-built MCP server for Binance exchange data in trading-agent workflows. Not official Binance."
canonical: "https://satohub.ai/resources/binance-mcp"
canonical_url: "https://satohub.ai/resources/binance-mcp"
layout: "default"
page_type: "listing"
item_name: "Binance MCP Server (community)"
code_repository: "https://github.com/AnalyticAce/binance-mcp-server"
software_url: "https://github.com/AnalyticAce/binance-mcp-server"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-07-19"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Binance MCP Server (community)"
    url: "https://satohubai.github.io/onchain-agents/listings/binance-mcp"
---

# Binance MCP Server (community)

Community-built MCP server for Binance exchange data in trading-agent workflows. Not official Binance.

Sato Score: **⬡ 72** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, data
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 47
- **Deploys as:** pip
- **Works with:** Claude, Cursor AI, ChatGPT

## Deploy spec

```sh
pip install binance-mcp-server
```

- **Entry:** binance-mcp-server --api-key <key> --api-secret <secret>
- **Runtime:** python
- **Requires:** BINANCE_API_KEY + BINANCE_API_SECRET (Binance account API key); BINANCE_TESTNET=true recommended for safe testing
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/AnalyticAce/binance-mcp-server) · [Docs](https://github.com/AnalyticAce/binance-mcp-server) · [GitHub](https://github.com/AnalyticAce/binance-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/binance-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `binance-mcp`. https://satohub.ai/resources/binance-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
