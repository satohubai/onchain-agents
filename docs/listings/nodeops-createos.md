---
title: "NodeOps (CreateOS) — Sato Hub index"
description: "A deployment platform whose CreateOS skills let AI coding tools deploy and manage apps without manual DevOps."
canonical: "https://satohub.ai/resources/nodeops-createos"
layout: "default"
---

# NodeOps (CreateOS)

A deployment platform whose CreateOS skills let AI coding tools deploy and manage apps without manual DevOps.

Sato Score: **⬡ 47** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Developer Tool
- **Type:** Tool/Service
- **Chains:** Unknown
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, plugin
- **Use cases:** build, launch
- **Creator:** NodeOps
- **Open source:** Unknown
- **Status:** Active
- **Deploys as:** Hosted, CLI, MCP server, npm, API
- **Works with:** Claude Code, GitHub Copilot, Gemini CLI, OpenCode, Codex, Cursor, Windsurf, Antigravity, Zapier, ElevenLabs, Supabase

## Deploy spec

```sh
npx skills add https://github.com/NodeOps-app/skills --skill createos
```

- **Entry:** MCP endpoint: https://api-createos.nodeops.network/mcp (no API key needed for MCP; REST calls need header X-Api-Key: <your-api-key>)
- **Runtime:** Skills protocol CLI (Node-based `npx skills`) + hosted MCP endpoint
- **Requires:** API key generated from a CreateOS account (createos.nodeops.network) for direct REST use
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 73 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://nodeops.network) · [Docs](https://nodeops.network/createos/docs/API-MCP/CreateOS-Skills) · [Sato Hub page ↗](https://satohub.ai/resources/nodeops-createos?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `nodeops-createos`. https://satohub.ai/resources/nodeops-createos — retrieved 2026-09-25.

[← All layers](../index.md)
