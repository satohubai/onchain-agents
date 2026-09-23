---
title: Swap through a gate — the method
description: >-
  How an AI agent gets a swap it is allowed to make: four dated verdicts, the
  owner's policy, a simulation, and an unsigned transaction. No keys, no
  signing, no broadcasting.
---

# Swap through a gate

An agent that can trade is an agent that can be talked into trading. The usual
answer is to give it a key with limits around it. This is the other answer:
**the agent never gets a key at all, and the thing it asks for is an unsigned
transaction.**

Canonical page, with the full method and every rule named:
**<https://satohub.ai/docs/sato-swap>**

- Surface: <https://satohub.ai/swap>
- API: `POST https://satohub.ai/api/swap/quote`
- MCP tool: `onchain_agent_swap` (write-labelled — `readOnlyHint` is false,
  because `build-tx` produces an object a requester could sign)

## What one call does

1. **Takes an intent.** Chain in, token in, token out, amount in base units, the
   taker, slippage, an optional deadline, and a mode.
2. **Reads four targets separately** — token in, token out, the venue endpoint,
   the recipient — each returning `go`, `caution`, `no` or `unknown` with the
   rule that produced it and the date it was read. **`unknown` means we hold no
   record or a lane could not be read: never zero, and never a finding against
   the target.**
3. **Applies the operator's policy**, server-side, after the venue is chosen and
   before anything is built: caps per trade and per period, allowed chains,
   tokens, venues, recipients and modes, slippage and deadline ceilings, and
   what a `caution` or an `unknown` does. **`unknown` refuses by default.** A
   limit that lives in a prompt is a limit a message can argue with; this one
   does not.
4. **Simulates the route** against a node before handing anything back. A route
   that reverts is withheld with the decoded reason. A revert caused by the
   requesting wallet's own missing allowance is *not* treated as a fault in the
   route — it comes back as a named precondition, because a wallet cannot
   approve a router it was never handed.
5. **Returns an unsigned object.** EVM calldata, or the venue's unsigned
   transaction on Solana — or, in `recommend` mode, no transaction at all,
   whatever the gate said. Sato Hub holds no key, signs nothing and broadcasts
   nothing.
6. **Records the decision** as an Ed25519-signed receipt over the quote, the
   mode, the policy version and digests of what was checked, verifiable against
   <https://satohub.ai/.well-known/jwks.json>.

## How a venue is chosen

Inside one lane only — a same-chain quote and a cross-chain quote are never
ranked against each other. In order: retired venues excluded, then lane, then
whether the venue answered at all, then liveness, then the observed success rate
of our own daily checks, then verification state, and **only then** quoted
output, with name as the final tiebreak so the same data yields the same route.
`chosen_by` names every field that was read.

Price is the sixth signal, not the first. A venue that quotes a better number
and then does not answer is worth less than one that answers.

## The fee

3 bps when both legs are stablecoins we recognise, 15 bps otherwise, as a
parameter on the venue's own quote — charged by that venue's router inside the
transaction **you** sign, and disclosed on the response before anything is
signed. Several venues keep a share of it, charge a different leg, or pay it
later and conditionally; each of those carries its own qualifier, quoted
verbatim from that venue's documentation. A trade that is never signed, or that
reverts, pays us nothing. Calling the API costs nothing and needs no key.

## What it is not

It does not custody, sign or broadcast. It does not price a token or model
depth. It does not review a venue, a token or a counterparty — a verdict is a
reading on a date, not a security review, a quality judgment or a statement
about returns. There is no list of trusted counterparties and there will not be
one: a recipient with no Agent Passport is *no record*, which is the ordinary
case. A receipt records what was returned and checked; it is never proof that a
trade settled.

## Refusals

A refusal arrives as HTTP 200 with `tx: null` and a `withheld` object naming the
rule, the limit and the observed value — it is an answer, not a failure, and
retrying it unchanged will refuse again. `"we did not check"` and `"we checked
and it is clean"` must never look the same, so a missing simulation always says
why it was missing.

---

Full rules, the per-venue fee qualifiers, the simulation lanes and the receipt
binding: **<https://satohub.ai/docs/sato-swap>** ·
[Sato Score methodology](sato-score.md) · [Connect over MCP](connect-mcp.md)
