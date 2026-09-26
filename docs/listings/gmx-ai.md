---
title: "GMX AI — Sato Hub index"
description: "Official GMX V2 skill repo for perp trading and liquidity-pool operations via agent."
canonical: "https://satohub.ai/resources/gmx-ai"
layout: "default"
---

# GMX AI

Official GMX V2 skill repo for perp trading and liquidity-pool operations via agent.

Sato Score: **⬡ 59** (Medium), -1 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Arbitrum, Avalanche
- **Interfaces:** sdk, rest-api, plugin
- **Use cases:** trading, build
- **Creator:** GMX
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 11
- **Deploys as:** npm, Claude Code plugin
- **Works with:** Claude Code

## Deploy spec

```sh
/plugin marketplace add gmx-io/gmx-ai
/plugin install gmx-io@gmx-ai
```

- **Entry:** Claude Code plugin skills (gmx-trading, gmx-liquidity) — pairs with the @gmx-io/sdk npm package for direct TypeScript integration; alt install: `npx skills add gmx-io/gmx-ai`
- **Runtime:** cli
- **Requires:** a funded wallet to sign the trades/LP transactions the skill constructs — the skill itself does not custody funds
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 98.6% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/gmx-io/gmx-ai) · [Docs](https://docs.gmx.io) · [GitHub](https://github.com/gmx-io/gmx-ai) · [Sato Hub page ↗](https://satohub.ai/resources/gmx-ai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `gmx-ai`. https://satohub.ai/resources/gmx-ai — retrieved 2026-09-26.

[← All layers](../index.md)
