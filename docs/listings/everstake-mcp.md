---
title: "Everstake — Sato Hub index"
description: "Official MCP server from certified staking provider Everstake exposing live APY, uptime, and staking-calculator data."
canonical: "https://satohub.ai/resources/everstake-mcp"
canonical_url: "https://satohub.ai/resources/everstake-mcp"
layout: "default"
page_type: "listing"
item_name: "Everstake"
code_repository: "https://github.com/everstake/mcp"
software_url: "https://everstake.one"
application_category: "Data Tool"
operating_system: "Any"
license_url: "https://opensource.org/licenses/BSD-3-Clause"
license_name: "BSD-3-Clause"
date_modified: "2026-07-01"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Data, RPC & indexing"
    url: "https://satohubai.github.io/onchain-agents/categories/data-rpc"
  - name: "Everstake"
    url: "https://satohubai.github.io/onchain-agents/listings/everstake-mcp"
---

# Everstake

Official MCP server from certified staking provider Everstake exposing live APY, uptime, and staking-calculator data.

Sato Score: **⬡ 48** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Multichain
- **Open source:** Partial
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 0
- **Deploys as:** Docker, stdio, local

## Deploy spec

```sh
export DASHBOARD_URL=https://dashboard-api.everstake.one
go run ./cmd/mcp_server
```

- **Entry:** go run ./cmd/mcp_server — Docker alt: docker run -e DASHBOARD_URL=https://dashboard-api.everstake.one -p 8080:8080 everstake-mcp
- **Runtime:** Go 1.26.1+ (or Docker)
- **Requires:** DASHBOARD_URL (required, dashboard API base URL), MCP_TRANSPORT (optional, http\|stdio, default http), PORT (optional, HTTP mode only, default 8080)
- **License:** BSD-3-Clause
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://everstake.one) · [GitHub](https://github.com/everstake/mcp) · [Sato Hub page ↗](https://satohub.ai/resources/everstake-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `everstake-mcp`. https://satohub.ai/resources/everstake-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
