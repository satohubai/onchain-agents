---
title: "Daydreams — Sato Hub index"
description: "Framework and tooling for building AI agents for onchain commerce."
canonical: "https://satohub.ai/resources/daydreams"
layout: "default"
---

# Daydreams

Framework and tooling for building AI agents for onchain commerce.

Sato Score: **⬡ 66** (Medium), +15 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Type:** Framework
- **Standards:** x402, mcp
- **Interfaces:** mcp
- **Use cases:** payments, build
- **Creator:** daydreamsai
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 620
- **Deploys as:** library, self-hosted
- **Works with:** MCP, Discord, Supabase, OpenAI, Anthropic, Google, Groq, xAI

## Deploy spec

```sh
npm install @daydreamsai/core @ai-sdk/openai zod
```

- **Entry:** import { createDreams } from '@daydreamsai/core'; const agent = createDreams({ model: openai('gpt-4o'), contexts: [ctx] }); await agent.send({ context: ctx, input: '...' }); // note: project is transitioning to lucid-agents
- **Runtime:** Node.js / TypeScript
- **Requires:** an LLM provider key (e.g. OPENAI_API_KEY)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 0% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://dreams.fun) · [Docs](https://docs.dreams.fun) · [GitHub](https://github.com/daydreamsai/daydreams) · [Sato Hub page ↗](https://satohub.ai/resources/daydreams?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `daydreams`. https://satohub.ai/resources/daydreams — retrieved 2026-09-26.

[← All layers](../index.md)
