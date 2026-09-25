---
title: "VeChain MCP Server — Sato Hub index"
description: "Official VeChain MCP server exposing ecosystem resources and VeChain developer workflows to agents."
canonical: "https://satohub.ai/resources/vechain-mcp"
layout: "default"
---

# VeChain MCP Server

Official VeChain MCP server exposing ecosystem resources and VeChain developer workflows to agents.

Sato Score: **⬡ 81** (High), +10 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp
- **Interfaces:** mcp
- **Creator:** VeChain
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 12 days ago
- **GitHub stars:** 5
- **Deploys as:** npm install, or Docker (docker pull ghcr.io/vechain/vechain-mcp-server)
- **Works with:** Claude Desktop, Cursor, Claude Code

## Deploy spec

```sh
npx -y @vechain/mcp-server@latest
```

- **Entry:** MCP client config: { "command": "npx", "args": ["-y", "@vechain/mcp-server@latest"], "env": { "VECHAIN_NETWORK": "mainnet" } }
- **Runtime:** node
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://vechain.org) · [Docs](https://github.com/vechain/vechain-mcp-server) · [GitHub](https://github.com/vechain/vechain-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/vechain-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `vechain-mcp`. https://satohub.ai/resources/vechain-mcp — retrieved 2026-09-25.

[← All layers](../index.md)
