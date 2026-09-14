---
title: "Aevo — Sato Hub index"
description: "Decentralized options and perpetuals exchange on a custom OP Stack L2 with REST and WebSocket APIs."
canonical: "https://satohub.ai/resources/aevo"
canonical_url: "https://satohub.ai/resources/aevo"
layout: "default"
page_type: "listing"
item_name: "Aevo"
software_url: "https://www.aevo.xyz/"
application_category: "Trading Tool"
application_subcategory: "Perps & Options DEX"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Aevo"
    url: "https://satohubai.github.io/onchain-agents/listings/aevo"
---

# Aevo

Decentralized options and perpetuals exchange on a custom OP Stack L2 with REST and WebSocket APIs.

Sato Score: **⬡ 46** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Optimism, Ethereum
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, contract
- **Use cases:** trading, security
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** API, MCP server
- **Works with:** REST API, WebSocket API, MCP

## Deploy spec

```sh
virtualenv -p python3 .venv
source .venv/bin/activate
pip install -r requirements.txt
```

- **Entry:** from client import AevoClient; client = AevoClient(signing_key="", wallet_address="", api_key="", api_secret="", env="testnet")
- **Runtime:** Python 3 (virtualenv + requirements.txt, from the aevo-sdk repo)
- **Requires:** signing_key (private key used to sign orders — custody risk), wallet_address (Ethereum account address), api_key + api_secret (account API credentials), env (testnet or mainnet)
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.aevo.xyz/) · [Docs](https://docs.aevo.xyz/) · [Sato Hub page ↗](https://satohub.ai/resources/aevo?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `aevo`. https://satohub.ai/resources/aevo — retrieved 2026-09-14.

[← All layers](../index.md)
