---
title: "Universal Contract AI Interface (UCAI) — Sato Hub index"
description: "ABI-to-MCP generator: turns any smart contract ABI into an MCP server agents can call."
canonical: "https://satohub.ai/resources/ucai"
layout: "default"
---

# Universal Contract AI Interface (UCAI)

ABI-to-MCP generator: turns any smart contract ABI into an MCP server agents can call.

Sato Score: **⬡ 76** (High), -10 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Developer Tool
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, contract
- **Use cases:** trading
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 37
- **Works with:** Claude

## Deploy spec

```sh
pip install abi-to-mcp
```

- **Entry:** abi-to-mcp generate <source> [options] — e.g. abi-to-mcp generate 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D -o ~/uniswap-server; generated server needs cd ~/uniswap-server && pip install -r requirements.txt
- **Runtime:** Python 3.10+
- **Requires:** RPC_URL (required, Web3 RPC endpoint for the generated server), PRIVATE_KEY (required only for write/transaction tools — risk: controls funds), ETHERSCAN_API_KEY (optional, for fetching ABIs)
- **License:** Proprietary (README states 'All rights reserved')
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/nirholas/UCAI) · [Docs](https://docs.ucai.tech) · [GitHub](https://github.com/nirholas/UCAI) · [Sato Hub page ↗](https://satohub.ai/resources/ucai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `ucai`. https://satohub.ai/resources/ucai — retrieved 2026-09-21.

[← All layers](../index.md)
