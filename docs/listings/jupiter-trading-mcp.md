---
title: "Jupiter Trading MCP + CLI — Sato Hub index"
description: "Jupiter's hosted read-write MCP server: 75 tools across swap, limit/DCA, lend, perps-adjacent prediction, portfolio and token launch on Solana. API…"
canonical: "https://satohub.ai/resources/jupiter-trading-mcp"
layout: "default"
---

# Jupiter Trading MCP + CLI

Jupiter's hosted read-write MCP server: 75 tools across swap, limit/DCA, lend, perps-adjacent prediction, portfolio and token launch on Solana. API key optional.

Sato Score: **⬡ 73** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Solana
- **Standards:** mcp
- **Interfaces:** mcp, cli
- **Use cases:** trading
- **Open source:** Partial
- **Status:** Active
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 60

## Deploy spec

```sh
npm i -g @jup-ag/cli
```

- **Entry:** jup --help   # every command is non-interactive; add --dry-run to a transacting command to get the unsigned transaction instead of submitting it
- **Runtime:** Node.js (CLI) — Jupiter's MCP server is hosted at https://mcp.jup.ag
- **Requires:** A Solana key for transacting commands (`jup keys add <name>` generates or imports one) — reads need none, Pre-v1 (early alpha) per the README: breaking changes may land without warning
- **License:** GPL-3.0
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-25

## What we checked

- Install reproduced in an isolated container on 2026-09-25.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://developers.jup.ag/docs/ai) · [Docs](https://developers.jup.ag/docs/ai/trading-mcp.md) · [GitHub](https://github.com/jup-ag/cli) · [Sato Hub page ↗](https://satohub.ai/resources/jupiter-trading-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `jupiter-trading-mcp`. https://satohub.ai/resources/jupiter-trading-mcp — retrieved 2026-09-25.

[← All layers](../index.md)
