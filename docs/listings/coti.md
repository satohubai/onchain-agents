---
title: "COTI — Sato Hub index"
description: "Privacy infrastructure that gives MCP-compatible agents private wallets, encrypted messaging, and confidential smart contracts using Garbled Circuits."
canonical: "https://satohub.ai/resources/coti"
layout: "default"
---

# COTI

Privacy infrastructure that gives MCP-compatible agents private wallets, encrypted messaging, and confidential smart contracts using Garbled Circuits.

Sato Score: **⬡ 67** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Security Tool
- **Type:** Infrastructure
- **Chains:** COTI, Ethereum
- **Standards:** mcp
- **Interfaces:** mcp, sdk, plugin, contract
- **Use cases:** wallets, privacy, security, build
- **Creator:** COTI
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity 3 days ago

## Deploy spec

```sh
npm install @coti-io/coti-sdk-typescript
```

- **Entry:** import { ... } from '@coti-io/coti-sdk-typescript' — encryption/signing utilities for COTI's confidential (Garbled Circuits) smart-contract layer; see docs.coti.io/coti-v2-documentation/build-on-coti/tools/coti-sdk
- **Runtime:** node
- **Requires:** COTI-compatible RPC endpoint + a wallet private key for signing/encrypting on-chain (per COTI docs)
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 72 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://coti.io) · [Docs](https://docs.coti.io) · [GitHub](https://github.com/coti-io) · [Sato Hub page ↗](https://satohub.ai/resources/coti?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `coti`. https://satohub.ai/resources/coti — retrieved 2026-09-25.

[← All layers](../index.md)
