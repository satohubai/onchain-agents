---
title: "1inch Business MCP — Sato Hub index"
description: "Official 1inch MCP: docs search, code examples, and Business API access for swaps, portfolio, and pricing."
canonical: "https://satohub.ai/resources/oneinch-mcp"
canonical_url: "https://satohub.ai/resources/oneinch-mcp"
layout: "default"
page_type: "listing"
item_name: "1inch Business MCP"
software_url: "https://business.1inch.com/1inch-mcp"
application_category: "MCP"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-15"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "1inch Business MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/oneinch-mcp"
---

# 1inch Business MCP

Official 1inch MCP: docs search, code examples, and Business API access for swaps, portfolio, and pricing.

Sato Score: **⬡ 50** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, data
- **Creator:** 1inch
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted API, MCP + AI Skills (API key or OAuth)
- **Works with:** Cursor, VS Code, Claude Desktop, Claude Code, OpenAI Codex, Windsurf, JetBrains IDEs, Gemini CLI

## Deploy spec

```sh
claude mcp add --transport http --scope user 1inch-business https://api.1inch.com/mcp/protocol
```

- **Entry:** {"mcpServers": {"1inch-business": {"url": "https://api.1inch.com/mcp/protocol"}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** 1inch Business Portal API key passed as Authorization: Bearer header (needed for protected swaps and Business API calls)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://business.1inch.com/1inch-mcp) · [Docs](https://business.1inch.com/1inch-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/oneinch-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `oneinch-mcp`. https://satohub.ai/resources/oneinch-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
