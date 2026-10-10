---
title: "NOFX — Sato Hub index"
description: "Open-source AI trading terminal: an LLM drives strategy inside hard-coded risk limits across 9 exchanges. Model usage can be paid via x402 USDC on…"
canonical: "https://satohub.ai/resources/nofx"
layout: "default"
---

# NOFX

Open-source AI trading terminal: an LLM drives strategy inside hard-coded risk limits across 9 exchanges. Model usage can be paid via x402 USDC on Base.

Sato Score: **⬡ 70** (High), -9 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Trading Tool
- **Type:** Tool/Service
- **Chains:** Hyperliquid, Multichain
- **Standards:** x402
- **Interfaces:** ui, rest-api
- **Use cases:** trading
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 13.0k
- **Deploys as:** Self-hosted, Docker, Railway, Linux/macOS install script, Build from source
- **Works with:** Binance, Bybit, OKX, Hyperliquid, Bitget, KuCoin, Gate, Aster, Lighter, DeepSeek, OpenAI, Claude

## Deploy spec

```sh
curl -fsSL https://raw.githubusercontent.com/NoFxAiOS/nofx/main/install.sh | bash
```

- **Entry:** Terminal opens at http://127.0.0.1:3000 after install; first account registered becomes the instance owner. Docker alternative: curl -O https://raw.githubusercontent.com/NoFxAiOS/nofx/main/docker-compose.prod.yml && docker compose -f docker-compose.prod.yml up -d
- **Runtime:** Go backend + web UI (Docker, install script, or from source: Go 1.21+, Node.js 18+)
- **Requires:** Exchange credentials (Hyperliquid and eight other exchanges) entered in the web UI; README says they are encrypted at rest and stay on your machine (self-reported), An AI model provider key (DeepSeek, OpenAI, Claude, Qwen, Gemini, Grok, Kimi, MiniMax) or Claw402 metered over x402 with a wallet on Base, Autopilot places real orders: README's first run funds an AI fee wallet with $1+ USDC (Base) and a Hyperliquid account with $12+ USDC
- **License:** AGPL-3.0
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-10-09

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 18 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://vergex.trade) · [Docs](https://github.com/NoFxAiOS/nofx/tree/main/docs) · [GitHub](https://github.com/NoFxAiOS/nofx) · [Sato Hub page ↗](https://satohub.ai/resources/nofx?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `nofx`. https://satohub.ai/resources/nofx — retrieved 2026-10-10.

[← All layers](../index.md)
