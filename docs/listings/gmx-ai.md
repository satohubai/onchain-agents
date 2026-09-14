---
title: "GMX AI — Sato Hub index"
description: "Official GMX V2 skill repo for perp trading and liquidity-pool operations via agent."
canonical: "https://satohub.ai/resources/gmx-ai"
canonical_url: "https://satohub.ai/resources/gmx-ai"
layout: "default"
page_type: "listing"
item_name: "GMX AI"
code_repository: "https://github.com/gmx-io/gmx-ai"
software_url: "https://github.com/gmx-io/gmx-ai"
application_category: "Skill Repo"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-03-20"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "GMX AI"
    url: "https://satohubai.github.io/onchain-agents/listings/gmx-ai"
---

# GMX AI

Official GMX V2 skill repo for perp trading and liquidity-pool operations via agent.

Sato Score: **⬡ 59** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Arbitrum, Avalanche
- **Interfaces:** sdk, rest-api, plugin
- **Use cases:** trading, build
- **Creator:** GMX
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 8
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
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/gmx-io/gmx-ai) · [Docs](https://docs.gmx.io) · [GitHub](https://github.com/gmx-io/gmx-ai) · [Sato Hub page ↗](https://satohub.ai/resources/gmx-ai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `gmx-ai`. https://satohub.ai/resources/gmx-ai — retrieved 2026-09-14.

[← All layers](../index.md)
