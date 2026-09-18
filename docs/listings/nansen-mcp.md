---
title: "Nansen MCP — Sato Hub index"
description: "Official Nansen MCP exposing smart-money and wallet-labeling data across 25+ chains."
canonical: "https://satohub.ai/resources/nansen-mcp"
layout: "default"
---

# Nansen MCP

Official Nansen MCP exposing smart-money and wallet-labeling data across 25+ chains.

Sato Score: **⬡ 67** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading, wallets, data
- **Creator:** Nansen
- **Open source:** Unknown
- **Status:** Active
- **Works with:** Claude, Claude Desktop, Cursor

## Deploy spec

```sh
claude mcp add --transport http nansen https://mcp.nansen.ai/ra/mcp --header "NANSEN-API-KEY: YOUR_API_KEY_HERE"
```

- **Entry:** {"mcpServers": {"nansen-mcp": {"command": "npx", "args": ["-y", "mcp-remote", "https://mcp.nansen.ai/ra/mcp", "--header", "NANSEN-API-KEY: ", "--allow-http"]}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** Nansen API key (NANSEN-API-KEY header; from app.nansen.ai/api?tab=api)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.nansen.ai) · [Docs](https://docs.nansen.ai/mcp/overview) · [Sato Hub page ↗](https://satohub.ai/resources/nansen-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `nansen-mcp`. https://satohub.ai/resources/nansen-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
