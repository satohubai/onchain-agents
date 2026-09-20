---
title: "Clawmes — Sato Hub index"
description: "Hermes Agent plugin for crypto: wallets, DEX trading, lending, staking, governance, and onchain automation."
canonical: "https://satohub.ai/resources/clawmes"
layout: "default"
---

# Clawmes

Hermes Agent plugin for crypto: wallets, DEX trading, lending, staking, governance, and onchain automation.

Sato Score: **⬡ 65** (Medium), +10 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Base, Ethereum
- **Interfaces:** plugin, mcp
- **Use cases:** trading, wallets, build
- **Creator:** clawnchdev
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity 2 days ago
- **GitHub stars:** 25
- **Deploys as:** pip, Hermes plugin
- **Works with:** WalletConnect, 0x, Aave, Lido, Uniswap, LiFi, CoinGecko, Snapshot, Gnosis Safe

## Deploy spec

```sh
pip install clawmes
hermes plugins enable clawmes
hermes clawmes init
```

- **Entry:** hermes clawmes init && hermes (Hermes Agent plugin — not a standalone MCP server)
- **Runtime:** python
- **Requires:** Hermes Agent installed (github.com/NousResearch/hermes-agent), wallet mode setup: WalletConnect project ID, or local password+mnemonic, or Bankr API key, project's own SECURITY.md flags this as pre-alpha — no third-party audit yet, testnet-only recommended
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[GitHub](https://github.com/clawnchdev/clawmes) · [Sato Hub page ↗](https://satohub.ai/resources/clawmes?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `clawmes`. https://satohub.ai/resources/clawmes — retrieved 2026-09-20.

[← All layers](../index.md)
