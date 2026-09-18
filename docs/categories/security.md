---
title: "Security & preflight — Onchain Agents index"
description: "Checks you run before an agent installs, connects, signs or trades: contract and token screening, endpoint checks, monitoring."
canonical: "https://satohub.ai/directory"
layout: "default"
---

# Security & preflight

Checks you run before an agent installs, connects, signs or trades: contract and token screening, endpoint checks, monitoring.

**10 listings**, ordered by Sato Score — a 0–100 measure of how open, active and verifiable a project is, [not a safety or returns grade](../sato-score.md). Rendered 2026-09-18 from the public Sato Hub export.

| Name | What it is | Chains | ⬡ Score | Last activity | Links |
|---|---|---|---|---|---|
| [Self Protocol](https://github.com/selfxyz/self) | Open-source zero-knowledge identity protocol (passport-based proof of personhood) used to gate… | Multichain | 80 | 3 days ago | [satohub.ai](https://satohub.ai/resources/self-protocol?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/self-protocol.md) |
| [Agent Skills Hub](https://github.com/agent-skills-hub/agent-skills-hub) | A registry of AI agent skills that applies automated source-code scanning and assigns security… | — | 73 | 2 days ago | [satohub.ai](https://satohub.ai/resources/agent-skills-hub?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/agent-skills-hub.md) |
| [PRXVT](https://github.com/prxvt) | Open-source privacy SDK that adds unlinkable, zero-knowledge payments on top of the x402 agent… | Ethereum, Base, Polygon | 68 | — | [satohub.ai](https://satohub.ai/resources/prxvt?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/prxvt.md) |
| [ChainAware](https://github.com/ChainAware/behavioral-prediction-mcp) | Pre-built MCP blockchain capability modules giving agents fraud detection, AML scoring, wallet… | Polygon, Ethereum, BNB Chain +4 | 67 | 1 month ago | [satohub.ai](https://satohub.ai/resources/chainaware?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/chainaware.md) |
| [COTI](https://github.com/coti-io) | Privacy infrastructure that gives MCP-compatible agents private wallets, encrypted messaging, and… | COTI, Ethereum | 67 | 1 day ago | [satohub.ai](https://satohub.ai/resources/coti?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/coti.md) |
| [MistTrack MCP](https://github.com/slowmist/MistTrackMCP) | MCP server from SlowMist exposing MistTrack address risk scoring and fund-flow tracing to AI agents. | Ethereum, Bitcoin, Polygon +2 | 63 | 4 months ago | [satohub.ai](https://satohub.ai/resources/misttrack-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/misttrack-mcp.md) |
| [Usenami Signer MCP](https://github.com/namixai/signer-mcp) | MCP server that signs CEX/DEX orders inside an attested AWS Nitro Enclave so keys never touch the… | — | 61 | 6 days ago | [satohub.ai](https://satohub.ai/resources/namixai-signer-mcp?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/namixai-signer-mcp.md) |
| [SIWA (Sign In With Agent)](https://github.com/builders-garden/siwa) | Agent-identity authentication protocol modeled on Sign-In-With-Ethereum, letting services verify an… | Ethereum | 59 | 6 months ago | [satohub.ai](https://satohub.ai/resources/siwa-sign-in-with-agent?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/siwa-sign-in-with-agent.md) |
| [CryptoGuard](https://github.com/momenbasel/CryptoGuard) | Intercepts agent transactions and checks them against 5 security oracles before execution. | Multichain | 53 | 5 months ago | [satohub.ai](https://satohub.ai/resources/cryptoguard-agent-safety?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/cryptoguard-agent-safety.md) |
| [Cybercentry](https://cybercentry.com) | Pay-per-use security verification endpoints for AI agents, billed via x402 micropayments. | Base, Ethereum, Solana | 28 | — | [satohub.ai](https://satohub.ai/resources/cybercentry?utm_source=github&utm_medium=index&utm_campaign=onchain-agents) · [detail](../listings/cybercentry.md) |

## Install lines

Where a project publishes one, as recorded in its deploy spec:

- **Self Protocol** — `npm install @selfxyz/enterprise-sdk`
- **Agent Skills Hub** — `npx agent-skills-hub`
- **PRXVT** — `npm install @prxvt/sdk`
- **ChainAware** — `claude mcp add --transport sse chainaware-behavioural-prediction-mcp-server https://prediction.mcp.chainaware.ai/sse --h`
- **COTI** — `npm install @coti-io/coti-sdk-typescript`
- **MistTrack MCP** — `npx -y misttrack@latest --key YOUR_MISTTRACK_API_KEY`
- **Usenami Signer MCP** — `npm install @usenami/signer-mcp`
- **SIWA (Sign In With Agent)** — `npm install @buildersgarden/siwa`
- **CryptoGuard** — `pip install cryptoguard-ai`

[← All layers](../index.md) · [satohub.ai directory ↗](https://satohub.ai/directory?utm_source=github&utm_medium=index&utm_campaign=onchain-agents)
