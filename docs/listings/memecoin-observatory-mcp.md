---
title: "Memecoin Observatory MCP — Sato Hub index"
description: "Solana MCP server for memecoin launch detection, whale tracking, and rugpull risk scanning."
canonical: "https://satohub.ai/resources/memecoin-observatory-mcp"
canonical_url: "https://satohub.ai/resources/memecoin-observatory-mcp"
layout: "default"
page_type: "listing"
item_name: "Memecoin Observatory MCP"
code_repository: "https://github.com/tony-42069/solana-mcp"
software_url: "https://github.com/tony-42069/solana-mcp"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-01-26"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Memecoin Observatory MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/memecoin-observatory-mcp"
---

# Memecoin Observatory MCP

Solana MCP server for memecoin launch detection, whale tracking, and rugpull risk scanning.

Sato Score: **⬡ 52** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Solana
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** wallets, data
- **Creator:** tony-42069
- **Open source:** Yes
- **Status:** Unknown
- **Activity:** Quiet — last activity 7 months ago
- **GitHub stars:** 24
- **Deploys as:** Local (self-hosted)
- **Works with:** Claude Desktop

## Deploy spec

```sh
git clone https://github.com/tony-42069/solana-mcp.git
cd solana-mcp
npm install
cp .env.example .env
```

- **Entry:** npm start (serves MCP schema at http://localhost:3000/mcp, execute at http://localhost:3000/mcp/execute)
- **Runtime:** Node.js (git clone + npm; local HTTP server on port 3000)
- **Requires:** .env from .env.example — specific variable names not listed in the README; no MCP client config JSON documented (README suggests exposing via ngrok/Cloudflare Tunnel)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/tony-42069/solana-mcp) · [GitHub](https://github.com/tony-42069/solana-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/memecoin-observatory-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `memecoin-observatory-mcp`. https://satohub.ai/resources/memecoin-observatory-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
