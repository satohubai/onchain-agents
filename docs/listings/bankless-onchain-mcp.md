---
title: "Bankless Onchain MCP — Sato Hub index"
description: "MCP server providing AI assistants read access to onchain data via the Bankless API."
canonical: "https://satohub.ai/resources/bankless-onchain-mcp"
canonical_url: "https://satohub.ai/resources/bankless-onchain-mcp"
layout: "default"
page_type: "listing"
item_name: "Bankless Onchain MCP"
code_repository: "https://github.com/bankless/onchain-mcp"
software_url: "https://github.com/bankless/onchain-mcp"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-05-05"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Bankless Onchain MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/bankless-onchain-mcp"
---

# Bankless Onchain MCP

MCP server providing AI assistants read access to onchain data via the Bankless API.

Sato Score: **⬡ 70** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** data
- **Creator:** Bankless
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 80
- **Deploys as:** npm, MCP server, Self-hosted
- **Works with:** Model Context Protocol (MCP), Bankless API

## Deploy spec

```sh
npx -y @bankless/onchain-mcp
```

- **Entry:** { "mcpServers": { "bankless": { "command": "npx", "args": ["@bankless/onchain-mcp"], "env": { "BANKLESS_API_TOKEN": "..." } } } }
- **Runtime:** Node.js >=18
- **Requires:** BANKLESS_API_TOKEN (read-only — no wallet/private key)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/bankless/onchain-mcp) · [Docs](https://docs.bankless.com/bankless-api/other-services/onchain-mcp) · [GitHub](https://github.com/bankless/onchain-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/bankless-onchain-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bankless-onchain-mcp`. https://satohub.ai/resources/bankless-onchain-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
