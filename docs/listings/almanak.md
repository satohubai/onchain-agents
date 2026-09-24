---
title: "Almanak — Sato Hub index"
description: "An AI-agent framework and non-custodial vault protocol for designing, backtesting, and deploying automated DeFi yield and trading strategies."
canonical: "https://satohub.ai/resources/almanak"
layout: "default"
---

# Almanak

An AI-agent framework and non-custodial vault protocol for designing, backtesting, and deploying automated DeFi yield and trading strategies.

Sato Score: **⬡ 83** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Type:** Framework
- **Chains:** Multichain, Ethereum, Arbitrum, Optimism, Base, Avalanche, Polygon, BNB Chain, Monad, Solana, Berachain
- **Interfaces:** ui
- **Use cases:** trading, wallets, security, build
- **Creator:** Almanak
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity today
- **GitHub stars:** 61
- **Deploys as:** pip, Self-hosted, Hosted
- **Works with:** Uniswap V3, Uniswap V4, Aave V3, Morpho Blue, GMX V2, Lido, Ethena, Polymarket, Curve, Safe

## Deploy spec

```sh
pipx install almanak
# or: pip install almanak
```

- **Entry:** from almanak.framework.strategies import IntentStrategy from almanak.framework.intents import Intent class MyStrategy(IntentStrategy):     def decide(self, market): return Intent.swap(from_token='USDC', to_token='ETH', amount_usd=500)
- **Runtime:** Python 3.12+
- **Requires:** RPC endpoint, AGENT_LLM_API_KEY, a Safe smart account + signer (non-custodial execution)
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://almanak.co/) · [Docs](https://sdk.docs.almanak.co) · [GitHub](https://github.com/almanak-co/sdk) · [Sato Hub page ↗](https://satohub.ai/resources/almanak?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `almanak`. https://satohub.ai/resources/almanak — retrieved 2026-09-24.

[← All layers](../index.md)
