---
title: "OpenSea MCP — Sato Hub index"
description: "Official hosted OpenSea MCP: NFT, token, and wallet data plus swap quotes and mint actions for agents."
canonical: "https://satohub.ai/resources/opensea-mcp"
layout: "default"
---

# OpenSea MCP

Official hosted OpenSea MCP: NFT, token, and wallet data plus swap quotes and mint actions for agents.

Sato Score: **⬡ 65** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, wallets, data
- **Creator:** OpenSea
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted API (Streamable HTTP, SSE)
- **Works with:** ChatGPT, Cursor, Claude, Chorus

## Deploy spec

```sh
curl -X POST https://api.opensea.io/api/v2/auth/keys   # issue a free-tier API key
then add {"url": "https://mcp.opensea.io/mcp", "headers": {"X-API-KEY": "YOUR_KEY"}} to your MCP client config
```

- **Entry:** {"mcpServers": {"OpenSea": {"url": "https://mcp.opensea.io/mcp", "headers": {"X-API-KEY": "YOUR_API_KEY"}}}}
- **Runtime:** remote
- **Requires:** OpenSea API key (free tier, self-serve via POST /api/v2/auth/keys or opensea.io signup)
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://opensea.io) · [Docs](https://docs.opensea.io/reference/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/opensea-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `opensea-mcp`. https://satohub.ai/resources/opensea-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
