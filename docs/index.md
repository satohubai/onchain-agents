---
title: "The onchain agent stack, layer by layer"
description: "What to build an onchain agent with: frameworks, action kits, MCP servers, wallets, data, payment rails, identity, security and trading venues — scored and updated daily."
canonical: "https://satohub.ai"
layout: "default"
---

# The onchain agent stack, layer by layer

A daily-rendered index of what onchain AI agents are built from — 488 listings, each with a 0–100 Sato Score of how open, active and verifiable it is. Rendered 2026-10-31. Catalog data CC-BY-4.0, attribution: data by satohub.ai.

### Agent runtimes & frameworks

The loop that runs the agent: prompting, memory, tool calls, scheduling. Pick this first — it decides what everything else plugs into.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [OpenClaw](https://github.com/openclaw/openclaw) | Open-source self-hosted personal AI agent framework with a public skill… | — | 92 | today | install reproduced |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | Open-source self-improving AI agent from Nous Research with a built-in learning… | — | 92 | 1 day ago | install reproduced |
| [Olas (Autonolas)](https://github.com/valory-xyz/open-autonomy) | Network and framework for co-owned autonomous agent services operating onchain. | Ethereum, Gnosis, Base +1 | 90 | 1 day ago | install reproduced |
| [OpenAI Codex](https://github.com/openai/codex) | OpenAI's agentic coding tool (CLI, IDE, and cloud) that runs agents and… | — | 88 | today | install reproduced |
| [TradingAgents](https://github.com/TauricResearch/TradingAgents) | An open-source multi-agent LLM framework that simulates a trading firm with… | — | 88 | 4 days ago | live probed |
| [ElizaOS](https://github.com/elizaOS/eliza) | Open-source TypeScript framework for building crypto-native multi-agent systems. | Solana, Ethereum, Base +1 | 87 | 2 days ago | install reproduced |

<sub>Highest-scored in this layer, 6 of 31. [All 31 →](categories/agent-frameworks.md)</sub>

**How to choose.** Score measures openness and activity, not adoption. A closed-source framework scores low because its code cannot be read, not because it is worse at running agents.

### Onchain action kits & SDKs

Libraries that turn an agent's decision into a signed transaction — swap, transfer, mint, stake — without writing the chain plumbing yourself.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Coinbase AgentKit](https://github.com/coinbase/agentkit) | Coinbase's toolkit for giving AI agents wallets and the ability to take onchain… | Base, Ethereum, Multichain | 91 | 1 day ago | install reproduced |
| [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol/modelcontextprotocol) | Anthropic's open standard for connecting AI systems to external tools and data… | — | 87 | 3 days ago | live probed |
| [Universal Contract AI Interface (UCAI)](https://github.com/nirholas/UCAI) | ABI-to-MCP generator: turns any smart contract ABI into an MCP server agents… | Multichain | 86 | 22 days ago | install reproduced |
| [World AgentKit](https://github.com/worldcoin/agentkit) | SDK from World (Tools for Humanity) that lets AI agents present a… | Base | 86 | 10 days ago | install reproduced |
| [ClawRouter (BlockRun)](https://github.com/BlockRunAI/ClawRouter) | Local LLM router for agents: routes each request to the cheapest capable model… | Base, Solana | 84 | 3 days ago | live probed |
| [Tempo](https://github.com/tempoxyz/tempo) | Purpose-built blockchain for stablecoin payments, with docs, SDKs, a docs MCP… | — | 84 | today | live probed |

<sub>Highest-scored in this layer, 6 of 70. [All 70 →](categories/action-kits.md)</sub>

**How to choose.** Check the Chains column before the score: an action kit that does not cover your chain is the wrong kit at any score.

### MCP servers

Tool servers your agent calls over the Model Context Protocol. This is the largest layer in the index and the fastest-moving.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | Open-source self-improving AI agent from Nous Research with a built-in learning… | — | 92 | 1 day ago | install reproduced |
| [Coinbase AgentKit](https://github.com/coinbase/agentkit) | Coinbase's toolkit for giving AI agents wallets and the ability to take onchain… | Base, Ethereum, Multichain | 91 | 1 day ago | install reproduced |
| [BlockRun MCP](https://github.com/BlockRunAI/blockrun-mcp) | MCP server giving AI agents live data — markets, crypto, research, X — billed… | Base, Solana | 91 | 3 days ago | install reproduced |
| [NanoParse](https://github.com/nanoparse-dev/nanoparse-mcp) | NanoParse is an MCP server on Base. | Base | 90 | 4 days ago | live probed |
| [CoinGecko MCP](https://github.com/coingecko/coingecko-typescript) | Official CoinGecko MCP: hosted free/pro endpoints for live prices, market data… | Multichain | 89 | 4 days ago | live probed |
| [Skim](https://github.com/JessieJanie/skim402) | Skim is a data service for agents on Base. | Base | 89 | 27 days ago | install reproduced |
| [OpenAI Codex](https://github.com/openai/codex) | OpenAI's agentic coding tool (CLI, IDE, and cloud) that runs agents and… | — | 88 | today | install reproduced |
| [minia2a](https://github.com/minia2auk/minia2a-mcp) | minia2a is a marketplace where agents find and pay for services on Base. | Base | 88 | 8 days ago | live probed |

<sub>Highest-scored in this layer, 8 of 221. [All 221 →](categories/mcp-servers.md)</sub>

**How to choose.** An MCP server is a remote process you hand your agent's tool calls to. Read what it asks for — a key, a signer, shell access — before you connect it.

### Wallets, keys & permissions

Where the agent's key lives and what it is allowed to do: embedded wallets, MPC, smart accounts, session keys and spend permissions.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Bankr](https://github.com/BankrBot/skills) | Crypto execution layer and cross-chain wallet that lets agents and users trade… | Base, Ethereum, Polygon +7 | 87 | today | install reproduced |
| [Turnkey](https://github.com/tkhq/sdk) | Secure key management infrastructure with policy controls, commonly used for… | Ethereum, Base, Solana +1 | 86 | today | install reproduced |
| [Privy](https://github.com/privy-io/node-sdk) | Embedded and server wallet infrastructure used to give agents secure key… | Ethereum, Base, Solana +1 | 84 | 3 days ago | install reproduced |
| [Vultisig](https://github.com/vultisig/vultisig-sdk) | Seedless MPC wallet whose vaults are programmable by agents through a… | Bitcoin, Ethereum, Solana +12 | 78 | 1 day ago | live probed |
| [0xGasless AgentKit](https://github.com/0xgasless/agentkit) | Toolkit giving AI agents gasless access to crypto wallets and onchain… | BNB Chain, Avalanche, Base | 76 | 1 month ago | install reproduced |
| [Q402 (Quack AI)](https://github.com/quackai-org/q402-mcp) | Gasless stablecoin payment relay and managed Agent Wallets across 12 EVM chains… | BNB Chain, Ethereum, Avalanche +4 | 75 | 4 days ago | install reproduced |

<sub>Highest-scored in this layer, 6 of 35. [All 35 →](categories/wallets-keys.md)</sub>

**How to choose.** The score says nothing about custody. Read the open-source status and the project's own docs on who can move funds; this index does not audit key handling.

### Data, RPC & indexing

What the agent knows before it acts: RPC access, market data, chain indexing, wallet and token analytics.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [CoinGecko MCP](https://github.com/coingecko/coingecko-typescript) | Official CoinGecko MCP: hosted free/pro endpoints for live prices, market data… | Multichain | 89 | 4 days ago | live probed |
| [Skim](https://github.com/JessieJanie/skim402) | Skim is a data service for agents on Base. | Base | 89 | 27 days ago | install reproduced |
| [cryptocurrency.cv](https://github.com/nirholas/cryptocurrency.cv) | Free, key-less crypto news and market-data API aggregating Bitcoin, Ethereum… | — | 87 | 5 days ago | live probed |
| [DexPaprika MCP Server](https://github.com/coinpaprika/dexpaprika-mcp) | Zero-config MCP access to DexPaprika's DEX data — tokens, liquidity pools, and… | Multichain | 86 | 9 days ago | install reproduced |
| [AlgoVault Quant Signal MCP](https://github.com/AlgoVaultLabs/crypto-quant-signal-mcp) | MCP server for crypto-perps research signals, funding-rate arbitrage scans, and… | Multichain | 86 | 7 days ago | live probed |
| [Zerion](https://github.com/zeriontech/zerion-ai) | Wallet and DeFi data provider offering portfolio, positions, transactions, PnL… | Ethereum, Base, Arbitrum +8 | 85 | today | install reproduced |

<sub>Highest-scored in this layer, 6 of 80. [All 80 →](categories/data-rpc.md)</sub>

### Payments & agent commerce

How agents pay and get paid: x402 (HTTP 402 plus stablecoin), agent commerce protocols, and the stablecoin rails underneath.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Coinbase AgentKit](https://github.com/coinbase/agentkit) | Coinbase's toolkit for giving AI agents wallets and the ability to take onchain… | Base, Ethereum, Multichain | 91 | 1 day ago | install reproduced |
| [BlockRun MCP](https://github.com/BlockRunAI/blockrun-mcp) | MCP server giving AI agents live data — markets, crypto, research, X — billed… | Base, Solana | 91 | 3 days ago | install reproduced |
| [NanoParse](https://github.com/nanoparse-dev/nanoparse-mcp) | NanoParse is an MCP server on Base. | Base | 90 | 4 days ago | live probed |
| [Skim](https://github.com/JessieJanie/skim402) | Skim is a data service for agents on Base. | Base | 89 | 27 days ago | install reproduced |
| [minia2a](https://github.com/minia2auk/minia2a-mcp) | minia2a is a marketplace where agents find and pay for services on Base. | Base | 88 | 8 days ago | live probed |
| [x402](https://github.com/x402-foundation/x402) | Open HTTP 402 payment protocol, now at the x402 Foundation: agents pay per… | Base, Ethereum, Solana +2 | 87 | 1 day ago | install reproduced |

<sub>Highest-scored in this layer, 6 of 148. [All 148 →](categories/payments.md)</sub>

**How to choose.** x402 support in this index means the standard is declared. Whether an endpoint actually answers HTTP 402 is measured separately — see Numbers this week.

### Identity, discovery & standards

How an agent is identified and found by other agents: ERC-8004 registration, MCP discovery, A2A agent cards.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol/modelcontextprotocol) | Anthropic's open standard for connecting AI systems to external tools and data… | — | 87 | 3 days ago | live probed |
| [Bankr](https://github.com/BankrBot/skills) | Crypto execution layer and cross-chain wallet that lets agents and users trade… | Base, Ethereum, Polygon +7 | 87 | today | install reproduced |
| [World AgentKit](https://github.com/worldcoin/agentkit) | SDK from World (Tools for Humanity) that lets AI agents present a… | Base | 86 | 10 days ago | install reproduced |
| [Self Protocol](https://github.com/selfxyz/self) | Open-source zero-knowledge identity protocol (passport-based proof of… | Multichain | 80 | 1 day ago | install reproduced |
| [0xGasless AgentKit](https://github.com/0xgasless/agentkit) | Toolkit giving AI agents gasless access to crypto wallets and onchain… | BNB Chain, Avalanche, Base | 76 | 1 month ago | install reproduced |
| [Q402 (Quack AI)](https://github.com/quackai-org/q402-mcp) | Gasless stablecoin payment relay and managed Agent Wallets across 12 EVM chains… | BNB Chain, Ethereum, Avalanche +4 | 75 | 4 days ago | install reproduced |

<sub>Highest-scored in this layer, 6 of 47. [All 47 →](categories/identity-discovery.md)</sub>

**How to choose.** Registering an identity proves a key controls a record. It is not a claim about the agent behind it, and nothing in this layer verifies behaviour.

### Security & preflight

Checks you run before an agent installs, connects, signs or trades: contract and token screening, endpoint checks, monitoring.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [PulseFeed](https://github.com/Nikolife2016/pulsefeed-x402) | PulseFeed checks an x402 endpoint before an agent pays it (liveness, a 0-100… | Base | 84 | today | live probed |
| [Agent Skills Hub](https://github.com/agent-skills-hub/agent-skills-hub) | A registry of AI agent skills that applies automated source-code scanning and… | — | 81 | 29 days ago | install reproduced |
| [Self Protocol](https://github.com/selfxyz/self) | Open-source zero-knowledge identity protocol (passport-based proof of… | Multichain | 80 | 1 day ago | install reproduced |
| [GoPlus AgentGuard](https://github.com/GoPlusSecurity/agentguard) | MIT-licensed runtime guard for AI coding agents: hook-level action blocking, a… | — | 80 | 12 days ago | install reproduced |
| [Socket](https://github.com/SocketDev/socket-cli) | Dependency and package analysis from Socket, with a CLI and an MCP server that… | — | 79 | 1 day ago | live probed |
| [MistTrack MCP](https://github.com/slowmist/MistTrackMCP) | MCP server from SlowMist exposing MistTrack address risk scoring and fund-flow… | Ethereum, Bitcoin, Polygon +2 | 70 | 6 months ago | install reproduced |

<sub>Highest-scored in this layer, 6 of 17. [All 17 →](categories/security.md)</sub>

**How to choose.** Nothing in this layer makes an agent safe. These tools surface signals; the decision, and the loss, stay yours.

### Trading & DeFi venues

Where the agent actually trades: DEXs, aggregators, perps, lending and yield venues with programmatic access.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Raydium](https://github.com/raydium-io/raydium-sdk-V2) | Solana AMM and DEX with an open-source TypeScript SDK V2 and public… | Solana | 95 | 4 days ago | install reproduced |
| [CloddsBot](https://github.com/alsk1992/CloddsBot) | Open-source autonomous AI trading agent operating across 1000+ markets… | Solana, Base, Ethereum +4 | 83 | 28 days ago | install reproduced |
| [Orca](https://github.com/orca-so/whirlpools) | Solana concentrated-liquidity AMM (Whirlpools) with open-source TypeScript and… | Solana | 83 | today | live probed |
| [dYdX](https://github.com/dydxprotocol/v4-chain) | Perpetual futures DEX running on its own Cosmos SDK app-chain with… | Cosmos | 83 | 1 day ago | live probed |
| [Uniswap](https://github.com/Uniswap/sdks) | Leading multichain spot DEX with v4 hooks, official SDKs, and a hosted Trading… | Ethereum, Base, Arbitrum +4 | 83 | 2 days ago | live probed |
| [NOFX](https://github.com/NoFxAiOS/nofx) | Open-source AI trading terminal: an LLM drives strategy inside hard-coded risk… | Hyperliquid, Multichain | 82 | 10 days ago | live probed |

<sub>Highest-scored in this layer, 6 of 60. [All 60 →](categories/trading-venues.md)</sub>

**How to choose.** No performance, returns or profitability is measured here, and none is implied by a score.

## Every layer in full

- [Agent runtimes & frameworks](categories/agent-frameworks.md)
- [Onchain action kits & SDKs](categories/action-kits.md)
- [MCP servers](categories/mcp-servers.md)
- [Wallets, keys & permissions](categories/wallets-keys.md)
- [Data, RPC & indexing](categories/data-rpc.md)
- [Payments & agent commerce](categories/payments.md)
- [Identity, discovery & standards](categories/identity-discovery.md)
- [Security & preflight](categories/security.md)
- [Trading & DeFi venues](categories/trading-venues.md)

## Reference

- [Sato Score methodology](sato-score.md)
- [Taxonomy](taxonomy.md)
- [Connect over MCP](connect-mcp.md)
- [Swap through a gate](swap.md)
- [Full index on GitHub](https://github.com/satohubai/onchain-agents)
- [satohub.ai ↗](https://satohub.ai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)
