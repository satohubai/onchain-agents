---
title: "Ionic Protocol — Sato Hub index"
description: "Money-market lending protocol on Base/Mode with a GOAT SDK plugin for agent-driven supply, borrow, and swap actions."
canonical: "https://satohub.ai/resources/ionic-protocol"
layout: "default"
---

# Ionic Protocol

Money-market lending protocol on Base/Mode with a GOAT SDK plugin for agent-driven supply, borrow, and swap actions.

Sato Score: **⬡ 39** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** DeFi Tool
- **Chains:** Multichain
- **Open source:** Partial
- **Status:** Early

## Deploy spec

```sh
git clone --recurse-submodules
yarn
yarn workspace @ionicprotocol/sdk forge install
yarn workspace @ionicprotocol/sdk build
```

- **Entry:** @ionicprotocol/sdk (built from packages/sdk in the monorepo)
- **Runtime:** Node.js 16.x + Yarn + Foundry (monorepo; SDK package @ionicprotocol/sdk)
- **Requires:** packages/sdk/.env file — README says it must be requested from the team, so the setup is not fully self-serve, FORK_RPC_URL and FORK_CHAIN_ID for forked-chain testing
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 86.7% of our checks succeeded over 60 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.ionic.money) · [GitHub](https://github.com/ionicprotocol) · [Sato Hub page ↗](https://satohub.ai/resources/ionic-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `ionic-protocol`. https://satohub.ai/resources/ionic-protocol — retrieved 2026-09-17.

[← All layers](../index.md)
