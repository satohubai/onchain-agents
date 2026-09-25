---
title: "Agent Payments Protocol (AP2) — Sato Hub index"
description: "Open protocol from Google for secure agent-led payments across traditional and crypto rails, with a crypto-native x402 extension built with Coinbase…"
canonical: "https://satohub.ai/resources/agent-payments-protocol-ap2"
layout: "default"
---

# Agent Payments Protocol (AP2)

Open protocol from Google for secure agent-led payments across traditional and crypto rails, with a crypto-native x402 extension built with Coinbase, Ethereum Foundation, and MetaMask.

Sato Score: **⬡ 72** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Multichain
- **Standards:** x402, mcp, a2a
- **Interfaces:** mcp, sdk
- **Use cases:** trading, payments, security, build
- **Creator:** Google
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 4 months ago
- **GitHub stars:** 2.9k
- **Deploys as:** pip, Self-hosted
- **Works with:** A2A, MCP, ADK, x402, Universal Commerce Protocol

## Deploy spec

```sh
uv pip install git+https://github.com/google-agentic-commerce/AP2.git@main
```

- **Entry:** from ap2.sdk.mandate import MandateClient from ap2.sdk.generated.payment_mandate import PaymentMandate # run demos: bash code/samples/python/scenarios/a2a/human-present/cards/run.sh
- **Runtime:** Python 3.11+ (git install — no registry package yet)
- **Requires:** GOOGLE_API_KEY (or Vertex AI) to run the agent samples, no wallet — card/A2A payment mandates
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://ap2-protocol.org/) · [Docs](https://ap2-protocol.org/specification/) · [GitHub](https://github.com/google-agentic-commerce/AP2) · [Sato Hub page ↗](https://satohub.ai/resources/agent-payments-protocol-ap2?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `agent-payments-protocol-ap2`. https://satohub.ai/resources/agent-payments-protocol-ap2 — retrieved 2026-09-25.

[← All layers](../index.md)
