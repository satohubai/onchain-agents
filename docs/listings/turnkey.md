---
title: "Turnkey — Sato Hub index"
description: "Secure key management infrastructure with policy controls, commonly used for agent wallets."
canonical: "https://satohub.ai/resources/turnkey"
layout: "default"
---

# Turnkey

Secure key management infrastructure with policy controls, commonly used for agent wallets.

Sato Score: **⬡ 83** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Type:** Infrastructure
- **Chains:** Ethereum, Base, Solana, Multichain
- **Interfaces:** rest-api
- **Use cases:** wallets, privacy, security
- **Creator:** Turnkey
- **Open source:** Partial
- **Status:** Active
- **Activity:** Active — last activity 5 days ago
- **Deploys as:** API, SDK
- **Works with:** TypeScript SDK, React SDK, React Native SDK, REST API

## Deploy spec

```sh
npm install @turnkey/sdk-server
```

- **Entry:** import { Turnkey } from "@turnkey/sdk-server"; const turnkey = new Turnkey({ defaultOrganizationId, apiBaseUrl: "https://api.turnkey.com", apiPrivateKey, apiPublicKey });
- **Runtime:** Node.js
- **Requires:** Turnkey API keypair (apiPublicKey / apiPrivateKey), defaultOrganizationId
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://turnkey.com) · [Docs](https://docs.turnkey.com) · [GitHub](https://github.com/tkhq) · [Sato Hub page ↗](https://satohub.ai/resources/turnkey?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `turnkey`. https://satohub.ai/resources/turnkey — retrieved 2026-09-21.

[← All layers](../index.md)
