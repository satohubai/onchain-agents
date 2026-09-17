---
title: "Printr — Sato Hub index"
description: "Omnichain token launchpad with a dedicated MCP server and white-label API for agent-run token launches."
canonical: "https://satohub.ai/resources/printr"
layout: "default"
---

# Printr

Omnichain token launchpad with a dedicated MCP server and white-label API for agent-run token launches.

Sato Score: **⬡ 64** (Medium), -3 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Base, Solana, BNB Chain, Ethereum, Arbitrum, Avalanche, Monad
- **Open source:** Yes
- **Status:** Early
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 3

## Deploy spec

```sh
npx -y @printr/mcp@latest
```

- **Entry:** {"mcpServers": {"printr": {"command": "npx", "args": ["-y", "@printr/mcp@latest"]}}}
- **Runtime:** Node.js (via npx) or Bun (via bunx), MCP server
- **Requires:** PRINTR_API_KEY — optional, uses public key by default, OPENROUTER_API_KEY — optional, enables image generation, EVM_WALLET_PRIVATE_KEY — optional, for autonomous EVM signing; wallet private key, high-risk if exposed, SVM_WALLET_PRIVATE_KEY — optional, for Solana signing; wallet private key, high-risk if exposed, PRINTR_DEPLOYMENT_PASSWORD — required for printr_fund_deployment_wallet
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 91.7% of our checks succeeded over 60 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.printr.money/) · [Docs](https://printrfi.github.io/printr-mcp/) · [GitHub](https://github.com/PrintrFi/printr-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/printr?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `printr`. https://satohub.ai/resources/printr — retrieved 2026-09-17.

[← All layers](../index.md)
