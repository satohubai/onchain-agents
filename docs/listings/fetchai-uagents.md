---
title: "Fetch.ai uAgents — Sato Hub index"
description: "Python framework for lightweight autonomous agents with built-in crypto-economic features."
canonical: "https://satohub.ai/resources/fetchai-uagents"
layout: "default"
---

# Fetch.ai uAgents

Python framework for lightweight autonomous agents with built-in crypto-economic features.

Sato Score: **⬡ 87** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Type:** Framework
- **Chains:** Cosmos, Ethereum
- **Interfaces:** sdk
- **Use cases:** data, build
- **Creator:** Fetch.ai
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity today
- **GitHub stars:** 1.6k
- **Deploys as:** pip, Self-hosted
- **Works with:** Agentverse, ASI:One, crewAI, Almanac

## Deploy spec

```sh
pip install uagents
```

- **Entry:** from uagents import Agent, Context agent = Agent(name="alice", seed="<recovery phrase>") @agent.on_interval(period=2.0) async def hello(ctx: Context): ctx.logger.info('hi') agent.run()
- **Runtime:** Python 3.10–3.13
- **Requires:** optional seed phrase to pin the agent address/wallet (else a key is written to private_keys.json)
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://fetch.ai) · [Docs](https://fetch.ai/docs) · [GitHub](https://github.com/fetchai/uAgents) · [Sato Hub page ↗](https://satohub.ai/resources/fetchai-uagents?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `fetchai-uagents`. https://satohub.ai/resources/fetchai-uagents — retrieved 2026-09-24.

[← All layers](../index.md)
