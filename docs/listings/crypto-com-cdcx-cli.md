---
title: "Crypto.com Exchange CLI (cdcx-cli) — Sato Hub index"
description: "Official Crypto.com Exchange command-line client — scriptable trading API access with a TUI for humans."
canonical: "https://satohub.ai/resources/crypto-com-cdcx-cli"
layout: "default"
---

# Crypto.com Exchange CLI (cdcx-cli)

Official Crypto.com Exchange command-line client — scriptable trading API access with a TUI for humans.

Sato Score: **⬡ 45** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Unknown
- **Open source:** Yes
- **Status:** Active

## Deploy spec

```sh
curl -sSfL https://raw.githubusercontent.com/crypto-com/cdcx-cli/main/install.sh | sh
cargo install --git https://github.com/crypto-com/cdcx-cli.git --bin cdcx
```

- **Entry:** cdcx (CLI: `cdcx market ticker BTC_USDT`, `cdcx tui`, `cdcx mcp`)
- **Runtime:** Rust single binary (installer script or cargo); npx path for MCP mode
- **Requires:** CDCX_API_KEY (exchange API key — live trading credential), CDCX_API_SECRET (exchange API secret — live trading credential, treat as sensitive), Public market data needs no credentials; fallback CDC_API_KEY/CDC_API_SECRET or ~/.config/cdcx/config.toml
- **License:** Apache-2.0 OR MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 60 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://crypto.com/exchange) · [GitHub](https://github.com/crypto-com/cdcx-cli) · [Sato Hub page ↗](https://satohub.ai/resources/crypto-com-cdcx-cli?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `crypto-com-cdcx-cli`. https://satohub.ai/resources/crypto-com-cdcx-cli — retrieved 2026-09-17.

[← All layers](../index.md)
