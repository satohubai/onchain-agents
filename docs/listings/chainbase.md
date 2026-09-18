---
title: "Chainbase — Sato Hub index"
description: "An onchain data network providing structured, AI-ready blockchain data across many chains, with API, CLI, MCP, and x402 access."
canonical: "https://satohub.ai/resources/chainbase"
layout: "default"
---

# Chainbase

An onchain data network providing structured, AI-ready blockchain data across many chains, with API, CLI, MCP, and x402 access.

Sato Score: **⬡ 42** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Solana, Arbitrum, Optimism, Polygon, BNB Chain, Multichain
- **Standards:** x402, mcp
- **Interfaces:** mcp, rest-api, plugin, cli
- **Use cases:** payments, data, security
- **Open source:** Partial
- **Status:** Active

## Deploy spec

```sh
npx -y @agentkey/cli --auth-login
```

- **Entry:** { "mcpServers": { "agentkey": { "type": "http", "url": "https://api.agentkey.app/v1/mcp", "headers": { "Authorization": "Bearer ak_..." } } } }
- **Runtime:** Hosted MCP (Agentkey) — auth via @agentkey/cli
- **Requires:** Agentkey API key (ak_..., pay-as-you-go)
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://chainbase.com/) · [GitHub](https://github.com/chainbase-labs) · [Sato Hub page ↗](https://satohub.ai/resources/chainbase?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `chainbase`. https://satohub.ai/resources/chainbase — retrieved 2026-09-18.

[← All layers](../index.md)
