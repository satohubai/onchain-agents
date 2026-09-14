---
title: "Polymarket MCP Server — Sato Hub index"
description: "Community Polymarket MCP with 45 tools: market discovery, analysis, trading, portfolio, and WebSocket monitoring."
canonical: "https://satohub.ai/resources/polymarket-mcp"
canonical_url: "https://satohub.ai/resources/polymarket-mcp"
layout: "default"
page_type: "listing"
item_name: "Polymarket MCP Server"
code_repository: "https://github.com/caiovicentino/polymarket-mcp-server"
software_url: "https://github.com/caiovicentino/polymarket-mcp-server"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-07-30"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Polymarket MCP Server"
    url: "https://satohubai.github.io/onchain-agents/listings/polymarket-mcp"
---

# Polymarket MCP Server

Community Polymarket MCP with 45 tools: market discovery, analysis, trading, portfolio, and WebSocket monitoring.

Sato Score: **⬡ 58** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Polygon
- **Standards:** mcp
- **Interfaces:** mcp, ui
- **Use cases:** trading
- **Creator:** Caio Vicentino
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 633
- **Works with:** Claude

## Deploy spec

```sh
git clone https://github.com/caiovicentino/polymarket-mcp-server.git
cd polymarket-mcp-server
python -m venv venv && source venv/bin/activate
pip install -e .
```

- **Entry:** python -m polymarket_mcp.server
- **Runtime:** python
- **Requires:** POLYGON_PRIVATE_KEY + POLYGON_ADDRESS (live trading only — DEMO_MODE=true runs market discovery/analysis read-only without a wallet)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/caiovicentino/polymarket-mcp-server) · [GitHub](https://github.com/caiovicentino/polymarket-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/polymarket-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `polymarket-mcp`. https://satohub.ai/resources/polymarket-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
