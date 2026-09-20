---
title: "LI.FI MCP — Sato Hub index"
description: "Official hosted LI.FI MCP server for read-only cross-chain swap quotes and route discovery."
canonical: "https://satohub.ai/resources/lifi-mcp"
layout: "default"
---

# LI.FI MCP

Official hosted LI.FI MCP server for read-only cross-chain swap quotes and route discovery.

Sato Score: **⬡ 63** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, wallets, data
- **Creator:** LI.FI
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted (remote MCP endpoint, no install required)

## Deploy spec

```sh
add {"type": "http", "url": "https://mcp.li.quest/mcp"} to your MCP client config
```

- **Entry:** {"mcpServers": {"lifi": {"type": "http", "url": "https://mcp.li.quest/mcp"}}}
- **Runtime:** remote
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://li.fi) · [Docs](https://docs.li.fi/mcp-server/overview) · [Sato Hub page ↗](https://satohub.ai/resources/lifi-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `lifi-mcp`. https://satohub.ai/resources/lifi-mcp — retrieved 2026-09-20.

[← All layers](../index.md)
