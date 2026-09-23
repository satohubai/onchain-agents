---
title: "Circle Agent Stack MCP — Sato Hub index"
description: "MCP wrapper around Circle's Agent Stack — create USDC wallets, set spend policies, send stablecoin, and pay x402-gated endpoints."
canonical: "https://satohub.ai/resources/circle-agent-stack-mcp"
layout: "default"
---

# Circle Agent Stack MCP

MCP wrapper around Circle's Agent Stack — create USDC wallets, set spend policies, send stablecoin, and pay x402-gated endpoints.

Sato Score: **⬡ 52** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Ethereum, Base
- **Open source:** Partial
- **Status:** Early
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 1

## Deploy spec

```sh
npm install -g @circle-fin/circle-cli
circle login
export CIRCLE_API_KEY=your_key_here
npx circle-agent-stack-mcp
```

- **Entry:** {"mcpServers":{"circle":{"command":"npx","args":["-y","circle-agent-stack-mcp"],"env":{"CIRCLE_API_KEY":"your_key_here"}}}}
- **Runtime:** Node.js (npx; shells out to the Circle CLI)
- **Requires:** CIRCLE_API_KEY (required), CIRCLE_PAYOUT_ADDRESS (required for self-hosted x402 paywall mode)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-21

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://developers.circle.com/agent-stack) · [GitHub](https://github.com/kinance/circle-agent-stack-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/circle-agent-stack-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `circle-agent-stack-mcp`. https://satohub.ai/resources/circle-agent-stack-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
