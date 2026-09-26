---
title: "Safe Wallet MCP (safer) — Sato Hub index"
description: "CLI and MCP client for querying Safe{Wallet} multisig transactions and owner/threshold details."
canonical: "https://satohub.ai/resources/safer-safe-wallet-mcp"
layout: "default"
---

# Safe Wallet MCP (safer)

CLI and MCP client for querying Safe{Wallet} multisig transactions and owner/threshold details.

Sato Score: **⬡ 54** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Ethereum, Base, Polygon, Arbitrum
- **Open source:** Yes
- **Status:** Early
- **Activity:** Dormant — last activity 18 months ago
- **GitHub stars:** 3

## Deploy spec

```sh
npm install -g @safer-sh/cli
npx @safer-sh/mcp
git clone https://github.com/safer-sh/safer.git
cd safer
```

- **Entry:** CLI: safer command (after global install); MCP: npx @safer-sh/mcp
- **Runtime:** Node.js (npm/yarn)
- **Requires:** RPC endpoint URL — required for blockchain interaction, set via safer config --set-rpc-url, Documented risk: README states private keys are stored in plaintext in local configuration files — explicit dev-only warning against managing large fund amounts; hardware wallet (Ledger) integration recommended for production use instead
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/safer-sh/safer) · [GitHub](https://github.com/safer-sh/safer) · [Sato Hub page ↗](https://satohub.ai/resources/safer-safe-wallet-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `safer-safe-wallet-mcp`. https://satohub.ai/resources/safer-safe-wallet-mcp — retrieved 2026-09-26.

[← All layers](../index.md)
