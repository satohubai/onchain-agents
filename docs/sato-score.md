# The Sato Score — what ⬡ means

The Sato Score is a transparent, evidence-based **0–100 measure of how open, active, and verifiable** a listed product is.

> **It is not a safety, quality, or returns grade.** A high score means we can verify a lot about a project. A low score often just means a project is new, private, or thinly documented — not that it's bad. Nothing here is an endorsement or financial advice.

## Components (v1)

| Component | Max | What it measures |
|---|---|---|
| Maintenance & liveness | 35 | Recency of *observed* activity (commits, releases, posts) — not self-applied labels |
| Code transparency | 25 | Public repo, open-source status, adoption signal (stars) |
| Docs & demo | 15 | Documentation and a working demo exist |
| Listing transparency & provenance | 15 | Listing completeness and how much of it is source-backed |
| Independent verification | 10 | Evidence-gated only: Verified (8) / Audited (10). Self-reported earns **zero** |

Tiers: **High ≥ 70 · Medium ≥ 40 · Low < 40**. Editorial listings (research papers, newsletters, communities) get no score — the components measure a running product, not a document.

## The rules that keep it honest

- Every component is computed deterministically from observed data, refreshed daily.
- Self-reported claims never count as verified.
- Components with no evidence score zero — we don't fake what we can't substantiate.
- Sato's own products are scored by the same rubric, in the same index.

## ✓ Verified install

The ✓ column means the project's install was **reproduced in our Docker verification harness** — install commands ran and the entrypoint executed. It proves the install works, nothing more.

Full methodology + per-project reports: [satohub.ai/sato-score](https://satohub.ai/sato-score) · badge embed: `https://satohub.ai/api/badge/<slug>`
