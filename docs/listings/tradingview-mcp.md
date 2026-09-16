---
title: "TradingView MCP Server — Sato Hub index"
description: "Community Python MCP for TradingView-style screening: 30+ technical-analysis tools across Binance, KuCoin, Bybit, and more."
canonical: "https://satohub.ai/resources/tradingview-mcp"
canonical_url: "https://satohub.ai/resources/tradingview-mcp"
layout: "default"
page_type: "listing"
item_name: "TradingView MCP Server"
code_repository: "https://github.com/atilaahmettaner/tradingview-mcp"
software_url: "https://github.com/atilaahmettaner/tradingview-mcp"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-01"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "TradingView MCP Server"
    url: "https://satohubai.github.io/onchain-agents/listings/tradingview-mcp"
---

# TradingView MCP Server

Community Python MCP for TradingView-style screening: 30+ technical-analysis tools across Binance, KuCoin, Bybit, and more.

Sato Score: **⬡ 69** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading, data
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 15 days ago
- **GitHub stars:** 4.4k
- **Deploys as:** Hosted, self-hosted
- **Works with:** Claude, ChatGPT, Cursor, Copilot

## Deploy spec

```sh
pip install tradingview-mcp-server
```

- **Entry:** {"mcpServers": {"tradingview": {"command": "uvx", "args": ["--from", "tradingview-mcp-server", "tradingview-mcp"]}}}
- **Runtime:** python
- **Requires:** optional MARKETAUX_API_TOKEN for the financial_news / market_sentiment tools (free tier, 100 req/day) — all other 30+ tools work keyless
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/atilaahmettaner/tradingview-mcp) · [GitHub](https://github.com/atilaahmettaner/tradingview-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/tradingview-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `tradingview-mcp`. https://satohub.ai/resources/tradingview-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
