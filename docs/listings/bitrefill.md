---
title: "Bitrefill — Sato Hub index"
description: "Crypto-to-gift-card and mobile top-up commerce platform with a Skills/MCP/API surface for agents to buy real-world goods with stablecoins."
canonical: "https://satohub.ai/resources/bitrefill"
canonical_url: "https://satohub.ai/resources/bitrefill"
layout: "default"
page_type: "listing"
item_name: "Bitrefill"
software_url: "https://www.bitrefill.com/"
application_category: "API / SDK"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-16"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Bitrefill"
    url: "https://satohubai.github.io/onchain-agents/listings/bitrefill"
---

# Bitrefill

Crypto-to-gift-card and mobile top-up commerce platform with a Skills/MCP/API surface for agents to buy real-world goods with stablecoins.

Sato Score: **⬡ 29** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Base, Bitcoin, Ethereum, Solana
- **Open source:** No
- **Status:** Active

## Deploy spec

```sh
/plugin marketplace add bitrefill/agents
/plugin install bitrefill@bitrefill-skills
/reload-plugins
```

- **Entry:** Hosted MCP endpoint https://api.bitrefill.com/mcp (or https://api.bitrefill.com/mcp/$BITREFILL_API_KEY); skills CLI alternative: `npx skills add bitrefill/agents`
- **Runtime:** Agent skills (Claude Code plugin / skills CLI) + hosted MCP endpoint
- **Requires:** BITREFILL_API_KEY (from bitrefill.com/account/developers) — or OAuth sign-in triggered on the first MCP call in Claude Code
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 25.4% of our checks succeeded over 59 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.bitrefill.com/) · [Sato Hub page ↗](https://satohub.ai/resources/bitrefill?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bitrefill`. https://satohub.ai/resources/bitrefill — retrieved 2026-09-16.

[← All layers](../index.md)
