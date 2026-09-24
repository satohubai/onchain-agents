---
title: "DefiLlama — Sato Hub index"
description: "Open DeFi analytics dashboard and free API tracking TVL, fees, revenue, volume, and yields across many chains and protocols."
canonical: "https://satohub.ai/resources/defillama"
layout: "default"
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
- **Activity:** Active — last activity 1 day ago
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
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 31.9% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://defillama.com/) · [Docs](https://api-docs.defillama.com/) · [GitHub](https://github.com/DefiLlama) · [Sato Hub page ↗](https://satohub.ai/resources/defillama?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `defillama`. https://satohub.ai/resources/defillama — retrieved 2026-09-24.

[← All layers](../index.md)
