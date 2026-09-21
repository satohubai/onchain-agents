---
title: "peaq — Sato Hub index"
description: "DePIN infrastructure providing agents with identity, wallets, and pay-per-request onchain settlement, with peaqOS skills for AI coding tools."
canonical: "https://satohub.ai/resources/peaq"
layout: "default"
---

# peaq

DePIN infrastructure providing agents with identity, wallets, and pay-per-request onchain settlement, with peaqOS skills for AI coding tools.

Sato Score: **⬡ 68** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Multichain
- **Interfaces:** sdk, plugin
- **Use cases:** payments, wallets, data, identity, security, build
- **Creator:** peaq Foundation
- **Open source:** Partial
- **Status:** Active
- **Deploys as:** SDK, CLI
- **Works with:** peaqOS SDK, MCR API, ROS 2

## Deploy spec

```sh
pip install peaq-os-sdk python-dotenv
```

- **Entry:** from peaq_os_sdk import PeaqosClient client = PeaqosClient.from_env() machine_id = client.register_machine()   # sends a 1 PEAQ bond
- **Runtime:** Node.js or Python 3.10+
- **Requires:** PEAQOS_NETWORK + PEAQOS_RPC_URL + PEAQOS_PRIVATE_KEY (funded wallet) + PEAQOS_GAS_STATION_URL + 6 contract addresses, ≥1 PEAQ for the bond
- **License:** Apache-2.0
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-21

## What we checked

- Install reproduced in an isolated container on 2026-09-21.
- Live endpoint probed by us: 100% of our checks succeeded over 69 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Self-Reported**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://www.peaq.xyz) · [Docs](https://docs.peaq.xyz) · [GitHub](https://github.com/peaqnetwork) · [Sato Hub page ↗](https://satohub.ai/resources/peaq?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `peaq`. https://satohub.ai/resources/peaq — retrieved 2026-09-21.

[← All layers](../index.md)
