---
title: "Jupiter MCP Server — Sato Hub index"
description: "Open-source MCP servers that let AI agents execute Solana token swaps via Jupiter's Ultra aggregation API."
canonical: "https://satohub.ai/resources/jupiter-mcp"
layout: "default"
---

# Jupiter MCP Server

Open-source MCP servers that let AI agents execute Solana token swaps via Jupiter's Ultra aggregation API.

Sato Score: **⬡ 35** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Solana
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading
- **Creator:** kukapay
- **Open source:** Yes
- **Status:** Active
- **Activity:** Dormant — last activity 15 months ago
- **GitHub stars:** 29
- **Deploys as:** Self-hosted, MCP server
- **Works with:** Jupiter Ultra API, Solana RPC, MCP clients

## Deploy spec

```sh
git clone https://github.com/kukapay/jupiter-mcp && cd jupiter-mcp && npm install
```

- **Entry:** { "mcpServers": { "Jupiter-MCP": { "command": "node", "args": ["path/to/jupiter-mcp/index.js"], "env": { "SOLANA_RPC_URL": "...", "PRIVATE_KEY": "..." } } } }
- **Runtime:** Node.js >=18 (clone + run)
- **Requires:** SOLANA_RPC_URL, PRIVATE_KEY (base58 hot wallet — executes real swaps)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-06-16

## What we checked

- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[GitHub](https://github.com/kukapay/jupiter-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/jupiter-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `jupiter-mcp`. https://satohub.ai/resources/jupiter-mcp — retrieved 2026-09-24.

[← All layers](../index.md)
