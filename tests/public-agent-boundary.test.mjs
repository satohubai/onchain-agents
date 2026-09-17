import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import {
  cpSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

import {
  assertNoPrivateAgentFields,
  sanitizePublicAgents,
  sanitizeRegistryResponse,
} from "../scripts/public-agent-boundary.mjs";

const ROOT = new URL("..", import.meta.url);
const privateFixture = JSON.parse(
  readFileSync(new URL("./fixtures/registry-private-field.json", import.meta.url), "utf8")
);

function copyRepo() {
  const temp = mkdtempSync(join(tmpdir(), "sato-generator-test-"));
  cpSync(ROOT, temp, {
    recursive: true,
    filter: (source) => basename(source) !== ".git",
  });
  return temp;
}

function artifactSnapshot(root) {
  const files = ["README.md", "data/index.json", "data/index.csv"];
  return Object.fromEntries(
    files.map((relative) => {
      const body = readFileSync(join(root, relative));
      return [relative, createHash("sha256").update(body).digest("hex")];
    })
  );
}

test("rejects a registry response containing private creator metadata", () => {
  assert.throws(
    () => sanitizePublicAgents(privateFixture.agents),
    /agents\[0\]\.creator_name; refusing to render public artifacts/
  );
});

test("rejects private fields at any nested depth", () => {
  assert.throws(
    () => assertNoPrivateAgentFields([{ onchain: { source: { contact_email: "private@example.com" } } }]),
    /agents\[0\]\.onchain\.source\.contact_email/
  );
});

test("enforces nested schema and scalar types", () => {
  assert.throws(
    () => sanitizePublicAgents([{ name: "Agent", onchain: { creator_email: "private@example.com" } }]),
    /agents\[0\]\.onchain\.creator_email is not in the public onchain schema/
  );
  assert.throws(
    () => sanitizePublicAgents([{ name: { value: "not a string" } }]),
    /agents\[0\]\.name must be string/
  );
  assert.throws(
    () => sanitizePublicAgents([{ name: "Agent", stack: ["valid", { private: true }] }]),
    /agents\[0\]\.stack must be an array of strings/
  );
});

test("allowlists the public agent schema and drops unknown top-level fields", () => {
  const [agent] = sanitizePublicAgents([
    {
      sato_agent_id: "sato:agt:cleanfixture",
      slug: "clean-fixture",
      name: "Clean Fixture",
      description: "A clean deterministic registry fixture.",
      agent_type: ["Research Agent"],
      chains_supported: ["Base"],
      stack: [],
      verification_status: "Self-Reported",
      liveness_status: "Unknown",
      unexpected_internal_field: "must not cross the boundary",
    },
  ]);

  assert.equal(agent.name, "Clean Fixture");
  assert.equal(Object.hasOwn(agent, "unexpected_internal_field"), false);
});

test("rejects malformed registry envelopes", () => {
  assert.throws(() => sanitizeRegistryResponse(null), /registry response must be an object/);
  assert.throws(() => sanitizeRegistryResponse({}), /registry response\.agents must be an array/);
  assert.throws(() => sanitizeRegistryResponse({ agents: {} }), /registry response\.agents must be an array/);
});

test("the checked-in public index contains no private agent fields", () => {
  const index = JSON.parse(readFileSync(new URL("../data/index.json", import.meta.url), "utf8"));
  assert.doesNotThrow(() => assertNoPrivateAgentFields(index.agents, "data/index.json"));
});

test("generator exits non-zero on private input without changing artifacts", () => {
  const temp = copyRepo();
  try {
    const before = artifactSnapshot(temp);
    const result = spawnSync(
      process.execPath,
      [
        join(temp, "scripts/generate.mjs"),
        "--local",
        join(temp, "data/index.json"),
        "--registry-local",
        join(temp, "tests/fixtures/registry-private-field.json"),
      ],
      { cwd: temp, encoding: "utf8" }
    );
    assert.notEqual(result.status, 0);
    assert.match(
      `${result.stdout}\n${result.stderr}`,
      /private agent metadata at agents\[0\]\.creator_name/
    );
    assert.deepEqual(artifactSnapshot(temp), before);
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
});

test("generator accepts a clean typed registry and emits clean artifacts", () => {
  const temp = copyRepo();
  try {
    const index = JSON.parse(readFileSync(join(temp, "data/index.json"), "utf8"));
    const cleanRegistry = join(temp, "clean-registry.json");
    writeFileSync(cleanRegistry, JSON.stringify({ agents: index.agents }, null, 2));

    const result = spawnSync(
      process.execPath,
      [
        join(temp, "scripts/generate.mjs"),
        "--local",
        join(temp, "data/index.json"),
        "--registry-local",
        cleanRegistry,
      ],
      { cwd: temp, encoding: "utf8" }
    );
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);

    const rendered = JSON.parse(readFileSync(join(temp, "data/index.json"), "utf8"));
    assert.doesNotThrow(() => assertNoPrivateAgentFields(rendered.agents, "rendered index"));
    assert.equal(rendered.agents.length, index.agents.length);
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
});
