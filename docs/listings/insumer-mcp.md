---
title: "Insumer MCP Server — Sato Hub index"
description: "MCP for condition-based access checks: signed boolean attestations across 37 chains without exposing balances."
canonical: "https://satohub.ai/resources/insumer-mcp"
layout: "default"
---

# Insumer MCP Server

MCP for condition-based access checks: signed boolean attestations across 37 chains without exposing balances.

Sato Score: **⬡ 81** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** wallets, data, privacy, security
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 14 days ago
- **GitHub stars:** 1
- **Deploys as:** npm
- **Works with:** Claude Desktop, Cursor, Windsurf, LangChain, ElizaOS, OpenAI GPT

## Deploy spec

```sh
npm install
npm run build
```

- **Entry:** npx @modelcontextprotocol/inspector node build/index.js (test); npx -y mcp-server-insumer (client config)
- **Runtime:** Node.js
- **Requires:** INSUMER_API_KEY (free tier available, no signup required for a generated key; 100 reads/day, 10 verification credits)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/douglasborthwick-crypto/mcp-server-insumer) · [Docs](https://github.com/douglasborthwick-crypto/mcp-server-insumer) · [GitHub](https://github.com/douglasborthwick-crypto/mcp-server-insumer) · [Sato Hub page ↗](https://satohub.ai/resources/insumer-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `insumer-mcp`. https://satohub.ai/resources/insumer-mcp — retrieved 2026-09-17.

[← All layers](../index.md)
