---
title: "Purple Flea Wallet — Sato Hub index"
description: "Non-custodial HD wallet MCP server for AI agents with cross-chain swaps via the Wagyu aggregator."
canonical: "https://satohub.ai/resources/purple-flea-wallet"
layout: "default"
---

# Purple Flea Wallet

Non-custodial HD wallet MCP server for AI agents with cross-chain swaps via the Wagyu aggregator.

Sato Score: **⬡ 42** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Multichain
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 0

## Deploy spec

```sh
npx -y @purpleflea/wallet-mcp
```

- **Entry:** {"mcpServers": {"purple-flea-wallet": {"command": "npx", "args": ["-y", "@purpleflea/wallet-mcp"], "env": {"WALLET_API_URL": "https://wallet.purpleflea.com"}}}}
- **Runtime:** Node.js (npm/npx package)
- **Requires:** WALLET_API_URL — optional, defaults to https://wallet.purpleflea.com, No local private-key env var documented in the README; the connected wallet API states mnemonics/private keys are agent-managed and never stored server-side — vendor claim, not independently verified
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 52.3% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://purpleflea.com/) · [Docs](https://wallet.purpleflea.com/v1/docs) · [GitHub](https://github.com/purple-flea/wallet-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/purple-flea-wallet?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `purple-flea-wallet`. https://satohub.ai/resources/purple-flea-wallet — retrieved 2026-09-23.

[← All layers](../index.md)
