---
title: "Fetch.ai uAgents — Sato Hub index"
description: "Python framework for lightweight autonomous agents with built-in crypto-economic features."
canonical: "https://satohub.ai/resources/fetchai-uagents"
canonical_url: "https://satohub.ai/resources/fetchai-uagents"
layout: "default"
page_type: "listing"
item_name: "Fetch.ai uAgents"
code_repository: "https://github.com/fetchai/uAgents"
software_url: "https://fetch.ai"
application_category: "Agent Framework"
operating_system: "Any"
license_url: "https://www.apache.org/licenses/LICENSE-2.0"
license_name: "Apache-2.0"
date_modified: "2026-09-07"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Agent runtimes & frameworks"
    url: "https://satohubai.github.io/onchain-agents/categories/agent-frameworks"
  - name: "Fetch.ai uAgents"
    url: "https://satohubai.github.io/onchain-agents/listings/fetchai-uagents"
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
- **Activity:** Active — last activity 9 days ago
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
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://fetch.ai) · [Docs](https://fetch.ai/docs) · [GitHub](https://github.com/fetchai/uAgents) · [Sato Hub page ↗](https://satohub.ai/resources/fetchai-uagents?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `fetchai-uagents`. https://satohub.ai/resources/fetchai-uagents — retrieved 2026-09-16.

[← All layers](../index.md)
