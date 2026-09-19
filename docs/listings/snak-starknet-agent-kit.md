---
title: "Snak (Starknet Agent Kit) — Sato Hub index"
description: "NestJS-based toolkit for building AI agents that interact with Starknet, supporting multiple LLM providers."
canonical: "https://satohub.ai/resources/snak-starknet-agent-kit"
layout: "default"
---

# Snak (Starknet Agent Kit)

NestJS-based toolkit for building AI agents that interact with Starknet, supporting multiple LLM providers.

Sato Score: **⬡ 59** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Chains:** Starknet
- **Creator:** KasarLabs
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 10 months ago
- **GitHub stars:** 96
- **Works with:** OpenAI, Anthropic, Google Gemini, Ollama, DeepSeek

## Deploy spec

```sh
git clone https://github.com/kasarlabs/snak.git
cd snak
pnpm install
cp .env.example .env
```

- **Entry:** pnpm run start (or pnpm run start:server for API mode)
- **Runtime:** Node.js (pnpm monorepo) + PostgreSQL; also published as an npm package
- **Requires:** STARKNET_PRIVATE_KEY — Starknet account private key, high-risk if exposed, STARKNET_PUBLIC_ADDRESS, STARKNET_RPC_URL, one of OPENAI_API_KEY / ANTHROPIC_API_KEY / GEMINI_API_KEY / DEEPSEEK_API_KEY, SERVER_API_KEY, SERVER_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DB, POSTGRES_PORT
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.starkagent.ai/) · [Docs](https://docs.kasar.io) · [GitHub](https://github.com/KasarLabs/snak) · [Sato Hub page ↗](https://satohub.ai/resources/snak-starknet-agent-kit?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `snak-starknet-agent-kit`. https://satohub.ai/resources/snak-starknet-agent-kit — retrieved 2026-09-19.

[← All layers](../index.md)
