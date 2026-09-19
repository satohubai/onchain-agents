---
title: "MistTrack MCP — Sato Hub index"
description: "MCP server from SlowMist exposing MistTrack address risk scoring and fund-flow tracing to AI agents."
canonical: "https://satohub.ai/resources/misttrack-mcp"
layout: "default"
---

# MistTrack MCP

MCP server from SlowMist exposing MistTrack address risk scoring and fund-flow tracing to AI agents.

Sato Score: **⬡ 63** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Security Tool
- **Chains:** Ethereum, Bitcoin, Polygon, Solana, Multichain
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 34

## Deploy spec

```sh
npx -y misttrack@latest --key YOUR_MISTTRACK_API_KEY
npm install -g misttrack && misttrack --key YOUR_MISTTRACK_API_KEY
export MISTTRACK_API_KEY=YOUR_MISTTRACK_API_KEY && npx -y misttrack@latest
```

- **Entry:** {"mcpServers": {"misttrack": {"command": "npx", "args": ["-y", "misttrack@latest", "--key", "YOUR_MISTTRACK_API_KEY"]}}}
- **Runtime:** Node.js >=18 (npm package "misttrack")
- **Requires:** MISTTRACK_API_KEY — MistTrack OpenAPI key from https://dashboard.misttrack.io/apikeys, requires a MistTrack plan with OpenAPI access; not a private key, no custody risk
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://misttrack.io) · [Docs](https://docs.misttrack.io) · [GitHub](https://github.com/slowmist/MistTrackMCP) · [Sato Hub page ↗](https://satohub.ai/resources/misttrack-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `misttrack-mcp`. https://satohub.ai/resources/misttrack-mcp — retrieved 2026-09-19.

[← All layers](../index.md)
