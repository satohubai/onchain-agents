---
title: "Robinhood Trading MCP — Sato Hub index"
description: "Robinhood's first-party MCP server: an agent reads the account and places orders in a separate Agentic trading account, over OAuth."
canonical: "https://satohub.ai/resources/robinhood-trading-mcp"
canonical_url: "https://satohub.ai/resources/robinhood-trading-mcp"
layout: "default"
page_type: "listing"
item_name: "Robinhood Trading MCP"
software_url: "https://robinhood.com/us/en/support/agentic-trading"
application_category: "MCP"
application_subcategory: "Brokerage MCP server"
operating_system: "Any"
license_name: "Proprietary"
date_modified: "2026-09-15"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Robinhood Trading MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/robinhood-trading-mcp"
---

# Robinhood Trading MCP

Robinhood's first-party MCP server: an agent reads the account and places orders in a separate Agentic trading account, over OAuth.

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

- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://robinhood.com/us/en/support/agentic-trading) · [Docs](https://robinhood.com/us/en/support/articles/agentic-trading-overview/) · [Sato Hub page ↗](https://satohub.ai/resources/robinhood-trading-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `robinhood-trading-mcp`. https://satohub.ai/resources/robinhood-trading-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
