---
title: "Self Protocol — Sato Hub index"
description: "Open-source zero-knowledge identity protocol (passport-based proof of personhood) used to gate agent access to onchain services."
canonical: "https://satohub.ai/resources/self-protocol"
layout: "default"
---

# Self Protocol

Open-source zero-knowledge identity protocol (passport-based proof of personhood) used to gate agent access to onchain services.

Sato Score: **⬡ 80** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Security Tool
- **Chains:** Multichain
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 4 days ago
- **GitHub stars:** 1.3k

## Deploy spec

```sh
npm install @selfxyz/enterprise-sdk
```

- **Entry:** import { SelfClient } from '@selfxyz/enterprise-sdk'; new SelfClient({ apiKey: process.env.SELF_API_KEY })
- **Runtime:** Node.js / TypeScript (npm package)
- **Requires:** SELF_API_KEY (from the dashboard Developer > API keys section), SELF_WEBHOOK_SECRET (webhook signing secret, shown once when adding an endpoint)
- **License:** Unknown
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-07-21

## What we checked

- Install reproduced in an isolated container on 2026-07-21.
- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://self.xyz) · [Docs](https://docs.self.xyz/) · [GitHub](https://github.com/selfxyz/self) · [Sato Hub page ↗](https://satohub.ai/resources/self-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `self-protocol`. https://satohub.ai/resources/self-protocol — retrieved 2026-09-19.

[← All layers](../index.md)
