---
title: "SIWA (Sign In With Agent) — Sato Hub index"
description: "Agent-identity authentication protocol modeled on Sign-In-With-Ethereum, letting services verify an agent before granting access."
canonical: "https://satohub.ai/resources/siwa-sign-in-with-agent"
layout: "default"
---

# SIWA (Sign In With Agent)

Agent-identity authentication protocol modeled on Sign-In-With-Ethereum, letting services verify an agent before granting access.

Sato Score: **⬡ 59** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Security Tool
- **Chains:** Ethereum
- **Creator:** Builders Garden
- **Open source:** Yes
- **Status:** Early
- **Activity:** Quiet — last activity 6 months ago
- **GitHub stars:** 35
- **Works with:** Next.js, Express, Hono, Fastify, Circle, Openfort, Privy, WalletClient

## Deploy spec

```sh
npm install @buildersgarden/siwa
```

- **Entry:** import { signSIWAMessage } from "@buildersgarden/siwa"; server middleware exports at @buildersgarden/siwa/next, /express, /hono, /fastify
- **Runtime:** Node.js (npm package)
- **Requires:** A wallet signer via one of the documented factories (Circle, Openfort, Privy, local account, keyring proxy, wallet client); local-account signing handles a private key — custody risk, .env.proxy.example lists proxy-mode variables (not enumerated in README)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://siwa.id) · [Docs](https://siwa.id/docs) · [GitHub](https://github.com/builders-garden/siwa) · [Sato Hub page ↗](https://satohub.ai/resources/siwa-sign-in-with-agent?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `siwa-sign-in-with-agent`. https://satohub.ai/resources/siwa-sign-in-with-agent — retrieved 2026-09-14.

[← All layers](../index.md)
