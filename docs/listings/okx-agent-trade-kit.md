---
title: "OKX Agent Trade Kit — Sato Hub index"
description: "OKX's official MCP server and CLI for agents trading OKX spot, swap, futures, options and grid bots."
canonical: "https://satohub.ai/resources/okx-agent-trade-kit"
layout: "default"
---

# OKX Agent Trade Kit

OKX's official MCP server and CLI for agents trading OKX spot, swap, futures, options and grid bots.

Sato Score: **⬡ 76** (High), +24 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, cli
- **Use cases:** trading, build
- **Creator:** OKX
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 1 day ago
- **GitHub stars:** 396
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

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/okx/agent-trade-kit) · [Docs](https://github.com/okx/agent-trade-kit#readme) · [GitHub](https://github.com/okx/agent-trade-kit) · [Sato Hub page ↗](https://satohub.ai/resources/okx-agent-trade-kit?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `okx-agent-trade-kit`. https://satohub.ai/resources/okx-agent-trade-kit — retrieved 2026-09-24.

[← All layers](../index.md)
