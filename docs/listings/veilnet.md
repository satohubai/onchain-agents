---
title: "VeilNet — Sato Hub index"
description: "Privacy-preserving x402 payments for agents on Base, with stealth addresses and TEE-encrypted inference, no accounts or API keys."
canonical: "https://satohub.ai/resources/veilnet"
layout: "default"
---

# VeilNet

Privacy-preserving x402 payments for agents on Base, with stealth addresses and TEE-encrypted inference, no accounts or API keys.

Sato Score: **⬡ 47** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Base, Ethereum
- **Standards:** x402, mcp
- **Interfaces:** mcp, sdk, rest-api
- **Use cases:** payments, privacy, build
- **Creator:** Veilnet
- **Open source:** Partial
- **Status:** Beta
- **Deploys as:** MCP server, API
- **Works with:** Model Context Protocol (MCP), Claude Code, Cursor

## Deploy spec

```sh
claude mcp add veilnet --scope user -- npx -y @veilnet/mcp-server
```

- **Entry:** {"mcpServers": {"veilnet": {"command": "npx", "args": ["-y", "@veilnet/mcp-server"]}}}
- **Runtime:** Node.js >=22 (native WebCrypto required); MCP server via npx
- **Requires:** session.json + master.key files at ~/.veilnet/ downloaded from app.veilnet.to Agent tab (private key material — local custody risk), funded shielded-USDC balance on VeilNet
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 65 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.veilnet.to) · [Docs](https://docs.veilnet.to) · [Sato Hub page ↗](https://satohub.ai/resources/veilnet?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `veilnet`. https://satohub.ai/resources/veilnet — retrieved 2026-09-17.

[← All layers](../index.md)
