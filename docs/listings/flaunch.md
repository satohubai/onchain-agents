---
title: "Flaunch — Sato Hub index"
description: "Uniswap-V4-based token launch protocol on Base with a TypeScript SDK and its own MCP server."
canonical: "https://satohub.ai/resources/flaunch"
layout: "default"
---

# Flaunch

Uniswap-V4-based token launch protocol on Base with a TypeScript SDK and its own MCP server.

Sato Score: **⬡ 77** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Base
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 6 days ago
- **GitHub stars:** 17

## Deploy spec

```sh
npm install @flaunch/sdk
```

- **Entry:** import { createFlaunch } from "@flaunch/sdk";
- **Runtime:** Node.js/TypeScript (npm package; requires Viem for reads, Viem + Wagmi for writes)
- **Requires:** Optional RPC URL parameter (public RPC fallback documented), Backend SDK (FlaunchBackend) requires a private key for signature generation — wallet private key, high-risk if exposed
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://docs.flaunch.gg/) · [Docs](https://docs.flaunch.gg/) · [GitHub](https://github.com/flayerlabs/flaunch-sdk) · [Sato Hub page ↗](https://satohub.ai/resources/flaunch?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `flaunch`. https://satohub.ai/resources/flaunch — retrieved 2026-09-14.

[← All layers](../index.md)
