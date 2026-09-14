---
title: "Oraichain Multichain MCP — Sato Hub index"
description: "CosmJS-based MCP toolkit for wallet queries, transactions, and contract deployment on Oraichain and Cosmos chains."
canonical: "https://satohub.ai/resources/oraichain-multichain-mcp"
layout: "default"
---

# Oraichain Multichain MCP

CosmJS-based MCP toolkit for wallet queries, transactions, and contract deployment on Oraichain and Cosmos chains.

Sato Score: **⬡ 46** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Cosmos
- **Open source:** Yes
- **Status:** Active
- **Activity:** Dormant — last activity 16 months ago
- **GitHub stars:** 4

## Deploy spec

```sh
git clone https://github.com/oraichain/multichain-mcp.git
cd multichain-mcp
pnpm install
pnpm build
```

- **Entry:** {"mcpServers": {"mcp-server": {"command": "npx", "args": ["-y", "@oraichain/mcp-server@0.0.21"], "env": {"RPC_URL": "https://rpc.orai.io"}}}}
- **Runtime:** Node.js >=18 + pnpm >=9.0.0 (TypeScript project); also distributed as npm package @oraichain/mcp-server
- **Requires:** RPC_URL — chain RPC endpoint, defaults to https://rpc.orai.io, PORT — local dev server port, default 4000, README lists wallet configuration for supported networks as a prerequisite but does not document a specific private-key env var — treat as an unresolved risk if the deployer wires in a signing key
- **License:** GPL-3.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://orai.io) · [GitHub](https://github.com/oraichain/orai-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/oraichain-multichain-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `oraichain-multichain-mcp`. https://satohub.ai/resources/oraichain-multichain-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
