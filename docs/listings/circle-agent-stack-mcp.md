---
title: "Circle Agent Stack MCP — Sato Hub index"
description: "MCP wrapper around Circle's Agent Stack — create USDC wallets, set spend policies, send stablecoin, and pay x402-gated endpoints."
canonical: "https://satohub.ai/resources/circle-agent-stack-mcp"
canonical_url: "https://satohub.ai/resources/circle-agent-stack-mcp"
layout: "default"
page_type: "listing"
item_name: "Circle Agent Stack MCP"
code_repository: "https://github.com/kinance/circle-agent-stack-mcp"
software_url: "https://developers.circle.com/agent-stack"
application_category: "Wallet Infrastructure"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-06-04"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Wallets, keys & permissions"
    url: "https://satohubai.github.io/onchain-agents/categories/wallets-keys"
  - name: "Circle Agent Stack MCP"
    url: "https://satohubai.github.io/onchain-agents/listings/circle-agent-stack-mcp"
---

# Circle Agent Stack MCP

MCP wrapper around Circle's Agent Stack — create USDC wallets, set spend policies, send stablecoin, and pay x402-gated endpoints.

Sato Score: **⬡ 52** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Ethereum, Base
- **Open source:** Partial
- **Status:** Early
- **Activity:** Quiet — last activity 3 months ago
- **GitHub stars:** 1

## Deploy spec

```sh
npm install -g @circle-fin/circle-cli
circle login
export CIRCLE_API_KEY=your_key_here
npx circle-agent-stack-mcp
```

- **Entry:** {"mcpServers":{"circle":{"command":"npx","args":["-y","circle-agent-stack-mcp"],"env":{"CIRCLE_API_KEY":"your_key_here"}}}}
- **Runtime:** Node.js (npx; shells out to the Circle CLI)
- **Requires:** CIRCLE_API_KEY (required), CIRCLE_PAYOUT_ADDRESS (required for self-hosted x402 paywall mode)
- **License:** MIT
- **MCP native:** yes
- **Deploy status:** failed
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 58 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://developers.circle.com/agent-stack) · [GitHub](https://github.com/kinance/circle-agent-stack-mcp) · [Sato Hub page ↗](https://satohub.ai/resources/circle-agent-stack-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `circle-agent-stack-mcp`. https://satohub.ai/resources/circle-agent-stack-mcp — retrieved 2026-09-15.

[← All layers](../index.md)
