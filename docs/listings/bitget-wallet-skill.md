---
title: "Bitget Wallet Skill — Sato Hub index"
description: "Agent skill for Bitget Wallet: token swaps, cross-chain bridging, and gasless transactions."
canonical: "https://satohub.ai/resources/bitget-wallet-skill"
layout: "default"
---

# Bitget Wallet Skill

Agent skill for Bitget Wallet: token swaps, cross-chain bridging, and gasless transactions.

Sato Score: **⬡ 62** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Ethereum, Solana, BNB Chain, Base, Arbitrum, Tron, TON, Sui, Optimism
- **Standards:** x402
- **Interfaces:** plugin
- **Use cases:** trading, payments, wallets, build
- **Creator:** Bitget Wallet
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 180
- **Deploys as:** Self-hosted, Python
- **Works with:** OpenClaw, Dify, Telegram, Discord, x402, Bitget Wallet API

## Deploy spec

```sh
git clone https://github.com/bitget-wallet-ai-lab/bitget-wallet-skill
pip install requests eth-account
```

- **Entry:** Clone into your agent's skills dir; SKILL.md routes to: python3 scripts/bitget-wallet-agent-api.py <quote\|confirm\|make-order\|send\|security\|...>
- **Runtime:** Agent Skill + Python 3.9+ scripts (clone)
- **Requires:** no API key (token auth built in), wallet private key only for signing ops (not persisted)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://web3.bitget.com) · [Docs](https://web3.bitget.com/en/docs) · [GitHub](https://github.com/bitget-wallet-ai-lab/bitget-wallet-skill) · [Sato Hub page ↗](https://satohub.ai/resources/bitget-wallet-skill?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bitget-wallet-skill`. https://satohub.ai/resources/bitget-wallet-skill — retrieved 2026-09-26.

[← All layers](../index.md)
