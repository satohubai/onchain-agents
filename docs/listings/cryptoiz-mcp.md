---
title: "CryptoIZ MCP — Sato Hub index"
description: "Solana DEX smart-money signal MCP server (whale accumulation, divergence, BTC regime) sold pay-per-call via x402."
canonical: "https://satohub.ai/resources/cryptoiz-mcp"
layout: "default"
---

# CryptoIZ MCP

Solana DEX smart-money signal MCP server (whale accumulation, divergence, BTC regime) sold pay-per-call via x402.

Sato Score: **⬡ 50** (Medium), +5 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Chains:** Solana
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 1
- **Works with:** Claude Desktop, Cursor, Codex, agentcash

## Deploy spec

```sh
npx agentcash add https://mcp.cryptoiz.org
npm install -g cryptoiz-mcp
```

- **Entry:** cryptoiz-mcp (global npm binary — README does not show the exact MCP client JSON block for the self-custody path)
- **Runtime:** Node.js (npm global package "cryptoiz-mcp"); alternate managed-wallet install via the "agentcash" CLI
- **Requires:** SVM_PRIVATE_KEY — base58-encoded Solana private key, required for the self-custody/legacy install path; RISK: a live-funds signing key entered directly into the MCP config/env, and the tool spends $0.02–$0.10 USDC per paid tool call against the funded wallet, the recommended agentcash path avoids exposing the key by auto-generating an isolated wallet at ~/.agentcash/wallet.json, funded separately via npx agentcash fund
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 98.4% of our checks succeeded over 61 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://cryptoiz.org) · [GitHub](https://github.com/dadang11/cryptoiz-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/cryptoiz-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cryptoiz-mcp`. https://satohub.ai/resources/cryptoiz-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
