---
title: "World AgentKit — Sato Hub index"
description: "SDK from World (Tools for Humanity) that lets AI agents present a zero-knowledge proof a verified human authorized them, combined with x402 payments."
canonical: "https://satohub.ai/resources/world-agentkit"
canonical_url: "https://satohub.ai/resources/world-agentkit"
layout: "default"
page_type: "listing"
item_name: "World AgentKit"
code_repository: "https://github.com/worldcoin/agentkit"
software_url: "https://docs.world.org/agents/agent-kit/integrate"
application_category: "API / SDK"
application_subcategory: "Proof-of-human identity + payment SDK for agents"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-08-27"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Onchain action kits & SDKs"
    url: "https://satohubai.github.io/onchain-agents/categories/action-kits"
  - name: "World AgentKit"
    url: "https://satohubai.github.io/onchain-agents/listings/world-agentkit"
---

# World AgentKit

SDK from World (Tools for Humanity) that lets AI agents present a zero-knowledge proof a verified human authorized them, combined with x402 payments.

Sato Score: **⬡ 86** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Base
- **Standards:** x402
- **Interfaces:** sdk, rest-api
- **Use cases:** payments, data, identity, privacy, security, build
- **Creator:** Worldcoin
- **Open source:** Partial
- **Status:** Beta
- **Activity:** Active — last activity 19 days ago
- **GitHub stars:** 23
- **Deploys as:** npm
- **Works with:** x402, World ID, World Chain, Base, Hono

## Deploy spec

```sh
npm install @worldcoin/agentkit
```

- **Entry:** import { createAgentkitClient } from '@worldcoin/agentkit' const agentkit = createAgentkitClient({ signer: { address, chainId: 'eip155:8453', type: 'eip191', signMessage } }) // register: npx @worldcoin/agentkit-cli register <agent-address>
- **Runtime:** Node.js / TypeScript
- **Requires:** an agent wallet (address + signMessage), facilitator endpoint + payTo for x402 payments
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Live endpoint probed by us: 100% of our checks succeeded over 64 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Verified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://docs.world.org/agents/agent-kit/integrate) · [Docs](https://docs.world.org/agents/agent-kit/integrate) · [GitHub](https://github.com/worldcoin/agentkit) · [Sato Hub page ↗](https://satohub.ai/resources/world-agentkit?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `world-agentkit`. https://satohub.ai/resources/world-agentkit — retrieved 2026-09-16.

[← All layers](../index.md)
