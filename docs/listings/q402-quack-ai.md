---
title: "Q402 (Quack AI) — Sato Hub index"
description: "Gasless stablecoin payment relay and managed Agent Wallets across 12 EVM chains (EIP-712 + EIP-7702), with an MCP server and optional ERC-8004…"
canonical: "https://satohub.ai/resources/q402-quack-ai"
layout: "default"
---

# Q402 (Quack AI)

Gasless stablecoin payment relay and managed Agent Wallets across 12 EVM chains (EIP-712 + EIP-7702), with an MCP server and optional ERC-8004 registration on BNB Chain.

Sato Score: **⬡ 77** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** BNB Chain, Ethereum, Avalanche, Arbitrum, Base, Injective, Monad
- **Creator:** Quack AI
- **Open source:** Partial
- **Status:** Unknown
- **Activity:** Active — last activity 1 day ago
- **GitHub stars:** 0
- **Works with:** Claude, Codex CLI, Cursor, Cline, GitHub Copilot, Hermes Agent, Aave, Morpho, Lista, Chainlink CCIP

## Deploy spec

```sh
npx -y @quackai/q402-mcp
```

- **Entry:** claude mcp add q402 -- npx -y @quackai/q402-mcp
- **Runtime:** Node.js 18+
- **Requires:** ~/.q402/mcp.env: Q402_PRIVATE_KEY or Q402_AGENTIC_PRIVATE_KEY plus an API key (sandbox by default; Q402_ENABLE_REAL_PAYMENTS=1 moves funds)
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 20 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://q402.quackai.ai) · [Docs](https://q402.quackai.ai/docs) · [GitHub](https://github.com/quackai-org/q402-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/q402-quack-ai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `q402-quack-ai`. https://satohub.ai/resources/q402-quack-ai — retrieved 2026-09-23.

[← All layers](../index.md)
