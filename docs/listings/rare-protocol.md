---
title: "RARE Protocol — Sato Hub index"
description: "CLI toolkit for deploying NFT collections, minting, and running SuperRare-integrated auctions."
canonical: "https://satohub.ai/resources/rare-protocol"
layout: "default"
---

# RARE Protocol

CLI toolkit for deploying NFT collections, minting, and running SuperRare-integrated auctions.

Sato Score: **⬡ 57** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Developer Tool
- **Chains:** Ethereum, Base
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 0

## Deploy spec

```sh
npm install -g @rareprotocol/rare-cli
```

- **Entry:** rare (CLI); SDK imports @rareprotocol/rare-cli/client, /contracts, /utils; MCP: rare mcp serve
- **Runtime:** Node.js >=22 (global npm package)
- **Requires:** PRIVATE_KEY — wallet private key for SDK client usage, stored in plaintext at ~/.rare/config.json per the docs' own warning; high-risk if exposed (docs recommend --private-key-ref via 1Password instead), RPC_URL — RPC endpoint for SDK client usage, RARE_API_BASE_URL — optional, defaults to https://api.superrare.com
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://rare.xyz) · [Docs](https://rare.xyz/docs) · [GitHub](https://github.com/superrare/rare-cli) · [Sato Hub page ↗](https://satohub.ai/resources/rare-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `rare-protocol`. https://satohub.ai/resources/rare-protocol — retrieved 2026-09-21.

[← All layers](../index.md)
