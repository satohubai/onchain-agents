---
title: "BitGo MCP — Sato Hub index"
description: "BitGo's official Developer Portal MCP for natural-language search over its institutional wallet API docs."
canonical: "https://satohub.ai/resources/bitgo-mcp"
canonical_url: "https://satohub.ai/resources/bitgo-mcp"
layout: "default"
page_type: "listing"
item_name: "BitGo MCP"
software_url: "https://www.bitgo.com"
application_category: "MCP"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-15"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "BitGo MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/bitgo-mcp"
---

# BitGo MCP

BitGo's official Developer Portal MCP for natural-language search over its institutional wallet API docs.

Sato Score: **⬡ 61** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, wallets, data
- **Creator:** BitGo
- **Open source:** Unknown
- **Status:** Active

## Deploy spec

```sh
claude mcp add bitgo-docs --transport http https://developers.bitgo.com/mcp
```

- **Entry:** {"mcpServers": {"BitGo Docs": {"type": "http", "url": "https://developers.bitgo.com/mcp"}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** None documented — this server is a documentation assistant over public BitGo docs, not a wallet-control API
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.bitgo.com) · [Docs](https://developers.bitgo.com/docs/get-started-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/bitgo-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bitgo-mcp`. https://satohub.ai/resources/bitgo-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
