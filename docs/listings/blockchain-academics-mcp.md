---
title: "Blockchain Academics MCP — Sato Hub index"
description: "MCP server exposing 99 tools for crypto market data, on-chain analytics, news, and entity dossiers."
canonical: "https://satohub.ai/resources/blockchain-academics-mcp"
layout: "default"
---

# Blockchain Academics MCP

MCP server exposing 99 tools for crypto market data, on-chain analytics, news, and entity dossiers.

Sato Score: **⬡ 58** (Medium), -1 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Multichain
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 1

## Deploy spec

```sh
npm install @blockchainacademics/mcp
```

- **Entry:** {"mcpServers": {"blockchainacademics": {"command": "npx", "args": ["-y", "@blockchainacademics/mcp"], "env": {"BCA_API_KEY": "bca_live_xxxxxxxxxxxxxxxx"}}}}
- **Runtime:** Node.js (npm/npx package, TypeScript)
- **Requires:** BCA_API_KEY — optional, required for full 99-tool access (free tier: 2,000 calls/month) via signup at brain.blockchainacademics.com/signup, BCA_API_BASE — optional, defaults to https://api.blockchainacademics.com
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 98.5% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://brain.blockchainacademics.com) · [GitHub](https://github.com/blockchainacademics/bca-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/blockchain-academics-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `blockchain-academics-mcp`. https://satohub.ai/resources/blockchain-academics-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
