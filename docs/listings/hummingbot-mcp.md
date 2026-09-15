---
title: "Hummingbot MCP — Sato Hub index"
description: "Official Hummingbot MCP server bridging agents to a Hummingbot API instance for multi-exchange trading."
canonical: "https://satohub.ai/resources/hummingbot-mcp"
canonical_url: "https://satohub.ai/resources/hummingbot-mcp"
layout: "default"
page_type: "listing"
item_name: "Hummingbot MCP"
code_repository: "https://github.com/hummingbot/mcp"
software_url: "https://github.com/hummingbot/mcp"
application_category: "MCP"
operating_system: "Any"
license_url: "https://www.apache.org/licenses/LICENSE-2.0"
license_name: "Apache-2.0"
date_modified: "2026-03-23"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Hummingbot MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/hummingbot-mcp"
---

# Hummingbot MCP

Official Hummingbot MCP server bridging agents to a Hummingbot API instance for multi-exchange trading.

Sato Score: **⬡ 52** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, cli
- **Use cases:** trading, data
- **Creator:** Hummingbot Foundation
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 59
- **Deploys as:** Docker, Local (uv)
- **Works with:** Claude Code, Gemini CLI

## Deploy spec

```sh
git clone https://github.com/hummingbot/mcp
cd mcp && uv sync
```

- **Entry:** {"mcpServers":{"hummingbot-mcp":{"type":"stdio","command":"uv","args":["--directory","/path/to/mcp","run","main.py"]}}}
- **Runtime:** python
- **Requires:** A running Hummingbot API instance (separate self-hosted service, default http://localhost:8000), HUMMINGBOT_USERNAME + HUMMINGBOT_PASSWORD
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/hummingbot/mcp) · [GitHub](https://github.com/hummingbot/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/hummingbot-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `hummingbot-mcp`. https://satohub.ai/resources/hummingbot-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
