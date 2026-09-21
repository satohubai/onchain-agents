---
title: "DeFi Yield Scanner MCP — Sato Hub index"
description: "MCP server combining DexScreener and DeFiLlama data for yield scanning and token risk checks."
canonical: "https://satohub.ai/resources/defi-yield-scanner-mcp"
layout: "default"
---

# DeFi Yield Scanner MCP

MCP server combining DexScreener and DeFiLlama data for yield scanning and token risk checks.

Sato Score: **⬡ 48** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** DeFi Tool
- **Chains:** Base, Ethereum, Arbitrum
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 1
- **Works with:** Claude Desktop, OpenClaw, DexScreener, DeFiLlama

## Deploy spec

```sh
npm install defi-yield-scanner-mcp
```

- **Entry:** {"mcpServers": {"defi-scanner": {"command": "npx", "args": ["defi-yield-scanner-mcp"]}}}
- **Runtime:** Node.js (npm package, MCP server)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/34t34f3/defi-yield-scanner-mcp) · [GitHub](https://github.com/34t34f3/defi-yield-scanner-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/defi-yield-scanner-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `defi-yield-scanner-mcp`. https://satohub.ai/resources/defi-yield-scanner-mcp — retrieved 2026-09-21.

[← All layers](../index.md)
