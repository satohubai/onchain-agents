---
title: "LNbits MCP — Sato Hub index"
description: "Open-source MCP server for the LNbits Lightning accounts system: wallet balances, payments, and admin tools."
canonical: "https://satohub.ai/resources/lnbits-mcp"
layout: "default"
---

# LNbits MCP

Open-source MCP server for the LNbits Lightning accounts system: wallet balances, payments, and admin tools.

Sato Score: **⬡ 58** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Bitcoin
- **Standards:** mcp
- **Interfaces:** mcp
- **Use cases:** payments, wallets
- **Creator:** LNbits
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 4
- **Deploys as:** pip install (git clone + pip install -e .)
- **Works with:** Claude Desktop

## Deploy spec

```sh
git clone https://github.com/lnbits/LNbits-MCP-Server.git
cd LNbits-MCP-Server
pip install -e .
```

- **Entry:** lnbits-mcp-server (stdio) — configure your LNbits URL + API key conversationally after connecting, no env file needed
- **Runtime:** python
- **Requires:** an existing LNbits instance (self-hosted or hosted) + its admin or invoice API key
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 71 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://lnbits.com) · [Docs](https://github.com/lnbits/LNbits-MCP-Server) · [GitHub](https://github.com/lnbits/LNbits-MCP-Server) · [Sato Hub page ↗](https://satohub.ai/resources/lnbits-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `lnbits-mcp`. https://satohub.ai/resources/lnbits-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
