---
title: "Agently — Sato Hub index"
description: "Routing and settlement layer and CLI for agent-to-agent commerce, supporting EVM wallets, agent discovery, A2A messaging, x402 payments, and ERC-8004…"
canonical: "https://satohub.ai/resources/agently-agent-commerce"
layout: "default"
---

# Agently

Routing and settlement layer and CLI for agent-to-agent commerce, supporting EVM wallets, agent discovery, A2A messaging, x402 payments, and ERC-8004 identity.

Sato Score: **⬡ 62** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Framework
- **Chains:** Base
- **Standards:** x402, erc-8004, mcp, a2a
- **Interfaces:** mcp, sdk, cli
- **Use cases:** payments, wallets, identity, build
- **Creator:** agentlyhq
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 65
- **Deploys as:** CLI
- **Works with:** MCP, A2A, x402, OpenClaw

## Deploy spec

```sh
npm install -g use-agently
```

- **Entry:** use-agently init       # generate a local EVM wallet use-agently search use-agently a2a send --uri <agent-uri> -m "message"
- **Runtime:** Node.js
- **Requires:** local EVM wallet (auto via init), Base RPC (default provided), x402 for A2A payments
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://use-agently.com) · [GitHub](https://github.com/AgentlyHQ/use-agently) · [Sato Hub page ↗](https://satohub.ai/resources/agently-agent-commerce?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `agently-agent-commerce`. https://satohub.ai/resources/agently-agent-commerce — retrieved 2026-09-21.

[← All layers](../index.md)
