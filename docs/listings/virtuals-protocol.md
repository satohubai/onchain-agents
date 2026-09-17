---
title: "Virtuals Protocol — Sato Hub index"
description: "Launchpad and protocol for creating and tokenizing AI agents, primarily on Base."
canonical: "https://satohub.ai/resources/virtuals-protocol"
layout: "default"
---

# Virtuals Protocol

Launchpad and protocol for creating and tokenizing AI agents, primarily on Base.

Sato Score: **⬡ 78** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Launchpad
- **Type:** Venue
- **Chains:** Base, Solana, Robinhood Chain
- **Interfaces:** contract
- **Use cases:** trading, launch
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity 2 days ago
- **Deploys as:** Hosted
- **Works with:** Uniswap V2, Agent Commerce Protocol (ACP)

## Deploy spec

```sh
npm install @virtuals-protocol/game
```

- **Entry:** import { GameAgent } from '@virtuals-protocol/game'; const agent = new GameAgent('YOUR_API_KEY', { name, goal, description, getAgentState, workers }); await agent.init(); await agent.run();
- **Runtime:** Node.js (also Python: game-sdk)
- **Requires:** a GAME API key (console.game.virtuals.io)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://virtuals.io) · [Docs](https://whitepaper.virtuals.io) · [GitHub](https://github.com/Virtual-Protocol) · [Sato Hub page ↗](https://satohub.ai/resources/virtuals-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `virtuals-protocol`. https://satohub.ai/resources/virtuals-protocol — retrieved 2026-09-17.

[← All layers](../index.md)
