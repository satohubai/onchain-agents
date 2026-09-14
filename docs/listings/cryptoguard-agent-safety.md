---
title: "CryptoGuard — Sato Hub index"
description: "Intercepts agent transactions and checks them against 5 security oracles before execution."
canonical: "https://satohub.ai/resources/cryptoguard-agent-safety"
canonical_url: "https://satohub.ai/resources/cryptoguard-agent-safety"
layout: "default"
page_type: "listing"
item_name: "CryptoGuard"
code_repository: "https://github.com/momenbasel/CryptoGuard"
software_url: "https://github.com/momenbasel/CryptoGuard"
application_category: "Security Tool"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-04-10"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Security & preflight"
    url: "https://satohubai.github.io/onchain-agents/categories/security"
  - name: "CryptoGuard"
    url: "https://satohubai.github.io/onchain-agents/listings/cryptoguard-agent-safety"
---

# CryptoGuard

Intercepts agent transactions and checks them against 5 security oracles before execution.

Sato Score: **⬡ 46** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Security Tool
- **Chains:** Multichain
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 8

## Deploy spec

```sh
pip install cryptoguard-ai
cryptoguard install-hook
```

- **Entry:** cryptoguard check <ADDRESS> --chain <CHAIN> (CLI); from cryptoguard import analyze (Python); python -m cryptoguard.mcp_server (MCP)
- **Runtime:** Python (pip package, CLI + optional MCP server)
- **Requires:** CRYPTOGUARD_DISABLE — optional, bypasses the hook, default 0, CRYPTOGUARD_CHAIN — optional, default chain, default ethereum, CRYPTOGUARD_THRESHOLD — optional, minimum risk level to block, default HIGH, No API keys required per docs — security oracles used have free public tiers
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/momenbasel/CryptoGuard) · [GitHub](https://github.com/momenbasel/CryptoGuard) · [Sato Hub page ↗](https://satohub.ai/resources/cryptoguard-agent-safety?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cryptoguard-agent-safety`. https://satohub.ai/resources/cryptoguard-agent-safety — retrieved 2026-09-14.

[← All layers](../index.md)
