---
title: "graph-aave-mcp — Sato Hub index"
description: "MCP server querying Aave V2/V3/V4 lending and governance data across 7 chains via The Graph."
canonical: "https://satohub.ai/resources/graph-aave-mcp"
layout: "default"
---

# graph-aave-mcp

MCP server querying Aave V2/V3/V4 lending and governance data across 7 chains via The Graph.

Sato Score: **⬡ 69** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Ethereum, Base, Arbitrum, Polygon, Optimism, Avalanche
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 17 days ago
- **GitHub stars:** 2

## Deploy spec

```sh
claude mcp add graph-aave -- npx -y graph-aave-mcp
export GRAPH_API_KEY=your-key-here
git clone https://github.com/PaulieB14/graph-aave-mcp.git
cd graph-aave-mcp
```

- **Entry:** {"mcpServers": {"graph-aave": {"command": "npx", "args": ["-y", "graph-aave-mcp"], "env": {"GRAPH_API_KEY": "your-api-key-here"}}}}
- **Runtime:** Node.js (npm package "graph-aave-mcp")
- **Requires:** GRAPH_API_KEY — required for The Graph subgraph tools (V2/V3/Liquidation Risk/V4 Omnigraph); free tier at thegraph.com/studio, 100K queries/month; Aave V4 API tools need no key
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/PaulieB14/graph-aave-mcp) · [GitHub](https://github.com/PaulieB14/graph-aave-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/graph-aave-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `graph-aave-mcp`. https://satohub.ai/resources/graph-aave-mcp — retrieved 2026-09-20.

[← All layers](../index.md)
