---
title: "Bitquery MCP — Sato Hub index"
description: "Hosted MCP endpoint for natural-language queries over Bitquery's trading, OHLC, and token-economics datasets."
canonical: "https://satohub.ai/resources/bitquery-mcp"
layout: "default"
---

# Bitquery MCP

Hosted MCP endpoint for natural-language queries over Bitquery's trading, OHLC, and token-economics datasets.

Sato Score: **⬡ 25** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, contract
- **Use cases:** trading, data
- **Creator:** Bitquery
- **Open source:** No
- **Status:** Active
- **Deploys as:** Hosted (remote MCP via mcp-remote/npx or direct URL, no self-hosting)
- **Works with:** Cursor, Claude Code, VS Code

## Deploy spec

```sh
claude mcp add bitquery -- npx -y mcp-remote https://mcp.bitquery.io/mcp
```

- **Entry:** {"mcpServers": {"bitquery": {"command": "npx", "args": ["-y", "mcp-remote", "https://mcp.bitquery.io/mcp"]}}}
- **Runtime:** Hosted MCP endpoint (no local install; optional mcp-remote bridge via npx)
- **Requires:** Free Bitquery account; OAuth 2.1 browser sign-in (token cached ~30 days), or query-parameter token
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 7.6% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://docs.bitquery.io/docs/mcp/mcp-server/) · [Docs](https://docs.bitquery.io/docs/mcp/mcp-server/) · [Sato Hub page ↗](https://satohub.ai/resources/bitquery-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bitquery-mcp`. https://satohub.ai/resources/bitquery-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
