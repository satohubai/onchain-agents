---
title: "ChainAware — Sato Hub index"
description: "Pre-built MCP blockchain capability modules giving agents fraud detection, AML scoring, wallet profiling, and token analysis."
canonical: "https://satohub.ai/resources/chainaware"
layout: "default"
---

# ChainAware

Pre-built MCP blockchain capability modules giving agents fraud detection, AML scoring, wallet profiling, and token analysis.

Sato Score: **⬡ 67** (Medium), -10 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Security Tool
- **Type:** Infrastructure
- **Chains:** Polygon, Ethereum, BNB Chain, Base, TON, Tron, Solana
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading, wallets, data, security
- **Creator:** ChainAware
- **Open source:** Partial
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 10
- **Deploys as:** MCP server, API
- **Works with:** MCP, Telegram, Discord

## Deploy spec

```sh
claude mcp add --transport sse chainaware-behavioural-prediction-mcp-server https://prediction.mcp.chainaware.ai/sse --header "X-API-Key: your-key-here"
```

- **Entry:** https://prediction.mcp.chainaware.ai/sse (SSE transport)
- **Runtime:** remote
- **Requires:** ChainAware API key — access is by request (see chainaware.ai/mcp)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://chainaware.ai) · [Docs](https://chainaware.ai/mcp) · [GitHub](https://github.com/ChainAware/behavioral-prediction-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/chainaware?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `chainaware`. https://satohub.ai/resources/chainaware — retrieved 2026-09-17.

[← All layers](../index.md)
