---
title: "Clawnch — Sato Hub index"
description: "Agent-only token launch, trading, and liquidity SDK on Base with anti-human authentication and a chat-based launcher."
canonical: "https://satohub.ai/resources/clawnch"
layout: "default"
---

# Clawnch

Agent-only token launch, trading, and liquidity SDK on Base with anti-human authentication and a chat-based launcher.

Sato Score: **⬡ 36** (Low) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Base
- **Open source:** Unknown
- **Status:** Early

## Deploy spec

```sh
pip install clawmes
hermes plugins enable clawmes
hermes clawmes init
hermes
```

- **Entry:** hermes (Clawmes plugin adds onchain slash commands inside the Hermes agent; GitHub alt install: `hermes plugins install clawnchdev/clawmes --enable`)
- **Runtime:** Python (pip package, Hermes agent plugin)
- **Requires:** One LLM key: ANTHROPIC_API_KEY \| OPENROUTER_API_KEY \| OPENAI_API_KEY \| NOUS_PORTAL_API_KEY, One channel token: TELEGRAM_BOT_TOKEN \| DISCORD_TOKEN \| SLACK_BOT_TOKEN, One wallet mode: WALLETCONNECT_PROJECT_ID \| CLAWMES_LOCAL_KEY_PASSWORD \| BANKR_API_KEY (CLAWMES_LOCAL_KEY_PASSWORD guards a locally held private key — custody risk)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 80% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.clawn.ch/) · [Sato Hub page ↗](https://satohub.ai/resources/clawnch?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `clawnch`. https://satohub.ai/resources/clawnch — retrieved 2026-09-23.

[← All layers](../index.md)
