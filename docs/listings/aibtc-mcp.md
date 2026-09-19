---
title: "AIBTC MCP Server — Sato Hub index"
description: "Bitcoin-native MCP server: BTC/STX wallets, L1 reads and transfers, Stacks, sBTC, and x402 payments."
canonical: "https://satohub.ai/resources/aibtc-mcp"
layout: "default"
---

# AIBTC MCP Server

Bitcoin-native MCP server: BTC/STX wallets, L1 reads and transfers, Stacks, sBTC, and x402 payments.

Sato Score: **⬡ 82** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Bitcoin
- **Standards:** x402, mcp
- **Interfaces:** mcp
- **Use cases:** trading, payments, wallets
- **Creator:** AIBTC
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 3 days ago
- **GitHub stars:** 10
- **Deploys as:** npx
- **Works with:** Claude Code, Claude Desktop, Cursor, Windsurf

## Deploy spec

```sh
npx @aibtc/mcp-server@latest --install
```

- **Entry:** npx @aibtc/mcp-server@latest --install (auto-configures Claude Code; --desktop/--cursor/--windsurf/--gemini/--codex/--vscode for other clients)
- **Runtime:** node
- **Requires:** agent wallet is auto-generated and AES-256-GCM encrypted locally on first use — this server moves real BTC/STX funds once connected
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/aibtcdev/aibtc-mcp-server) · [Docs](https://github.com/aibtcdev/aibtc-mcp-server) · [GitHub](https://github.com/aibtcdev/aibtc-mcp-server) · [Sato Hub page ↗](https://satohub.ai/resources/aibtc-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `aibtc-mcp`. https://satohub.ai/resources/aibtc-mcp — retrieved 2026-09-19.

[← All layers](../index.md)
