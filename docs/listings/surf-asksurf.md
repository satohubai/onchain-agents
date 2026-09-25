---
title: "Surf (asksurf.ai) — Sato Hub index"
description: "An installable skill and unified API giving AI agents access to crypto market, on-chain, social, and prediction-market data across 40+ chains."
canonical: "https://satohub.ai/resources/surf-asksurf"
layout: "default"
---

# Surf (asksurf.ai)

An installable skill and unified API giving AI agents access to crypto market, on-chain, social, and prediction-market data across 40+ chains.

Sato Score: **⬡ 74** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, plugin
- **Use cases:** trading, payments, wallets, data, build
- **Creator:** AskSurf
- **Open source:** Partial
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 74
- **Deploys as:** npm, API
- **Works with:** Claude Code, Codex, Surf CLI, MCP

## Deploy spec

```sh
npx skills add asksurf-ai/surf-skills --skill surf
npm install -g surf-cli
```

- **Entry:** surf auth --api-key <key>   # optional, 30 free credits/day without surf market-price --symbol BTC -o json
- **Runtime:** Node CLI (surf-cli) + Agent Skill over a hosted data API
- **Requires:** optional Surf API key (30 free credits/day without one)
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://asksurf.ai/) · [Docs](https://agents.asksurf.ai/docs) · [GitHub](https://github.com/asksurf-ai/surf-skills) · [Sato Hub page ↗](https://satohub.ai/resources/surf-asksurf?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `surf-asksurf`. https://satohub.ai/resources/surf-asksurf — retrieved 2026-09-25.

[← All layers](../index.md)
