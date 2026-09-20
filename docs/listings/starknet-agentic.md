---
title: "Starknet Agentic — Sato Hub index"
description: "Official Starknet-ecosystem infra for self-custodial agents: Cairo contracts, MCP/A2A runtimes, and installable skills."
canonical: "https://satohub.ai/resources/starknet-agentic"
layout: "default"
---

# Starknet Agentic

Official Starknet-ecosystem infra for self-custodial agents: Cairo contracts, MCP/A2A runtimes, and installable skills.

Sato Score: **⬡ 60** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Chains:** Starknet
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 6 days ago
- **GitHub stars:** 80

## Deploy spec

```sh
npx @starknetfoundation/create-starknet-agent@latest
pnpm install
pnpm --filter @starknetfoundation/starknet-agentic-mcp-server build
node packages/starknet-mcp-server/dist/index.js
```

- **Entry:** node packages/starknet-mcp-server/dist/index.js
- **Runtime:** Node.js >=18 (scaffolder) / >=20.9.0 (source checkout), pnpm monorepo; Cairo via Scarb/Starknet Foundry
- **Requires:** Starknet RPC URL and account signer configuration via .env.example — repo explicitly warns never to commit private keys or funded credentials; account key is high-risk if exposed
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 0% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://starknet-agentic.com) · [GitHub](https://github.com/keep-starknet-strange/starknet-agentic) · [Sato Hub page ↗](https://satohub.ai/resources/starknet-agentic?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `starknet-agentic`. https://satohub.ai/resources/starknet-agentic — retrieved 2026-09-20.

[← All layers](../index.md)
