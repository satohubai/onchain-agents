---
title: "Fewsats — Sato Hub index"
description: "L402 payments platform and MCP server letting agents pay for API access with Bitcoin Lightning or stablecoins."
canonical: "https://satohub.ai/resources/fewsats"
layout: "default"
---

# Fewsats

L402 payments platform and MCP server letting agents pay for API access with Bitcoin Lightning or stablecoins.

Sato Score: **⬡ 43** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Chains:** Bitcoin, Multichain
- **Open source:** Partial
- **Status:** Unknown
- **Activity:** Dormant — last activity 16 months ago
- **GitHub stars:** 15

## Deploy spec

```sh
uvx fewsats-mcp
```

- **Entry:** {"mcpServers":{"Fewsats Server":{"command":"uvx","args":["fewsats-mcp"],"env":{"FEWSATS_API_KEY":"YOUR_FEWSATS_API_KEY"}}}}
- **Runtime:** Python (uvx recommended, pip supported)
- **Requires:** FEWSATS_API_KEY (required — from fewsats.com; grants payment authority over the Fewsats wallet)
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-21

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://fewsats.com) · [GitHub](https://github.com/Fewsats/fewsats-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/fewsats?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `fewsats`. https://satohub.ai/resources/fewsats — retrieved 2026-09-25.

[← All layers](../index.md)
