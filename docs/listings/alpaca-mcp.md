---
title: "Alpaca MCP Server — Sato Hub index"
description: "Official Alpaca MCP for stock, options, and crypto trading, portfolio and order management, and market data."
canonical: "https://satohub.ai/resources/alpaca-mcp"
layout: "default"
---

# Alpaca MCP Server

Official Alpaca MCP for stock, options, and crypto trading, portfolio and order management, and market data.

Sato Score: **⬡ 69** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, data
- **Creator:** Alpaca
- **Open source:** Unknown
- **Status:** Active
- **Activity:** Active — last activity 4 days ago
- **GitHub stars:** 962
- **Deploys as:** PyPI (uvx/pipx, stdio), Docker
- **Works with:** Claude Desktop, Claude Code, Cursor, VS Code, PyCharm, Antigravity CLI

## Deploy spec

```sh
uvx alpaca-mcp-server
```

- **Entry:** {"mcpServers":{"alpaca":{"command":"uvx","args":["alpaca-mcp-server"],"env":{"ALPACA_API_KEY":"...","ALPACA_SECRET_KEY":"..."}}}}
- **Runtime:** python
- **Requires:** ALPACA_API_KEY, ALPACA_SECRET_KEY (free paper-trading account at app.alpaca.markets)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://alpaca.markets) · [Docs](https://docs.alpaca.markets/docs/getting-started) · [GitHub](https://github.com/alpacahq/alpaca-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/alpaca-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `alpaca-mcp`. https://satohub.ai/resources/alpaca-mcp — retrieved 2026-09-19.

[← All layers](../index.md)
