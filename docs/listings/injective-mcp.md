---
title: "Injective MCP — Sato Hub index"
description: "Official Injective MCP for natural-language queries and trading, incl. spot and perpetual futures."
canonical: "https://satohub.ai/resources/injective-mcp"
canonical_url: "https://satohub.ai/resources/injective-mcp"
layout: "default"
page_type: "listing"
item_name: "Injective MCP"
software_url: "https://injective.com"
application_category: "MCP"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Injective MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/injective-mcp"
---

# Injective MCP

Official Injective MCP for natural-language queries and trading, incl. spot and perpetual futures.

Sato Score: **⬡ 48** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Injective
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** trading, data
- **Creator:** Injective Labs
- **Open source:** Yes
- **Status:** Active
- **Deploys as:** npm (local stdio, git clone + build)
- **Works with:** Claude Desktop

## Deploy spec

```sh
git clone https://github.com/InjectiveLabs/mcp-server injective-mcp-server
cd injective-mcp-server
npm install && npm run build
```

- **Entry:** {"mcpServers": {"injective": {"command": "node", "args": ["/path/to/injective-mcp-server/dist/mcp/server.js"], "env": {"INJECTIVE_NETWORK": "mainnet"}}}}
- **Runtime:** Node.js >=22 (build from source)
- **Requires:** INJECTIVE_NETWORK=mainnet, Node.js v22+ on PATH
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://injective.com) · [Docs](https://docs.injective.network/developers-ai/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/injective-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `injective-mcp`. https://satohub.ai/resources/injective-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
