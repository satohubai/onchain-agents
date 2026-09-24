---
title: "Privy MCP Server — Sato Hub index"
description: "Official Privy MCP server: create wallets, sign transactions, and manage policies across 11 chains."
canonical: "https://satohub.ai/resources/privy-mcp"
layout: "default"
---

# Privy MCP Server

Official Privy MCP server: create wallets, sign transactions, and manage policies across 11 chains.

Sato Score: **⬡ 58** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** wallets
- **Creator:** Privy
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 7 months ago
- **GitHub stars:** 2
- **Deploys as:** npx (stdio, local)
- **Works with:** Claude Desktop, Cursor, Claude Code

## Deploy spec

```sh
npx @privy-io/mcp-server
```

- **Entry:** MCP client config: { "command": "npx", "args": ["@privy-io/mcp-server"], "env": { "PRIVY_APP_ID": "<your-app-id>", "PRIVY_APP_SECRET": "<your-app-secret>" } }
- **Runtime:** node
- **Requires:** PRIVY_APP_ID and PRIVY_APP_SECRET (from the Privy Dashboard) — this server creates/signs wallets on your behalf
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.privy.io) · [Docs](https://docs.privy.io) · [GitHub](https://github.com/privy-io/privy-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/privy-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `privy-mcp`. https://satohub.ai/resources/privy-mcp — retrieved 2026-09-24.

[← All layers](../index.md)
