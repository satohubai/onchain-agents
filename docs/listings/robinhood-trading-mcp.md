---
title: "Robinhood Trading MCP — Sato Hub index"
description: "Robinhood's first-party MCP server: an agent reads the account and trades equities, options and crypto in a separate Agentic account, over OAuth."
canonical: "https://satohub.ai/resources/robinhood-trading-mcp"
layout: "default"
---

# Robinhood Trading MCP

Robinhood's first-party MCP server: an agent reads the account and trades equities, options and crypto in a separate Agentic account, over OAuth.

Sato Score: **⬡ 22** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading
- **Creator:** Robinhood Markets
- **Open source:** No
- **Status:** Beta
- **Deploys as:** hosted
- **Works with:** Claude Code, Claude Desktop, ChatGPT, Codex, Codex CLI, Cursor, Grok

## Deploy spec

```sh
claude mcp add robinhood-trading --transport http https://agent.robinhood.com/mcp/trading
```

- **Entry:** {"mcpServers": {"robinhood-trading": {"url": "https://agent.robinhood.com/mcp/trading"}}}
- **Runtime:** remote
- **Requires:** Robinhood Agentic account, OAuth sign-in to Robinhood
- **License:** Proprietary
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-09-12

## What we checked

- Live endpoint probed by us: 0% of our checks succeeded over 10 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://robinhood.com/us/en/agentic-trading/) · [Docs](https://robinhood.com/us/en/support/articles/agentic-trading-overview/) · [Sato Hub page ↗](https://satohub.ai/resources/robinhood-trading-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `robinhood-trading-mcp`. https://satohub.ai/resources/robinhood-trading-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
