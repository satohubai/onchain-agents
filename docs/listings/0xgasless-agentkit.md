---
title: "0xGasless AgentKit — Sato Hub index"
description: "Toolkit giving AI agents gasless access to crypto wallets and onchain functionality."
canonical: "https://satohub.ai/resources/0xgasless-agentkit"
layout: "default"
---

# 0xGasless AgentKit

Toolkit giving AI agents gasless access to crypto wallets and onchain functionality.

Sato Score: **⬡ 86** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** BNB Chain, Avalanche, Base
- **Standards:** x402, erc-8004
- **Interfaces:** rest-api
- **Use cases:** trading, payments, wallets, identity, build
- **Creator:** 0xGasless
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity 9 days ago
- **GitHub stars:** 415
- **Deploys as:** SDK, Python, Node.js
- **Works with:** LangChain, ERC-4337, x402, ERC-8004

## Deploy spec

```sh
npm install @0xgasless/agentkit tslib
```

- **Entry:** import { Agentkit, AgentkitToolkit } from '@0xgasless/agentkit'; const agentkit = await Agentkit.configureWithWallet({ privateKey, rpcUrl, apiKey, chainID: 8453 }); const tools = new AgentkitToolkit(agentkit).getTools();
- **Runtime:** Node.js / TypeScript
- **Requires:** PRIVATE_KEY, RPC_URL, API_KEY (0xGasless paymaster/bundler), CHAIN_ID
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Docs](https://docs.0xgasless.com) · [GitHub](https://github.com/0xgasless/agentkit) · [Sato Hub page ↗](https://satohub.ai/resources/0xgasless-agentkit?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `0xgasless-agentkit`. https://satohub.ai/resources/0xgasless-agentkit — retrieved 2026-09-21.

[← All layers](../index.md)
