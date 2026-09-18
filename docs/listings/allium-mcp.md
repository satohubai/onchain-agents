---
title: "Allium MCP — Sato Hub index"
description: "Allium's official MCP for querying its multichain blockchain data warehouse via SQL over 80+ chains."
canonical: "https://satohub.ai/resources/allium-mcp"
layout: "default"
---

# Allium MCP

Allium's official MCP for querying its multichain blockchain data warehouse via SQL over 80+ chains.

Sato Score: **⬡ 69** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** data
- **Creator:** Allium Labs
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** npx installer, Hosted API
- **Works with:** Claude Code, Cursor, Claude Desktop, VS Code, Codex, Cline, RooCline, Windsurf, Warp, Gemini CLI, Goose, Zed

## Deploy spec

```sh
get an API key at app.allium.so/settings/api-keys
then add {"url": "https://mcp.allium.so", "headers": {"X-API-KEY": "YOUR_KEY"}} to your MCP client config
```

- **Entry:** {"mcpServers": {"allium": {"url": "https://mcp.allium.so", "headers": {"X-API-KEY": "YOUR_API_KEY"}}}}
- **Runtime:** remote
- **Requires:** Allium API key (app.allium.so/settings/api-keys)
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.allium.so) · [Docs](https://docs.allium.so/assistant/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/allium-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `allium-mcp`. https://satohub.ai/resources/allium-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
