---
title: "eth-mcp — Sato Hub index"
description: "MCP server enabling agents to build and deploy Ethereum apps with Scaffold-ETH — clone, fork, deploy, and run local Web3 dev flows."
canonical: "https://satohub.ai/resources/eth-mcp-austingriffith"
canonical_url: "https://satohub.ai/resources/eth-mcp-austingriffith"
layout: "default"
page_type: "listing"
item_name: "eth-mcp"
code_repository: "https://github.com/austintgriffith/eth-mcp"
software_url: "https://github.com/austintgriffith/eth-mcp"
application_category: "MCP"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-01-11"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "eth-mcp"
    url: "https://satohubai.github.io/onchain-agents/listings/eth-mcp-austingriffith"
---

# eth-mcp

MCP server enabling agents to build and deploy Ethereum apps with Scaffold-ETH — clone, fork, deploy, and run local Web3 dev flows.

Sato Score: **⬡ 54** (Medium), +8 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Ethereum
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 8 months ago
- **GitHub stars:** 0
- **Works with:** Cursor, Scaffold-ETH, Foundry, Next.js, Anvil, mcp-server-ens, Blockscout MCP server, DefiLlama

## Deploy spec

```sh
npx -y eth-mcp@latest
```

- **Entry:** {"mcpServers":{"eth-mcp":{"command":"npx","args":["-y","eth-mcp@latest"]}}}
- **Runtime:** Node.js (npx package or build from source); expects Foundry tools (forge, anvil, cast) on PATH
- **Requires:** No env vars documented; docs note the server blocks access to .env files and sanitizes output to remove private keys, Local toolchain: git, npm/yarn/pnpm, Foundry (forge, anvil, cast)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 98.3% of our checks succeeded over 59 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/austintgriffith/eth-mcp) · [GitHub](https://github.com/austintgriffith/eth-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/eth-mcp-austingriffith?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `eth-mcp-austingriffith`. https://satohub.ai/resources/eth-mcp-austingriffith — retrieved 2026-09-16.

[← All layers](../index.md)
