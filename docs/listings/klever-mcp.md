---
title: "Klever MCP — Sato Hub index"
description: "Official MCP server for the Klever blockchain — smart contract development, account/asset queries, and transaction analysis."
canonical: "https://satohub.ai/resources/klever-mcp"
canonical_url: "https://satohub.ai/resources/klever-mcp"
layout: "default"
page_type: "listing"
item_name: "Klever MCP"
code_repository: "https://github.com/klever-io/mcp-klever-vm"
software_url: "https://klever.org"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-05-19"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Klever MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/klever-mcp"
---

# Klever MCP

Official MCP server for the Klever blockchain — smart contract development, account/asset queries, and transaction analysis.

Sato Score: **⬡ 76** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Unknown
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 31
- **Deploys as:** npm package, Docker, self-hosted, hosted service
- **Works with:** Claude Code, Claude Desktop, Cursor, VS Code (GitHub Copilot)

## Deploy spec

```sh
npx -y @klever/mcp-server
```

- **Entry:** {"mcpServers": {"klever-vm": {"command": "npx", "args": ["-y", "@klever/mcp-server"]}}}
- **Runtime:** Node.js (npm package) or self-hosted via pnpm
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://klever.org) · [GitHub](https://github.com/klever-io/mcp-klever-vm) · [Sato Hub page ↗](https://satohub.ai/resources/klever-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `klever-mcp`. https://satohub.ai/resources/klever-mcp — retrieved 2026-09-14.

[← All layers](../index.md)
