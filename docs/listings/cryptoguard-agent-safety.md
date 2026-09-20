---
title: "CryptoGuard — Sato Hub index"
description: "Intercepts agent transactions and checks them against 5 security oracles before execution."
canonical: "https://satohub.ai/resources/cryptoguard-agent-safety"
layout: "default"
---

# CryptoGuard

Intercepts agent transactions and checks them against 5 security oracles before execution.

Sato Score: **⬡ 53** (Medium), +7 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Security Tool
- **Chains:** Multichain
- **Creator:** momenbasel
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 8
- **Deploys as:** CLI tool, Python library, MCP server, pip package
- **Works with:** Claude Code, OpenAI Codex, Cursor, GoPlus Security, Honeypot.is, TokenSniffer, De.Fi Scanner, QuickIntel

## Deploy spec

```sh
pip install cryptoguard-ai
cryptoguard install-hook
```

- **Entry:** cryptoguard check <ADDRESS> --chain <CHAIN> (CLI); from cryptoguard import analyze (Python); python -m cryptoguard.mcp_server (MCP)
- **Runtime:** Python (pip package, CLI + optional MCP server)
- **Requires:** CRYPTOGUARD_DISABLE — optional, bypasses the hook, default 0, CRYPTOGUARD_CHAIN — optional, default chain, default ethereum, CRYPTOGUARD_THRESHOLD — optional, minimum risk level to block, default HIGH, No API keys required per docs — security oracles used have free public tiers
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 63 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/momenbasel/CryptoGuard) · [GitHub](https://github.com/momenbasel/CryptoGuard) · [Sato Hub page ↗](https://satohub.ai/resources/cryptoguard-agent-safety?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cryptoguard-agent-safety`. https://satohub.ai/resources/cryptoguard-agent-safety — retrieved 2026-09-20.

[← All layers](../index.md)
