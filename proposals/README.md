# proposals/ — add a project by pull request

The second door into the index (the first is the [add-project issue form](../../../issues/new?template=add-project.yml)). Both land in the same place: the Sato Hub review inbox. **Nothing is listed automatically.**

## How it works

1. Copy [`_TEMPLATE.json`](_TEMPLATE.json) to `proposals/<slug>.json` — `<slug>` is your project name in lowercase-with-dashes (`my-agent-kit.json`).
2. Open a PR with just that file. A maintainer merges it once the basics check out (real project, working links).
3. A weekly job reads every `proposals/*.json` on `main` and proposes it into the review inbox with `discovered_by = github-pr:proposals/<file>`. Files already in the inbox are skipped on later runs, so a merged file is read once.
4. A human reviews and, if it fits, promotes it through the listing engine. The listing then appears in the next nightly render here and on [satohub.ai](https://satohub.ai) with a Sato Score and daily liveness tracking.

There is no bot reply on the PR or the issue. When the listing goes live (or is declined with a one-line reason), a maintainer closes the corresponding issue or removes the file. Turnaround target: 48 hours for the first look.

## Schema

| Field | Required | Notes |
|---|---|---|
| `name` | yes | 2–80 chars, the project's own name |
| `website_url` | one of these | `https://` URL. Shared hosts (github.io, vercel.app, notion.site…) do not count as a project domain |
| `github_url` | one of these | `https://github.com/<owner>/<repo>` — a public repo is what the score can measure |
| `category` | yes | one of: Agent Framework, MCP, Wallet Infrastructure, Trading Tool, DeFi Tool, Data Tool, API / SDK, Developer Tool, Skill Repo, Agent Launchpad, Agent Marketplace, Security Tool, Onchain Agent, Other |
| `chains` | no | array of chain names, e.g. `["Base", "Solana"]` |
| `description` | yes | 20–400 chars, plain. Hype vocabulary (guaranteed, risk-free, moon, revolutionary, "audited" without a report…) fails the intake gate |
| `relationship` | no | `maintainer` / `user` / `unaffiliated` |

## What gets a proposal rejected before review

- A project already in the index (matched by website host or `owner/repo`) or already in the inbox.
- No usable URL, a `github_url` that is not a github.com repo, or a description under 20 chars.
- Marketing language — the same banned-phrase list the site's own copy is held to.

## Ground rules

New listings start **self-reported / unverified**. Nothing is marked Verified or Audited without evidence, and a merged proposal is a review ticket, not an endorsement. See [NEUTRALITY.md](../NEUTRALITY.md).
