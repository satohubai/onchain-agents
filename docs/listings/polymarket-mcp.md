---
title: "Polymarket MCP Server — Sato Hub index"
description: "Community Polymarket MCP with 45 tools: market discovery, analysis, trading, portfolio, and WebSocket monitoring."
canonical: "https://satohub.ai/resources/polymarket-mcp"
layout: "default"
---

# Polymarket MCP Server

Community Polymarket MCP with 45 tools: market discovery, analysis, trading, portfolio, and WebSocket monitoring.

Sato Score: **⬡ 68** (Medium), +10 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

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
- **Activity:** Active — last activity 2 days ago
- **GitHub stars:** 675
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

- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/caiovicentino/polymarket-mcp-server) · [GitHub](https://github.com/caiovicentino/polymarket-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/polymarket-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `polymarket-mcp`. https://satohub.ai/resources/polymarket-mcp — retrieved 2026-09-20.

[← All layers](../index.md)
