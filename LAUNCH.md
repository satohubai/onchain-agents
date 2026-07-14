# LAUNCH.md — private-phase checklist

> Internal. This file is deleted when the repo flips public.

## Before `--go-public`

- [x] **Coverage ≥ 250 entries** — 257 live (Wave 5, 2026-07-13)
- [x] **Sato OS listed in the directory** and scored by the same rubric (slug `sato-os`)
- [ ] **≥ 8–10 Agent Passports** — SatoBot staged `pending` (approve at /admin/registry); invite real builders for the rest
- [x] **Discord invite URL** filled — ⚠️ current invite EXPIRES 2026-08-13; replace with a never-expiring invite in `repo.config.json` before flip
- [x] **Donation addresses** filled — ETH/Base/Arb + SOL + BTC (owner-supplied, byte-verified on GitHub)
- [x] **Demo GIF** — real MCP exchange, `assets/demo.gif`, embedded below the nav bar
- [ ] **CI green 3 consecutive days** (update-index nightly render + validate)
- [ ] Social preview PNG uploaded (`publish:index --go-public` does this)
- [ ] Read every README section once, out loud, as a stranger

## Flip day (coordinated — vault doc 41/43 §8)

- [ ] `npm run publish:index -- --go-public`
- [ ] Flip the satellites public too: `--target mcp`, `--target spec`, `--target os` (PATCH visibility; mcp must be public before the official MCP-registry submission)
- [ ] Publish the profile README (`--profile --write`) — its stat-band embed + index links only resolve once the index is public
- [ ] **Pin repos** on the profile in this order: onchain-agents → mcp → agent-passport-spec → sato-os (Settings has no API for pins — manual)
- [ ] Enable **Discussions** on onchain-agents (community home until Discord)
- [ ] Optional: add a GPG/SSH signing key for the bot (Settings → SSH and GPG keys) so commits show "Verified"
- [ ] Delete this file (next render/publish)
- [ ] Show HN ("A scored, daily-updated index of the onchain agent stack" — data angle)
- [ ] X thread (@SatoHub, pinned) + Farcaster /base + /base-builds
- [ ] Blog announcement via `npm run announce` + newsletter
- [ ] Submit to doc-42 venues (incl. sodofi's awesome-onchain-agents — coopetition PR)

## Post-flip integrations

- [ ] Star-CTA surfaces on satohub.ai: footer, /mcp page, blog post footers, newsletter P.S.
- [ ] Weekly release wired into the @SatoHub X repo beat (x-content-framework lane)
- [ ] Badge-embed outreach to listed projects (backlink flywheel)
- [ ] Own the `onchain-agents` GitHub topic; ask listed projects to adopt it
