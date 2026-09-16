---
title: "Polkadot MCP — Sato Hub index"
description: "Read-only Rust stdio MCP for Polkadot, Kusama, and parachains: accounts, governance, staking, and chain state."
canonical: "https://satohub.ai/resources/polkadot-mcp"
canonical_url: "https://satohub.ai/resources/polkadot-mcp"
layout: "default"
page_type: "listing"
item_name: "Polkadot MCP"
code_repository: "https://github.com/shawntabrizi/polkadot-mcp"
software_url: "https://github.com/shawntabrizi/polkadot-mcp"
application_category: "MCP"
operating_system: "Any"
license_name: "Apache-2.0 (README header also mentions MIT — inconsistent; body states Apache-2.0)"
date_modified: "2026-03-12"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Polkadot MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/polkadot-mcp"
---

# Polkadot MCP

Read-only Rust stdio MCP for Polkadot, Kusama, and parachains: accounts, governance, staking, and chain state.

Sato Score: **⬡ 32** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** wallets, data
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 0
- **Deploys as:** Cargo
- **Works with:** Claude Desktop, Claude Code, Cursor, VS Code

## Deploy spec

```sh
cargo install polkadot-mcp
```

- **Entry:** polkadot-mcp (stdio, no arguments required)
- **Runtime:** Rust (via rustup.rs)
- **Requires:** POLKADOT_SIGNER_URI (optional mnemonic/derivation path — risk: enables transaction signing, controls funds), SUBSCAN_API_KEY (optional, historical/indexed data)
- **License:** Apache-2.0 (README header also mentions MIT — inconsistent; body states Apache-2.0)
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 32.8% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/shawntabrizi/polkadot-mcp) · [GitHub](https://github.com/shawntabrizi/polkadot-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/polkadot-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `polkadot-mcp`. https://satohub.ai/resources/polkadot-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
