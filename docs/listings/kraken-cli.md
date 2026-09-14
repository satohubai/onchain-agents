---
title: "Kraken CLI — Sato Hub index"
description: "Official Kraken CLI with a built-in MCP server for spot, futures, forex, and tokenized stock trading."
canonical: "https://satohub.ai/resources/kraken-cli"
layout: "default"
---

# Kraken CLI

Official Kraken CLI with a built-in MCP server for spot, futures, forex, and tokenized stock trading.

Sato Score: **⬡ 65** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Developer Tool
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp
- **Interfaces:** mcp, cli
- **Use cases:** trading
- **Creator:** Kraken
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 680
- **Deploys as:** Binary install (curl installer script), Cargo install, Homebrew-style download from GitHub Releases
- **Works with:** Cursor, Claude, Codex, Copilot, Gemini, Goose, OpenClaw

## Deploy spec

```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/krakenfx/kraken-cli/releases/latest/download/kraken-cli-installer.sh | sh
```

- **Entry:** kraken mcp -s all
- **Runtime:** binary
- **Requires:** KRAKEN_API_KEY + KRAKEN_API_SECRET (authenticated trading/account calls only — public market data and paper trading work without credentials)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/krakenfx/kraken-cli) · [Docs](https://github.com/krakenfx/kraken-cli/releases) · [GitHub](https://github.com/krakenfx/kraken-cli) · [Sato Hub page ↗](https://satohub.ai/resources/kraken-cli?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `kraken-cli`. https://satohub.ai/resources/kraken-cli — retrieved 2026-09-14.

[← All layers](../index.md)
