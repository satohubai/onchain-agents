---
title: "GMX — Sato Hub index"
description: "Decentralized spot and perpetual exchange on Arbitrum and Avalanche with an official SDK and REST API."
canonical: "https://satohub.ai/resources/gmx"
canonical_url: "https://satohub.ai/resources/gmx"
layout: "default"
page_type: "listing"
item_name: "GMX"
code_repository: "https://github.com/gmx-io"
software_url: "https://gmx.io/"
application_category: "Trading Tool"
application_subcategory: "Perps DEX"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-09"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Trading & DeFi venues"
    url: "https://satohubai.github.io/onchain-agents/categories/trading-venues"
  - name: "GMX"
    url: "https://satohubai.github.io/onchain-agents/listings/gmx"
---

# GMX

Decentralized spot and perpetual exchange on Arbitrum and Avalanche with an official SDK and REST API.

Sato Score: **⬡ 69** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Arbitrum, Avalanche
- **Interfaces:** sdk, rest-api, contract
- **Use cases:** trading, data, security, build
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity 5 days ago

## Deploy spec

```sh
npx skills add gmx-io/gmx-ai
```

- **Entry:** Claude Code plugin marketplace: /plugin marketplace add gmx-io/gmx-ai then /plugin install gmx-io@gmx-ai — installs the gmx-trading and gmx-liquidity agent skills (full TypeScript SDK @gmx-io/sdk + REST/Oracle/GraphQL endpoint reference)
- **Runtime:** node
- **Requires:** Wallet private key/signer to execute trades or liquidity ops via @gmx-io/sdk (the skill pack itself is read-only reference material)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://gmx.io/) · [Docs](https://docs.gmx.io/) · [GitHub](https://github.com/gmx-io) · [Sato Hub page ↗](https://satohub.ai/resources/gmx?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `gmx`. https://satohub.ai/resources/gmx — retrieved 2026-09-14.

[← All layers](../index.md)
