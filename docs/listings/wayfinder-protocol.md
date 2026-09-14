---
title: "Wayfinder — Sato Hub index"
description: "Omnichain protocol that lets AI agents navigate blockchains and execute transactions via natural-language 'Paths'."
canonical: "https://satohub.ai/resources/wayfinder-protocol"
canonical_url: "https://satohub.ai/resources/wayfinder-protocol"
layout: "default"
page_type: "listing"
item_name: "Wayfinder"
software_url: "https://wayfinder.ai"
application_category: "Agent Framework"
application_subcategory: "Omnichain agent navigation protocol"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Agent runtimes & frameworks"
    url: "https://satohubai.github.io/onchain-agents/categories/agent-frameworks"
  - name: "Wayfinder"
    url: "https://satohubai.github.io/onchain-agents/listings/wayfinder-protocol"
---

# Wayfinder

Omnichain protocol that lets AI agents navigate blockchains and execute transactions via natural-language 'Paths'.

Sato Score: **⬡ 51** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Type:** Framework
- **Chains:** Multichain, Arbitrum, Base, Hyperliquid
- **Interfaces:** sdk
- **Use cases:** wallets, security, build
- **Creator:** Wayfinder Foundation
- **Open source:** Partial
- **Status:** Beta
- **Deploys as:** Hosted, SDK, CLI, MCP server
- **Works with:** Aave V3, Aerodrome, Uniswap V3, Hyperliquid, Polymarket, Morpho, Pendle, MCP, OpenClaw

## Deploy spec

```sh
git clone https://github.com/WayfinderFoundation/wayfinder-paths-sdk
cd wayfinder-paths-sdk
python3 scripts/setup.py
```

- **Entry:** poetry run python -m wayfinder_paths.run_strategy STRATEGY_NAME --action status
- **Runtime:** Python 3 (Poetry; repo clone)
- **Requires:** WAYFINDER_API_KEY (from wayfinder.ai Settings; secret), config.json holds RPC URLs and wallet private keys — private-key custody risk; docs say keep this file private
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://wayfinder.ai) · [Docs](https://docs.wayfinder.ai) · [Sato Hub page ↗](https://satohub.ai/resources/wayfinder-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `wayfinder-protocol`. https://satohub.ai/resources/wayfinder-protocol — retrieved 2026-09-14.

[← All layers](../index.md)
