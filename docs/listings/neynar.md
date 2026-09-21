---
title: "Neynar — Sato Hub index"
description: "Farcaster developer platform providing APIs, SDKs, webhooks, and an agent skill for building and deploying agents that read and write Farcaster data."
canonical: "https://satohub.ai/resources/neynar"
layout: "default"
---

# Neynar

Farcaster developer platform providing APIs, SDKs, webhooks, and an agent skill for building and deploying agents that read and write Farcaster data.

Sato Score: **⬡ 69** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Base, Ethereum
- **Standards:** x402
- **Interfaces:** sdk, rest-api, plugin
- **Use cases:** payments, data, build
- **Creator:** Neynar
- **Open source:** Partial
- **Status:** Active
- **Deploys as:** API
- **Works with:** Farcaster, REST API, Node.js SDK, Webhooks, Mini Apps

## Deploy spec

```sh
npm install @neynar/nodejs-sdk
```

- **Entry:** import { NeynarAPIClient, Configuration } from "@neynar/nodejs-sdk"; const client = new NeynarAPIClient(new Configuration({ apiKey: "YOUR_NEYNAR_API_KEY" }));
- **Runtime:** Node.js / TypeScript
- **Requires:** a Neynar API key (dev.neynar.com)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://neynar.com/) · [Docs](https://docs.neynar.com/) · [GitHub](https://github.com/neynarxyz) · [Sato Hub page ↗](https://satohub.ai/resources/neynar?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `neynar`. https://satohub.ai/resources/neynar — retrieved 2026-09-21.

[← All layers](../index.md)
