---
title: "MOSS Agent Skills Pack — Sato Hub index"
description: "Eight install-ready SKILL.md modules that teach coding agents — Claude Code, Codex, Cursor, Gemini — to build MOSS wallet integrations on MegaETH…"
canonical: "https://satohub.ai/resources/moss-skills"
layout: "default"
---

# MOSS Agent Skills Pack

Eight install-ready SKILL.md modules that teach coding agents — Claude Code, Codex, Cursor, Gemini — to build MOSS wallet integrations on MegaETH: SDK, permissions, React, server-verify, paymaster, CLI, Privy migration, and pre-launch security review.

Sato Score: **⬡ 63** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** MegaETH
- **Interfaces:** sdk, plugin, cli
- **Use cases:** wallets, security, build
- **Creator:** MegaETH Labs
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 0
- **Deploys as:** Claude Code plugin, Self-hosted
- **Works with:** MOSS Wallet SDK, Claude Code, Cursor, Codex, Gemini, wagmi, Copilot

## Deploy spec

```sh
/plugin marketplace add https://github.com/megaeth-labs/moss-skills.git
/plugin install moss-wallet@moss-skills
/reload-plugins
git clone https://github.com/megaeth-labs/moss-skills && cp -r moss-skills/moss-wallet/skills/* .claude/skills/
```

- **Entry:** Eight modular skills auto-load when a task is relevant; the moss-wallet-cli skill drives automation via the mega CLI
- **Runtime:** Claude Code plugin / agent-skills format (no server runtime); optional mega CLI
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 98.6% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://docs.megaeth.com/moss-docs/wallet/agent-skills) · [Docs](https://docs.megaeth.com/moss-docs/wallet/agent-skills) · [GitHub](https://github.com/megaeth-labs/moss-skills) · [Sato Hub page ↗](https://satohub.ai/resources/moss-skills?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `moss-skills`. https://satohub.ai/resources/moss-skills — retrieved 2026-09-23.

[← All layers](../index.md)
