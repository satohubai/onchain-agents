---
title: "Circle Skills — Sato Hub index"
description: "Official Circle skill repo for USDC payments, cross-chain transfers, and wallet integration."
canonical: "https://satohub.ai/resources/circle-skills"
layout: "default"
---

# Circle Skills

Official Circle skill repo for USDC payments, cross-chain transfers, and wallet integration.

Sato Score: **⬡ 68** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, plugin, contract
- **Use cases:** payments, wallets, build
- **Creator:** Circle
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 148
- **Deploys as:** npm, Claude Code plugin
- **Works with:** Claude Code

## Deploy spec

```sh
npx skills add circlefin/skills
```

- **Entry:** Claude Code: /plugin marketplace add circlefin/skills then /plugin install circle-skills@circle — loads use-usdc, bridge-stablecoin, use-agent-wallet, pay-via-agent-wallet, use-gateway, etc.
- **Runtime:** node
- **Requires:** Circle agent wallet + USDC funding for any skill that actually moves money (skills themselves are guidance/patterns, keyless to install)
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/circlefin/skills) · [Docs](https://developers.circle.com) · [GitHub](https://github.com/circlefin/skills) · [Sato Hub page ↗](https://satohub.ai/resources/circle-skills?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `circle-skills`. https://satohub.ai/resources/circle-skills — retrieved 2026-09-23.

[← All layers](../index.md)
