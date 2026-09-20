---
title: "Trust Wallet Agent Kit (TWAK) — Sato Hub index"
description: "Non-custodial toolkit from Trust Wallet (MCP server, CLI, and SDK) that lets AI agents read and transact across 25+ chains within user-defined rules."
canonical: "https://satohub.ai/resources/trust-wallet-agent-kit"
layout: "default"
---

# Trust Wallet Agent Kit (TWAK)

Non-custodial toolkit from Trust Wallet (MCP server, CLI, and SDK) that lets AI agents read and transact across 25+ chains within user-defined rules.

Sato Score: **⬡ 87** (High), +1 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Ethereum, Base, Solana, Arbitrum, Optimism, Polygon, BNB Chain, Avalanche, Multichain
- **Standards:** x402, mcp
- **Interfaces:** mcp, sdk, plugin, cli
- **Use cases:** trading, payments, wallets, build
- **Creator:** Trust Wallet
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity 1 day ago
- **GitHub stars:** 101
- **Deploys as:** npm, CLI, MCP server, API
- **Works with:** Claude Code, Cursor, Codex, Windsurf, GitHub Copilot, Wallet Core, x402

## Deploy spec

```sh
npm install -g @trustwallet/cli  # binary: twak
npx @trustwallet/cli --version    # no global install
npx skills add trustwallet/tw-agent-skills  # coding-agent skills
```

- **Entry:** twak init --api-key <access_id> --api-secret <hmac_secret> twak price ETH   # first request twak serve       # start the MCP server
- **Runtime:** Node.js
- **Requires:** Trust Wallet API credentials (TWAK_ACCESS_ID + TWAK_HMAC_SECRET) from portal.trustwallet.com
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://developer.trustwallet.com/developer/agent-sdk) · [Docs](https://developer.trustwallet.com/developer/agent-sdk) · [GitHub](https://github.com/trustwallet/tw-agent-skills) · [Sato Hub page ↗](https://satohub.ai/resources/trust-wallet-agent-kit?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `trust-wallet-agent-kit`. https://satohub.ai/resources/trust-wallet-agent-kit — retrieved 2026-09-20.

[← All layers](../index.md)
