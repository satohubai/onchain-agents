---
title: "Multichain MCP — Sato Hub index"
description: "Single MCP server for balance/price reads and unsigned transfer prep across Stacks, Celo, and Base."
canonical: "https://satohub.ai/resources/wkalidev-multichain-mcp"
layout: "default"
---

# Multichain MCP

Single MCP server for balance/price reads and unsigned transfer prep across Stacks, Celo, and Base.

Sato Score: **⬡ 51** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Base, Multichain
- **Open source:** Yes
- **Status:** Early
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 1

## Deploy spec

```sh
npm install @wkalidev/multichain-mcp
```

- **Entry:** {"mcpServers": {"multichain": {"command": "npx", "args": ["-y", "@wkalidev/multichain-mcp"], "env": {"MULTICHAIN_LICENSE_KEY": "your-license-key"}}}}
- **Runtime:** Node.js (npm package, MCP server)
- **Requires:** MULTICHAIN_LICENSE_KEY — optional, omit for Free tier
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/wkalidev/multichain-mcp) · [GitHub](https://github.com/wkalidev/multichain-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/wkalidev-multichain-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `wkalidev-multichain-mcp`. https://satohub.ai/resources/wkalidev-multichain-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
