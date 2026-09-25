---
title: "1inch — Sato Hub index"
description: "Multichain DEX aggregator with a developer API suite and an official MCP server for AI-agent swap execution."
canonical: "https://satohub.ai/resources/1inch"
layout: "default"
---

# 1inch

Multichain DEX aggregator with a developer API suite and an official MCP server for AI-agent swap execution.

Sato Score: **⬡ 75** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Ethereum, Base, Arbitrum, Optimism, Polygon, Avalanche, BNB Chain, Multichain, Solana, Gnosis, Monad, zkSync
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, contract
- **Use cases:** trading, wallets, security
- **Creator:** 1inch Network
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity today
- **Deploys as:** API, SDK

## Deploy spec

```sh
claude mcp add --transport http --header "Authorization: Bearer YOUR_API_KEY" --scope user 1inch-business https://api.1inch.com/mcp/protocol
```

- **Entry:** Remote MCP endpoint https://api.1inch.com/mcp/protocol (Claude Desktop: bridge via `npx -y supergateway` to HTTP transport)
- **Runtime:** remote
- **Requires:** 1inch API key (Bearer token) — required for execution tools (swap, orderbook, product_api, walletconnect); public tools (search, list_examples, get_example) work without one
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://1inch.io/) · [Docs](https://portal.1inch.dev/documentation) · [GitHub](https://github.com/1inch) · [Sato Hub page ↗](https://satohub.ai/resources/1inch?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `1inch`. https://satohub.ai/resources/1inch — retrieved 2026-09-25.

[← All layers](../index.md)
