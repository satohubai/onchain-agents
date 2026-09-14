// Assertions over the GENERATED Pages tree (docs/), so a regression in
// scripts/generate.mjs fails the nightly render rather than shipping quietly.
//
// Two classes of rule are checked here:
//   1. Structured data actually has its inputs — the layout can only emit what
//      the front matter carries, and a listing page with no canonical_url would
//      publish a mirror that competes with satohub.ai instead of pointing at it.
//   2. The comparison rules survive rendering — the caveat is present verbatim
//      and no page declares a winner.

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = join(ROOT, "docs");

function list(dir) {
  try {
    return readdirSync(join(DOCS, dir)).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
}
const read = (rel) => readFileSync(join(DOCS, rel), "utf8");
const frontMatter = (src) => {
  const m = src.match(/^---\n([\s\S]*?)\n---\n/);
  return m ? m[1] : "";
};

test("every generated page declares a satohub.ai canonical", () => {
  for (const dir of ["listings", "categories", "compare", "alternatives"]) {
    for (const f of list(dir)) {
      const fm = frontMatter(read(`${dir}/${f}`));
      assert.match(fm, /^canonical_url: "https:\/\/satohub\.ai\//m, `${dir}/${f} canonical_url`);
      assert.match(fm, /^layout: "default"$/m, `${dir}/${f} layout`);
      assert.match(fm, /^page_type: "/m, `${dir}/${f} page_type`);
    }
  }
});

test("listing pages carry the fields the JSON-LD needs", () => {
  const files = list("listings");
  assert.ok(files.length > 100, "expected the full listing tree");
  for (const f of files) {
    const fm = frontMatter(read(`listings/${f}`));
    assert.match(fm, /^page_type: "listing"$/m, f);
    assert.match(fm, /^item_name: "/m, f);
    assert.match(fm, /^breadcrumb:$/m, f);
  }
});

test("category pages carry an item_list for the ItemList markup", () => {
  const files = list("categories");
  assert.ok(files.length > 0);
  for (const f of files) {
    const fm = frontMatter(read(`categories/${f}`));
    assert.match(fm, /^page_type: "category"$/m, f);
    assert.match(fm, /^item_list:$/m, f);
    assert.match(fm, /^item_count: \d+$/m, f);
  }
});

test("the docs index declares the Dataset inputs", () => {
  const fm = frontMatter(read("index.md"));
  assert.match(fm, /^page_type: "index"$/m);
  assert.match(fm, /^date_modified: "\d{4}-\d{2}-\d{2}"$/m);
});

test("compare pages reproduce the caveat verbatim and declare no winner", () => {
  const raw = JSON.parse(readFileSync(join(ROOT, "data", "comparisons.json"), "utf8"));
  const byPair = new Map(raw.pages.map((p) => [p.slug, p]));
  const files = list("compare");
  assert.ok(files.length > 0, "expected rendered compare pages");
  for (const f of files) {
    const slug = f.replace(/\.md$/, "");
    const page = byPair.get(slug);
    assert.ok(page, `${f} has no entry in data/comparisons.json`);
    const src = read(`compare/${f}`);
    assert.ok(src.includes(page.caveat), `${f} is missing its mandatory caveat`);
    assert.match(src, /## What this cannot settle/, f);
    // No verdict language. "No winner is declared" is the page SAYING it does
    // not pick one, so the rule is about verdicts, not the word.
    assert.doesNotMatch(src, /\b(the winner|is better than|the better choice|we recommend|our pick)\b/i, f);
    assert.ok(src.includes("No winner is declared"), f);
  }
});

test("alternatives pages state what the ranking is not", () => {
  const files = list("alternatives");
  assert.ok(files.length > 0, "expected rendered alternatives pages");
  for (const f of files) {
    const src = read(`alternatives/${f}`);
    assert.match(src, /not a quality, safety or performance ranking/, f);
    assert.match(src, /declares no winner/, f);
  }
});

test("generated pages stay small enough to be quoted whole", () => {
  for (const dir of ["compare", "alternatives"]) {
    for (const f of list(dir)) {
      const size = statSync(join(DOCS, dir, f)).size;
      assert.ok(size < 6144, `${dir}/${f} is ${size} bytes, over the 6 KB budget`);
    }
  }
});

test("the layout emits JSON-LD for every page class", () => {
  const layout = readFileSync(join(DOCS, "_layouts", "default.html"), "utf8");
  assert.match(layout, /\{% seo %\}/);
  // No WebSite: jekyll-seo-tag emits that one, and duplicating it would be two
  // claims about the same site.
  for (const t of ["SoftwareSourceCode", "SoftwareApplication", "ItemList", "Dataset", "BreadcrumbList"]) {
    assert.ok(layout.includes(`"${t}"`), `layout is missing @type ${t}`);
  }
});

test("Pages config enables the whitelisted plugins and robots points at the sitemap", () => {
  const cfg = readFileSync(join(DOCS, "_config.yml"), "utf8");
  assert.match(cfg, /- jekyll-seo-tag/);
  assert.match(cfg, /- jekyll-sitemap/);
  const robots = readFileSync(join(DOCS, "robots.txt"), "utf8");
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, /sitemap\.xml$/m);
});
