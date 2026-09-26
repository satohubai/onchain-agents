---
title: "QuantConnect MCP — Sato Hub index"
description: "Official open-source QuantConnect MCP for quant project management, doc search, code checks, and backtesting."
canonical: "https://satohub.ai/resources/quantconnect-mcp"
layout: "default"
---

# QuantConnect MCP

Official open-source QuantConnect MCP for quant project management, doc search, code checks, and backtesting.

Sato Score: **⬡ 48** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading
- **Creator:** QuantConnect
- **Open source:** Yes
- **Status:** Active
- **Deploys as:** Local/self-hosted (Deploy Container), GitHub Copilot integration (localhost HTTP endpoint)
- **Works with:** GitHub Copilot

## Deploy spec

```sh
docker pull quantconnect/mcp-server
```

- **Entry:** {"mcpServers": {"quantconnect": {"command": "docker", "args": ["run", "-i", "--rm", "-e", "QUANTCONNECT_USER_ID", "-e", "QUANTCONNECT_API_TOKEN", "-e", "AGENT_NAME", "--platform", "<your_platform>", "quantconnect/mcp-server"], "env": {"QUANTCONNECT_USER_ID": "<your_user_id>", "QUANTCONNECT_API_TOKEN": "<your_api_token>", "AGENT_NAME": "MCP Server"}}}}
- **Runtime:** Docker (official image quantconnect/mcp-server)
- **Requires:** QUANTCONNECT_USER_ID, QUANTCONNECT_API_TOKEN (QuantConnect API token), AGENT_NAME optional
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 74 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.quantconnect.com) · [Docs](https://www.quantconnect.com/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/quantconnect-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `quantconnect-mcp`. https://satohub.ai/resources/quantconnect-mcp — retrieved 2026-09-26.

[← All layers](../index.md)
