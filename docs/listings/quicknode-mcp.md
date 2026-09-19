---
title: "QuickNode MCP — Sato Hub index"
description: "Official remote MCP for managing QuickNode blockchain endpoints, rate limits, security, and billing via natural language."
canonical: "https://satohub.ai/resources/quicknode-mcp"
layout: "default"
---

# QuickNode MCP

Official remote MCP for managing QuickNode blockchain endpoints, rate limits, security, and billing via natural language.

Sato Score: **⬡ 39** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** payments, data, security
- **Creator:** QuickNode
- **Open source:** No
- **Status:** Active
- **Deploys as:** Hosted API (remote MCP over OAuth), API key (CI/CD, non-interactive)
- **Works with:** ChatGPT, Codex, Claude Code, Claude Desktop, Cursor, VS Code, Windsurf, Zed

## Deploy spec

```sh
claude mcp add --transport http quicknode https://mcp.quicknode.com/mcp
claude mcp add quicknode --transport http https://mcp.quicknode.com/mcp --header "Authorization: Bearer YOUR_API_KEY"
```

- **Entry:** {"mcpServers": {"quicknode": {"url": "https://mcp.quicknode.com/mcp"}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** QuickNode account; OAuth 2.1 browser login on first connection, or API key as Authorization: Bearer header (Dashboard > Account > API Keys)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 7.5% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.quicknode.com/docs/build-with-ai/quicknode-mcp) · [Docs](https://www.quicknode.com/docs/build-with-ai/quicknode-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/quicknode-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `quicknode-mcp`. https://satohub.ai/resources/quicknode-mcp — retrieved 2026-09-19.

[← All layers](../index.md)
