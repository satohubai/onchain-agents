---
title: "Blockscout MCP Server — Sato Hub index"
description: "Wraps Blockscout explorer APIs so agents can query balances, tokens, NFTs, and contract data across chains."
canonical: "https://satohub.ai/resources/blockscout-mcp"
layout: "default"
---

# Blockscout MCP Server

Wraps Blockscout explorer APIs so agents can query balances, tokens, NFTs, and contract data across chains.

Sato Score: **⬡ 80** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** data
- **Creator:** Blockscout
- **Open source:** Unknown
- **Status:** Active
- **Activity:** Active — last activity 15 days ago
- **GitHub stars:** 46
- **Deploys as:** Docker, Hosted API (Streamable HTTP at mcp.blockscout.com), MCP Bundle (MCPB)
- **Works with:** Claude Desktop, Claude Code, Cursor, ChatGPT Apps, Codex, Codex CLI

## Deploy spec

```sh
git clone https://github.com/blockscout/mcp-server.git && cd mcp-server && uv pip install -e .
docker pull ghcr.io/blockscout/mcp-server:latest
```

- **Entry:** python -m blockscout_mcp_server (stdio) or python -m blockscout_mcp_server --http --http-host 0.0.0.0 --http-port 8000
- **Runtime:** Python (pip/uv) or Docker; hosted MCP endpoint also available
- **Requires:** BLOCKSCOUT_PRO_API_KEY (required for most features; register at dev.blockscout.com, proapi_ prefix), optional: BLOCKSCOUT_MCP_USER_AGENT, BLOCKSCOUT_DISABLE_COMMUNITY_TELEMETRY
- **License:** Unknown (custom Blockscout Software Licence; see LICENSE file — not a standard SPDX identifier)
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 71 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.blockscout.com) · [Docs](https://dev.blockscout.com) · [GitHub](https://github.com/blockscout/mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/blockscout-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `blockscout-mcp`. https://satohub.ai/resources/blockscout-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
