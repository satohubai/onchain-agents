---
title: "RWA Pipe MCP — Sato Hub index"
description: "MCP server for tokenized real-world asset data: RWA token discovery, TVL/APY, issuer and chain filters, and wallet holdings."
canonical: "https://satohub.ai/resources/rwa-pipe-mcp"
canonical_url: "https://satohub.ai/resources/rwa-pipe-mcp"
layout: "default"
page_type: "listing"
item_name: "RWA Pipe MCP"
code_repository: "https://github.com/rwapipe/mcp"
software_url: "https://github.com/rwapipe/mcp"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-04-30"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "RWA Pipe MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/rwa-pipe-mcp"
---

# RWA Pipe MCP

MCP server for tokenized real-world asset data: RWA token discovery, TVL/APY, issuer and chain filters, and wallet holdings.

Sato Score: **⬡ 32** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** wallets, data
- **Open source:** Unknown
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 0
- **Deploys as:** npm
- **Works with:** Claude Desktop, Cursor, Continue

## Deploy spec

```sh
npx rwapipe-mcp
```

- **Entry:** npx rwapipe-mcp (stdio); MCP_MODE=sse MCP_PORT=3001 npm start (hosted/SSE)
- **Runtime:** Node.js (implied by npx usage; version not stated)
- **Requires:** RWAPIPE_API_KEY (free tier, no credit card, 100 req/min — get at https://rwapipe.com/register), RWAPIPE_API_URL (optional, default https://rwapipe.com/api), MCP_MODE (optional, default stdio), MCP_PORT (optional, default 3001)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 8.1% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/rwapipe/mcp) · [GitHub](https://github.com/rwapipe/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/rwa-pipe-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `rwa-pipe-mcp`. https://satohub.ai/resources/rwa-pipe-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
