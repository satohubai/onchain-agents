---
title: "Mina MCP Server — Sato Hub index"
description: "Official Mina Protocol MCP server for Mina blockchain tooling and developer workflows."
canonical: "https://satohub.ai/resources/mina-mcp"
layout: "default"
---

# Mina MCP Server

Official Mina Protocol MCP server for Mina blockchain tooling and developer workflows.

Sato Score: **⬡ 70** (High), +2 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** privacy
- **Creator:** Mina Protocol
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 0
- **Deploys as:** npm, npx, docker, hosted
- **Works with:** Claude Desktop, Claude Code, Cursor, Cline, Roo, Windsurf, Continue, Zed

## Deploy spec

```sh
npx @o1-labs/mina-mcp-server --mode live --network devnet
```

- **Entry:** npx @o1-labs/mina-mcp-server --mode live --network devnet (stdio MCP; live mode needs no local infra — swap --network for mainnet/mesa)
- **Runtime:** node
- **Requires:** Private key only if using --wallets to send transactions; read-only live mode needs nothing
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 94.3% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://minaprotocol.com) · [GitHub](https://github.com/MinaProtocol/mina-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/mina-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `mina-mcp`. https://satohub.ai/resources/mina-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
