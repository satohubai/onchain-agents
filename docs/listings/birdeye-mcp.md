---
title: "Birdeye MCP — Sato Hub index"
description: "Official hosted MCP for real-time and historical crypto market data across 8M+ tokens."
canonical: "https://satohub.ai/resources/birdeye-mcp"
layout: "default"
---

# Birdeye MCP

Official hosted MCP for real-time and historical crypto market data across 8M+ tokens.

Sato Score: **⬡ 25** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** wallets, data, security
- **Creator:** Birdeye
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** npm/npx, Hosted API (keyless option)
- **Works with:** Claude Desktop, Gemini CLI, Cursor

## Deploy spec

```sh
npx -y mcp-remote@0.1.38 https://mcp.birdeye.so/mcp --header "x-api-key:<YOUR_API_KEY>"
```

- **Entry:** {"mcpServers": {"birdeye-mcp": {"command": "npx", "args": ["-y", "mcp-remote@0.1.38", "https://mcp.birdeye.so/mcp", "--header", "x-api-key:${API_KEY}"], "env": {"API_KEY": "<YOUR_API_KEY>"}}}}
- **Runtime:** Hosted MCP endpoint (mcp-remote bridge via npx; Node.js v18+)
- **Requires:** Birdeye API key (x-api-key header; generated at bds.birdeye.so under Usages -> Security)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 0% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://birdeye.so) · [Docs](https://docs.birdeye.so/docs/birdeye-ai) · [Sato Hub page ↗](https://satohub.ai/resources/birdeye-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `birdeye-mcp`. https://satohub.ai/resources/birdeye-mcp — retrieved 2026-09-25.

[← All layers](../index.md)
