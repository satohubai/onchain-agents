---
title: "Lighter MCP — Sato Hub index"
description: "MCP server for trading on Lighter, a zero-fee zk-rollup perpetual DEX — place orders, manage positions, query markets."
canonical: "https://satohub.ai/resources/lighter-mcp"
layout: "default"
---

# Lighter MCP

MCP server for trading on Lighter, a zero-fee zk-rollup perpetual DEX — place orders, manage positions, query markets.

Sato Score: **⬡ 56** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Chains:** Ethereum
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 2
- **Works with:** Claude Desktop, Cursor, Hermes Agent

## Deploy spec

```sh
pip install 0xdegenmo-lighter-mcp
pip install --upgrade git+https://github.com/elliottech/lighter-python.git@main
```

- **Entry:** {"mcpServers":{"lighter":{"command":"python","args":["-m","lighter_mcp"]}}}
- **Runtime:** Python (pip package)
- **Requires:** LIGHTER_URL (TRADE mode — mainnet endpoint), LIGHTER_ACCOUNT_INDEX (TRADE mode — sub-account index), LIGHTER_PRIVATE_KEY (TRADE mode — API-key private key; docs say sub-account, not main wallet. Risk: private key material in MCP config), LIGHTER_API_KEY_INDEX (default 2), LIGHTER_MAX_QUOTE_USD (trade size cap)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 61 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://lighter.xyz) · [GitHub](https://github.com/0xDegenMo/lighter-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/lighter-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `lighter-mcp`. https://satohub.ai/resources/lighter-mcp — retrieved 2026-09-18.

[← All layers](../index.md)
