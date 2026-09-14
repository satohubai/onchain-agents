---
title: "Gate MCP Server — Sato Hub index"
description: "Official Gate MCP: hosted endpoints for market data, info, and news, plus OAuth-gated CEX trading and DEX swaps."
canonical: "https://satohub.ai/resources/gate-mcp"
layout: "default"
---

# Gate MCP Server

Official Gate MCP: hosted endpoints for market data, info, and news, plus OAuth-gated CEX trading and DEX swaps.

Sato Score: **⬡ 74** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, contract
- **Use cases:** trading, wallets, data
- **Creator:** Gate
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 27
- **Deploys as:** Hosted remote MCP endpoints (api.gatemcp.ai), npx
- **Works with:** Cursor, Claude CLI, Trae, OpenClaw

## Deploy spec

```sh
claude mcp add --transport http gate-mcp https://api.gatemcp.ai/mcp
```

- **Entry:** {"mcpServers": {"gate-mcp": {"url": "https://api.gatemcp.ai/mcp"}}}
- **Runtime:** remote
- **Requires:** Gate OAuth2 — only needed for the separate /mcp/exchange (CEX trading) and /mcp/dex (on-chain swap) endpoints; the public /mcp market-data endpoint used here needs no auth
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.gate.com) · [Docs](https://github.com/gate/gate-mcp) · [GitHub](https://github.com/gate/gate-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/gate-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `gate-mcp`. https://satohub.ai/resources/gate-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
