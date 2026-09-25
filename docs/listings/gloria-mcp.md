---
title: "Gloria MCP — Sato Hub index"
description: "MCP server for Gloria AI's curated crypto news feed — sentiment-tagged headlines, recaps, and search for agents."
canonical: "https://satohub.ai/resources/gloria-mcp"
layout: "default"
---

# Gloria MCP

MCP server for Gloria AI's curated crypto news feed — sentiment-tagged headlines, recaps, and search for agents.

Sato Score: **⬡ 54** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Base
- **Open source:** Partial
- **Status:** Early
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 1

## Deploy spec

```sh
uv pip install -e .
uv run gloria-mcp
```

- **Entry:** {"mcpServers": {"gloria": {"command": "uv", "args": ["--directory", "/path/to/gloria-mcp", "run", "gloria-mcp"]}}}
- **Runtime:** Python (uv package manager), MCP stdio or streamable-http
- **Requires:** GLORIA_API_TOKEN — Gloria AI API token, required, AI_HUB_BASE_URL — optional, defaults to https://ai-hub.cryptobriefing.com
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://itsgloria.ai) · [GitHub](https://github.com/cryptobriefing/gloria-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/gloria-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `gloria-mcp`. https://satohub.ai/resources/gloria-mcp — retrieved 2026-09-25.

[← All layers](../index.md)
