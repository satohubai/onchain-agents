---
title: "Tenderly MCP — Sato Hub index"
description: "Official Tenderly MCP: gasless EVM transaction simulation, tracing, and contract inspection across 100+ networks."
canonical: "https://satohub.ai/resources/tenderly-mcp"
layout: "default"
---

# Tenderly MCP

Official Tenderly MCP: gasless EVM transaction simulation, tracing, and contract inspection across 100+ networks.

Sato Score: **⬡ 25** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp
- **Creator:** Tenderly
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted API (OAuth 2.0 via Claude Connectors)
- **Works with:** Claude Code, Claude.ai, Claude Desktop, Cursor, VS Code

## Deploy spec

```sh
claude mcp add tenderly --transport http https://mcp.tenderly.co/mcp
```

- **Entry:** {"mcpServers": {"tenderly": {"type": "streamable-http", "url": "https://mcp.tenderly.co/mcp"}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** Tenderly account with at least one project; OAuth 2.0 login on connection (no API keys in config)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 0% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://tenderly.co) · [Docs](https://docs.tenderly.co/mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/tenderly-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `tenderly-mcp`. https://satohub.ai/resources/tenderly-mcp — retrieved 2026-09-25.

[← All layers](../index.md)
