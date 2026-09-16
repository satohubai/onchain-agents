---
title: "Chainbase MCP — Sato Hub index"
description: "Official hosted Chainbase MCP for token prices, holders, wallet balances, and NFT data via natural language."
canonical: "https://satohub.ai/resources/chainbase-mcp"
canonical_url: "https://satohub.ai/resources/chainbase-mcp"
layout: "default"
page_type: "listing"
item_name: "Chainbase MCP"
software_url: "https://chainbase.com"
application_category: "MCP"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-16"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Chainbase MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/chainbase-mcp"
---

# Chainbase MCP

Official hosted Chainbase MCP for token prices, holders, wallet balances, and NFT data via natural language.

Sato Score: **⬡ 40** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** wallets, data
- **Creator:** Chainbase
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted API (HTTP transport)
- **Works with:** Claude Desktop, Claude Code, Cursor, Windsurf, Codex

## Deploy spec

```sh
claude mcp add --transport http chainbase https://api.chainbase.com/v1/mcp --header "X-API-KEY: your-actual-api-key"
```

- **Entry:** {"mcpServers": {"chainbase": {"url": "https://api.chainbase.com/v1/mcp", "headers": {"X-API-KEY": "your-actual-api-key"}}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** Chainbase API key (X-API-KEY header; docs note the literal key "demo" works for testing)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://chainbase.com) · [Docs](https://docs.chainbase.com/resources/ai/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/chainbase-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `chainbase-mcp`. https://satohub.ai/resources/chainbase-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
