---
title: "Emblem Agent Skills — Sato Hub index"
description: "Skill collection for EmblemAI agents — 200+ crypto tools across seven blockchains."
canonical: "https://satohub.ai/resources/emblem-agent-skills"
layout: "default"
---

# Emblem Agent Skills

Skill collection for EmblemAI agents — 200+ crypto tools across seven blockchains.

Sato Score: **⬡ 71** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Solana, Ethereum, Base, BNB Chain, Polygon, Bitcoin
- **Standards:** x402, erc-8004, mcp, a2a
- **Interfaces:** mcp, plugin
- **Use cases:** trading, payments, wallets, identity, build
- **Creator:** EmblemAI
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 12
- **Deploys as:** npm CLI, MCP server (hosted), A2A agent
- **Works with:** Claude Code, Cursor, Codex, GitHub Copilot, Gemini CLI, ElizaOS, Windsurf

## Deploy spec

```sh
npx skills add EmblemCompany/Agent-skills
npm install -g @emblemvault/agentwallet
claude mcp add --transport http EmblemAI https://emblemvault.ai/api/mcp
```

- **Entry:** npx skills add EmblemCompany/Agent-skills --skill emblem-ai # or hosted MCP: https://emblemvault.ai/api/mcp
- **Runtime:** Agent Skill + Node CLI (@emblemvault/agentwallet) + hosted MCP
- **Requires:** API key (x-api-key) for headless/CI, agent wallet created by the CLI
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://emblemvault.ai) · [Docs](https://emblemvault.ai/docs) · [GitHub](https://github.com/EmblemCompany/Agent-skills) · [Sato Hub page ↗](https://satohub.ai/resources/emblem-agent-skills?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `emblem-agent-skills`. https://satohub.ai/resources/emblem-agent-skills — retrieved 2026-09-26.

[← All layers](../index.md)
