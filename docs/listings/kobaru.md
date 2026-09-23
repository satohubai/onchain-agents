---
title: "Kobaru — Sato Hub index"
description: "An x402 micropayment gateway and transparent proxy that adds pay-per-request paywalls to existing APIs without backend rewrites."
canonical: "https://satohub.ai/resources/kobaru"
layout: "default"
---

# Kobaru

An x402 micropayment gateway and transparent proxy that adds pay-per-request paywalls to existing APIs without backend rewrites.

Sato Score: **⬡ 56** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Solana, Base
- **Standards:** x402, mcp
- **Interfaces:** mcp, sdk, rest-api
- **Use cases:** payments, build
- **Creator:** Kobaru
- **Open source:** Partial
- **Status:** Active
- **Activity:** Quiet — last activity 7 months ago
- **GitHub stars:** 4
- **Deploys as:** Hosted, Self-hosted, npm, MCP server, API
- **Works with:** x402, Model Context Protocol (MCP), USDC

## Deploy spec

```sh
git clone https://github.com/kobaru-io/api-paywall-cookbook.git
cd api-paywall-cookbook/examples/nodejs/deep-thought-api
npm install
npm run dev
```

- **Entry:** npm run dev (Node.js examples, localhost:3000); pip install -r requirements.txt then run for Python (FastAPI) examples; go run main.go for Go examples
- **Runtime:** Node.js / Python / Go (example cookbook, per-language)
- **Requires:** KOBARU_API_KEY, Wallet address (payment recipient), SVM_PRIVATE_KEY — Solana private key used by the bundled '007 Test Agent' (custody risk)
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 71 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.kobaru.io/) · [Docs](https://docs.kobaru.io/) · [GitHub](https://github.com/kobaru-io/api-paywall-cookbook) · [Sato Hub page ↗](https://satohub.ai/resources/kobaru?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `kobaru`. https://satohub.ai/resources/kobaru — retrieved 2026-09-23.

[← All layers](../index.md)
