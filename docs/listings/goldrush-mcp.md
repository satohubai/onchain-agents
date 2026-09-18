---
title: "GoldRush MCP (Covalent) — Sato Hub index"
description: "Covalent's official GoldRush MCP: 50+ tools for multichain wallet balances and token data."
canonical: "https://satohub.ai/resources/goldrush-mcp"
layout: "default"
---

# GoldRush MCP (Covalent)

Covalent's official GoldRush MCP: 50+ tools for multichain wallet balances and token data.

Sato Score: **⬡ 57** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** wallets, data
- **Creator:** Covalent
- **Open source:** Yes
- **Status:** Active
- **Deploys as:** npx
- **Works with:** Claude Desktop, Claude Code, Cursor, Windsurf

## Deploy spec

```sh
claude mcp add goldrush -e GOLDRUSH_API_KEY=<GOLDRUSH_API_KEY> -- npx @covalenthq/goldrush-mcp-server
```

- **Entry:** {"mcpServers": {"goldrush": {"command": "npx", "args": ["-y", "@covalenthq/goldrush-mcp-server@latest"], "env": {"GOLDRUSH_API_KEY": "<GOLDRUSH_API_KEY>"}}}}
- **Runtime:** Node.js (npm package, runs via npx)
- **Requires:** GOLDRUSH_API_KEY required (free signup at goldrush.dev)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 98.5% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://goldrush.dev) · [Docs](https://goldrush.dev/docs/goldrush-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/goldrush-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `goldrush-mcp`. https://satohub.ai/resources/goldrush-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
