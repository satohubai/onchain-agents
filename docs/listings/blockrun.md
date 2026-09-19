---
title: "BlockRun — Sato Hub index"
description: "Pay-per-call gateway where AI agents reach 55+ LLMs, data, and tools through one endpoint, settled in USDC via x402 — no API keys."
canonical: "https://satohub.ai/resources/blockrun"
layout: "default"
---

# BlockRun

Pay-per-call gateway where AI agents reach 55+ LLMs, data, and tools through one endpoint, settled in USDC via x402 — no API keys.

Sato Score: **⬡ 69** (Medium), +10 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Base, Solana
- **Standards:** x402, mcp
- **Interfaces:** mcp, sdk, rest-api, contract
- **Use cases:** trading, payments, data, build
- **Creator:** BlockRun Labs, Inc.
- **Open source:** Partial
- **Status:** Active
- **Works with:** ElizaOS, AgentKit, GOAT SDK, LangChain, Python SDK, TypeScript SDK, Go SDK

## Deploy spec

```sh
claude mcp add blockrun -s user -- npx -y @blockrun/mcp@latest
```

- **Entry:** npx -y @blockrun/mcp@latest (stdio MCP server, 19 tools: LLMs, images/video, market data, on-chain queries, Polymarket trading)
- **Runtime:** node
- **Requires:** Self-custody wallet auto-created on first run (~/.blockrun/.session) — fund with USDC on Base or Solana to pay per-call via x402; no API keys/accounts
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://blockrun.ai/) · [Docs](https://blockrun.ai/docs) · [GitHub](https://github.com/BlockRunAI) · [Sato Hub page ↗](https://satohub.ai/resources/blockrun?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `blockrun`. https://satohub.ai/resources/blockrun — retrieved 2026-09-19.

[← All layers](../index.md)
