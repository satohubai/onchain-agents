---
title: "cryptocurrency.cv — Sato Hub index"
description: "Free, key-less crypto news and market-data API aggregating Bitcoin, Ethereum, Solana, and DeFi."
canonical: "https://satohub.ai/resources/cryptocurrency-cv"
canonical_url: "https://satohub.ai/resources/cryptocurrency-cv"
layout: "default"
page_type: "listing"
item_name: "cryptocurrency.cv"
code_repository: "https://github.com/nirholas/cryptocurrency.cv"
software_url: "https://cryptocurrency.cv"
application_category: "Data Tool"
operating_system: "Any"
license_name: "Unknown"
date_modified: "2026-08-04"
breadcrumb:
  - name: "Onchain Agents index"
    url: "https://satohubai.github.io/onchain-agents/"
  - name: "MCP servers"
    url: "https://satohubai.github.io/onchain-agents/categories/mcp-servers"
  - name: "cryptocurrency.cv"
    url: "https://satohubai.github.io/onchain-agents/listings/cryptocurrency-cv"
---

# cryptocurrency.cv

Free, key-less crypto news and market-data API aggregating Bitcoin, Ethereum, Solana, and DeFi.

Sato Score: **⬡ 67** (Medium) — a measure of how open, active and verifiable this project is, [not a safety or returns grade](../sato-score.md).

## Facts

- **Category:** Data Tool
- **Type:** Tool/Service
- **Standards:** mcp
- **Interfaces:** rest-api, sdk, mcp
- **Use cases:** trading, data
- **Creator:** nirholas
- **Open source:** Yes
- **Status:** Early
- **Activity:** Recent — last activity 1 month ago
- **GitHub stars:** 282
- **Deploys as:** API, Docker, MCP server, npm
- **Works with:** ChatGPT, Claude, LangChain, Python SDK, TypeScript SDK

## Deploy spec

```sh
git clone https://github.com/nirholas/free-crypto-news && cd free-crypto-news && npm install && npm run dev
docker pull ghcr.io/nirholas/free-crypto-news && docker run -p 3000:3000 ghcr.io/nirholas/free-crypto-news
```

- **Entry:** curl https://cryptocurrency.cv/api/news (hosted API) or npm run dev (self-host)
- **Runtime:** Node.js (self-host) or Docker; hosted API needs no auth
- **Requires:** none for the free tier, optional: GROQ_API_KEY / OPENAI_API_KEY / ANTHROPIC_API_KEY (AI summarization), KV_REST_API_URL + KV_REST_API_TOKEN or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (caching), DISCORD_WEBHOOK_URL, TELEGRAM_BOT_TOKEN, X_API_KEY
- **License:** Unknown
- **MCP native:** yes
- **Deploy status:** unknown
- **As of:** 2026-09-14

## What we checked

- Live endpoint probed by us: 90.3% of our checks succeeded over 62 days. That is a success rate of our checks, not the project's uptime.
- Verification status: **Unverified**. Self-reported is not verified, and nothing here is a safety, quality or returns claim.

## Links

[Website](https://cryptocurrency.cv) · [GitHub](https://github.com/nirholas/cryptocurrency.cv) · [Sato Hub page ↗](https://satohub.ai/resources/cryptocurrency-cv?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)

## Cite

> Sato Hub. *Onchain Agents index* (dataset, CC-BY-4.0), entry `cryptocurrency-cv`. https://satohub.ai/resources/cryptocurrency-cv — retrieved 2026-09-14.

[← All layers](../index.md)
