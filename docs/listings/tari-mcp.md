---
title: "Tari MCP Servers — Sato Hub index"
description: "Official Minotari wallet and node MCP servers for local agent access to Tari blockchain data and transactions."
canonical: "https://satohub.ai/resources/tari-mcp"
layout: "default"
---

# Tari MCP Servers

Official Minotari wallet and node MCP servers for local agent access to Tari blockchain data and transactions.

Sato Score: **⬡ 66** (Medium), +2 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** wallets, data, security
- **Creator:** Tari Project
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity today
- **GitHub stars:** 499
- **Deploys as:** self-hosted, local, docker, binary

## Deploy spec

```sh
git clone https://github.com/tari-project/tari.git
cd tari
cargo build --release -p minotari_mcp_wallet
```

- **Entry:** minotari_mcp_wallet --mcp-enabled
- **Runtime:** rust
- **Requires:** A running minotari_console_wallet --enable-grpc (and a synced Tari node) — the MCP server proxies to it, it is not a standalone binary
- **License:** BSD-3-Clause
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-21

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/tari-project/tari) · [GitHub](https://github.com/tari-project/tari) · [Sato Hub page ↗](https://satohub.ai/resources/tari-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `tari-mcp`. https://satohub.ai/resources/tari-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
