---
title: "go-sui-mcp — Sato Hub index"
description: "Go-based MCP server wrapping the local Sui client: node management and chain interactions for agents."
canonical: "https://satohub.ai/resources/go-sui-mcp"
layout: "default"
---

# go-sui-mcp

Go-based MCP server wrapping the local Sui client: node management and chain interactions for agents.

Sato Score: **⬡ 60** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Sui
- **Standards:** mcp
- **Interfaces:** mcp, cli
- **Use cases:** wallets
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 1
- **Deploys as:** Self-hosted (Go build)
- **Works with:** Cursor

## Deploy spec

```sh
git clone https://github.com/hawkli-1994/go-sui-mcp.git
cd go-sui-mcp
make build
```

- **Entry:** ./go-sui-mcp server (add --sse --port 8080 for SSE mode)
- **Runtime:** Go 1.23+ (also requires the Sui CLI installed and in PATH)
- **Requires:** GOSUI_SERVER_PORT (optional, default 8080), GOSUI_SERVER_SSE (optional), GOSUI_SUI_EXECUTABLE_PATH (optional, default 'sui')
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 31.9% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/hawkli-1994/go-sui-mcp) · [Docs](https://github.com/hawkli-1994/go-sui-mcp) · [GitHub](https://github.com/hawkli-1994/go-sui-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/go-sui-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `go-sui-mcp`. https://satohub.ai/resources/go-sui-mcp — retrieved 2026-09-21.

[← All layers](../index.md)
