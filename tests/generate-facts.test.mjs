// The README's counts come from satohub.ai's /api/facts.json (one definition
// shared with the site), CITATION.cff carries the release it describes, and the
// no-token line matches the site's wording exactly.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { parseFacts, releaseFromTag, renderCitation, NO_TOKEN_STATEMENT } from "../scripts/generate.mjs";

test("parseFacts keeps the counts and refuses a body with no listings", () => {
  const f = parseFacts({
    as_of: "2026-09-25",
    listings: 434,
    chains: 28,
    scored: 429,
    independently_checked: { total: 160, reproduced: 86, reviewed: 36, probed: 37, registered: 1 },
    mcp_tools: { total: 38, read_only: 34, write: 4 },
  });
  assert.equal(f.listings, 434);
  assert.equal(f.chains, 28);
  assert.deepEqual(f.mcp_tools, { total: 38, read_only: 34, write: 4 });
  assert.equal(f.independently_checked.reproduced, 86);
  assert.equal(parseFacts({ chains: 3 }), null);
  assert.equal(parseFacts(null), null);
  assert.equal(parseFacts({ listings: 10 }).mcp_tools, null, "no tool reading means no tool number");
});

test("a dated release tag gives the CITATION version and date", () => {
  assert.deepEqual(releaseFromTag("v2026.09.21"), { version: "v2026.09.21", date: "2026-09-21" });
  assert.deepEqual(releaseFromTag("x1", "2026-09-17T01:20:41Z"), { version: "x1", date: "2026-09-17" });
  assert.equal(releaseFromTag(""), null);
  assert.equal(releaseFromTag("nope"), null);
});

test("renderCitation writes version, date-released and the concept DOI", () => {
  const cff = renderCitation({ version: "v2026.09.21", date: "2026-09-21", doi: "10.5281/zenodo.22803661" });
  assert.match(cff, /^cff-version: 1\.2\.0$/m);
  assert.match(cff, /^version: "v2026\.09\.21"$/m);
  assert.match(cff, /^date-released: "2026-09-21"$/m);
  assert.match(cff, /value: 10\.5281\/zenodo\.22803661/);
  assert.doesNotMatch(renderCitation({ version: "v1", date: "2026-01-01", doi: null }), /type: doi/);
});

test("the committed CITATION.cff is the rendered template", () => {
  const cff = readFileSync(new URL("../CITATION.cff", import.meta.url), "utf8");
  const v = cff.match(/^version: "([^"]+)"$/m)?.[1];
  const d = cff.match(/^date-released: "([^"]+)"$/m)?.[1];
  assert.ok(v && d, "CITATION.cff must carry version and date-released");
  const doi = JSON.parse(readFileSync(new URL("../repo.config.json", import.meta.url), "utf8")).doi || null;
  assert.equal(cff, renderCitation({ version: v, date: d, doi }));
});

test("the no-token line is the site's wording and never names another project", () => {
  assert.equal(NO_TOKEN_STATEMENT, "Sato Hub has no token. A token using the Sato name is not ours.");
  const src = readFileSync(new URL("../scripts/generate.mjs", import.meta.url), "utf8");
  assert.ok(src.includes("- **Token.** ${NO_TOKEN_STATEMENT}"), "README's What this is bullets carry the line");
  assert.doesNotMatch(src, /satohub\.org/i);
});
