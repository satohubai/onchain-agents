---
title: "KuCoin Skills Hub — Sato Hub index"
description: "Official KuCoin skills giving agents read-only access to spot, margin, futures, and account data."
canonical: "https://satohub.ai/resources/kucoin-skills-hub"
layout: "default"
---

# KuCoin Skills Hub

Official KuCoin skills giving agents read-only access to spot, margin, futures, and account data.

Sato Score: **⬡ 49** (Medium), -1 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Unknown
- **Interfaces:** rest-api, plugin
- **Use cases:** trading, data, build
- **Creator:** KuCoin
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 27
- **Deploys as:** npx (skills CLI install)

## Deploy spec

```sh
npx skills add https://github.com/Kucoin/kucoin-skills-hub --full-depth
```

- **Entry:** npx skills add https://github.com/Kucoin/kucoin-skills-hub --full-depth --skill spot (or margin-trading/futures-trading/assets/earn/convert/broker) — read-only GET endpoints only
- **Runtime:** node
- **Requires:** KuCoin API key (for account-specific reads like balances/orders; public market data is keyless)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 98.6% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/Kucoin/kucoin-skills-hub) · [GitHub](https://github.com/Kucoin/kucoin-skills-hub) · [Sato Hub page ↗](https://satohub.ai/resources/kucoin-skills-hub?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `kucoin-skills-hub`. https://satohub.ai/resources/kucoin-skills-hub — retrieved 2026-09-24.

[← All layers](../index.md)
