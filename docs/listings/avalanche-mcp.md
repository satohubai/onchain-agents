---
title: "Avalanche Builder Hub MCP — Sato Hub index"
description: "Ava Labs' read-only MCP exposing Builders Hub docs, code search, and Avalanche chain data to AI clients."
canonical: "https://satohub.ai/resources/avalanche-mcp"
layout: "default"
---

# Avalanche Builder Hub MCP

Ava Labs' read-only MCP exposing Builders Hub docs, code search, and Avalanche chain data to AI clients.

Sato Score: **⬡ 65** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Avalanche
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, cli
- **Use cases:** data
- **Creator:** Ava Labs
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted API (Streamable HTTP)
- **Works with:** Claude Code, Claude Desktop

## Deploy spec

```sh
claude mcp add --transport http avalanche-builders https://build.avax.network/api/mcp
```

- **Entry:** {"mcpServers": {"avalanche-builders": {"url": "https://build.avax.network/api/mcp"}}}
- **Runtime:** remote
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://build.avax.network) · [Docs](https://build.avax.network/docs/tooling/ai-llm/mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/avalanche-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `avalanche-mcp`. https://satohub.ai/resources/avalanche-mcp — retrieved 2026-09-24.

[← All layers](../index.md)
