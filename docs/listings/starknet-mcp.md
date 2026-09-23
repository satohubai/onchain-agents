---
title: "Starknet MCP — Sato Hub index"
description: "Official Starknet MCP server exposing the full Starknet JSON-RPC v0.10.2 surface as agent tools."
canonical: "https://satohub.ai/resources/starknet-mcp"
layout: "default"
---

# Starknet MCP

Official Starknet MCP server exposing the full Starknet JSON-RPC v0.10.2 surface as agent tools.

Sato Score: **⬡ 75** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Starknet
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Creator:** StarkWare
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 8 days ago
- **GitHub stars:** 115
- **Deploys as:** pip install (Python, local stdio)
- **Works with:** Claude Code

## Deploy spec

```sh
claude mcp add --env STARKNET_RPC_URL=<your-rpc-url> starknet -- python mcp/server.py
claude mcp add --scope user --env STARKNET_RPC_URL=<your-rpc-url> starknet -- python /absolute/path/to/mcp/server.py
```

- **Entry:** python mcp/server.py
- **Runtime:** Python (server script in starkware-libs/starknet-specs, mcp/server.py)
- **Requires:** STARKNET_RPC_URL required — a Starknet JSON-RPC v0.10.2+ endpoint
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 71 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/starkware-libs/starknet-specs) · [Docs](https://github.com/starkware-libs/starknet-specs/tree/master/mcp) · [GitHub](https://github.com/starkware-libs/starknet-specs) · [Sato Hub page ↗](https://satohub.ai/resources/starknet-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `starknet-mcp`. https://satohub.ai/resources/starknet-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
