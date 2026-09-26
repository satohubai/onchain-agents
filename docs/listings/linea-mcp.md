---
title: "Linea MCP — Sato Hub index"
description: "Community MCP server with on-chain tools for AI applications to interact with the Linea blockchain."
canonical: "https://satohub.ai/resources/linea-mcp"
layout: "default"
---

# Linea MCP

Community MCP server with on-chain tools for AI applications to interact with the Linea blockchain.

Sato Score: **⬡ 51** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Standards:** mcp
- **Interfaces:** mcp
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 8 months ago
- **GitHub stars:** 2
- **Deploys as:** npm
- **Works with:** Claude, Cursor

## Deploy spec

```sh
git clone https://github.com/qvkare/linea-mcp.git
cd linea-mcp
npm install
cp .env.example .env
```

- **Entry:** linea-mcp (global install) or node dist/index.js
- **Runtime:** Node.js v16+
- **Requires:** LINEA_MAINNET_RPC_URL (default https://rpc.linea.build), LINEA_TESTNET_RPC_URL (default https://rpc.sepolia.linea.build), INFURA_API_KEY (optional), ALCHEMY_API_KEY (optional), WALLET_PRIVATE_KEY (risk: sensitive credential, controls funds), PRIVATE_KEY_ENCRYPTION_KEY, ETHEREUM_RPC_URL / ETHEREUM_TESTNET_RPC_URL (bridge operations)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 74 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/qvkare/linea-mcp) · [GitHub](https://github.com/qvkare/linea-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/linea-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `linea-mcp`. https://satohub.ai/resources/linea-mcp — retrieved 2026-09-26.

[← All layers](../index.md)
