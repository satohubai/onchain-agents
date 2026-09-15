---
title: "DefiLlama — Sato Hub index"
description: "Open DeFi analytics dashboard and free API tracking TVL, fees, revenue, volume, and yields across many chains and protocols."
canonical: "https://satohub.ai/resources/defillama"
canonical_url: "https://satohub.ai/resources/defillama"
layout: "default"
page_type: "listing"
item_name: "DefiLlama"
code_repository: "https://github.com/DefiLlama"
software_url: "https://defillama.com/"
application_category: "Data Tool"
application_subcategory: "DeFi TVL & analytics"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-11"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Data, RPC & indexing"
    url: "https://satohubai.github.io/onchain-agents/categories/data-rpc"
  - name: "DefiLlama"
    url: "https://satohubai.github.io/onchain-agents/listings/defillama"
---

# DefiLlama

Open DeFi analytics dashboard and free API tracking TVL, fees, revenue, volume, and yields across many chains and protocols.

Sato Score: **⬡ 75** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Solana, Arbitrum, Optimism, Polygon, Avalanche, BNB Chain, Multichain
- **Interfaces:** rest-api, ui
- **Use cases:** trading, payments, data
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 3 days ago
- **Deploys as:** API

## Deploy spec

```sh
pip install defillama-sdk
# hosted MCP: https://mcp.defillama.com/mcp
# raw: curl https://api.llama.fi/protocols
```

- **Entry:** import defillama_sdk   # Python SDK # or raw (free, no key): GET https://api.llama.fi/protocols # or hosted MCP: add https://mcp.defillama.com/mcp to your client
- **Runtime:** Raw HTTP API (no key) + Python/npm SDKs + hosted MCP
- **Requires:** nothing for the free tier (no key), a Pro-tier key for pro-api.llama.fi
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 22.2% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://defillama.com/) · [Docs](https://api-docs.defillama.com/) · [GitHub](https://github.com/DefiLlama) · [Sato Hub page ↗](https://satohub.ai/resources/defillama?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `defillama`. https://satohub.ai/resources/defillama — retrieved 2026-09-15.

[← All layers](../index.md)
