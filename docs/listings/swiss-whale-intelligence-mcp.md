---
title: "Swiss Whale Intelligence MCP — Sato Hub index"
description: "Hosted MCP server for on-chain whale tracking and forensics across BTC, ETH, SOL, USDT, and tokenized gold."
canonical: "https://satohub.ai/resources/swiss-whale-intelligence-mcp"
layout: "default"
---

# Swiss Whale Intelligence MCP

Hosted MCP server for on-chain whale tracking and forensics across BTC, ETH, SOL, USDT, and tokenized gold.

Sato Score: **⬡ 45** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Bitcoin, Ethereum, Solana
- **Open source:** Partial
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 0

## Deploy spec

```sh
claude mcp add btc-whale-intelligence https://mcp.swisswhaleintelligence.com/mcp
```

- **Entry:** {"mcpServers": {"btc-whale-intelligence": {"url": "https://mcp.swisswhaleintelligence.com/mcp"}}}
- **Runtime:** Remote hosted MCP server; no local install, Docker, or cloning required
- **Requires:** None for free tier — anonymous OAuth 2.1 grants Free-tier access automatically on first connect (discovery endpoint https://mcp.swisswhaleintelligence.com/.well-known/oauth-authorization-server)
- **License:** MIT (repository); methodology whitepaper published separately under CC-BY-4.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 90.9% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://swisswhaleintelligence.com) · [Docs](https://swisswhaleintelligence.com/whitepaper/v1.md) · [GitHub](https://github.com/alpineflow-io/swiss-whale-intelligence-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/swiss-whale-intelligence-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `swiss-whale-intelligence-mcp`. https://satohub.ai/resources/swiss-whale-intelligence-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
