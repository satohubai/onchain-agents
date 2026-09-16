---
title: "Neynar MCP — Sato Hub index"
description: "Official Neynar hosted MCP exposing Farcaster's OpenAPI spec and Node.js SDK to AI coding assistants."
canonical: "https://satohub.ai/resources/neynar-mcp"
canonical_url: "https://satohub.ai/resources/neynar-mcp"
layout: "default"
page_type: "listing"
item_name: "Neynar MCP"
software_url: "https://neynar.com"
application_category: "MCP"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-09-16"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "Neynar MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/neynar-mcp"
---

# Neynar MCP

Official Neynar hosted MCP exposing Farcaster's OpenAPI spec and Node.js SDK to AI coding assistants.

Sato Score: **⬡ 40** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp
- **Interfaces:** mcp, sdk, rest-api
- **Use cases:** build
- **Creator:** Neynar
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted API (docs MCP), IDE local integration
- **Works with:** Cursor, VS Code, Claude Code, Claude

## Deploy spec

```sh
claude mcp add --transport http Neynar https://docs.neynar.com/mcp
```

- **Entry:** {"mcpServers": {"Neynar": {"url": "https://docs.neynar.com/mcp"}}}
- **Runtime:** Hosted MCP endpoint (no local install)
- **Requires:** Neynar API key (paid subscription at neynar.com) placed in a .env file for API-calling workflows; the MCP endpoint itself is a docs/build assistant
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** self_reported
- **As of:** 2026-07-20

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://neynar.com) · [Docs](https://docs.neynar.com/docs/neynar-farcaster-with-cursor) · [Sato Hub page ↗](https://satohub.ai/resources/neynar-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `neynar-mcp`. https://satohub.ai/resources/neynar-mcp — retrieved 2026-09-16.

[← All layers](../index.md)
