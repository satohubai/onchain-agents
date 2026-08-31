<div align="center">

<img src="assets/os/robot.png" alt="Sato" width="180">

# SATO OS — Onchain Agent Mission Control

**Build agents on any AI model and any chain. Deploy agents with their own wallets & track agents you already run — all from your own machine.**

`SPIN UP` → `FUND` → `TALK` → `TASK` → `WATCH`

<br>

[<img src="https://img.shields.io/badge/Become_an_operator-%24299_·_first_100-34d399?style=for-the-badge&labelColor=0c0f16" alt="Become an operator — $299">](https://satohub.ai/os?utm_source=github&utm_medium=index&utm_campaign=sato-os)

<sub>Self-hosted on macOS & Linux (Windows via WSL) · your keys never leave your machine · one-time license, instant download + key</sub>

<br><br>

<img src="assets/os/dashboard.jpg" alt="Sato OS Mission Control — status of every agent, wallet, policy, and pending decision in the workspace: agents running, pending approvals, tracked funds, model spend" width="920">

<sub>Mission Control at `localhost:3300` — status of every agent, wallet, policy, and pending decision in this workspace.</sub>

</div>

---

## The loop: five verbs, real funds

| | |
|---|---|
| **01 · Spin up** | Name it, give it a job in one sentence, mint it a wallet sealed on your machine. |
| **02 · Fund** | Send an allowance — lunch money, never the treasury. Spend caps are mandatory. |
| **03 · Talk** | Chat or voice. It knows its balance, its policy, and exactly what it's allowed to do. |
| **04 · Task** | Give it a schedule and a budget envelope, then let it run while you sleep. |
| **05 · Watch** | Every action is re-checked against the chain before it earns a verified receipt. |

## Bring your own everything

- **⬡ Any AI model** — Anthropic, OpenAI, OpenRouter, Nous, xAI. One brain per agent.
- **◇ Any chain** — Ethereum, Base, Solana, Arbitrum, Optimism, Polygon, live out of the box. Transfers, swaps, x402 micropayments, ERC-8004 identity, and scheduled tasks wired in on Ethereum & Base.
- **✦ Track agents you already run** — attach any agent by its wallet address. No migration.

<div align="center">
<img src="assets/os/agents.jpg" alt="The agents workspace — every agent's mode, status, chains, wallet posture, and the model it runs on" width="920">
<br><sub>Every agent in the workspace: mode, status, chains, wallet posture, and the brain it runs on.</sub>
</div>

## All the onchain-agent standards, out of the box

Wired into every agent from birth — live on Base today, not a roadmap slide.

- **ERC-8004 — identity at birth.** Every agent is born registered on-chain, with its own agentId and a machine-readable agent card.
- **EIP-7702 — smart accounts.** Approve and swap settle as one atomic transaction.
- **ERC-7715 — session grants.** Sign once; the agent gets a scoped, capped, expiring permission **the chain itself enforces**. Over-cap spends are refused by the chain, and revocation always wins.
- **EAS — a track record.** Verified executions become on-chain attestations — a reputation your [Agent Passport](https://satohub.ai/agents?utm_source=github&utm_medium=index&utm_campaign=sato-os) can read.

## Every action stops at your approval

Every onchain action an agent wants to take stops here first — or, on signer wallets, executes inside **your** policy tiers with a veto window. Veto and freeze always win.

<div align="center">
<img src="assets/os/approvals.jpg" alt="The approvals queue — every proposed onchain action with its risk read and policy verdict, waiting on the operator" width="920">
<br><sub>The approvals queue — each proposal carries its risk read and policy verdict. Note the FAIL rows: the policy engine refusing over-cap and post-revocation spends.</sub>
</div>

`PROPOSE` → `POLICY CHECK` → `EXECUTE` → `CHAIN CHECK` → `✓ VERIFIED`

External agents are propose-only. **No execute tool exists at any policy tier, by construction.** Every settled transaction is checked back against the proposal — sender, target, amount — before it earns a verified receipt.

## Hermes — fleet command

One sentence. A whole fleet dispatched. Hermes is mission control's voice: it turns one ask into an itemized plan across your agents — you approve once, it dispatches every task, monitors the runs, and reports back. **Structurally unable to move money** — Hermes commands, never spends.

<div align="center">
<img src="assets/os/hermes.jpg" alt="Hermes — the fleet command center: voice systems, reasoning engine, agent mesh, and communications on one console" width="920">
</div>

## Your machine. Your keys. Sealed.

Sato OS runs locally — no cloud dependency, no custodian. Each agent's key is generated and sealed on your device (Argon2id + AES-GCM). **Caps are mandatory: no caps, no signer.**

| Control | What it does |
|---|---|
| `$ caps` | per-transaction & daily limits on every signer |
| **Veto** | a time-locked window on every autonomous action |
| **Kill switch** | freeze one wallet — or everything — instantly |

<div align="center">
<img src="assets/os/wallets.jpg" alt="Wallets — every signer with its caps, balances, and freeze controls" width="920">
</div>

## Memory you can see

Every note your agents remember lives in an inspectable constellation — browse it, trace it, prune it, export the whole graph to Obsidian. Nothing hides in a black box.

<div align="center">
<img src="assets/os/memory.jpg" alt="Onchain agent memory — an inspectable constellation of every note, source, and digest the agents hold" width="920">
</div>

## Become a Founding Operator

<div align="center">
<img src="assets/os/os-ladder.svg" alt="Founding Operator ladder: $299 first 100 (with on-chain credential), $399 next 100, $499 standing" width="880">
</div>

- ✓ Self-hosted — keys never leave your machine
- ✓ Every agent, wallet, policy tier & rail
- ✓ All 1.x updates — instant download + key
- ✓ Runs on macOS & Linux · Windows via WSL
- ✕ No monthly subscription

<div align="center">

### [**Get your license → satohub.ai/os**](https://satohub.ai/os?utm_source=github&utm_medium=index&utm_campaign=sato-os)

<sub>Pay with card or crypto (USDC) · secure checkout by Stripe · add a wallet for your Founding-Operator on-chain credential</sub>

</div>

## Where it sits in this index

Sato OS is [listed in the index](https://satohub.ai/resources/sato-os?utm_source=github&utm_medium=index&utm_campaign=sato-os) and scored by the same Sato Score rubric as every other entry — no home-team bonus. That's the point of the score.

---

<sub>⚠️ Experimental software that signs real onchain transactions under caps you set — start small. Screenshots are the real product running on seeded demo data; figures are wallet-observed demo values, not performance claims. Nothing here is financial advice, and no agent is presented as profitable or safe. © 2026 Prime Signal LLC · proprietary, source-available. Built by [Sato Hub](https://satohub.ai?utm_source=github&utm_medium=index&utm_campaign=sato-os) — the builder, library & Agent Passport behind the OS.</sub>
