---
title: "Maestro MCP Server — Sato Hub index"
description: "Official Maestro Bitcoin MCP: indexer, mempool, price, and node RPC data via hosted mainnet/testnet endpoints."
canonical: "https://satohub.ai/resources/maestro-mcp"
layout: "default"
---

# Maestro MCP Server

Official Maestro Bitcoin MCP: indexer, mempool, price, and node RPC data via hosted mainnet/testnet endpoints.

Sato Score: **⬡ 47** (Medium), -3 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Bitcoin
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** wallets, data
- **Creator:** Maestro
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 25
- **Deploys as:** Hosted API (Streamable HTTP, mainnet + testnet), self-host (Bun runtime)

## Deploy spec

```sh
claude mcp add --transport http maestro-btc https://xbt-mainnet.gomaestro-api.org/v0/mcp
```

- **Entry:** {"mcpServers": {"maestro-btc": {"url": "https://xbt-mainnet.gomaestro-api.org/v0/mcp", "headers": {"api-key": "YOUR_MAESTRO_API_KEY"}}}}
- **Runtime:** remote
- **Requires:** Maestro API key (dashboard.gomaestro.org, free tier available)
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 91.8% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.gomaestro.org) · [Docs](https://docs.gomaestro.org) · [GitHub](https://github.com/maestro-org/maestro-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/maestro-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `maestro-mcp`. https://satohub.ai/resources/maestro-mcp — retrieved 2026-09-26.

[← All layers](../index.md)
