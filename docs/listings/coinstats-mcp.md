---
title: "CoinStats MCP — Sato Hub index"
description: "Official hosted CoinStats MCP for portfolio, wallet, and market data across 120+ chains via OAuth."
canonical: "https://satohub.ai/resources/coinstats-mcp"
layout: "default"
---

# CoinStats MCP

Official hosted CoinStats MCP for portfolio, wallet, and market data across 120+ chains via OAuth.

Sato Score: **⬡ 65** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** wallets, data
- **Creator:** CoinStats
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 16
- **Deploys as:** Hosted API (OAuth-protected Streamable HTTP), npm (stdio self-host), Docker
- **Works with:** Claude Desktop, Claude Code, Cursor, Codex

## Deploy spec

```sh
claude mcp add coinstats --transport http https://mcp.coinstats.app/mcp
```

- **Entry:** https://mcp.coinstats.app/mcp (Streamable HTTP, OAuth 2.1 with Dynamic Client Registration — browser consent flow)
- **Runtime:** remote
- **Requires:** CoinStats account sign-in via OAuth (no static API key to manage)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 6.8% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://coinstats.app/) · [Docs](https://coinstats.app/api-docs/mcp/tools) · [GitHub](https://github.com/CoinStatsHQ/coinstats-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/coinstats-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `coinstats-mcp`. https://satohub.ai/resources/coinstats-mcp — retrieved 2026-09-26.

[← All layers](../index.md)
