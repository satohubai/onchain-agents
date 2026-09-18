---
title: "Erigon MCP — Sato Hub index"
description: "Open-source MCP built into the Erigon Ethereum client, exposing 40+ read-only JSON-RPC and node-data tools."
canonical: "https://satohub.ai/resources/erigon-mcp"
layout: "default"
---

# Erigon MCP

Open-source MCP built into the Erigon Ethereum client, exposing 40+ read-only JSON-RPC and node-data tools.

Sato Score: **⬡ 44** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Ethereum
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** data
- **Creator:** Erigon Technologies AG
- **Open source:** Yes
- **Status:** Active

## Deploy spec

```sh
make mcp
```

- **Entry:** ./build/bin/erigon --datadir=./data (embedded SSE mode) or ./build/bin/mcp --port 8545 --log.dir /data/erigon/logs (standalone JSON-RPC)
- **Runtime:** Go (built from source, requires a running Erigon v3.5+ instance)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 66 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://erigon.tech) · [Docs](https://docs.erigon.tech/fundamentals/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/erigon-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `erigon-mcp`. https://satohub.ai/resources/erigon-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
