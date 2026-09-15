---
title: "Mina MCP Server — Sato Hub index"
description: "Official Mina Protocol MCP server for Mina blockchain tooling and developer workflows."
canonical: "https://satohub.ai/resources/mina-mcp"
canonical_url: "https://satohub.ai/resources/mina-mcp"
layout: "default"
page_type: "listing"
item_name: "Mina MCP Server"
code_repository: "https://github.com/MinaProtocol/mina-mcp-server"
software_url: "https://minaprotocol.com"
application_category: "MCP"
operating_system: "Any"
license_url: "https://www.apache.org/licenses/LICENSE-2.0"
license_name: "Apache-2.0"
date_modified: "2026-06-18"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Mina MCP Server"
    url: "https://satohubai.github.io/onchain-agents/listings/mina-mcp"
---

# Mina MCP Server

Official Mina Protocol MCP server for Mina blockchain tooling and developer workflows.

Sato Score: **⬡ 68** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** privacy
- **Creator:** Mina Protocol
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 0
- **Deploys as:** npm

## Deploy spec

```sh
npx @o1-labs/mina-mcp-server --mode live --network devnet
```

- **Entry:** npx @o1-labs/mina-mcp-server --mode live --network devnet (stdio MCP; live mode needs no local infra — swap --network for mainnet/mesa)
- **Runtime:** node
- **Requires:** Private key only if using --wallets to send transactions; read-only live mode needs nothing
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 93.7% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://minaprotocol.com) · [GitHub](https://github.com/MinaProtocol/mina-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/mina-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `mina-mcp`. https://satohub.ai/resources/mina-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
