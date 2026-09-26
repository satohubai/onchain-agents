---
title: "Aptos MCP — Sato Hub index"
description: "Official Aptos MCP server: Move dev guidance, Geomi project automation, and sponsored-transaction setup."
canonical: "https://satohub.ai/resources/aptos-mcp"
layout: "default"
---

# Aptos MCP

Official Aptos MCP server: Move dev guidance, Geomi project automation, and sponsored-transaction setup.

Sato Score: **⬡ 63** (Medium), -1 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Aptos
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Creator:** Aptos Labs
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 13
- **Deploys as:** npm package (@aptos-labs/aptos-mcp)
- **Works with:** Cursor, Claude Code, Codex

## Deploy spec

```sh
claude mcp add -s local aptos-mcp npx -e APTOS_BOT_KEY=<your_bot_api_key> -- -y @aptos-labs/aptos-mcp
```

- **Entry:** npx -y @aptos-labs/aptos-mcp (stdio)
- **Runtime:** node
- **Requires:** APTOS_BOT_KEY (Geomi Bot API key, generated at geomi.dev)
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 98.6% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/aptos-labs/aptos-npm-mcp) · [Docs](https://aptos.dev/build/ai/aptos-mcp) · [GitHub](https://github.com/aptos-labs/aptos-npm-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/aptos-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `aptos-mcp`. https://satohub.ai/resources/aptos-mcp — retrieved 2026-09-26.

[← All layers](../index.md)
