---
title: "Coinbase Agentic Wallets — Sato Hub index"
description: "Coinbase Developer Platform wallet infrastructure built for AI agents, with spend caps, gasless Base settlement, and native x402."
canonical: "https://satohub.ai/resources/coinbase-agentic-wallets"
layout: "default"
---

# Coinbase Agentic Wallets

Coinbase Developer Platform wallet infrastructure built for AI agents, with spend caps, gasless Base settlement, and native x402.

Sato Score: **⬡ 44** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Base, Solana, Multichain
- **Standards:** x402
- **Interfaces:** plugin
- **Use cases:** payments, wallets, data, security, build
- **Creator:** Coinbase
- **Open source:** Partial
- **Status:** Active
- **Deploys as:** API, MCP server, Self-hosted
- **Works with:** LangChain, Eliza, Vercel AI SDK, CDP SDK, x402

## Deploy spec

```sh
npm create onchain-agent@latest
pipx run create-onchain-agent
```

- **Entry:** Generated AgentKit project scaffold (framework choices documented: LangChain, Vercel AI SDK, Model Context Protocol for TS; LangChain, OpenAI Agents SDK for Python)
- **Runtime:** Node.js 18+ / npm 9+ (TypeScript) or Python 3.10/3.11 + pipx
- **Requires:** CDP API key (setup via the generated project's .env-local instructions), wallet provider choice: CDP Non-Custodial, Viem, or Privy wallets
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 25.8% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.coinbase.com/developer-platform/products/agentic-wallets) · [Docs](https://docs.cdp.coinbase.com/agent-kit/welcome) · [Sato Hub page ↗](https://satohub.ai/resources/coinbase-agentic-wallets?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `coinbase-agentic-wallets`. https://satohub.ai/resources/coinbase-agentic-wallets — retrieved 2026-09-18.

[← All layers](../index.md)
