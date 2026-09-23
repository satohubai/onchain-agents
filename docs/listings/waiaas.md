---
title: "WAIaaS — Sato Hub index"
description: "Wallet-as-a-Service infrastructure for AI agents."
canonical: "https://satohub.ai/resources/waiaas"
layout: "default"
---

# WAIaaS

Wallet-as-a-Service infrastructure for AI agents.

Sato Score: **⬡ 54** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Solana, Ethereum, Polygon, Arbitrum, Optimism, Base, Avalanche, BNB Chain
- **Standards:** x402, mcp
- **Interfaces:** mcp
- **Use cases:** trading, payments, wallets
- **Creator:** minhoyoo-iotrust
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 26
- **Deploys as:** self-hosted, Docker, npm
- **Works with:** MCP, Claude Desktop, Claude Code, OpenClaw, Jupiter, 0x, LI.FI, Lido, Jito, Aave V3, Kamino, Pendle

## Deploy spec

```sh
npm install -g @waiaas/cli
waiaas init
waiaas start
waiaas quickset --mode mainnet
```

- **Entry:** waiaas mcp setup --all (registers the self-hosted daemon's @waiaas/mcp server with your MCP client)
- **Runtime:** node
- **Requires:** self-hosted daemon runs on your machine (http://127.0.0.1:3100), master password / owner wallet for high-value transaction approval
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://waiaas.ai) · [GitHub](https://github.com/minhoyoo-iotrust/WAIaaS) · [Sato Hub page ↗](https://satohub.ai/resources/waiaas?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `waiaas`. https://satohub.ai/resources/waiaas — retrieved 2026-09-23.

[← All layers](../index.md)
