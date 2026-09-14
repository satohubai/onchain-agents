---
title: "x402 OpenAI (Python) — Sato Hub index"
description: "Drop-in OpenAI Python client with transparent x402 micropayment support."
canonical: "https://satohub.ai/resources/x402-openai-python"
canonical_url: "https://satohub.ai/resources/x402-openai-python"
layout: "default"
page_type: "listing"
item_name: "x402 OpenAI (Python)"
code_repository: "https://github.com/qntx/x402-openai-python"
software_url: "https://satohub.ai/resources/x402-openai-python"
application_category: "API / SDK"
operating_system: "Any"
license_url: "https://opensource.org/licenses/MIT"
license_name: "MIT"
date_modified: "2026-09-03"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Onchain action kits & SDKs"
    url: "https://satohubai.github.io/onchain-agents/categories/action-kits"
  - name: "x402 OpenAI (Python)"
    url: "https://satohubai.github.io/onchain-agents/listings/x402-openai-python"
---

# x402 OpenAI (Python)

Drop-in OpenAI Python client with transparent x402 micropayment support.

Sato Score: **⬡ 74** (High) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** API / SDK
- **Type:** Tool/Service
- **Chains:** Ethereum, Base, Solana
- **Standards:** x402
- **Interfaces:** sdk
- **Use cases:** payments, build
- **Creator:** qntx
- **Open source:** Yes
- **Status:** Early
- **Activity:** Active — last activity 11 days ago
- **GitHub stars:** 261
- **Deploys as:** pip
- **Works with:** OpenAI, x402, USDC

## Deploy spec

```sh
pip install x402-openai[evm]
# [svm] for Solana, [all] for both
```

- **Entry:** from x402_openai import X402OpenAI from x402_openai.wallets import EvmWallet client = X402OpenAI(wallet=EvmWallet(private_key='0x...')) res = client.chat.completions.create(model='openai/gpt-4o-mini', messages=[...])
- **Runtime:** Python 3.11+
- **Requires:** a funded crypto wallet private key (EVM hex / mnemonic, or Solana base58) — pays per request via x402
- **License:** MIT
- **MCP native:** no
- **Deploy status:** verified
- **As of:** 2026-09-07

## What we checked

- Install reproduced in an isolated container on 2026-09-07.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[GitHub](https://github.com/qntx/x402-openai-python) · [Sato Hub page ↗](https://satohub.ai/resources/x402-openai-python?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `x402-openai-python`. https://satohub.ai/resources/x402-openai-python — retrieved 2026-09-14.

[← All layers](../index.md)
