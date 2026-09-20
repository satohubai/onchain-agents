---
title: "BlindPay — Sato Hub index"
description: "Official MCP server for BlindPay's stablecoin payment rails: payouts, payins, virtual accounts, and FX quotes."
canonical: "https://satohub.ai/resources/blindpay"
layout: "default"
---

# BlindPay

Official MCP server for BlindPay's stablecoin payment rails: payouts, payins, virtual accounts, and FX quotes.

Sato Score: **⬡ 68** (Medium), +8 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Multichain
- **Open source:** Partial
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 10
- **Works with:** Cursor, Claude Code, Claude Desktop, Codex

## Deploy spec

```sh
npx -y @blindpay/mcp
```

- **Entry:** {"mcpServers": {"blindpay": {"command": "npx", "args": ["-y", "@blindpay/mcp"], "env": {"BLINDPAY_API_KEY": "your-api-key-here", "BLINDPAY_INSTANCE_ID": "your-instance-id-here"}}}}
- **Runtime:** Node.js (npm package, run via npx)
- **Requires:** BLINDPAY_API_KEY (required, from BlindPay Dashboard), BLINDPAY_INSTANCE_ID (required, format in_xxxxxxxxxxxx)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://blindpay.com) · [Docs](https://blindpay.com/docs/getting-started/overview) · [GitHub](https://github.com/blindpaylabs/blindpay-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/blindpay?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `blindpay`. https://satohub.ai/resources/blindpay — retrieved 2026-09-20.

[← All layers](../index.md)
