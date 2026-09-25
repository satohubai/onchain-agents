---
title: "Chainstack MCP — Sato Hub index"
description: "Official remote Streamable HTTP MCP: Chainstack docs search, platform status, live pricing, and node deployment."
canonical: "https://satohub.ai/resources/chainstack-mcp"
layout: "default"
---

# Chainstack MCP

Official remote Streamable HTTP MCP: Chainstack docs search, platform status, live pricing, and node deployment.

Sato Score: **⬡ 65** (Medium), +2 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Creator:** Chainstack
- **Open source:** No
- **Status:** Active
- **Works with:** Claude Code, Cursor, Codex, Windsurf, Gemini CLI, GitHub Copilot, Antigravity, Claude.ai, ChatGPT

## Deploy spec

```sh
mkdir -p ~/.claude/skills/chainstack
curl -o ~/.claude/skills/chainstack/SKILL.md https://mcp.chainstack.com/skill
```

- **Entry:** {"mcpServers": {"chainstack": {"url": "https://mcp.chainstack.com/mcp", "transport": "streamable-http", "headers": {"Authorization": "Bearer YOUR_API_KEY"}}}}
- **Runtime:** Hosted MCP endpoint (no local install); optional skill-file mode
- **Requires:** CHAINSTACK_API_KEY optional (most tools work without credentials; deployment/project management needs a key from console.chainstack.com/user/settings/api-keys)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://docs.chainstack.com/docs/chainstack-mcp-server) · [Docs](https://docs.chainstack.com/docs/chainstack-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/chainstack-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `chainstack-mcp`. https://satohub.ai/resources/chainstack-mcp — retrieved 2026-09-25.

[← All layers](../index.md)
