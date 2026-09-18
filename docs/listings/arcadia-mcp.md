---
title: "Arcadia MCP — Sato Hub index"
description: "Official Arcadia Finance MCP for concentrated-liquidity strategies on Uniswap and Aerodrome."
canonical: "https://satohub.ai/resources/arcadia-mcp"
layout: "default"
---

# Arcadia MCP

Official Arcadia Finance MCP for concentrated-liquidity strategies on Uniswap and Aerodrome.

Sato Score: **⬡ 76** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Base, Optimism
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading, wallets, data
- **Creator:** Arcadia Finance
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Active — last activity 17 days ago
- **GitHub stars:** 5
- **Deploys as:** npm
- **Works with:** Claude, Cursor, VS Code

## Deploy spec

```sh
npx -y @arcadia-finance/mcp-server
```

- **Entry:** npx -y @arcadia-finance/mcp-server (stdio) — write tools return unsigned transactions only
- **Runtime:** node
- **Requires:** a wallet-signing MCP or your own signer to execute the unsigned transactions this server returns (e.g. Coinbase AgentKit, Privy MCP, Safe MCP — this server never signs or broadcasts)
- **License:** AGPL-3.0
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://arcadia.finance) · [GitHub](https://github.com/arcadia-finance/mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/arcadia-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `arcadia-mcp`. https://satohub.ai/resources/arcadia-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
