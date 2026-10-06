---
title: "SODAX Builders MCP — Sato Hub index"
description: "MCP server giving AI coding agents live access to SODAX's cross-network DeFi API across 20+ chains."
canonical: "https://satohub.ai/resources/sodax-builders-mcp"
layout: "default"
---

# SODAX Builders MCP

MCP server giving AI coding agents live access to SODAX's cross-network DeFi API across 20+ chains.

Sato Score: **⬡ 83** (High), +5 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Arbitrum, Optimism, Polygon
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 5 days ago
- **GitHub stars:** 9
- **Deploys as:** hosted remote MCP server (streamable HTTP), SSE (legacy), Docker, self-hosted
- **Works with:** Claude, Cursor, VS Code, Windsurf, ChatGPT, Gemini CLI

## Deploy spec

```sh
git clone https://github.com/gosodax/builders-sodax-mcp-server
cd builders-sodax-mcp-server
pnpm install
pnpm build
```

- **Entry:** pnpm start   # = node --env-file-if-exists=.env dist/index.js; or connect to the hosted server: {"mcpServers": {"sodax-builders": {"url": "https://builders.sodax.com/mcp"}}}
- **Runtime:** Node.js >=22.9.0 (TypeScript, pnpm) — hosted remote endpoint also available
- **Requires:** PORT — optional, default 3000, TRANSPORT — optional, default http, NODE_ENV — set to production for deployment, LOG_LEVEL — optional, default info, DISCORD_WEBHOOK_URL — optional, for Discord alerts, .env.example provided as a template
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-25

## What we checked

- Install reproduced in an isolated container on 2026-09-25.
- Live endpoint probed by us: 97.5% of our checks succeeded over 79 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://builders.sodax.com) · [Docs](https://docs.sodax.com) · [GitHub](https://github.com/gosodax/builders-sodax-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/sodax-builders-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `sodax-builders-mcp`. https://satohub.ai/resources/sodax-builders-mcp — retrieved 2026-10-06.

[← All layers](../index.md)
