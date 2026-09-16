---
title: "PMXT — Sato Hub index"
description: "Open-source unified prediction-market API with a hosted MCP: market search, events, order books, and prices across venues."
canonical: "https://satohub.ai/resources/pmxt"
canonical_url: "https://satohub.ai/resources/pmxt"
layout: "default"
page_type: "listing"
item_name: "PMXT"
code_repository: "https://github.com/pmxt-dev/pmxt"
software_url: "https://github.com/pmxt-dev/pmxt"
application_category: "API / SDK"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-07-18"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Onchain action kits & SDKs"
    url: "https://satohubai.github.io/onchain-agents/categories/action-kits"
  - name: "PMXT"
    url: "https://satohubai.github.io/onchain-agents/listings/pmxt"
---

# PMXT

Open-source unified prediction-market API with a hosted MCP: market search, events, order books, and prices across venues.

Sato Score: **⬡ 63** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, sdk, rest-api
- **Use cases:** data, build
- **Creator:** pmxt-dev
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 2.1k

## Deploy spec

```sh
npx -y @pmxt/mcp
```

- **Entry:** See github.com/pmxt-dev/pmxt-mcp for Claude/Cursor MCP client config.
- **Runtime:** node
- **Requires:** pmxt_api_key + wallet_address (pmxt.dev/dashboard) for read access, private_key additionally required for trade execution — the SDK auto-wraps it into an EIP-712 signer, so treat as a hot-wallet key
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/pmxt-dev/pmxt) · [GitHub](https://github.com/pmxt-dev/pmxt) · [Sato Hub page ↗](https://satohub.ai/resources/pmxt?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `pmxt`. https://satohub.ai/resources/pmxt — retrieved 2026-09-16.

[← All layers](../index.md)
