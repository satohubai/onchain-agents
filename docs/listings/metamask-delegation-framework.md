---
title: "MetaMask Delegation Framework — Sato Hub index"
description: "MetaMask's official smart-account delegation contracts — grant an AI agent scoped, revocable permissions instead of a private key."
canonical: "https://satohub.ai/resources/metamask-delegation-framework"
canonical_url: "https://satohub.ai/resources/metamask-delegation-framework"
layout: "default"
page_type: "listing"
item_name: "MetaMask Delegation Framework"
code_repository: "https://github.com/MetaMask/delegation-framework"
software_url: "https://gator.metamask.io"
application_category: "Wallet Infrastructure"
operating_system: "Any"
license_name: "Apache-2.0 OR MIT"
date_modified: "2026-08-07"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Wallets, keys & permissions"
    url: "https://satohubai.github.io/onchain-agents/categories/wallets-keys"
  - name: "MetaMask Delegation Framework"
    url: "https://satohubai.github.io/onchain-agents/listings/metamask-delegation-framework"
---

# MetaMask Delegation Framework

MetaMask's official smart-account delegation contracts — grant an AI agent scoped, revocable permissions instead of a private key.

Sato Score: **⬡ 60** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Wallet Infrastructure
- **Chains:** Ethereum, Base, Multichain
- **Open source:** Yes
- **Status:** Active
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 219

## Deploy spec

```sh
forge build
forge test
```

- **Entry:** forge script script/DeployDelegationFramework.s.sol --rpc-url <your_rpc_url> --private-key $PRIVATE_KEY --broadcast
- **Runtime:** Foundry / Solidity 0.8.23 (smart-contract framework, not a runnable server)
- **Requires:** .env populated from .env.example, then `source .env`, PRIVATE_KEY (deployer key for forge scripts — risk: funded deployer private key in env), RPC URL for the target chain; optional local fork via `anvil -f <your_rpc_url>`
- **License:** Apache-2.0 OR MIT
- **MCP native:** no
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 100% of our checks succeeded over 57 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://gator.metamask.io) · [Docs](https://docs.metamask.io/smart-accounts-kit/) · [GitHub](https://github.com/MetaMask/delegation-framework) · [Sato Hub page ↗](https://satohub.ai/resources/metamask-delegation-framework?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `metamask-delegation-framework`. https://satohub.ai/resources/metamask-delegation-framework — retrieved 2026-09-14.

[← All layers](../index.md)
