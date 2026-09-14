---
title: "Crypto.com AI Tools — Sato Hub index"
description: "Official Crypto.com CLI/MCP server for exchange trading, plus a hosted keyless market-data MCP."
canonical: "https://satohub.ai/resources/crypto-com-ai"
layout: "default"
---

# Crypto.com AI Tools

Official Crypto.com CLI/MCP server for exchange trading, plus a hosted keyless market-data MCP.

Sato Score: **⬡ 61** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, plugin, cli, ui
- **Use cases:** trading, data
- **Creator:** Crypto.com
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 24
- **Deploys as:** Install script (curl \| sh) or cargo install
- **Works with:** Claude Code, Cursor, Claude Desktop, Codex, GitHub Copilot, Gemini CLI

## Deploy spec

```sh
curl -sSfL https://raw.githubusercontent.com/crypto-com/cdcx-cli/main/install.sh | sh
```

- **Entry:** cdcx mcp config --enable trade,account (registers cdcx as an MCP tool server; also usable as a plain CLI and terminal dashboard)
- **Runtime:** cli
- **Requires:** CDCX_API_KEY / CDCX_API_SECRET for live trading (public market data and paper trading work without credentials)
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 8.1% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://mcp.crypto.com/docs) · [Docs](https://mcp.crypto.com/docs) · [GitHub](https://github.com/crypto-com/cdcx-cli) · [Sato Hub page ↗](https://satohub.ai/resources/crypto-com-ai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `crypto-com-ai`. https://satohub.ai/resources/crypto-com-ai — retrieved 2026-09-14.

[← All layers](../index.md)
