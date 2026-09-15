---
title: "Bitcoin MCP (Bortlesboat) — Sato Hub index"
description: "Zero-config Bitcoin data MCP: fees, mempool, blocks, transactions, mining, price, and supply."
canonical: "https://satohub.ai/resources/bitcoin-mcp"
canonical_url: "https://satohub.ai/resources/bitcoin-mcp"
layout: "default"
page_type: "listing"
item_name: "Bitcoin MCP (Bortlesboat)"
code_repository: "https://github.com/Bortlesboat/bitcoin-mcp"
software_url: "https://github.com/Bortlesboat/bitcoin-mcp"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-10"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Bitcoin MCP (Bortlesboat)"
    url: "https://satohubai.github.io/onchain-agents/listings/bitcoin-mcp"
---

# Bitcoin MCP (Bortlesboat)

Zero-config Bitcoin data MCP: fees, mempool, blocks, transactions, mining, price, and supply.

Sato Score: **⬡ 81** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Bitcoin
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** payments, wallets, data
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 5 days ago
- **GitHub stars:** 3
- **Deploys as:** pip
- **Works with:** Claude Desktop, Claude Code, Cursor, VS Code, Zed

## Deploy spec

```sh
pip install bitcoin-mcp
```

- **Entry:** bitcoin-mcp (supports --transport, --host, --port, --log-level flags)
- **Runtime:** Python 3.10+
- **Requires:** SATOSHI_API_KEY (optional, raises free hosted API limit from 1,000 to 10,000 req/day), BITCOIN_RPC_HOST/PORT (optional, for self-hosted node), BITCOIN_NETWORK (optional, default mainnet)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/Bortlesboat/bitcoin-mcp) · [Docs](https://github.com/Bortlesboat/bitcoin-mcp) · [GitHub](https://github.com/Bortlesboat/bitcoin-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/bitcoin-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `bitcoin-mcp`. https://satohub.ai/resources/bitcoin-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
