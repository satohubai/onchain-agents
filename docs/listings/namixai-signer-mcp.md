---
title: "Usenami Signer MCP — Sato Hub index"
description: "MCP server that signs CEX/DEX orders inside an attested AWS Nitro Enclave so keys never touch the agent process."
canonical: "https://satohub.ai/resources/namixai-signer-mcp"
layout: "default"
---

# Usenami Signer MCP

MCP server that signs CEX/DEX orders inside an attested AWS Nitro Enclave so keys never touch the agent process.

Sato Score: **⬡ 61** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Security Tool
- **Chains:** Unknown
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity 12 days ago
- **GitHub stars:** 2

## Deploy spec

```sh
npm install @usenami/signer-mcp
```

- **Entry:** {"mcpServers": {"signer": {"command": "npx", "args": ["-y", "@usenami/signer-mcp"], "env": {"SIGNER_GATEWAY_URL": "https://signer.usenami.io", "SIGNER_API_TOKEN": "sk_live_..."}}}}
- **Runtime:** Node.js (npm package, MCP server; also an ElizaOS plugin)
- **Requires:** SIGNER_API_TOKEN — bearer token issued by usenami.io, required for paid tools; high-risk if exposed since it authorizes order signing (docs state the private key itself stays in an AWS Nitro Enclave, never loaded locally), SIGNER_GATEWAY_URL — optional, defaults to https://signer.usenami.io
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 68 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://github.com/namixai/signer-mcp) · [GitHub](https://github.com/namixai/signer-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/namixai-signer-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `namixai-signer-mcp`. https://satohub.ai/resources/namixai-signer-mcp — retrieved 2026-09-26.

[← All layers](../index.md)
