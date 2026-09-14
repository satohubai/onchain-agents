---
title: "Hive Intelligence Crypto MCP — Sato Hub index"
description: "Hosted MCP exposing 375+ crypto tools spanning market data, DeFi analytics, security scans, and wallet data."
canonical: "https://satohub.ai/resources/hive-intelligence-mcp"
layout: "default"
---

# Hive Intelligence Crypto MCP

Hosted MCP exposing 375+ crypto tools spanning market data, DeFi analytics, security scans, and wallet data.

Sato Score: **⬡ 62** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, contract
- **Use cases:** trading, wallets, data, security
- **Creator:** Hive Intelligence
- **Open source:** No
- **Status:** Active
- **Deploys as:** Hosted (managed remote MCP server, no self-hosting)
- **Works with:** Claude, Cursor, OpenAI Responses API, Gemini CLI, Windsurf, Codex CLI, VS Code

## Deploy spec

```sh
claude mcp add --transport http hive "https://mcp.hiveintelligence.xyz/mcp" --header "Authorization: Bearer YOUR_HIVE_API_KEY"
```

- **Entry:** {"mcpServers": {"hive": {"url": "https://mcp.hiveintelligence.xyz/mcp", "headers": {"Authorization": "Bearer YOUR_HIVE_API_KEY"}}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** Hive API key (Bearer header; generated in the Hive dashboard)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 48.4% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://hiveintelligence.xyz/crypto-mcp) · [Docs](https://hiveintelligence.xyz/crypto-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/hive-intelligence-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `hive-intelligence-mcp`. https://satohub.ai/resources/hive-intelligence-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
