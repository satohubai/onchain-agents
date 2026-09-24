---
title: "CoinGecko MCP — Sato Hub index"
description: "Official CoinGecko MCP: hosted free/pro endpoints for live prices, market data, and on-chain DEX analytics."
canonical: "https://satohub.ai/resources/coingecko-mcp"
layout: "default"
---

# CoinGecko MCP

Official CoinGecko MCP: hosted free/pro endpoints for live prices, market data, and on-chain DEX analytics.

Sato Score: **⬡ 89** (High), +10 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, contract
- **Use cases:** trading, data
- **Creator:** CoinGecko
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 7 days ago
- **GitHub stars:** 58
- **Deploys as:** Hosted API (free keyless + Pro key, Streamable HTTP/SSE), npm (local, Pro/Demo key)
- **Works with:** Claude Web, Claude Desktop, Claude Code, Cursor, VS Code, OpenAI Codex, AWS Kiro, Google Antigravity, OpenClaw, Notion

## Deploy spec

```sh
claude mcp add --transport http coingecko https://mcp.api.coingecko.com/mcp
```

- **Entry:** {"mcpServers": {"coingecko": {"command": "npx", "args": ["mcp-remote", "https://mcp.api.coingecko.com/mcp"]}}}
- **Runtime:** remote
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.coingecko.com) · [Docs](https://docs.coingecko.com/docs/ai-agent-hub/mcp-server) · [GitHub](https://github.com/coingecko/coingecko-typescript) · [Sato Hub page ↗](https://satohub.ai/resources/coingecko-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `coingecko-mcp`. https://satohub.ai/resources/coingecko-mcp — retrieved 2026-09-24.

[← All layers](../index.md)
