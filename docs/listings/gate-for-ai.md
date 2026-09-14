---
title: "Gate for AI — Sato Hub index"
description: "Gate.io's official AI infrastructure: CEX/DEX trading, wallet, news, and info MCP tools for agents."
canonical: "https://satohub.ai/resources/gate-for-ai"
layout: "default"
---

# Gate for AI

Gate.io's official AI infrastructure: CEX/DEX trading, wallet, news, and info MCP tools for agents.

Sato Score: **⬡ 50** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, plugin, contract
- **Use cases:** trading, wallets, data
- **Creator:** Gate.io
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 35
- **Works with:** ChatGPT, Claude, OpenClaw, Cursor, Codex

## Deploy spec

```sh
claude mcp add --transport http gate-for-ai https://api.gatemcp.ai/mcp
```

- **Entry:** https://api.gatemcp.ai/mcp (public market-data MCP, 51 tools, no auth)
- **Runtime:** remote
- **Requires:** OAuth2 login (Gate.io account) for the private trading/wallet endpoints (/mcp/exchange) and Google OAuth for DEX (/mcp/dex) — the public market-data endpoint needs neither
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/gate/gate-for-ai) · [GitHub](https://github.com/gate/gate-for-ai) · [Sato Hub page ↗](https://satohub.ai/resources/gate-for-ai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `gate-for-ai`. https://satohub.ai/resources/gate-for-ai — retrieved 2026-09-14.

[← All layers](../index.md)
