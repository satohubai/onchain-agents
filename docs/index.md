---
title: "The onchain agent stack, layer by layer"
description: "What to build an onchain agent with: frameworks, action kits, MCP servers, wallets, data, payment rails, identity, security and trading venues — scored and updated daily."
canonical: "https://satohub.ai"
canonical_url: "https://satohub.ai"
layout: "default"
page_type: "index"
item_count: 382
date_modified: "2026-09-15"
---

# The onchain agent stack, layer by layer

A daily-rendered index of what onchain AI agents are built from — 382 listings, each with a 0–100 Sato Score of how open, active and verifiable it is. Rendered 2026-09-15. Catalog data CC-BY-4.0, attribution: data by satohub.ai.

### Agent runtimes & frameworks

The loop that runs the agent: prompting, memory, tool calls, scheduling. Pick this first — it decides what everything else plugs into.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [TradingAgents](https://github.com/TauricResearch/TradingAgents) | An open-source multi-agent LLM framework that simulates a trading firm with… | — | 88 | 7 days ago | live probed |
| [ElizaOS](https://github.com/elizaOS/eliza) | Open-source TypeScript framework for building crypto-native multi-agent systems. | Solana, Ethereum, Base +1 | 87 | today | install reproduced |
| [Fetch.ai uAgents](https://github.com/fetchai/uAgents) | Python framework for lightweight autonomous agents with built-in… | Cosmos, Ethereum | 87 | 8 days ago | install reproduced |
| [Olas (Autonolas)](https://github.com/valory-xyz) | Network and framework for co-owned autonomous agent services operating onchain. | Ethereum, Gnosis, Base +1 | 87 | 3 days ago | install reproduced |
| [OpenClaw](https://github.com/openclaw/openclaw) | Open-source self-hosted personal AI agent framework with a public skill… | — | 84 | today | live probed |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | Open-source self-improving AI agent from Nous Research with a built-in learning… | — | 84 | today | live probed |

<sub>Highest-scored in this layer, 6 of 29. [All 29 →](categories/agent-frameworks.md)</sub>

**How to choose.** Score measures openness and activity, not adoption. A closed-source framework scores low because its code cannot be read, not because it is worse at running agents.

### Onchain action kits & SDKs

Libraries that turn an agent's decision into a signed transaction — swap, transfer, mint, stake — without writing the chain plumbing yourself.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Coinbase AgentKit](https://github.com/coinbase/agentkit) | Coinbase's toolkit for giving AI agents wallets and the ability to take onchain… | Base, Ethereum, Multichain | 88 | 4 days ago | install reproduced |
| [x402](https://github.com/coinbase/x402) | Open payment protocol enabling agents and apps to pay for APIs over HTTP using… | Base, Ethereum, Multichain +1 | 86 | 11 days ago | install reproduced |
| [Universal Contract AI Interface (UCAI)](https://github.com/nirholas/UCAI) | ABI-to-MCP generator: turns any smart contract ABI into an MCP server agents… | Multichain | 86 | 29 days ago | install reproduced |
| [World AgentKit](https://github.com/worldcoin/agentkit) | SDK from World (Tools for Humanity) that lets AI agents present a… | Base | 86 | 18 days ago | install reproduced |
| [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol) | Anthropic's open standard for connecting AI systems to external tools and data… | — | 83 | 4 days ago | live probed |
| [Alchemy](https://github.com/alchemyplatform) | A blockchain developer platform providing node infrastructure plus NFT, Token… | Ethereum, Base, Solana +4 | 83 | today | install reproduced |

<sub>Highest-scored in this layer, 6 of 47. [All 47 →](categories/action-kits.md)</sub>

**How to choose.** Check the Chains column before the score: an action kit that does not cover your chain is the wrong kit at any score.

### MCP servers

Tool servers your agent calls over the Model Context Protocol. This is the largest layer in the index and the fastest-moving.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [BlockRun MCP](https://github.com/BlockRunAI/blockrun-mcp) | MCP server giving AI agents live data — markets, crypto, research, X — billed… | Base, Solana | 89 | today | install reproduced |
| [Coinbase AgentKit](https://github.com/coinbase/agentkit) | Coinbase's toolkit for giving AI agents wallets and the ability to take onchain… | Base, Ethereum, Multichain | 88 | 4 days ago | install reproduced |
| [Trust Wallet Agent Kit (TWAK)](https://github.com/trustwallet/tw-agent-skills) | Non-custodial toolkit from Trust Wallet (MCP server, CLI, and SDK) that lets AI… | Ethereum, Base, Solana +6 | 87 | today | install reproduced |
| [Universal Contract AI Interface (UCAI)](https://github.com/nirholas/UCAI) | ABI-to-MCP generator: turns any smart contract ABI into an MCP server agents… | Multichain | 86 | 29 days ago | install reproduced |
| [minia2a](https://github.com/minia2auk/minia2a-mcp) | minia2a is a marketplace where agents find and pay for services on Base. | Base | 86 | 3 days ago |  |
| [Zerion](https://github.com/zeriontech/zerion-ai) | Wallet and DeFi data provider offering portfolio, positions, transactions, PnL… | Ethereum, Base, Arbitrum +8 | 85 | today | install reproduced |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | Open-source self-improving AI agent from Nous Research with a built-in learning… | — | 84 | today | live probed |
| [DexPaprika MCP Server](https://github.com/coinpaprika/dexpaprika-mcp) | Zero-config MCP access to DexPaprika's DEX data — tokens, liquidity pools, and… | Multichain | 84 | 25 days ago | live probed |

<sub>Highest-scored in this layer, 8 of 187. [All 187 →](categories/mcp-servers.md)</sub>

**How to choose.** An MCP server is a remote process you hand your agent's tool calls to. Read what it asks for — a key, a signer, shell access — before you connect it.

### Wallets, keys & permissions

Where the agent's key lives and what it is allowed to do: embedded wallets, MPC, smart accounts, session keys and spend permissions.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Bankr](https://github.com/BankrBot/skills) | Crypto execution layer and cross-chain wallet that lets agents and users trade… | Base, Ethereum, Polygon +7 | 87 | today | install reproduced |
| [Trust Wallet Agent Kit (TWAK)](https://github.com/trustwallet/tw-agent-skills) | Non-custodial toolkit from Trust Wallet (MCP server, CLI, and SDK) that lets AI… | Ethereum, Base, Solana +6 | 87 | today | install reproduced |
| [0xGasless AgentKit](https://github.com/0xgasless/agentkit) | Toolkit giving AI agents gasless access to crypto wallets and onchain… | BNB Chain, Avalanche, Base | 86 | 3 days ago | install reproduced |
| [Privy](https://github.com/privy-io) | Embedded and server wallet infrastructure used to give agents secure key… | Ethereum, Base, Solana +1 | 83 | 1 day ago | install reproduced |
| [Turnkey](https://github.com/tkhq) | Secure key management infrastructure with policy controls, commonly used for… | Ethereum, Base, Solana +1 | 83 | 1 day ago | install reproduced |
| [Q402 (Quack AI)](https://github.com/quackai-org/q402-mcp) | Gasless stablecoin payment relay and managed Agent Wallets across 12 EVM chains… | BNB Chain, Ethereum, Avalanche +4 | 76 | 5 days ago | install reproduced |

<sub>Highest-scored in this layer, 6 of 26. [All 26 →](categories/wallets-keys.md)</sub>

**How to choose.** The score says nothing about custody. Read the open-source status and the project's own docs on who can move funds; this index does not audit key handling.

### Data, RPC & indexing

What the agent knows before it acts: RPC access, market data, chain indexing, wallet and token analytics.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Zerion](https://github.com/zeriontech/zerion-ai) | Wallet and DeFi data provider offering portfolio, positions, transactions, PnL… | Ethereum, Base, Arbitrum +8 | 85 | today | install reproduced |
| [DexPaprika MCP Server](https://github.com/coinpaprika/dexpaprika-mcp) | Zero-config MCP access to DexPaprika's DEX data — tokens, liquidity pools, and… | Multichain | 84 | 25 days ago | live probed |
| [Boar Blockchain MCP](https://github.com/boar-network/blockchain-mcp) | Blockchain infrastructure MCP from Boar Network, with setup guides and… | Multichain | 84 | 5 months ago | live probed |
| [Alchemy](https://github.com/alchemyplatform) | A blockchain developer platform providing node infrastructure plus NFT, Token… | Ethereum, Base, Solana +4 | 83 | today | install reproduced |
| [Bybit Trading MCP](https://github.com/bybit-exchange/trading-mcp) | Official Bybit MCP for market data, trading, positions, wallet, and portfolio… | Multichain | 82 | 7 days ago | install reproduced |
| [AlgoVault Quant Signal MCP](https://github.com/AlgoVaultLabs/crypto-quant-signal-mcp) | MCP server for crypto-perps research signals, funding-rate arbitrage scans, and… | Multichain | 81 | 5 days ago | live probed |

<sub>Highest-scored in this layer, 6 of 66. [All 66 →](categories/data-rpc.md)</sub>

### Payments & agent commerce

How agents pay and get paid: x402 (HTTP 402 plus stablecoin), agent commerce protocols, and the stablecoin rails underneath.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [BlockRun MCP](https://github.com/BlockRunAI/blockrun-mcp) | MCP server giving AI agents live data — markets, crypto, research, X — billed… | Base, Solana | 89 | today | install reproduced |
| [Bankr](https://github.com/BankrBot/skills) | Crypto execution layer and cross-chain wallet that lets agents and users trade… | Base, Ethereum, Polygon +7 | 87 | today | install reproduced |
| [Trust Wallet Agent Kit (TWAK)](https://github.com/trustwallet/tw-agent-skills) | Non-custodial toolkit from Trust Wallet (MCP server, CLI, and SDK) that lets AI… | Ethereum, Base, Solana +6 | 87 | today | install reproduced |
| [0xGasless AgentKit](https://github.com/0xgasless/agentkit) | Toolkit giving AI agents gasless access to crypto wallets and onchain… | BNB Chain, Avalanche, Base | 86 | 3 days ago | install reproduced |
| [x402](https://github.com/coinbase/x402) | Open payment protocol enabling agents and apps to pay for APIs over HTTP using… | Base, Ethereum, Multichain +1 | 86 | 11 days ago | install reproduced |
| [World AgentKit](https://github.com/worldcoin/agentkit) | SDK from World (Tools for Humanity) that lets AI agents present a… | Base | 86 | 18 days ago | install reproduced |

<sub>Highest-scored in this layer, 6 of 96. [All 96 →](categories/payments.md)</sub>

**How to choose.** x402 support in this index means the standard is declared. Whether an endpoint actually answers HTTP 402 is measured separately — see Numbers this week.

### Identity, discovery & standards

How an agent is identified and found by other agents: ERC-8004 registration, MCP discovery, A2A agent cards.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Bankr](https://github.com/BankrBot/skills) | Crypto execution layer and cross-chain wallet that lets agents and users trade… | Base, Ethereum, Polygon +7 | 87 | today | install reproduced |
| [0xGasless AgentKit](https://github.com/0xgasless/agentkit) | Toolkit giving AI agents gasless access to crypto wallets and onchain… | BNB Chain, Avalanche, Base | 86 | 3 days ago | install reproduced |
| [World AgentKit](https://github.com/worldcoin/agentkit) | SDK from World (Tools for Humanity) that lets AI agents present a… | Base | 86 | 18 days ago | install reproduced |
| [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol) | Anthropic's open standard for connecting AI systems to external tools and data… | — | 83 | 4 days ago | live probed |
| [Self Protocol](https://github.com/selfxyz/self) | Open-source zero-knowledge identity protocol (passport-based proof of… | Multichain | 80 | 8 days ago | install reproduced |
| [Q402 (Quack AI)](https://github.com/quackai-org/q402-mcp) | Gasless stablecoin payment relay and managed Agent Wallets across 12 EVM chains… | BNB Chain, Ethereum, Avalanche +4 | 76 | 5 days ago | install reproduced |

<sub>Highest-scored in this layer, 6 of 34. [All 34 →](categories/identity-discovery.md)</sub>

**How to choose.** Registering an identity proves a key controls a record. It is not a claim about the agent behind it, and nothing in this layer verifies behaviour.

### Security & preflight

Checks you run before an agent installs, connects, signs or trades: contract and token screening, endpoint checks, monitoring.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Self Protocol](https://github.com/selfxyz/self) | Open-source zero-knowledge identity protocol (passport-based proof of… | Multichain | 80 | 8 days ago | install reproduced |
| [Agent Skills Hub](https://github.com/agent-skills-hub/agent-skills-hub) | A registry of AI agent skills that applies automated source-code scanning and… | — | 72 | 21 days ago | live probed |
| [PRXVT](https://github.com/prxvt) | Open-source privacy SDK that adds unlinkable, zero-knowledge payments on top of… | Ethereum, Base, Polygon | 68 | — | install reproduced |
| [ChainAware](https://github.com/ChainAware/behavioral-prediction-mcp) | Pre-built MCP blockchain capability modules giving agents fraud detection, AML… | Polygon, Ethereum, BNB Chain +4 | 67 | 1 month ago | live probed |
| [COTI](https://github.com/coti-io) | Privacy infrastructure that gives MCP-compatible agents private wallets… | COTI, Ethereum | 67 | 1 day ago | live probed |
| [MistTrack MCP](https://github.com/slowmist/MistTrackMCP) | MCP server from SlowMist exposing MistTrack address risk scoring and fund-flow… | Ethereum, Bitcoin, Polygon +2 | 63 | 4 months ago | install reproduced |

<sub>Highest-scored in this layer, 6 of 10. [All 10 →](categories/security.md)</sub>

**How to choose.** Nothing in this layer makes an agent safe. These tools surface signals; the decision, and the loss, stay yours.

### Trading & DeFi venues

Where the agent actually trades: DEXs, aggregators, perps, lending and yield venues with programmatic access.

| Name | What it is | Chains | ⬡ Score | Last activity | Checked |
|---|---|---|---|---|---|
| [Raydium](https://github.com/raydium-io/raydium-sdk-V2) | Solana AMM and DEX with an open-source TypeScript SDK V2 and public… | Solana | 95 | 7 days ago | install reproduced |
| [Jupiter](https://github.com/jup-ag) | Solana swap aggregator that routes trades across DEXs via a widely used API and… | Solana | 84 | today | install reproduced |
| [Orca](https://github.com/orca-so/whirlpools) | Solana concentrated-liquidity AMM (Whirlpools) with open-source TypeScript and… | Solana | 83 | 18 days ago | live probed |
| [dYdX](https://github.com/dydxprotocol/v4-chain) | Perpetual futures DEX running on its own Cosmos SDK app-chain with… | Cosmos, Ethereum, Base +5 | 83 | today | live probed |
| [Drift Protocol](https://github.com/drift-labs/protocol-v2) | Open-source Solana perpetual futures DEX with TypeScript and Python SDKs and a… | Solana | 81 | 2 months ago | install reproduced |
| [Uniswap](https://github.com/Uniswap) | Leading multichain spot DEX with v4 hooks, official SDKs, and a hosted Trading… | Ethereum, Base, Arbitrum +3 | 80 | 1 day ago | live probed |

<sub>Highest-scored in this layer, 6 of 46. [All 46 →](categories/trading-venues.md)</sub>

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
- [Full index on GitHub](https://github.com/satohubai/onchain-agents)
- [satohub.ai ↗](https://satohub.ai?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)
