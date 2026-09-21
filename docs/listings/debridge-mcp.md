---
title: "deBridge MCP — Sato Hub index"
description: "deBridge's official MCP for cross-chain and same-chain token swaps, fee estimation, and trade execution."
canonical: "https://satohub.ai/resources/debridge-mcp"
layout: "default"
---

# deBridge MCP

deBridge's official MCP for cross-chain and same-chain token swaps, fee estimation, and trade execution.

Sato Score: **⬡ 66** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api
- **Use cases:** trading
- **Creator:** deBridge
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 11 days ago
- **GitHub stars:** 32
- **Deploys as:** Hosted API, npm
- **Works with:** Claude Code, Claude Web, Claude Desktop

## Deploy spec

```sh
claude mcp add debridge --transport http https://agents.debridge.com/mcp
```

- **Entry:** {"debridge": {"type": "streamable-http", "url": "https://agents.debridge.com/mcp"}}
- **Runtime:** remote
- **Requires:** a wallet/signer to sign the unsigned tx payloads returned by create_tx / transaction_same_chain_swap — deBridge MCP never holds private keys
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 98.6% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://agents.debridge.com) · [GitHub](https://github.com/debridge-finance/debridge-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/debridge-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `debridge-mcp`. https://satohub.ai/resources/debridge-mcp — retrieved 2026-09-21.

[← All layers](../index.md)
