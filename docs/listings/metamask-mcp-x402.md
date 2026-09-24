---
title: "MetaMask mcp-x402 — Sato Hub index"
description: "MetaMask's own MCP server for generating x402 payment headers signed by a supplied private key."
canonical: "https://satohub.ai/resources/metamask-mcp-x402"
layout: "default"
---

# MetaMask mcp-x402

MetaMask's own MCP server for generating x402 payment headers signed by a supplied private key.

Sato Score: **⬡ 46** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Ethereum, Base
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 8 months ago
- **GitHub stars:** 2

## Deploy spec

```sh
yarn install
yarn build
```

- **Entry:** node build/index.js
- **Runtime:** Node.js (yarn build)
- **Requires:** Private key for creating x402 payment headers (env var name not documented in README; .env.sample in repo) — signing-key risk
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/MetaMask/mcp-x402) · [GitHub](https://github.com/MetaMask/mcp-x402) · [Sato Hub page ↗](https://satohub.ai/resources/metamask-mcp-x402?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `metamask-mcp-x402`. https://satohub.ai/resources/metamask-mcp-x402 — retrieved 2026-09-24.

[← All layers](../index.md)
