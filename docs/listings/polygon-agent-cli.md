---
title: "Polygon Agent CLI — Sato Hub index"
description: "Official Polygon Labs CLI giving AI agents session-scoped wallets, x402 payments, and ERC-8004 identity in one install."
canonical: "https://satohub.ai/resources/polygon-agent-cli"
layout: "default"
---

# Polygon Agent CLI

Official Polygon Labs CLI giving AI agents session-scoped wallets, x402 payments, and ERC-8004 identity in one install.

Sato Score: **⬡ 59** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Polygon
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 30

## Deploy spec

```sh
npx skills add https://github.com/0xPolygon/polygon-agent-cli
npx @polygonlabs/agent-cli --help
```

- **Entry:** polygon-agent setup --name "MyAgent" (then polygon-agent wallet create / fund / balances / swap)
- **Runtime:** Node.js 20+ (npx CLI / agent skill package)
- **Requires:** SEQUENCE_PROJECT_ACCESS_KEY — Sequence wallet-infra project access key, obtained via `polygon-agent setup`, SEQUENCE_INDEXER_ACCESS_KEY — same value as SEQUENCE_PROJECT_ACCESS_KEY, used for balance/tx indexing
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 60 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://polygon.technology/agent-cli) · [Docs](https://polygon.technology/agent-cli) · [GitHub](https://github.com/0xPolygon/polygon-agent-cli) · [Sato Hub page ↗](https://satohub.ai/resources/polygon-agent-cli?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `polygon-agent-cli`. https://satohub.ai/resources/polygon-agent-cli — retrieved 2026-09-17.

[← All layers](../index.md)
