---
title: "PayRam MCP — Sato Hub index"
description: "PayRam's MCP server for self-hosted crypto payments: hosted endpoints and agent payment workflows."
canonical: "https://satohub.ai/resources/payram-mcp"
layout: "default"
---

# PayRam MCP

PayRam's MCP server for self-hosted crypto payments: hosted endpoints and agent payment workflows.

Sato Score: **⬡ 74** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** payments
- **Creator:** PayRam
- **Open source:** Partial
- **Status:** Active
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 156
- **Deploys as:** Hosted API, Self-hosted (Docker/VPS)
- **Works with:** OpenClaw, Hermes, Claude, Cursor, GitHub Copilot

## Deploy spec

```sh
yarn install
```

- **Entry:** yarn dev (exposes HTTP + SSE on http://localhost:3333/mcp and /mcp/sse); yarn build for production
- **Runtime:** Node.js 18+
- **Requires:** PAYRAM_BASE_URL (self-hosted PayRam server endpoint), PAYRAM_API_KEY (merchant API key)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/PayRam/payram-mcp) · [GitHub](https://github.com/PayRam/payram-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/payram-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `payram-mcp`. https://satohub.ai/resources/payram-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
