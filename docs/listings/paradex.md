---
title: "Paradex — Sato Hub index"
description: "Perpetuals (and options) DEX built as a Starknet appchain with REST/WebSocket APIs and SDK tooling."
canonical: "https://satohub.ai/resources/paradex"
layout: "default"
---

# Paradex

Perpetuals (and options) DEX built as a Starknet appchain with REST/WebSocket APIs and SDK tooling.

Sato Score: **⬡ 55** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Venue
- **Chains:** Ethereum, Multichain
- **Interfaces:** sdk, rest-api, contract
- **Use cases:** trading, privacy, security, build
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** API, MCP server
- **Works with:** Python SDK, REST API, WebSocket API, CLI, MCP

## Deploy spec

```sh
pip install paradex-py
```

- **Entry:** from paradex_py import Paradex; from paradex_py.environment import Environment; paradex = Paradex(env=Environment.TESTNET, l1_address="0x...", l1_private_key="0x...")
- **Runtime:** Python 3 (pip package)
- **Requires:** l1_address (Ethereum wallet address), l1_private_key (Ethereum private key — custody risk; L2 Starknet key auto-derived if not provided)
- **License:** Unknown (SDK); official MCP server mcp-paradex-py is MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.paradex.trade/) · [Docs](https://docs.paradex.trade/) · [Sato Hub page ↗](https://satohub.ai/resources/paradex?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `paradex`. https://satohub.ai/resources/paradex — retrieved 2026-09-20.

[← All layers](../index.md)
