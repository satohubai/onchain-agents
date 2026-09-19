---
title: "Solentic — Sato Hub index"
description: "Zero-custody Solana staking MCP server with 26 tools for staking, unstaking, validator lookup, and APY data."
canonical: "https://satohub.ai/resources/solentic"
layout: "default"
---

# Solentic

Zero-custody Solana staking MCP server with 26 tools for staking, unstaking, validator lookup, and APY data.

Sato Score: **⬡ 50** (Medium), -5 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Solana
- **Open source:** Partial
- **Status:** Early
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 0
- **Deploys as:** remote (hosted endpoint), local (stdio)

## Deploy spec

```sh
npx @mbrassey/solentic-mcp
```

- **Entry:** {"mcpServers": {"solentic": {"url": "https://solentic.theblueprint.xyz/mcp"}}}
- **Runtime:** Node.js (npx package) or hosted Streamable HTTP endpoint
- **Requires:** No client-side env vars documented for the hosted/stdio setup. RISK: the stake/unstake/withdraw tools accept a Solana secret key at call time, forwarded over HTTPS to the Blueprint server for in-memory signing (README states it is not stored/logged, but this is a private-key-handling flow).
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 96.8% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://glama.ai/mcp/servers/blueprint-infrastructure/solentic-mcp) · [Docs](https://solentic.theblueprint.xyz/docs) · [GitHub](https://github.com/blueprint-infrastructure/solentic-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/solentic?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `solentic`. https://satohub.ai/resources/solentic — retrieved 2026-09-19.

[← All layers](../index.md)
