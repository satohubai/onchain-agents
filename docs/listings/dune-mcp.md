---
title: "Dune MCP — Sato Hub index"
description: "Official Dune remote MCP for generating, running, and visualizing DuneSQL queries and dashboards from an agent."
canonical: "https://satohub.ai/resources/dune-mcp"
canonical_url: "https://satohub.ai/resources/dune-mcp"
layout: "default"
page_type: "listing"
item_name: "Dune MCP"
software_url: "https://dune.com"
application_category: "MCP"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-15"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Dune MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/dune-mcp"
---

# Dune MCP

Official Dune remote MCP for generating, running, and visualizing DuneSQL queries and dashboards from an agent.

Sato Score: **⬡ 25** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, ui
- **Use cases:** data
- **Creator:** Dune Analytics
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted API (remote MCP over OAuth 2.0 or API key)
- **Works with:** Claude Code, Claude Desktop, OpenCode, Codex, Cursor

## Deploy spec

```sh
claude mcp add --scope user --transport http dune https://api.dune.com/mcp/v1
claude mcp add --scope user --transport http dune https://api.dune.com/mcp/v1 --header "x-dune-api-key: <dune-api-key>"
```

- **Entry:** {"mcpServers": {"dune": {"url": "https://api.dune.com/mcp/v1"}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** Dune API key (x-dune-api-key header) or OAuth 2.0 browser sign-in (scope mcp:dune:full)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 0% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://dune.com) · [Docs](https://docs.dune.com/api-reference/agents/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/dune-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `dune-mcp`. https://satohub.ai/resources/dune-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
