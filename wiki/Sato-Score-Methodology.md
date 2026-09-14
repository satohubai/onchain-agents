Rendered from satohub.ai data; canonical: https://satohub.ai/sato-score

# Sato Score methodology

The Sato Score is a transparent, evidence-based **0–100 measure of how open, active and verifiable a listed product is**.

> **It is not a safety, quality, security or returns grade.** A high score means a lot about a project can be verified from public evidence. A low score often means the project is new, closed-source or thinly documented — not that it is bad, and not that it is risky. Nothing here is an endorsement or financial advice.

## Components (v1)

| Component | Max | What it measures |
|---|---|---|
| Maintenance & liveness | 35 | Recency of **observed** activity — commits, releases, posts. Never a self-applied "Active" label. |
| Code transparency | 25 | Public repository, open-source status, adoption signal (stars) |
| Docs & demo | 15 | Documentation and a working demo exist |
| Listing transparency & provenance | 15 | How complete the listing is, and how much of it is source-backed |
| Independent verification | 10 | Evidence-gated only: Verified (8) / Audited (10). **Self-reported earns zero.** |

Tiers: **High ≥ 70 · Medium ≥ 40 · Low < 40**.

## What carries no score

Editorial and reference listings — research papers, research tools, newsletters, communities — get no score at all. The components measure a running product. Scoring a document against software would be a category error, so those listings show no ⬡ and no tier.

A listing with thin evidence so far is marked **provisional** rather than given a confident number.

## The rules that keep it honest

- Every component is computed deterministically from observed data, refreshed daily. Two runs over the same data produce the same score.
- **Self-reported is not verified.** A project saying it is audited moves nothing.
- **A component with no evidence scores zero.** On-chain proof, performance, security review and user reviews are all worth zero today because there is no evidence layer for them yet. We do not fake what cannot be substantiated, and we do not quietly reweight to make scores look better.
- **`null` means unknown, never zero.** A missing star count is not a star count of nothing.
- Sato's own products are scored by the same rubric, in the same index, with no exemption.

## ✓ Install reproduced

The ✓ column means the project's install was reproduced in an isolated container: the install commands ran and the entrypoint executed. It proves the install works on the day it was run. It is not a security review, and it says nothing about what the software does once running.

## Observed success rate

Where a listing exposes a live endpoint, we probe it on a schedule and publish the share of **our** checks that succeeded, with the number of days observed. That is a success rate of our checks — not the project's uptime, which only the operator can measure. A bot-block is not counted as a failure.

## Where to read a specific score

Every scored listing has a public report at `https://satohub.ai/verify/<slug>`, showing each component and what evidence moved it. Full methodology: https://satohub.ai/sato-score

---

[Home](Home) · [Glossary](Glossary) · [Standards](Standards) · [How to cite](How-to-cite)
