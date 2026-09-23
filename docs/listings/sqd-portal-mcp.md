---
title: "SQD Portal MCP — Sato Hub index"
description: "Official MCP server from Subsquid (SQD) exposing its Portal API for querying onchain data across five chain families."
canonical: "https://satohub.ai/resources/sqd-portal-mcp"
layout: "default"
---

# SQD Portal MCP

Official MCP server from Subsquid (SQD) exposing its Portal API for querying onchain data across five chain families.

Sato Score: **⬡ 61** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Multichain, Solana, Bitcoin, Hyperliquid
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 15 days ago
- **GitHub stars:** 1

## Deploy spec

```sh
npm install
npm run build
npm start
```

- **Entry:** {"mcpServers":{"SQD":{"command":"node","args":["/absolute/path/to/sqd-portal-mcp-server/dist/index.js"]}}}
- **Runtime:** Node.js (TypeScript, build from source)
- **Requires:** MCP_HTTP_BEARER_TOKEN (optional, HTTP mode — requires Authorization: Bearer for POST /mcp), MCP_CURSOR_SECRET (optional, HTTP mode — signs pagination cursors)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://sqd.dev/portal) · [GitHub](https://github.com/subsquid-labs/portal-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/sqd-portal-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `sqd-portal-mcp`. https://satohub.ai/resources/sqd-portal-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
