---
title: "Universal Crypto MCP — Sato Hub index"
description: "Plugin-based monorepo MCP: EVM+Solana wallets, DEX aggregation, x402 payments, CEX trading, market data, bridges."
canonical: "https://satohub.ai/resources/universal-crypto-mcp"
layout: "default"
---

# Universal Crypto MCP

Plugin-based monorepo MCP: EVM+Solana wallets, DEX aggregation, x402 payments, CEX trading, market data, bridges.

Sato Score: **⬡ 61** (Medium), +8 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** x402, mcp, a2a
- **Interfaces:** mcp, plugin, contract
- **Use cases:** trading, payments, wallets, data, security
- **Creator:** nirholas
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 39

## Deploy spec

```sh
npx @nirholas/universal-crypto-mcp
git clone https://github.com/nirholas/universal-crypto-mcp
cd universal-crypto-mcp
npm install
```

- **Entry:** {"mcpServers": {"universal-crypto-mcp": {"command": "npx", "args": ["-y", "@nirholas/universal-crypto-mcp@latest"]}}}
- **Runtime:** Node.js (npm package, runs via npx)
- **Requires:** PRIVATE_KEY optional — EVM private key for write/transaction operations; high risk if exposed, only needed for writes, X402_PRIVATE_KEY optional — wallet key for x402 payments; same private-key risk, X402_CHAIN optional (arbitrum, base, ethereum, polygon), COINGECKO_API_KEY / CRYPTOPANIC_API_KEY optional; no keys required for basic read functionality
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/nirholas/universal-crypto-mcp) · [GitHub](https://github.com/nirholas/universal-crypto-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/universal-crypto-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `universal-crypto-mcp`. https://satohub.ai/resources/universal-crypto-mcp — retrieved 2026-09-19.

[← All layers](../index.md)
