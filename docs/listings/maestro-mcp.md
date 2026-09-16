---
title: "Maestro MCP Server — Sato Hub index"
description: "Official Maestro Bitcoin MCP: indexer, mempool, price, and node RPC data via hosted mainnet/testnet endpoints."
canonical: "https://satohub.ai/resources/maestro-mcp"
canonical_url: "https://satohub.ai/resources/maestro-mcp"
layout: "default"
page_type: "listing"
item_name: "Maestro MCP Server"
code_repository: "https://github.com/maestro-org/maestro-mcp-server"
software_url: "https://www.gomaestro.org"
application_category: "MCP"
operating_system: "Any"
license_url: "https://www.apache.org/licenses/LICENSE-2.0"
license_name: "Apache-2.0"
date_modified: "2026-04-30"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Maestro MCP Server"
    url: "https://satohubai.github.io/onchain-agents/listings/maestro-mcp"
---

# Maestro MCP Server

Official Maestro Bitcoin MCP: indexer, mempool, price, and node RPC data via hosted mainnet/testnet endpoints.

Sato Score: **⬡ 72** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Bitcoin
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** wallets, data
- **Creator:** Maestro
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 24
- **Deploys as:** Hosted API (Streamable HTTP, mainnet + testnet), self-host (Bun runtime)

## Deploy spec

```sh
claude mcp add --transport http maestro-btc https://xbt-mainnet.gomaestro-api.org/v0/mcp
```

- **Entry:** {"mcpServers": {"maestro-btc": {"url": "https://xbt-mainnet.gomaestro-api.org/v0/mcp", "headers": {"api-key": "YOUR_MAESTRO_API_KEY"}}}}
- **Runtime:** remote
- **Requires:** Maestro API key (dashboard.gomaestro.org, free tier available)
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.gomaestro.org) · [Docs](https://docs.gomaestro.org) · [GitHub](https://github.com/maestro-org/maestro-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/maestro-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `maestro-mcp`. https://satohub.ai/resources/maestro-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
