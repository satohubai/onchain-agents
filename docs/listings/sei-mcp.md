---
title: "Sei MCP — Sato Hub index"
description: "Official Sei MCP: wallet/account management, SEI transfers, and ERC20/721/1155 token operations."
canonical: "https://satohub.ai/resources/sei-mcp"
layout: "default"
---

# Sei MCP

Official Sei MCP: wallet/account management, SEI transfers, and ERC20/721/1155 token operations.

Sato Score: **⬡ 48** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Sei
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** wallets, data
- **Creator:** Sei Protocol
- **Open source:** Yes
- **Status:** Active
- **Deploys as:** npx (stdio, local, @sei-js/mcp-server)
- **Works with:** Cursor, Windsurf, Claude Desktop, Claude Code

## Deploy spec

```sh
claude mcp add sei-mcp-server npx @sei-js/mcp-server
```

- **Entry:** {"mcpServers": {"sei": {"command": "npx", "args": ["-y", "@sei-js/mcp-server"], "env": {"PRIVATE_KEY": "your_private_key_here"}}}}
- **Runtime:** Node.js (npm package @sei-js/mcp-server, runs via npx)
- **Requires:** PRIVATE_KEY required — a raw wallet private key in local MCP config; high risk: grants full spend control of that wallet, use a dedicated low-value key
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.sei.io) · [Docs](https://docs.sei.io/ai/mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/sei-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `sei-mcp`. https://satohub.ai/resources/sei-mcp — retrieved 2026-09-17.

[← All layers](../index.md)
