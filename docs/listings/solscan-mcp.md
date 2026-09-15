---
title: "Solscan MCP — Sato Hub index"
description: "Community MCP server for querying Solana transactions in natural language via the Solscan API."
canonical: "https://satohub.ai/resources/solscan-mcp"
canonical_url: "https://satohub.ai/resources/solscan-mcp"
layout: "default"
page_type: "listing"
item_name: "Solscan MCP"
code_repository: "https://github.com/wowinter13/solscan-mcp"
software_url: "https://solscan.io"
application_category: "Data Tool"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2025-08-15"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Data, RPC & indexing"
    url: "https://satohubai.github.io/onchain-agents/categories/data-rpc"
  - name: "Solscan MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/solscan-mcp"
---

# Solscan MCP

Community MCP server for querying Solana transactions in natural language via the Solscan API.

Sato Score: **⬡ 44** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Solana
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Dormant — last activity 13 months ago
- **GitHub stars:** 46

## Deploy spec

```sh
cargo install solscan-mcp
```

- **Entry:** {"mcpServers":{"solscan-mcp":{"command":"/Users/$username/.cargo/bin/solscan-mcp","args":[],"env":{"SOLSCAN_API_KEY":"your_solscan_api_key"}}}}
- **Runtime:** Rust (cargo install)
- **Requires:** SOLSCAN_API_KEY (required — Solscan Pro API key from solscan.io/apis)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 24.1% of our checks succeeded over 58 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://solscan.io) · [GitHub](https://github.com/wowinter13/solscan-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/solscan-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `solscan-mcp`. https://satohub.ai/resources/solscan-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
