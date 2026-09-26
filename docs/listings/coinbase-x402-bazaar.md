---
title: "Coinbase x402 Bazaar (Discovery API + MCP) — Sato Hub index"
description: "Public, keyless catalog of x402 payment-gated services indexed by the CDP facilitator, searchable by intent via REST, TypeScript SDK or a hosted MCP…"
canonical: "https://satohub.ai/resources/coinbase-x402-bazaar"
layout: "default"
---

# Coinbase x402 Bazaar (Discovery API + MCP)

Public, keyless catalog of x402 payment-gated services indexed by the CDP facilitator, searchable by intent via REST, TypeScript SDK or a hosted MCP server.

Sato Score: **⬡ 71** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Base
- **Standards:** x402, mcp
- **Interfaces:** mcp, rest-api, sdk
- **Use cases:** payments, data
- **Open source:** Partial
- **Status:** Active

## Deploy spec

```sh
npm install @coinbase/cdp-sdk
```

- **Entry:** import { searchX402Resources } from '@coinbase/cdp-sdk'
- **Runtime:** Node.js (TypeScript CDP SDK); also plain REST and a hosted MCP
- **Requires:** Nothing to search the public catalog; paying for a discovered service needs a funded x402 buyer wallet
- **License:** MIT (@coinbase/cdp-sdk)
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-25

## What we checked

- Install reproduced in an isolated container on 2026-09-25.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.coinbase.com/developer-platform/discover/launches/x402-bazaar) · [Docs](https://docs.cdp.coinbase.com/x402/bazaar) · [GitHub](https://github.com/coinbase/x402) · [Sato Hub page ↗](https://satohub.ai/resources/coinbase-x402-bazaar?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `coinbase-x402-bazaar`. https://satohub.ai/resources/coinbase-x402-bazaar — retrieved 2026-09-26.

[← All layers](../index.md)
