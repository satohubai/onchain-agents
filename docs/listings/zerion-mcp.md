---
title: "Zerion MCP — Sato Hub index"
description: "Zerion's hosted MCP server exposing normalized wallet balances, DeFi positions, NFTs, and PnL across EVM chains and Solana."
canonical: "https://satohub.ai/resources/zerion-mcp"
layout: "default"
---

# Zerion MCP

Zerion's hosted MCP server exposing normalized wallet balances, DeFi positions, NFTs, and PnL across EVM chains and Solana.

Sato Score: **⬡ 67** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, wallets, data
- **Creator:** Zerion
- **Open source:** No
- **Status:** Active

## Deploy spec

```sh
claude mcp add --transport http zerion-api https://developers.zerion.io/mcp
```

- **Entry:** {"mcpServers": {"zerion-api": {"url": "https://developers.zerion.io/mcp"}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://developers.zerion.io/mcp) · [Docs](https://developers.zerion.io/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/zerion-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `zerion-mcp`. https://satohub.ai/resources/zerion-mcp — retrieved 2026-09-20.

[← All layers](../index.md)
