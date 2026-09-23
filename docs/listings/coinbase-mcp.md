---
title: "Coinbase for Agents MCP — Sato Hub index"
description: "Coinbase's remote MCP server: an agent signs in with Coinbase OAuth to trade crypto, US stocks/ETFs and futures, and pay for data over x402."
canonical: "https://satohub.ai/resources/coinbase-mcp"
layout: "default"
---

# Coinbase for Agents MCP

Coinbase's remote MCP server: an agent signs in with Coinbase OAuth to trade crypto, US stocks/ETFs and futures, and pay for data over x402.

Sato Score: **⬡ 25** (Low), -36 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Base, Multichain
- **Standards:** mcp, x402
- **Interfaces:** mcp, cli
- **Use cases:** trading, payments, data
- **Creator:** Coinbase
- **Open source:** No
- **Status:** Active
- **Deploys as:** Hosted/Remote
- **Works with:** ChatGPT, Grok, Muse, Perplexity Computer, Claude, Claude Code

## Deploy spec

```sh
claude mcp add coinbase --transport http https://agents.coinbase.com/mcp
```

- **Entry:** {"mcpServers": {"coinbase": {"url": "https://agents.coinbase.com/mcp"}}}
- **Runtime:** remote
- **Requires:** Coinbase account, OAuth sign-in with Coinbase, An allowlisted client
- **License:** Proprietary
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-09-22

## What we checked

- Live endpoint probed by us: 93% of our checks succeeded over 71 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.coinbase.com/developer-platform/discover/launches/c4a-equities-x402) · [Docs](https://docs.cdp.coinbase.com/coinbase-for-agents/overview) · [Sato Hub page ↗](https://satohub.ai/resources/coinbase-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `coinbase-mcp`. https://satohub.ai/resources/coinbase-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
