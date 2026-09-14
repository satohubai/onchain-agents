---
title: "Giza (ARMA) — Sato Hub index"
description: "ARMA is Giza's autonomous agent that manages stablecoin lending positions across Base DeFi protocols on the user's behalf."
canonical: "https://satohub.ai/resources/giza-arma"
canonical_url: "https://satohub.ai/resources/giza-arma"
layout: "default"
page_type: "listing"
item_name: "Giza (ARMA)"
software_url: "https://www.gizatech.xyz/"
application_category: "Onchain Agent"
application_subcategory: "Autonomous stablecoin yield agent"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Onchain action kits & SDKs"
    url: "https://satohubai.github.io/onchain-agents/categories/action-kits"
  - name: "Giza (ARMA)"
    url: "https://satohubai.github.io/onchain-agents/listings/giza-arma"
---

# Giza (ARMA)

ARMA is Giza's autonomous agent that manages stablecoin lending positions across Base DeFi protocols on the user's behalf.

Sato Score: **⬡ 37** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Onchain Agent
- **Type:** Framework
- **Chains:** Base
- **Interfaces:** sdk
- **Use cases:** trading, payments, security
- **Creator:** Gizatech AG
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted

## Deploy spec

```sh
npm install @gizatech/agent-sdk
yarn add @gizatech/agent-sdk
bun add @gizatech/agent-sdk
```

- **Entry:** import { Giza, Chain } from '@gizatech/agent-sdk'; const giza = new Giza({ chain: Chain.BASE });
- **Runtime:** Node.js (npm package)
- **Requires:** GIZA_API_KEY (partner API key), GIZA_API_URL (Giza backend URL), GIZA_PARTNER_NAME (partner identifier)
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.gizatech.xyz/) · [Sato Hub page ↗](https://satohub.ai/resources/giza-arma?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `giza-arma`. https://satohub.ai/resources/giza-arma — retrieved 2026-09-14.

[← All layers](../index.md)
