---
title: "BotWallet MCP — Sato Hub index"
description: "Non-custodial wallet MCP for AI agents to invoice, get paid, and spend on other agents/APIs, with human-set limits."
canonical: "https://satohub.ai/resources/botwallet-mcp"
layout: "default"
---

# BotWallet MCP

Non-custodial wallet MCP for AI agents to invoice, get paid, and spend on other agents/APIs, with human-set limits.

Sato Score: **⬡ 49** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Solana
- **Open source:** Partial
- **Status:** Early
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 2
- **Works with:** Claude Desktop, Cursor, Windsurf, Cline, x402 protocol

## Deploy spec

```sh
npm install -g @botwallet/mcp
```

- **Entry:** {"mcpServers":{"botwallet":{"command":"npx","args":["-y","@botwallet/mcp"]}}}
- **Runtime:** Node.js (npm package)
- **Requires:** BOTWALLET_API_KEY (optional), BOTWALLET_WALLET (optional — selects wallet if multiple), BOTWALLET_BASE_URL (optional, default https://api.botwallet.co/v1), Note: FROST 2-of-2 key shares are stored locally in ~/.botwallet/seeds/ — custody risk if that directory is exposed
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 87.7% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://botwallet.co) · [Docs](https://docs.botwallet.co) · [GitHub](https://github.com/botwallet-co/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/botwallet-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `botwallet-mcp`. https://satohub.ai/resources/botwallet-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
