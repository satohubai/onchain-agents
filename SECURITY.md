# Reporting a problem

This repository publishes a **dataset**, not a running service. There is no
code here that handles your data, and nothing in `data/` or `docs/` executes.
Two kinds of report are useful.

## A problem with an entry

A dead link, a wrong chain, a project that has moved, an entry that should be
retired, a description that misrepresents what a project does, or a score you
believe is computed from bad evidence.

- **Report form:** <https://satohub.ai/transparency#report>
- **Or:** open a [report-project issue](../../issues/new?template=report-project.yml)

Include the slug (the `slug` field in `data/index.json`) and what is wrong.
Corrections are applied upstream and appear here on the next nightly render.
If you maintain the project, you can also
[claim the listing](https://satohub.ai/transparency) and correct it directly by
proving control of its domain.

A Sato Score is a measure of how open, active and verifiable a project is. It
is not a safety, quality, security or returns grade, and a low score is not an
allegation — it usually means evidence is missing, and pointing us at the
evidence is the fix.

## A security problem in this repository

A vulnerability in the generator (`scripts/`), a workflow, or something in the
published data that should not be public.

- Email **security@satohub.ai**, or open a
  [private security advisory](../../security/advisories/new).
- Please do not open a public issue for these.

We aim to acknowledge within 72 hours. There is no bounty programme.

## Not in scope

Requests to raise a score, to be featured, or to remove a competitor.
[Rank, score and verification are not for sale](NEUTRALITY.md).
