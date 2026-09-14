---
title: "web3agent (Apegurus) — Sato Hub index"
description: "MCP package giving agents 190+ EVM DeFi tools — swaps, bridges, limit orders, exchange trading — with confirmation gating."
canonical: "https://satohub.ai/resources/web3agent-apegurus"
layout: "default"
---

# web3agent (Apegurus)

MCP package giving agents 190+ EVM DeFi tools — swaps, bridges, limit orders, exchange trading — with confirmation gating.

Sato Score: **⬡ 65** (Medium), +11 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Multichain
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 18 days ago
- **GitHub stars:** 1
- **Works with:** Claude Code, Cursor, Windsurf, OpenCode, Codex, GOAT SDK, LI.FI, Orbs, Blockscout, Etherscan, DexScreener, DefiLlama

## Deploy spec

```sh
npx web3agent init
```

- **Entry:** npx web3agent init (auto-configures Claude Code, Cursor, Windsurf, OpenCode, or Codex); npx web3agent for other MCP hosts
- **Runtime:** Node.js (npx package)
- **Requires:** OWS_PASSPHRASE (required to run 'npx web3agent wallet generate' — wallet-key generation, interactive TTY. RISK: private-key/mnemonic creation flow), WEB3AGENT_ALLOW_AGENT_VISIBLE_SECRETS (optional opt-in flag — RISK: README explicitly warns this allows private keys/mnemonics to be sent through the MCP host; off by default), COINGECKO_API_KEY (optional, price data), ZEROX_API_KEY (optional, 0x swaps), CCXT_CONFIG_PATH (optional, exchange credentials file), CHAIN_ID (optional, overrides default chain)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/Apegurus/web3agent) · [GitHub](https://github.com/Apegurus/web3agent) · [Sato Hub page ↗](https://satohub.ai/resources/web3agent-apegurus?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `web3agent-apegurus`. https://satohub.ai/resources/web3agent-apegurus — retrieved 2026-09-14.

[← All layers](../index.md)
