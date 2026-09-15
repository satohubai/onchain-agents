---
title: "Usenami Funding MCP — Sato Hub index"
description: "MCP server for perp funding rates and cross-exchange data across 20+ venues, including Hyperliquid HIP-3."
canonical: "https://satohub.ai/resources/namixai-funding-mcp"
canonical_url: "https://satohub.ai/resources/namixai-funding-mcp"
layout: "default"
page_type: "listing"
item_name: "Usenami Funding MCP"
code_repository: "https://github.com/namixai/funding-mcp"
software_url: "https://github.com/namixai/funding-mcp"
application_category: "Trading Tool"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-06-16"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Payments & agent commerce"
    url: "https://satohubai.github.io/onchain-agents/categories/payments"
  - name: "Usenami Funding MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/namixai-funding-mcp"
---

# Usenami Funding MCP

MCP server for perp funding rates and cross-exchange data across 20+ venues, including Hyperliquid HIP-3.

Sato Score: **⬡ 53** (Medium), -5 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Chains:** Base, Hyperliquid
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 0

## Deploy spec

```sh
npx -y @usenami/funding-mcp
```

- **Entry:** {"mcpServers": {"usenami-funding": {"command": "npx", "args": ["-y", "@usenami/funding-mcp"]}}}
- **Runtime:** Node.js (npm package, MCP server)
- **Requires:** X402_PRIVATE_KEY — Base wallet key (0x...) holding USDC, enables built-in auto-pay for paid tools; wallet private key, high-risk if exposed, USENAMI_API_BASE — optional, defaults to https://api.usenami.io
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 100% of our checks succeeded over 58 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/namixai/funding-mcp) · [GitHub](https://github.com/namixai/funding-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/namixai-funding-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `namixai-funding-mcp`. https://satohub.ai/resources/namixai-funding-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
