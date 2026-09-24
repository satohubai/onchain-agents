---
title: "TradeRouter MCP — Sato Hub index"
description: "MCP Registry-listed server for non-custodial Solana trading: swaps, limit, trailing, TWAP, DCA, and combo orders."
canonical: "https://satohub.ai/resources/trade-router-mcp"
layout: "default"
---

# TradeRouter MCP

MCP Registry-listed server for non-custodial Solana trading: swaps, limit, trailing, TWAP, DCA, and combo orders.

Sato Score: **⬡ 61** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Solana
- **Standards:** mcp
- **Interfaces:** mcp, contract
- **Use cases:** trading, identity
- **Creator:** TradeRouter
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 3
- **Deploys as:** npm
- **Works with:** Claude Desktop, Cursor, LangChain, ElizaOS

## Deploy spec

```sh
npx -y @traderouter/trade-router-mcp
```

- **Entry:** npx -y @traderouter/trade-router-mcp
- **Runtime:** Node.js >= 18
- **Requires:** TRADEROUTER_PRIVATE_KEY (Solana wallet private key, base58 — risk: controls funds), SOLANA_RPC_URL (optional), TRADEROUTER_SERVER_PUBKEY (optional), TRADEROUTER_DRY_RUN (optional, testing mode), TRADEROUTER_REQUIRE_SERVER_SIGNATURE (optional, default true)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/TradeRouter/trade-router-mcp) · [GitHub](https://github.com/TradeRouter/trade-router-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/trade-router-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `trade-router-mcp`. https://satohub.ai/resources/trade-router-mcp — retrieved 2026-09-24.

[← All layers](../index.md)
