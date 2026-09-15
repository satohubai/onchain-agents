---
title: "Enso — Sato Hub index"
description: "An intent-based onchain execution engine and API that lets developers and agents bundle multi-step DeFi actions into a single transaction."
canonical: "https://satohub.ai/resources/enso-shortcuts"
canonical_url: "https://satohub.ai/resources/enso-shortcuts"
layout: "default"
page_type: "listing"
item_name: "Enso"
code_repository: "https://github.com/EnsoBuild/sdk-ts"
software_url: "https://www.enso.build/"
application_category: "API / SDK"
application_subcategory: "Intent-based DeFi execution engine"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-07-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Onchain action kits & SDKs"
    url: "https://satohubai.github.io/onchain-agents/categories/action-kits"
  - name: "Enso"
    url: "https://satohubai.github.io/onchain-agents/listings/enso-shortcuts"
---

# Enso

An intent-based onchain execution engine and API that lets developers and agents bundle multi-step DeFi actions into a single transaction.

Sato Score: **⬡ 70** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Arbitrum, Optimism, Polygon, Multichain
- **Interfaces:** sdk, rest-api
- **Use cases:** trading, build
- **Creator:** Enso
- **Open source:** Partial
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 2
- **Deploys as:** npm, API
- **Works with:** Aave V3, Uniswap, Morpho, LayerZero, Stargate, CCTP, CCIP

## Deploy spec

```sh
npm install @ensofinance/sdk
```

- **Entry:** import { EnsoClient } from "@ensofinance/sdk"; const ensoClient = new EnsoClient({ apiKey: "YOUR_API_KEY" }); // discover chains at runtime: await ensoClient.getNetworks()
- **Runtime:** Node.js / TypeScript
- **Requires:** an Enso API key
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 100% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.enso.build/) · [Docs](https://docs.enso.build/) · [GitHub](https://github.com/EnsoBuild/sdk-ts) · [Sato Hub page ↗](https://satohub.ai/resources/enso-shortcuts?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `enso-shortcuts`. https://satohub.ai/resources/enso-shortcuts — retrieved 2026-09-15.

[← All layers](../index.md)
