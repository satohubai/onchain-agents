---
title: "Forta Risk Graph MCP — Sato Hub index"
description: "OAuth-gated MCP over a live graph of positions, governance, oracles, custody and backing, answering control-closure and blast-radius questions."
canonical: "https://satohub.ai/resources/forta-risk-graph-mcp"
layout: "default"
---

# Forta Risk Graph MCP

OAuth-gated MCP over a live graph of positions, governance, oracles, custody and backing, answering control-closure and blast-radius questions.

Sato Score: **⬡ 63** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** MCP
- **Chains:** Multichain, Ethereum
- **Open source:** Partial
- **Status:** Early
- **Activity:** Active — last activity 20 days ago
- **GitHub stars:** 1
- **Works with:** Claude, MCP

## Deploy spec

```sh
claude mcp add --transport http risk-graph https://risk-graph-mcp.forta.network/mcp
# skills (optional): /plugin marketplace add forta-network/forta-risk-skills then /plugin install forta-risk@forta-risk
```

- **Entry:** First tool call opens a browser for OAuth; reads are scoped to your own account
- **Runtime:** Hosted remote MCP (Streamable HTTP, OAuth) + Claude Code plugin
- **Requires:** A Forta account (OAuth on first tool call)
- **License:** MIT (skills repo); the MCP server itself is hosted
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-25

## What we checked

- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://forta.org/) · [Docs](https://github.com/forta-network/forta-risk-skills#readme) · [GitHub](https://github.com/forta-network/forta-risk-skills) · [Sato Hub page ↗](https://satohub.ai/resources/forta-risk-graph-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `forta-risk-graph-mcp`. https://satohub.ai/resources/forta-risk-graph-mcp — retrieved 2026-09-25.

[← All layers](../index.md)
