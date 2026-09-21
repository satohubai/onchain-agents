---
title: "Solana LLM Oracle (SLO) — Sato Hub index"
description: "On-chain oracle letting Solana smart contracts request LLM inference and process results via verified callbacks."
canonical: "https://satohub.ai/resources/solana-llm-oracle"
layout: "default"
---

# Solana LLM Oracle (SLO)

On-chain oracle letting Solana smart contracts request LLM inference and process results via verified callbacks.

Sato Score: **⬡ 45** (Medium), +14 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Chains:** Solana
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 7 months ago
- **GitHub stars:** 8

## Deploy spec

```sh
cargo add solana-llm-oracle --features cpi
```

- **Entry:** create_chat / create_llm_inference (CPI interface); build: anchor build, anchor test, codama run --all
- **Runtime:** Rust / Anchor (Solana program crate)
- **Requires:** Anchor toolchain, off-chain oracle daemon
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** failed
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 98.4% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/GauravBurande/solana-llm-oracle) · [GitHub](https://github.com/GauravBurande/solana-llm-oracle) · [Sato Hub page ↗](https://satohub.ai/resources/solana-llm-oracle?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `solana-llm-oracle`. https://satohub.ai/resources/solana-llm-oracle — retrieved 2026-09-21.

[← All layers](../index.md)
