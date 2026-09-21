---
title: "listen (DeFAI toolkit) — Sato Hub index"
description: "Rust toolkit pairing the rig LLM framework with Solana trading primitives, including Jito bundle submission."
canonical: "https://satohub.ai/resources/listen-rs"
layout: "default"
---

# listen (DeFAI toolkit)

Rust toolkit pairing the rig LLM framework with Solana trading primitives, including Jito bundle submission.

Sato Score: **⬡ 49** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Chains:** Solana
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 10 months ago
- **GitHub stars:** 1.1k

## Deploy spec

```sh
sudo apt install protoc build-essential pkg-config libssl-dev
cargo build --release
docker compose up
```

- **Entry:** cargo run -- listen --worker-count [COUNT] --buffer-size [SIZE]
- **Runtime:** Rust (nightly) / Docker Compose
- **Requires:** protoc, libssl-dev
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** failed
- **As of:** 2026-09-21

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/piotrostr/listen) · [GitHub](https://github.com/piotrostr/listen) · [Sato Hub page ↗](https://satohub.ai/resources/listen-rs?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `listen-rs`. https://satohub.ai/resources/listen-rs — retrieved 2026-09-21.

[← All layers](../index.md)
