---
title: "Indigo Protocol Cardano MCP — Sato Hub index"
description: "Cardano wallet MCP server — submit transactions, read UTxOs, resolve ADAHandles, and check stake delegation."
canonical: "https://satohub.ai/resources/cardano-mcp-indigo"
layout: "default"
---

# Indigo Protocol Cardano MCP

Cardano wallet MCP server — submit transactions, read UTxOs, resolve ADAHandles, and check stake delegation.

Sato Score: **⬡ 58** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Unknown
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 4
- **Deploys as:** npm package, npx, Docker
- **Works with:** Claude Desktop, Claude Code, Cursor, Windsurf, OpenClaw, Blockfrost, Kupo, Ogmios, Lucid Evolution

## Deploy spec

```sh
npm install -g @indigoprotocol/cardano-mcp
npx @indigoprotocol/cardano-mcp setup
```

- **Entry:** npx @indigoprotocol/cardano-mcp setup (interactive CLI wizard that auto-configures Claude Desktop/Claude Code/Cursor/Windsurf/OpenClaw)
- **Runtime:** Node.js (npm package, global install or npx)
- **Requires:** SEED_PHRASE — wallet seed phrase (comma-separated); grants full control of funds, high-risk if exposed, BLOCKFROST_PROJECT_ID — Blockfrost API key, required unless using KUPO_URL/OGMIOS_URL, PORT — optional, default 8000
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://indigoprotocol.io) · [GitHub](https://github.com/IndigoProtocol/cardano-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/cardano-mcp-indigo?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cardano-mcp-indigo`. https://satohub.ai/resources/cardano-mcp-indigo — retrieved 2026-09-26.

[← All layers](../index.md)
