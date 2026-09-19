---
title: "Token Terminal MCP — Sato Hub index"
description: "Official hosted Token Terminal MCP with a research tool over onchain project/protocol financials."
canonical: "https://satohub.ai/resources/tokenterminal-mcp"
layout: "default"
---

# Token Terminal MCP

Official hosted Token Terminal MCP with a research tool over onchain project/protocol financials.

Sato Score: **⬡ 25** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** data
- **Creator:** Token Terminal
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted API (Remote MCP, OAuth 2.1, Streamable HTTP)
- **Works with:** Claude Code, Claude Desktop, ChatGPT, Codex CLI, Cursor, Gemini CLI, OpenCode, Microsoft Copilot Studio

## Deploy spec

```sh
claude mcp add --transport http tokenterminal https://mcp.tokenterminal.com/mcp
```

- **Entry:** https://mcp.tokenterminal.com/mcp (remote MCP; authenticate via /mcp in Claude Code and browser sign-in)
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** Token Terminal account; OAuth 2.1 with PKCE browser sign-in (no API keys or long-lived secrets in config)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 7.5% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://tokenterminal.com) · [Docs](https://tokenterminal.com/docs/mcp/introduction) · [Sato Hub page ↗](https://satohub.ai/resources/tokenterminal-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `tokenterminal-mcp`. https://satohub.ai/resources/tokenterminal-mcp — retrieved 2026-09-19.

[← All layers](../index.md)
