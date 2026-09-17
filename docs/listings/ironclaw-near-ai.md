---
title: "IronClaw — Sato Hub index"
description: "NEAR AI's open-source secure agent runtime that runs agent workloads inside hardware TEEs on NEAR AI Cloud."
canonical: "https://satohub.ai/resources/ironclaw-near-ai"
layout: "default"
---

# IronClaw

NEAR AI's open-source secure agent runtime that runs agent workloads inside hardware TEEs on NEAR AI Cloud.

Sato Score: **⬡ 68** (Medium), +4 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Chains:** Near
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 9 days ago
- **GitHub stars:** 12.6k
- **Deploys as:** NEAR AI Cloud (TEE), Local (macOS/Linux/Windows/WSL)
- **Works with:** Gmail, Google Drive, Google Sheets, GitHub, Discord, Web Search, Google Calendar, Google Docs, Google Slides, Telegram, Signal, MCP Servers

## Deploy spec

```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nearai/ironclaw/releases/latest/download/ironclaw-installer.sh | sh
brew install ironclaw
ironclaw onboard
```

- **Entry:** ironclaw repl (or: ironclaw run --message "hello"; ironclaw status)
- **Runtime:** Rust binary (installer script / Homebrew); Node.js not required
- **Requires:** LLM provider API key — set via `ironclaw config set openai.api_key` during onboarding; no raw private key in env
- **License:** Apache-2.0 OR MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 60 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.ironclaw.com/) · [GitHub](https://github.com/nearai/ironclaw) · [Sato Hub page ↗](https://satohub.ai/resources/ironclaw-near-ai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `ironclaw-near-ai`. https://satohub.ai/resources/ironclaw-near-ai — retrieved 2026-09-17.

[← All layers](../index.md)
