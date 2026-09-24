---
title: "OpenSea Agent Skill — Sato Hub index"
description: "Official OpenSea agent skill and MCP server letting AI agents query NFT/token data and execute marketplace operations such as listing, offers, and…"
canonical: "https://satohub.ai/resources/opensea-agent-skill"
layout: "default"
---

# OpenSea Agent Skill

Official OpenSea agent skill and MCP server letting AI agents query NFT/token data and execute marketplace operations such as listing, offers, and token swaps.

Sato Score: **⬡ 81** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Solana, Polygon, Arbitrum, Optimism
- **Standards:** x402, mcp
- **Interfaces:** mcp, sdk, rest-api, plugin, cli, contract
- **Use cases:** trading, payments, data, build
- **Creator:** OpenSea
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 4 days ago
- **GitHub stars:** 51
- **Deploys as:** MCP server, API, Self-hosted
- **Works with:** Seaport, OpenSea API, OpenSea MCP Server, OpenSea CLI, x402, Privy, Turnkey, Fireblocks, Bankr

## Deploy spec

```sh
npx skills add ProjectOpenSea/opensea-skill
# or connect the hosted MCP (entry below)
```

- **Entry:** Hosted MCP — add to mcpServers: { "OpenSea": { "url": "https://mcp.opensea.io/mcp", "headers": { "X-API-KEY": "YOUR_API_KEY" } } }
- **Runtime:** Agent Skill (static) + hosted MCP
- **Requires:** OPENSEA_API_KEY (free tier, instant), wallet creds for trading/swaps
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 98.6% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://docs.opensea.io/docs/build-with-ai-agents) · [Docs](https://docs.opensea.io/reference/mcp-overview) · [GitHub](https://github.com/ProjectOpenSea/opensea-skill) · [Sato Hub page ↗](https://satohub.ai/resources/opensea-agent-skill?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `opensea-agent-skill`. https://satohub.ai/resources/opensea-agent-skill — retrieved 2026-09-24.

[← All layers](../index.md)
