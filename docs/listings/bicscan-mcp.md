---
title: "BICScan MCP — Sato Hub index"
description: "AhnLab's BICScan MCP server: blockchain address risk scoring and asset lookups over the BICScan API."
canonical: "https://satohub.ai/resources/bicscan-mcp"
layout: "default"
---

# BICScan MCP

AhnLab's BICScan MCP server: blockchain address risk scoring and asset lookups over the BICScan API.

Sato Score: **⬡ 61** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** security
- **Creator:** AhnLab
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 7 months ago
- **GitHub stars:** 17
- **Deploys as:** uv/uvx (stdio), Docker, Hosted API (SSE)
- **Works with:** Claude Desktop, Cursor

## Deploy spec

```sh
git clone https://github.com/ahnlabio/bicscan-mcp
cd bicscan-mcp
uv sync
```

- **Entry:** MCP client config: { "command": "uv", "args": ["--directory", "<path-to-cloned-repo>", "run", "bicscan-mcp"], "env": { "BICSCAN_API_KEY": "<your-key>" } } — entry point defined in pyproject.toml as bicscan-mcp = "bicscan_mcp:main"
- **Runtime:** python
- **Requires:** BICSCAN_API_KEY (free key from bicscan.io)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://bicscan.io) · [Docs](https://github.com/ahnlabio/bicscan-mcp) · [GitHub](https://github.com/ahnlabio/bicscan-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/bicscan-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bicscan-mcp`. https://satohub.ai/resources/bicscan-mcp — retrieved 2026-09-25.

[← All layers](../index.md)
