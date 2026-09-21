---
title: "dRPC Agent Skills — Sato Hub index"
description: "dRPC-maintained blockchain RPC skill and MCP surface giving agents node access across 200+ networks."
canonical: "https://satohub.ai/resources/drpc-agent-skills"
layout: "default"
---

# dRPC Agent Skills

dRPC-maintained blockchain RPC skill and MCP surface giving agents node access across 200+ networks.

Sato Score: **⬡ 56** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Multichain
- **Standards:** mcp
- **Interfaces:** mcp, rest-api, plugin
- **Use cases:** data, build
- **Creator:** dRPC
- **Open source:** Yes
- **Status:** Active
- **Activity:** Quiet — last activity 5 months ago
- **GitHub stars:** 17
- **Deploys as:** Agent skills package (install via git clone or per-client extension install)
- **Works with:** Claude Code, Gemini CLI, Cursor, Codex, Pi Agent, Windsurf, Cline, OpenClaw

## Deploy spec

```sh
claude plugins marketplace add drpcorg/drpc-agent-skills
claude plugins install drpc-agent-skills
```

- **Entry:** Claude Code plugin skill (also documented for Gemini CLI, Cursor, Codex, Pi Agent, Windsurf, Cline, OpenClaw — per-client commands in README)
- **Runtime:** cli
- **Requires:** dRPC API key — auto-issued via x402 if the agent already has a wallet, otherwise a free key from drpc.org
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 36.2% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://drpc.org) · [Docs](https://github.com/drpcorg/drpc-agent-skills) · [GitHub](https://github.com/drpcorg/drpc-agent-skills) · [Sato Hub page ↗](https://satohub.ai/resources/drpc-agent-skills?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `drpc-agent-skills`. https://satohub.ai/resources/drpc-agent-skills — retrieved 2026-09-21.

[← All layers](../index.md)
