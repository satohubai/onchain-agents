---
title: "TensorFeed x402 Base MCP — Sato Hub index"
description: "Read-only Base mainnet MCP for x402: verify USDC settlements, parse x402 manifests, probe endpoints, decode payment payloads."
canonical: "https://satohub.ai/resources/tensorfeed-x402-mcp"
layout: "default"
---

# TensorFeed x402 Base MCP

Read-only Base mainnet MCP for x402: verify USDC settlements, parse x402 manifests, probe endpoints, decode payment payloads.

Sato Score: **⬡ 75** (High), +18 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Base
- **Standards:** x402, mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** payments, security
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 6 days ago
- **GitHub stars:** 2
- **Deploys as:** npm
- **Works with:** Claude Desktop, Claude Code, Cursor, ChatGPT

## Deploy spec

```sh
npm install -g @tensorfeed/x402-base-mcp
```

- **Entry:** npx @tensorfeed/x402-base-mcp
- **Runtime:** Node.js
- **Requires:** TENSORFEED_RPC_URL (optional, default public Base RPC https://mainnet.base.org)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-10-15

## What we checked

- Install reproduced in an isolated container on 2026-10-15.
- Live endpoint probed by us: 100% of our checks succeeded over 90 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/RipperMercs/tensorfeed-x402-base-mcp) · [GitHub](https://github.com/RipperMercs/tensorfeed-x402-base-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/tensorfeed-x402-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `tensorfeed-x402-mcp`. https://satohub.ai/resources/tensorfeed-x402-mcp — retrieved 2026-10-20.

[← All layers](../index.md)
