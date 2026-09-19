---
title: "CoW MCP — Sato Hub index"
description: "Community MCP server for CoW Protocol: quotes, token/chain lookup, trade history, and EIP-712 order payloads."
canonical: "https://satohub.ai/resources/cow-mcp"
layout: "default"
---

# CoW MCP

Community MCP server for CoW Protocol: quotes, token/chain lookup, trade history, and EIP-712 order payloads.

Sato Score: **⬡ 81** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading, wallets
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 0
- **Deploys as:** npm, hosted (Streamable HTTP)
- **Works with:** claude.ai web, Claude Desktop, Claude Code, Cursor, ChatGPT

## Deploy spec

```sh
claude mcp add cow-mcp -s project --transport http https://cow-mcp.netlify.app/mcp
```

- **Entry:** {"mcpServers": {"cow-mcp": {"type": "http", "url": "https://cow-mcp.netlify.app/mcp"}}}
- **Runtime:** remote
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 98.5% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/krzysu/cow-mcp) · [Docs](https://github.com/krzysu/cow-mcp) · [GitHub](https://github.com/krzysu/cow-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/cow-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cow-mcp`. https://satohub.ai/resources/cow-mcp — retrieved 2026-09-19.

[← All layers](../index.md)
