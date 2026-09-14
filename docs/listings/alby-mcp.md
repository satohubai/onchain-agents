---
title: "Alby MCP — Sato Hub index"
description: "Official Alby MCP connecting Bitcoin Lightning wallets to agents via Nostr Wallet Connect."
canonical: "https://satohub.ai/resources/alby-mcp"
canonical_url: "https://satohub.ai/resources/alby-mcp"
layout: "default"
page_type: "listing"
item_name: "Alby MCP"
code_repository: "https://github.com/getAlby/mcp"
software_url: "https://getalby.com"
application_category: "MCP"
operating_system: "Any"
license_url: "https://www.apache.org/licenses/LICENSE-2.0"
license_name: "Apache-2.0"
date_modified: "2026-07-14"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Alby MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/alby-mcp"
---

# Alby MCP

Official Alby MCP connecting Bitcoin Lightning wallets to agents via Nostr Wallet Connect.

Sato Score: **⬡ 54** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Bitcoin
- **Standards:** mcp
- **Interfaces:** mcp, sdk
- **Use cases:** payments, wallets, privacy, build
- **Creator:** Alby
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 67
- **Deploys as:** Hosted API, npm
- **Works with:** Claude Web, Claude Desktop, Goose Desktop

## Deploy spec

```sh
Add custom connector in Claude with endpoint https://mcp.getalby.com/mcp?nwc=ENCODED_NWC_URL (or Bearer auth with the raw NWC secret)
```

- **Entry:** https://mcp.getalby.com/mcp
- **Runtime:** remote
- **Requires:** Nostr Wallet Connect (NWC) connection secret from an Alby Lightning wallet
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 8.1% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://getalby.com) · [GitHub](https://github.com/getAlby/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/alby-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `alby-mcp`. https://satohub.ai/resources/alby-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
