---
title: "Oraichain Multichain MCP — Sato Hub index"
description: "CosmJS-based MCP toolkit for wallet queries, transactions, and contract deployment on Oraichain and Cosmos chains."
canonical: "https://satohub.ai/resources/oraichain-multichain-mcp"
canonical_url: "https://satohub.ai/resources/oraichain-multichain-mcp"
layout: "default"
page_type: "listing"
item_name: "Oraichain Multichain MCP"
code_repository: "https://github.com/oraichain/orai-mcp"
software_url: "https://orai.io"
application_category: "API / SDK"
operating_system: "Any"
license_url: "https://www.gnu.org/licenses/gpl-3.0.html"
license_name: "GPL-3.0"
date_modified: "2025-05-07"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Oraichain Multichain MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/oraichain-multichain-mcp"
---

# Oraichain Multichain MCP

CosmJS-based MCP toolkit for wallet queries, transactions, and contract deployment on Oraichain and Cosmos chains.

Sato Score: **⬡ 51** (Medium), +5 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Cosmos
- **Creator:** Oraichain Labs
- **Open source:** Yes
- **Status:** Active
- **Activity:** Dormant — last activity 16 months ago
- **GitHub stars:** 4
- **Works with:** Claude Desktop

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
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 58 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://orai.io) · [GitHub](https://github.com/oraichain/orai-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/oraichain-multichain-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `oraichain-multichain-mcp`. https://satohub.ai/resources/oraichain-multichain-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
