---
title: "Nansen — Sato Hub index"
description: "Onchain analytics platform with wallet labeling and smart-money tracking, offering an API with key-based and x402 access."
canonical: "https://satohub.ai/resources/nansen"
layout: "default"
---

# Nansen

Onchain analytics platform with wallet labeling and smart-money tracking, offering an API with key-based and x402 access.

Sato Score: **⬡ 47** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Solana, Arbitrum, Optimism, Polygon, Multichain
- **Standards:** x402
- **Interfaces:** rest-api
- **Use cases:** trading, payments, wallets, data, security
- **Creator:** Nansen
- **Open source:** No
- **Status:** Active
- **Activity:** Quiet — last activity 3 months ago
- **Deploys as:** API, MCP server, npm
- **Works with:** MCP, REST API, CLI, x402

## Deploy spec

```sh
npm install -g nansen-cli
```

- **Entry:** nansen <command> <subcommand> [options] — key commands: research, trade, agent, wallet, schema. MCP: npx -y mcp-remote https://mcp.nansen.ai/ra/mcp --header "NANSEN-API-KEY: <key>" --allow-http, or `claude mcp add --transport http nansen https://mcp.nansen.ai/ra/mcp --header "NANSEN-API-KEY: <key>"`
- **Runtime:** Node.js (nansen-cli, npm global package) + hosted MCP endpoint
- **Requires:** NANSEN_API_KEY (from https://app.nansen.ai/api?tab=api), Optional: NANSEN_WALLET_PASSWORD for x402 local wallet auth; PRIVY_APP_ID / PRIVY_APP_SECRET for Privy server-side wallets (custody-relevant if used)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://nansen.ai/) · [Docs](https://nansen.ai/api) · [Sato Hub page ↗](https://satohub.ai/resources/nansen?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `nansen`. https://satohub.ai/resources/nansen — retrieved 2026-09-24.

[← All layers](../index.md)
