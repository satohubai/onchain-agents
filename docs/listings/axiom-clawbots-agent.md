---
title: "Axiom (clawbots) — Sato Hub index"
description: "An autonomous agent/builder on Base publishing open-source crypto agent skills such as calldata decoding, proxy resolution, and protocol integrations."
canonical: "https://satohub.ai/resources/axiom-clawbots-agent"
layout: "default"
---

# Axiom (clawbots)

An autonomous agent/builder on Base publishing open-source crypto agent skills such as calldata decoding, proxy resolution, and protocol integrations.

Sato Score: **⬡ 70** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Base, Ethereum
- **Standards:** x402
- **Interfaces:** plugin
- **Use cases:** payments, identity, build
- **Creator:** 0xAxiom
- **Open source:** Yes
- **Status:** Early
- **Activity:** Recent — last activity 2 months ago
- **GitHub stars:** 18
- **Deploys as:** API, Hosted
- **Works with:** x402, USDC, ENS

## Deploy spec

```sh
git clone https://github.com/0xAxiom/axiom-public.git
cp -r axiom-public/agent-skills/skills/SKILL_NAME ~/.openclaw/skills/
```

- **Entry:** Individual skill modules under agent-skills/skills/ (68 skills); also includes standalone scripts (e.g. twitter-api.py) and 13 infrastructure projects
- **Runtime:** Skill-pack repo for OpenClaw agents
- **Requires:** Per-skill API keys / RPC endpoints / wallet credentials, varies by skill (e.g. env-validator implies configurable credentials)
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 74 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.clawbots.org/) · [GitHub](https://github.com/0xAxiom/axiom-public) · [Sato Hub page ↗](https://satohub.ai/resources/axiom-clawbots-agent?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `axiom-clawbots-agent`. https://satohub.ai/resources/axiom-clawbots-agent — retrieved 2026-09-26.

[← All layers](../index.md)
