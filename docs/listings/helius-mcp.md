---
title: "Helius MCP — Sato Hub index"
description: "Official Helius MCP server for Solana: wallet, asset, transaction, and chain-state tools via npm package."
canonical: "https://satohub.ai/resources/helius-mcp"
layout: "default"
---

# Helius MCP

Official Helius MCP server for Solana: wallet, asset, transaction, and chain-state tools via npm package.

Sato Score: **⬡ 50** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Solana
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** wallets, data
- **Creator:** Helius Labs
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** npx
- **Works with:** Claude Code, Claude Desktop, Cursor, VS Code, Windsurf, Codex

## Deploy spec

```sh
claude mcp add helius npx helius-mcp@latest
export HELIUS_API_KEY=YOUR_API_KEY
```

- **Entry:** {"mcpServers": {"helius": {"command": "npx", "args": ["helius-mcp@latest"]}}}
- **Runtime:** Node.js (npm package, runs via npx)
- **Requires:** HELIUS_API_KEY (Helius API key; also resolvable from ~/.helius/config.json), HELIUS_NETWORK optional (mainnet-beta default, devnet supported)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.helius.dev) · [Docs](https://www.helius.dev/docs/helius-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/helius-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `helius-mcp`. https://satohub.ai/resources/helius-mcp — retrieved 2026-09-17.

[← All layers](../index.md)
