// Hand-maintained files this repo must keep. The Cursor Marketplace submission
// (2026-07-16) points at this repo, and a full-tree republish on 2026-07-19
// silently dropped the plugin manifest, mcp.json, the logo and the MCP
// discovery file for two months. The nightly update-index job runs every test in
// this folder, so if any of these goes missing again the job fails in public
// instead of nobody noticing.
//
// Deliberately no tool count in any of these files: the count changes when the
// server does (tools.json is the live source), and a static file cannot follow.

import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const ROOT = new URL("..", import.meta.url);
const read = (p) => readFileSync(new URL(p, ROOT), "utf8");
const json = (p) => JSON.parse(read(p));
const ENDPOINT = "https://satohub.ai/api/mcp";

export const REQUIRED_FILES = [
  ".cursor-plugin/plugin.json",
  "mcp.json",
  "assets/sato-hub-icon.svg",
  ".well-known/mcp/server.json",
  "docs/connect-mcp.md",
];

// Top-level keys allowed by Cursor's plugin schema
// (github.com/cursor/plugins/blob/main/schemas/plugin.schema.json,
// additionalProperties: false), read 2026-09-23.
const CURSOR_PLUGIN_KEYS = new Set([
  "name", "displayName", "description", "version", "minClientVersions", "author", "publisher",
  "homepage", "repository", "license", "logo", "keywords", "category", "tags", "commands",
  "agents", "skills", "rules", "hooks", "variables", "mcpServers",
]);

test("every hand-maintained distribution file is present", () => {
  for (const f of REQUIRED_FILES) assert.ok(existsSync(new URL(f, ROOT)), `missing ${f}`);
});

test("Cursor plugin manifest matches Cursor's schema and the submitted id", () => {
  const m = json(".cursor-plugin/plugin.json");
  // The id the Marketplace submission was made under. Renaming it would orphan the review.
  assert.equal(m.name, "sato-hub-onchain-agents");
  assert.match(m.name, /^[a-z0-9]([a-z0-9.-]*[a-z0-9])?$/);
  for (const k of Object.keys(m)) assert.ok(CURSOR_PLUGIN_KEYS.has(k), `key not in Cursor's schema: ${k}`);
  assert.ok(m.description && m.description.length > 40, "description must explain the plugin");
  assert.match(m.version, /^\d+\.\d+\.\d+$/);
  assert.equal(typeof m.author?.name, "string");
  // Logo: relative, inside the repo, committed.
  assert.ok(!m.logo.startsWith("/") && !m.logo.includes(".."), "logo path must be relative");
  assert.ok(existsSync(new URL(m.logo, ROOT)), `logo ${m.logo} not committed`);
  // mcp.json at the root is discovered by default; no custom path to drift.
  assert.equal(m.mcpServers, undefined);
});

test("mcp.json points at the live endpoint with no placeholders", () => {
  const servers = json("mcp.json").mcpServers;
  const entries = Object.values(servers);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].url, ENDPOINT);
  assert.ok(!read("mcp.json").includes("${"), "undeclared ${VAR} placeholder");
});

test("MCP discovery metadata names the registry namespace and endpoint", () => {
  const s = json(".well-known/mcp/server.json");
  assert.equal(s.name, "ai.satohub/onchain-agents");
  assert.ok(s.remotes.some((r) => r.type === "streamable-http" && r.url === ENDPOINT));
});

test("no static file hard-codes a tool count", () => {
  for (const f of [".cursor-plugin/plugin.json", "mcp.json", ".well-known/mcp/server.json", "docs/connect-mcp.md"]) {
    assert.doesNotMatch(read(f), /\b\d+\s+(read-only\s+)?tools\b/i, `${f} carries a tool count`);
  }
});
