---
title: "Santiment MCP — Sato Hub index"
description: "Official OAuth-backed Santiment MCP for on-chain, social, and financial crypto metrics."
canonical: "https://satohub.ai/resources/santiment-mcp"
canonical_url: "https://satohub.ai/resources/santiment-mcp"
layout: "default"
page_type: "listing"
item_name: "Santiment MCP"
software_url: "https://santiment.net"
application_category: "MCP"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Santiment MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/santiment-mcp"
---

# Santiment MCP

Official OAuth-backed Santiment MCP for on-chain, social, and financial crypto metrics.

Sato Score: **⬡ 62** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** data
- **Creator:** Santiment
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted API (Remote MCP, OAuth 2.0 PKCE)
- **Works with:** Claude.ai, Claude Desktop, Claude Code CLI, ChatGPT

## Deploy spec

```sh
claude mcp add santiment --transport http https://api.santiment.net/mcp
```

- **Entry:** Remote MCP server URL https://api.santiment.net/mcp (add as custom connector; name "Santiment")
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** Santiment account; OAuth 2.0 authorization-code flow with PKCE on first use (no keys in config)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 59.7% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://santiment.net) · [Docs](https://academy.santiment.net/mcp-connector/) · [Sato Hub page ↗](https://satohub.ai/resources/santiment-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `santiment-mcp`. https://satohub.ai/resources/santiment-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
