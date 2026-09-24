---
title: "x402 AI Starter — Sato Hub index"
description: "Vercel Labs' reference Next.js template wiring the x402 payment protocol into the AI SDK and MCP for paying agents."
canonical: "https://satohub.ai/resources/x402-ai-starter"
layout: "default"
---

# x402 AI Starter

Vercel Labs' reference Next.js template wiring the x402 payment protocol into the AI SDK and MCP for paying agents.

Sato Score: **⬡ 55** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Developer Tool
- **Chains:** Base
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 9 months ago
- **GitHub stars:** 71
- **Works with:** AI SDK, Model Context Protocol (MCP), Coinbase Developer Platform (CDP), AI Gateway, Next.js

## Deploy spec

```sh
git clone https://github.com/vercel-labs/x402-ai-starter
cd x402-ai-starter
pnpm install
pnpm dev
```

- **Entry:** pnpm dev → http://localhost:3000 (includes a remote MCP server exposing paid tools)
- **Runtime:** Node.js (Next.js template, pnpm) — repository archived June 2026, read-only
- **Requires:** CDP_API_KEY_ID (Coinbase Developer Platform key), CDP_API_KEY_SECRET, CDP_WALLET_SECRET — RISK: wallet secret controlling funds, Vercel OIDC token or AI Gateway API key (for AI Gateway), NETWORK env var: base-sepolia (default testnet) or base (mainnet)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://vercel.com/templates/next.js/x402-ai-starter) · [GitHub](https://github.com/vercel-labs/x402-ai-starter) · [Sato Hub page ↗](https://satohub.ai/resources/x402-ai-starter?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `x402-ai-starter`. https://satohub.ai/resources/x402-ai-starter — retrieved 2026-09-24.

[← All layers](../index.md)
