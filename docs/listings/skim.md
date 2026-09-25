---
title: "Skim — Sato Hub index"
description: "Skim is a data service for agents on Base."
canonical: "https://satohub.ai/resources/skim"
layout: "default"
---

# Skim

Skim is a data service for agents on Base.

Sato Score: **⬡ 85** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Base
- **Standards:** mcp, x402
- **Interfaces:** mcp, api
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity 24 days ago
- **GitHub stars:** 2

## Deploy spec

```sh
npx -y skim-mcp
```

- **Entry:** {"mcpServers":{"skim":{"command":"npx","args":["-y","skim-mcp"],"env":{"SKIM_API_KEY":"sk402_..."}}}}
- **Runtime:** Node.js >=18
- **Requires:** SKIM_API_KEY (card-plan key from skim402.com) — OR — SKIM_WALLET_PRIVATE_KEY for x402 pay-per-call in USDC on Base (use a dedicated hot wallet)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-25

## What we checked

- Install reproduced in an isolated container on 2026-09-25.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://skim402.com) · [Docs](https://skim402.com/docs) · [GitHub](https://github.com/JessieJanie/skim402) · [Sato Hub page ↗](https://satohub.ai/resources/skim?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `skim`. https://satohub.ai/resources/skim — retrieved 2026-09-25.

[← All layers](../index.md)
