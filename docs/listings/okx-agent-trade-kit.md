---
title: "OKX Agent Trade Kit — Sato Hub index"
description: "Community OKX toolkit — CLI plus MCP server — for spot, futures, and automated trading agents."
canonical: "https://satohub.ai/resources/okx-agent-trade-kit"
canonical_url: "https://satohub.ai/resources/okx-agent-trade-kit"
layout: "default"
page_type: "listing"
item_name: "OKX Agent Trade Kit"
code_repository: "https://github.com/dex-original/okx-agent-trade-kit"
software_url: "https://github.com/dex-original/okx-agent-trade-kit"
application_category: "Trading Tool"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-06-01"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "OKX Agent Trade Kit"
    url: "https://satohubai.github.io/onchain-agents/listings/okx-agent-trade-kit"
---

# OKX Agent Trade Kit

Community OKX toolkit — CLI plus MCP server — for spot, futures, and automated trading agents.

Sato Score: **⬡ 52** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, cli
- **Use cases:** trading, build
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 97
- **Deploys as:** npm
- **Works with:** Claude, Cursor

## Deploy spec

```sh
npm install -g @okx_ai/okx-trade-mcp @okx_ai/okx-trade-cli
```

- **Entry:** okx-trade-mcp (MCP server); okx (CLI, e.g. okx market ticker BTC-USDT)
- **Runtime:** Node.js >= 18
- **Requires:** OKX API key/secret (configured via interactive wizard: okx config init; risk: enables account trading, stored locally per README)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/dex-original/okx-agent-trade-kit) · [GitHub](https://github.com/dex-original/okx-agent-trade-kit) · [Sato Hub page ↗](https://satohub.ai/resources/okx-agent-trade-kit?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `okx-agent-trade-kit`. https://satohub.ai/resources/okx-agent-trade-kit — retrieved 2026-09-16.

[← All layers](../index.md)
