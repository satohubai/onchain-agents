---
title: "Olas (Autonolas) — Sato Hub index"
description: "Network and framework for co-owned autonomous agent services operating onchain."
canonical: "https://satohub.ai/resources/olas"
canonical_url: "https://satohub.ai/resources/olas"
layout: "default"
page_type: "listing"
item_name: "Olas (Autonolas)"
code_repository: "https://github.com/valory-xyz"
software_url: "https://olas.network"
application_category: "Agent Framework"
operating_system: "Any"
license_url: "https://www.apache.org/licenses/LICENSE-2.0"
license_name: "Apache-2.0"
date_modified: "2026-09-11"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Agent runtimes & frameworks"
    url: "https://satohubai.github.io/onchain-agents/categories/agent-frameworks"
  - name: "Olas (Autonolas)"
    url: "https://satohubai.github.io/onchain-agents/listings/olas"
---

# Olas (Autonolas)

Network and framework for co-owned autonomous agent services operating onchain.

Sato Score: **⬡ 87** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Agent Framework
- **Type:** Framework
- **Chains:** Ethereum, Gnosis, Base, Multichain
- **Interfaces:** sdk
- **Use cases:** trading, identity, build
- **Creator:** Olas DAO
- **Open source:** Yes
- **Status:** Active
- **Activity:** Active — last activity 2 days ago
- **Deploys as:** Self-hosted, Docker, Kubernetes
- **Works with:** Safe, Polymarket, Tenderly

## Deploy spec

```sh
pip install open-autonomy[all]
pip install open-aea-ledger-ethereum
```

- **Entry:** autonomy --version autonomy init --reset --author <name> --remote --ipfs autonomy fetch valory/hello_world:0.1.0:<hash>   # fetch a service
- **Runtime:** Python 3.10–3.14
- **Requires:** Docker + Docker Compose + Tendermint 0.34.19 to run services, EVM RPC + funded key for on-chain deployment
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-14

## What we checked

- Install reproduced in an isolated container on 2026-09-14.
- Live endpoint probed by us: 100% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://olas.network) · [Docs](https://docs.autonolas.network) · [GitHub](https://github.com/valory-xyz) · [Sato Hub page ↗](https://satohub.ai/resources/olas?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `olas`. https://satohub.ai/resources/olas — retrieved 2026-09-14.

[← All layers](../index.md)
