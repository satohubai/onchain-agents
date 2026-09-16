---
title: "Boar Blockchain MCP — Sato Hub index"
description: "Blockchain infrastructure MCP from Boar Network, with setup guides and free-tier access paths."
canonical: "https://satohub.ai/resources/boar-blockchain-mcp"
canonical_url: "https://satohub.ai/resources/boar-blockchain-mcp"
layout: "default"
page_type: "listing"
item_name: "Boar Blockchain MCP"
code_repository: "https://github.com/boar-network/blockchain-mcp"
software_url: "https://boar.network"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-04-09"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Boar Blockchain MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/boar-blockchain-mcp"
---

# Boar Blockchain MCP

Blockchain infrastructure MCP from Boar Network, with setup guides and free-tier access paths.

Sato Score: **⬡ 84** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** data
- **Creator:** Boar Network
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 12
- **Deploys as:** Hosted (remote MCP endpoint, no install)
- **Works with:** Claude Desktop, Claude Code, Cursor, OpenCode

## Deploy spec

```sh
claude mcp add boar-blockchain-mcp-basic --transport http --scope project https://mcp.boar.network/basic
```

- **Entry:** {"mcpServers": {"boar-blockchain-mcp-basic": {"type": "streamable-http", "url": "https://mcp.boar.network/basic"}}}
- **Runtime:** remote
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://boar.network) · [Docs](https://github.com/boar-network/blockchain-mcp) · [GitHub](https://github.com/boar-network/blockchain-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/boar-blockchain-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `boar-blockchain-mcp`. https://satohub.ai/resources/boar-blockchain-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
