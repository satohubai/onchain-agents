---
title: "JustaName ENS MCP — Sato Hub index"
description: "MCP server for ENS — resolve names to addresses, reverse lookups, text records, subdomains, and registration pricing."
canonical: "https://satohub.ai/resources/justaname-ens-mcp"
layout: "default"
---

# JustaName ENS MCP

MCP server for ENS — resolve names to addresses, reverse lookups, text records, subdomains, and registration pricing.

Sato Score: **⬡ 52** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Ethereum
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 8 months ago
- **GitHub stars:** 8
- **Works with:** Claude Desktop, Claude Code

## Deploy spec

```sh
claude mcp add ens -- npx -y mcp-server-ens
```

- **Entry:** {"mcpServers":{"ens":{"command":"npx","args":["-y","mcp-server-ens"],"env":{"PROVIDER_URL":"https://your-provider-url.com"}}}}
- **Runtime:** Node.js >=16 (npm package mcp-server-ens)
- **Requires:** PROVIDER_URL (optional — comma-separated Ethereum RPC URLs; falls back to public providers)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://docs.justaname.id) · [GitHub](https://github.com/JustaName-id/ens-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/justaname-ens-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `justaname-ens-mcp`. https://satohub.ai/resources/justaname-ens-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
