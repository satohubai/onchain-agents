---
title: "Rocket Pool Agent Skills — Sato Hub index"
description: "Official Rocket Pool repo of 7 agent skills for ETH staking workflows on the Rocket Pool protocol."
canonical: "https://satohub.ai/resources/rocket-pool-skills"
layout: "default"
---

# Rocket Pool Agent Skills

Official Rocket Pool repo of 7 agent skills for ETH staking workflows on the Rocket Pool protocol.

Sato Score: **⬡ 45** (Medium), -1 over 7 days — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Skill Repo
- **Type:** Tool/Service
- **Chains:** Ethereum
- **Interfaces:** plugin
- **Use cases:** build
- **Creator:** Rocket Pool
- **Open source:** Yes
- **Status:** Unknown

## Deploy spec

```sh
git clone https://github.com/rocket-pool/skills
```

- **Entry:** Point your agent's skills loader at all-in-one/ (full protocol) or split/<domain>/ (e.g. liquid-staking, node-operations) — each bundle ships SKILL.md + references/addresses.json + assets/abis/ for use with `cast` (Foundry) or Ethereum MCP tools
- **Runtime:** node
- **Requires:** RPC_URL (Ethereum node), WALLET address, PK (private key) — only for write/transaction skills; read-only skills need just RPC_URL
- **License:** MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 98.5% of our checks succeeded over 67 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://rocketpool.net) · [GitHub](https://github.com/rocket-pool/skills) · [Sato Hub page ↗](https://satohub.ai/resources/rocket-pool-skills?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `rocket-pool-skills`. https://satohub.ai/resources/rocket-pool-skills — retrieved 2026-09-19.

[← All layers](../index.md)
