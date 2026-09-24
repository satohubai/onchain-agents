---
title: "EVM MCP Server — Sato Hub index"
description: "MCP server exposing 22 tools across 60+ EVM chains: balances, contracts, token transfers, ENS, block/tx data."
canonical: "https://satohub.ai/resources/evm-mcp-server"
layout: "default"
---

# EVM MCP Server

MCP server exposing 22 tools across 60+ EVM chains: balances, contracts, token transfers, ENS, block/tx data.

Sato Score: **⬡ 62** (Medium), -1 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** data
- **Creator:** mcpdotdirect
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 382

## Deploy spec

```sh
npx @mcpdotdirect/evm-mcp-server
```

- **Entry:** npx @mcpdotdirect/evm-mcp-server
- **Runtime:** node
- **Requires:** EVM_PRIVATE_KEY or EVM_MNEMONIC (write/transfer/sign operations only — read-only queries work without a wallet), ETHERSCAN_API_KEY (optional, enables automatic ABI fetching)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 98.6% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/mcpdotdirect/evm-mcp-server) · [GitHub](https://github.com/mcpdotdirect/evm-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/evm-mcp-server?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `evm-mcp-server`. https://satohub.ai/resources/evm-mcp-server — retrieved 2026-09-24.

[← All layers](../index.md)
