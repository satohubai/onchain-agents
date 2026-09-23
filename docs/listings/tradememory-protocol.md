---
title: "TradeMemory Protocol — Sato Hub index"
description: "Decision audit trail and persistent memory for AI trading agents, with tamper-evident recall."
canonical: "https://satohub.ai/resources/tradememory-protocol"
layout: "default"
---

# TradeMemory Protocol

Decision audit trail and persistent memory for AI trading agents, with tamper-evident recall.

Sato Score: **⬡ 71** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Developer Tool
- **Type:** Tool/Service
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading, security
- **Creator:** Mnemox AI
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity 14 days ago
- **GitHub stars:** 1.4k
- **Deploys as:** pip, MCP server
- **Works with:** Claude, MT5, Smithery, Claude Code, Cursor, Docker

## Deploy spec

```sh
pip install tradememory-protocol
```

- **Entry:** claude mcp add tradememory -- uvx tradememory-protocol # or claude_desktop_config.json: {"mcpServers": {"tradememory": {"command": "uvx", "args": ["tradememory-protocol"]}}}
- **Runtime:** python
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-21

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://mnemox.ai/tradememory/) · [GitHub](https://github.com/mnemox-ai/tradememory-protocol) · [Sato Hub page ↗](https://satohub.ai/resources/tradememory-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `tradememory-protocol`. https://satohub.ai/resources/tradememory-protocol — retrieved 2026-09-23.

[← All layers](../index.md)
