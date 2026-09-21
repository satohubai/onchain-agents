---
title: "Pyth MCP — Sato Hub index"
description: "Official hosted Pyth Network MCP server for price-feed discovery and real-time/historical market data."
canonical: "https://satohub.ai/resources/pyth-mcp"
layout: "default"
---

# Pyth MCP

Official hosted Pyth Network MCP server for price-feed discovery and real-time/historical market data.

Sato Score: **⬡ 65** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, data
- **Creator:** Pyth Network
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted (remote MCP endpoint, no self-hosting)
- **Works with:** Claude Desktop, Claude Code, Cursor, Windsurf

## Deploy spec

```sh
claude mcp add --transport http pyth https://mcp.pyth.network/mcp
```

- **Entry:** {"mcpServers": {"pyth": {"url": "https://mcp.pyth.network/mcp"}}}
- **Runtime:** remote
- **Requires:** Pyth Pro API key (access_token) for get_latest_price now, and for get_historical_price / get_candlestick_data starting 2026-07-24; get_symbols works without a key
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://pyth.network) · [Docs](https://docs.pyth.network/price-feeds/pro/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/pyth-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `pyth-mcp`. https://satohub.ai/resources/pyth-mcp — retrieved 2026-09-21.

[← All layers](../index.md)
