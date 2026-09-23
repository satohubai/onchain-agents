---
title: "Tether WDK MCP Toolkit — Sato Hub index"
description: "Official Tether toolkit exposing self-custodial WDK wallet ops — balances, transfers, swaps, bridging — as MCP tools."
canonical: "https://satohub.ai/resources/tether-wdk-mcp"
layout: "default"
---

# Tether WDK MCP Toolkit

Official Tether toolkit exposing self-custodial WDK wallet ops — balances, transfers, swaps, bridging — as MCP tools.

Sato Score: **⬡ 48** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, wallets, build
- **Creator:** Tether
- **Open source:** Yes
- **Status:** Active
- **Deploys as:** npm (local MCP server, self-hosted via @tetherto/wdk-mcp-toolkit)
- **Works with:** LangChain, OpenClaw

## Deploy spec

```sh
git clone https://github.com/tetherto/wdk-mcp-toolkit.git
cd wdk-mcp-toolkit
npm install
npm run setup
```

- **Entry:** {"servers": {"wdk": {"type": "stdio", "command": "node", "args": ["index.js"], "env": {"WDK_SEED": "your twelve word seed phrase here"}}}}
- **Runtime:** Node.js (npm packages @tetherto/wdk-mcp-toolkit, beta)
- **Requires:** WDK_SEED — a BIP-39 seed phrase for wallet derivation; high risk: full control of derived wallets, docs say use a dedicated development wallet with limited funds, WDK_INDEXER_API_KEY optional (indexer tools), MOONPAY_API_KEY / MOONPAY_SECRET_KEY optional (fiat on/off-ramp)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-21

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://wdk.tether.io) · [Docs](https://docs.wdk.tether.io/ai/mcp-toolkit) · [Sato Hub page ↗](https://satohub.ai/resources/tether-wdk-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `tether-wdk-mcp`. https://satohub.ai/resources/tether-wdk-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
