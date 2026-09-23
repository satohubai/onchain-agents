---
title: "Hashnet MCP Server — Sato Hub index"
description: "Hashgraph Online MCP for agent discovery, chat, registration, workflows, and Hedera agent interactions."
canonical: "https://satohub.ai/resources/hashnet-mcp"
layout: "default"
---

# Hashnet MCP Server

Hashgraph Online MCP for agent discovery, chat, registration, workflows, and Hedera agent interactions.

Sato Score: **⬡ 64** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp, a2a
- **Interfaces:** mcp
- **Use cases:** data
- **Creator:** Hashgraph Online
- **Open source:** Unknown
- **Status:** Active
- **Activity:** Active — last activity 16 days ago
- **GitHub stars:** 13
- **Deploys as:** npx / pnpm (stdio or HTTP modes)

## Deploy spec

```sh
npx @hol-org/hashnet-mcp --stdio
```

- **Entry:** npx @hol-org/hashnet-mcp --stdio (also supports --http, Streamable HTTP at /mcp)
- **Runtime:** node
- **Requires:** HEDERA_ACCOUNT_ID / HEDERA_PRIVATE_KEY or ETH_PK (optional — only needed for on-chain agent registration/signing; discovery+chat tools work unauthenticated against the public HOL Registry Broker), REGISTRY_BROKER_API_KEY (optional — unlocks paid tools)
- **License:** Apache-2.0
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 70 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://hashgraphonline.com) · [Docs](https://github.com/hashgraph-online/hashnet-mcp-js) · [GitHub](https://github.com/hashgraph-online/hashnet-mcp-js) · [Sato Hub page ↗](https://satohub.ai/resources/hashnet-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `hashnet-mcp`. https://satohub.ai/resources/hashnet-mcp — retrieved 2026-09-23.

[← All layers](../index.md)
