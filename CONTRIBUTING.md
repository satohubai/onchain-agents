# Contributing

This index is **auto-rendered daily** from the Sato Hub data pipeline — the README and `data/` files are build artifacts. That changes what a useful contribution looks like:

## Add a project (the main path)

Open an [**add-project issue**](../../issues/new?template=add-project.yml). Submissions flow into the Sato Hub review pipeline:

1. We check the basics (real project, working links, correct category).
2. New listings start with **conservative statuses** — nothing is marked Verified or Audited without evidence. Self-reported ≠ verified, ever.
3. Once promoted, the project appears in the next nightly render here **and** on [satohub.ai](https://satohub.ai), gets scored, and its liveness/stars are tracked daily.

We aim to answer every submission within 48 hours.

## Fix an error in an entry

Use the [**report-project issue form**](../../issues/new?template=report-project.yml) (broken link, wrong chains, dead project, score dispute — see [NEUTRALITY.md](NEUTRALITY.md)). Don't PR `README.md` or `data/` directly — the nightly render would overwrite it. The fix lands in the upstream dataset and flows back here.

## Improve the tooling

PRs to [`scripts/generate.mjs`](scripts/generate.mjs), the docs, or the workflows are welcome — that code is MIT and lives here.

## Get your badge

Listed projects can embed their Sato Score badge:

```md
[![Sato Score](https://satohub.ai/api/badge/<your-slug>)](https://satohub.ai/verify/<your-slug>)
```

## Ground rules

- No hype language in descriptions — one honest line about what the thing does.
- Scores are informational (openness/activity/verifiability), never safety or returns claims.
- Catalog data is CC-BY-4.0 (*data by satohub.ai*); tooling is MIT © Prime Signal LLC.

— Sato
