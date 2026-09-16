---
title: "x402 vs AP2 — Sato Hub index"
description: "x402 and Google's Agent Payments Protocol compared on scope, chains, standards support, and maintenance — from live Sato Hub directory data. They…"
canonical: "https://satohub.ai/compare/x402-vs-ap2"
canonical_url: "https://satohub.ai/compare/x402-vs-ap2"
layout: "default"
page_type: "compare"
date_modified: "2026-09-16"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "Compare"
    url: "https://satohubai.github.io/onchain-agents/compare/"
  - name: "x402 vs AP2"
    url: "https://satohubai.github.io/onchain-agents/compare/x402-vs-ap2"
---

# x402 vs AP2

Framing these as rivals misreads both. x402 is a narrow, shipped primitive: a server answers HTTP 402 with a price, the caller pays stablecoin, the request retries. AP2 is a broader mandate framework for agent-led purchasing across payment rails — and its crypto extension was built with Coinbase, so it can carry x402 rather than replace it.

The practical question is not which one wins but which layer you are working at. If you are metering an API call, that is x402's whole job. If you are handling a delegated purchase with authorisation and dispute semantics attached, that is what AP2 specifies. The table below compares them on the axes the directory tracks for both.

## Side by side

Every row is read off the live index, rendered 2026-09-16. No winner is declared.

| | x402 | Agent Payments Protocol (AP2) |
|---|---|---|
| **What it is** | Open payment protocol enabling agents and apps to pay for APIs over HTTP using stablecoins. | Open protocol from Google for secure agent-led payments across traditional and crypto rails, with a crypto-native x402 extension built with Coinbase, Ethereum… |
| **Category** | API / SDK | API / SDK |
| **Chains** | Base, Ethereum, Multichain +1 | Ethereum, Base, Multichain |
| **Standards** | x402 | x402, mcp, a2a |
| **Open source** | Yes | Yes |
| **⬡ Sato Score** | 86 (High) | 72 (High) |
| **Activity** | Active, last activity 12 days ago | Quiet, last activity 4 months ago |
| **★ GitHub stars** | 154 | 2.9k |
| **Install reproduced** | yes | not reproduced |
| **Verification status** | Unverified | Verified |
| **Deploys as** | npm, pip | pip, Self-hosted |

## Pick x402 if

- You are charging for a request — an API call, a query, a compute job — and want the smallest thing that works.
- You want an agent to pay without an account, a key, or a prior relationship with the seller.
- You want implementations available today: this directory tracks fifty listings that support x402.

## Pick Agent Payments Protocol (AP2) if

- You need the mandate and authorisation layer around a purchase, not just the transfer.
- You need to span traditional and crypto rails rather than settle only in stablecoin.
- You are building toward merchant checkout, where the card networks' agent specs matter as much as the chain.

## What this cannot settle

Both are early, and neither listing's adoption figures are independently verified — self-reported volume is never presented as fact on this site. AP2's higher star count reflects a specification repository from a large vendor, not deployed usage; x402's lower one sits under a protocol with more shipped implementations in this directory. Star counts are the least meaningful row in the table, which is exactly why they are not the first one.

## Links

- **x402** — [GitHub](https://github.com/coinbase/x402) · [Docs](https://docs.cdp.coinbase.com/x402/docs/welcome) · [Sato Hub page ↗](https://satohub.ai/resources/x402?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)
- **Agent Payments Protocol (AP2)** — [GitHub](https://github.com/google-agentic-commerce/AP2) · [Docs](https://ap2-protocol.org/specification/) · [Sato Hub page ↗](https://satohub.ai/resources/agent-payments-protocol-ap2?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

[Full comparison on satohub.ai ↗](https://satohub.ai/compare/x402-vs-ap2?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [← All layers](../index.md)
