---
title: "OpenServ — Sato Hub index"
description: "TypeScript SDK and platform for building, orchestrating, and monetizing collaborative AI agents."
canonical: "https://satohub.ai/resources/openserv"
layout: "default"
---

# OpenServ

TypeScript SDK and platform for building, orchestrating, and monetizing collaborative AI agents.

Sato Score: **⬡ 71** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Type:** Framework
- **Chains:** Multichain
- **Interfaces:** sdk
- **Use cases:** security, build
- **Creator:** OpenServ Inc.
- **Open source:** Partial
- **Status:** Active
- **Activity:** Quiet — last activity 7 months ago
- **GitHub stars:** 137
- **Deploys as:** npm, Self-hosted, CLI, API
- **Works with:** OpenAI SDK, Anthropic SDK, LangChain, Eliza, MCP

## Deploy spec

```sh
npm install @openserv-labs/sdk
```

- **Entry:** import { Agent, run } from '@openserv-labs/sdk' const agent = new Agent({ systemPrompt: 'You are a helpful assistant.' }) agent.addCapability({ name: 'greet', description: 'Greet', inputSchema: z.object({ name: z.string() }), async run({ args }) { return `Hello, ${args.name}!` } }) const { stop } = await run(agent)
- **Runtime:** Node.js / TypeScript
- **Requires:** OPENSERV_API_KEY, optional OPENAI_API_KEY (for the process() runtime)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.openserv.ai) · [Docs](https://docs.openserv.ai) · [GitHub](https://github.com/openserv-labs/sdk) · [Sato Hub page ↗](https://satohub.ai/resources/openserv?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `openserv`. https://satohub.ai/resources/openserv — retrieved 2026-09-20.

[← All layers](../index.md)
