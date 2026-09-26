---
title: "Injective Agents — Sato Hub index"
description: "A platform for deploying autonomous AI trading agents on Injective with onchain identity, order-book trading, and MCP framework support."
canonical: "https://satohub.ai/resources/injective-agents"
layout: "default"
---

# Injective Agents

A platform for deploying autonomous AI trading agents on Injective with onchain identity, order-book trading, and MCP framework support.

Sato Score: **⬡ 58** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Type:** Framework
- **Chains:** Injective, Cosmos
- **Standards:** erc-8004, mcp
- **Interfaces:** sdk, mcp
- **Use cases:** trading, payments, data, identity, build
- **Creator:** Injective Labs
- **Open source:** Partial
- **Status:** Active
- **Activity:** Dormant — last activity 18 months ago
- **GitHub stars:** 46
- **Deploys as:** Self-hosted, Docker, MCP server
- **Works with:** OpenAI, Injective MCP Server, Helix, Injective Trader SDK, LangChain, CrewAI, Exchange Precompile

## Deploy spec

```sh
git clone https://github.com/InjectiveLabs/iAgent.git
cd iAgent
pip install -r requirements.txt
```

- **Entry:** python agent_server.py --port 5000 (server); python quickstart.py --url http://0.0.0.0:5000 (client)
- **Runtime:** Python >=3.12
- **Requires:** OPENAI_API_KEY (requires gpt-4o model access)
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 74 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://agents.injective.com) · [Docs](https://agents.injective.com/registry) · [GitHub](https://github.com/InjectiveLabs/iAgent) · [Sato Hub page ↗](https://satohub.ai/resources/injective-agents?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `injective-agents`. https://satohub.ai/resources/injective-agents — retrieved 2026-09-26.

[← All layers](../index.md)
