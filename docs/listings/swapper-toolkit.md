---
title: "Swapper Toolkit — Sato Hub index"
description: "DeFi toolkit that gives AI agents and coding assistants wallets to deposit funds, execute trades, and manage crypto."
canonical: "https://satohub.ai/resources/swapper-toolkit"
layout: "default"
---

# Swapper Toolkit

DeFi toolkit that gives AI agents and coding assistants wallets to deposit funds, execute trades, and manage crypto.

Sato Score: **⬡ 59** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Ethereum, Base, Arbitrum, Optimism, Polygon, Solana, BNB Chain, Avalanche
- **Interfaces:** sdk, plugin, contract
- **Use cases:** trading, payments, wallets, build
- **Creator:** swapperfinance
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 4
- **Deploys as:** agent skill, SDK, npm
- **Works with:** Claude Code, Cursor, Windsurf, OpenClaw, GitHub Copilot, CrewAI, AutoGPT, Chainlink CCIP, Mastercard

## Deploy spec

```sh
npx skills add swapperfinance/swapper-toolkit
npm i @swapper-finance/deposit-sdk
```

- **Entry:** import { openSwapperModal } from "@swapper-finance/deposit-sdk"; openSwapperModal({ integratorId: "your-integrator-id", dstChainId: "8453", dstTokenAddr: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", depositWalletAddress: "0xYourWalletAddress", styles: { themeMode: "dark" }, supportedDepositOptions: ["transferCrypto", "depositWithCash"] });
- **Runtime:** Node.js (npm package + agent skills pack)
- **Requires:** integratorId (public integrator identifier, not a secret)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 98.5% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://swapper.finance) · [Docs](https://docs.swapper.finance/ai-agents/skills) · [GitHub](https://github.com/swapperfinance/swapper-toolkit) · [Sato Hub page ↗](https://satohub.ai/resources/swapper-toolkit?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `swapper-toolkit`. https://satohub.ai/resources/swapper-toolkit — retrieved 2026-09-17.

[← All layers](../index.md)
