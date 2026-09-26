---
title: "Alchemy MCP Server — Sato Hub index"
description: "Official Alchemy MCP server exposing token, NFT, transaction, and wallet-execution tools to agents."
canonical: "https://satohub.ai/resources/alchemy-mcp"
layout: "default"
---

# Alchemy MCP Server

Official Alchemy MCP server exposing token, NFT, transaction, and wallet-execution tools to agents.

Sato Score: **⬡ 65** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading, wallets, data
- **Creator:** Alchemy
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 88
- **Deploys as:** Hosted API (Streamable HTTP, OAuth), npm (legacy local stdio server)
- **Works with:** Claude Code, Codex, Cursor, Claude Desktop, VS Code Copilot, Windsurf, Cline

## Deploy spec

```sh
claude mcp add alchemy --transport http https://mcp.alchemy.com/mcp
```

- **Entry:** {"mcpServers":{"alchemy":{"type":"streamable-http","url":"https://mcp.alchemy.com/mcp"}}}
- **Runtime:** remote
- **Requires:** Alchemy account sign-in (OAuth) for the hosted server — no API key needed for that path, ALCHEMY_API_KEY (only if using the legacy local STDIO server), AGENT_WALLET_SERVER (only for sendTransaction/swap tools on the legacy local server)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 6.8% of our checks succeeded over 74 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.alchemy.com) · [Docs](https://www.alchemy.com/docs/alchemy-mcp-server) · [GitHub](https://github.com/alchemyplatform/alchemy-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/alchemy-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `alchemy-mcp`. https://satohub.ai/resources/alchemy-mcp — retrieved 2026-09-26.

[← All layers](../index.md)
