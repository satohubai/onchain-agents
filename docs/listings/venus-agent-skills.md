---
title: "Venus Agent Skills — Sato Hub index"
description: "Official Venus Protocol agent-skill toolkit with a lending skill for the Venus money market."
canonical: "https://satohub.ai/resources/venus-agent-skills"
layout: "default"
---

# Venus Agent Skills

Official Venus Protocol agent-skill toolkit with a lending skill for the Venus money market.

Sato Score: **⬡ 47** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** BNB Chain
- **Interfaces:** plugin
- **Use cases:** trading, build
- **Creator:** Venus Protocol
- **Open source:** Unknown
- **Status:** Unknown
- **Deploys as:** npm install (OpenClaw workspace skill)

## Deploy spec

```sh
cd ~/.openclaw/workspace
npm install
```

- **Entry:** node skills/venus-protocol-ops/scripts/flux/lend.js --asset fUSDC --amount 1 --wallet 0xYourWallet (example); also fetch_markets.py, wallet_onchain_exposure.py, venus_deposit.js, venus_withdraw.js, venus_borrow.js, venus_repay.js
- **Runtime:** Node.js and Python (OpenClaw agent skill, not a standalone MCP server)
- **Requires:** Wallet private key (kept in .env/.environment per README — risk: controls funds; broadcast requires explicit --confirm YES flag, defaults to simulation)
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://venus.io) · [Docs](https://github.com/VenusProtocol/venus-agent-skills) · [GitHub](https://github.com/VenusProtocol/venus-agent-skills) · [Sato Hub page ↗](https://satohub.ai/resources/venus-agent-skills?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `venus-agent-skills`. https://satohub.ai/resources/venus-agent-skills — retrieved 2026-09-23.

[← All layers](../index.md)
