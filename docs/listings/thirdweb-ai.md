---
title: "thirdweb AI — Sato Hub index"
description: "Thirdweb's MCP toolkit bundling Nebula, Insight, Engine, and Storage for onchain agent building."
canonical: "https://satohub.ai/resources/thirdweb-ai"
layout: "default"
---

# thirdweb AI

Thirdweb's MCP toolkit bundling Nebula, Insight, Engine, and Storage for onchain agent building.

Sato Score: **⬡ 36** (Low), -25 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, sdk
- **Use cases:** wallets, data, build
- **Creator:** thirdweb
- **Open source:** Yes
- **Status:** Active
- **Activity:** Dormant — last activity 15 months ago
- **GitHub stars:** 18
- **Deploys as:** uvx/pipx (Python MCP server), pip install (Python SDK)
- **Works with:** LangChain, OpenAI Agents, Coinbase AgentKit, GOAT SDK

## Deploy spec

```sh
claude mcp add --transport http "thirdweb-api" "https://api.thirdweb.com/mcp?secretKey=YOUR_SECRET_KEY_HERE"
```

- **Entry:** Remote MCP endpoint https://api.thirdweb.com/mcp?secretKey=<your-project-secret-key> (optional &tools=<comma-separated tool names> to limit the tool set)
- **Runtime:** remote
- **Requires:** thirdweb project secret key, passed as the secretKey query parameter in the endpoint URL
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-09-26

## What we checked

- Live endpoint probed by us: 98.7% of our checks succeeded over 76 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://portal.thirdweb.com/) · [Docs](https://portal.thirdweb.com/) · [Sato Hub page ↗](https://satohub.ai/resources/thirdweb-ai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `thirdweb-ai`. https://satohub.ai/resources/thirdweb-ai — retrieved 2026-09-28.

[← All layers](../index.md)
