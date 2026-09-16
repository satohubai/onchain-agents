---
title: "Cryo MCP Server — Sato Hub index"
description: "MCP wrapper around Cryo, the Rust/Python Ethereum data-extraction tool, for bulk block/trace/log queries plus SQL."
canonical: "https://satohub.ai/resources/cryo-mcp"
canonical_url: "https://satohub.ai/resources/cryo-mcp"
layout: "default"
page_type: "listing"
item_name: "Cryo MCP Server"
code_repository: "https://github.com/z80dev/cryo-mcp"
software_url: "https://github.com/z80dev/cryo-mcp"
application_category: "Data Tool"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2025-03-10"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Data, RPC & indexing"
    url: "https://satohubai.github.io/onchain-agents/categories/data-rpc"
  - name: "Cryo MCP Server"
    url: "https://satohubai.github.io/onchain-agents/listings/cryo-mcp"
---

# Cryo MCP Server

MCP wrapper around Cryo, the Rust/Python Ethereum data-extraction tool, for bulk block/trace/log queries plus SQL.

Sato Score: **⬡ 47** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Ethereum
- **Open source:** Yes
- **Status:** Active
- **Activity:** Dormant — last activity 18 months ago
- **GitHub stars:** 91

## Deploy spec

```sh
uv tool install cryo-mcp
```

- **Entry:** claude mcp add (interactive) — command: uvx, args: cryo-mcp --rpc-url <ETH_RPC_URL> [--data-dir <DATA_DIR>]
- **Runtime:** Python 3.8+ (uv/uvx), requires a working cryo install + DuckDB
- **Requires:** ETH_RPC_URL (required if not passed via --rpc-url, Ethereum RPC endpoint), CRYO_DATA_DIR (optional, default download directory ~/.cryo-mcp/data/)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 59 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/z80dev/cryo-mcp) · [GitHub](https://github.com/z80dev/cryo-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/cryo-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cryo-mcp`. https://satohub.ai/resources/cryo-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
