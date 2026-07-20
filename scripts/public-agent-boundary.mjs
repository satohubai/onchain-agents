const PRIVATE_AGENT_FIELDS = new Set([
  "creator_name",
  "creator_user_id",
  "owner_account_id",
  "contact_email",
  "review_note",
]);

const STRING_FIELDS = new Set([
  "sato_agent_id",
  "slug",
  "name",
  "description",
  "verification_status",
  "liveness_status",
]);

const NULLABLE_STRING_FIELDS = new Set([
  "model_provider",
  "framework",
  "website_url",
  "repo_url",
  "docs_url",
  "x_url",
  "endpoint_url",
  "pricing_model",
  "wallet_address",
  "profile_url",
  "manifest_url",
  "registered_at",
]);

const STRING_ARRAY_FIELDS = new Set([
  "agent_type",
  "chains_supported",
  "stack",
  "standards",
]);

const BOOLEAN_FIELDS = new Set([
  "payment_enabled",
  "x402_enabled",
  "wallet_verified",
]);

const PUBLIC_AGENT_FIELDS = new Set([
  ...STRING_FIELDS,
  ...NULLABLE_STRING_FIELDS,
  ...STRING_ARRAY_FIELDS,
  ...BOOLEAN_FIELDS,
  "onchain",
]);

const ONCHAIN_FIELD_TYPES = {
  checked_at: "nullable-string",
  erc8004_registered: "boolean",
  erc8004_agent_id: "nullable-string",
  mcp_live: "boolean",
  a2a_published: "boolean",
  x402_in_bazaar: "boolean",
  active_chains: "number",
  total_tx: "number",
  verified_executions: "number",
  note: "string",
};

function findPrivateField(value, path = "agents") {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      const hit = findPrivateField(value[i], `${path}[${i}]`);
      if (hit) return hit;
    }
    return null;
  }
  if (!value || typeof value !== "object") return null;

  for (const [key, child] of Object.entries(value)) {
    const childPath = `${path}.${key}`;
    if (PRIVATE_AGENT_FIELDS.has(key)) return childPath;
    const hit = findPrivateField(child, childPath);
    if (hit) return hit;
  }
  return null;
}

function expectType(value, type, path) {
  if (type === "nullable-string") {
    if (value === null) return null;
    type = "string";
  }
  if (type === "number") {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new Error(`${path} must be a finite number`);
    }
    return value;
  }
  if (typeof value !== type) throw new Error(`${path} must be ${type}`);
  return value;
}

function sanitizeOnchain(value, path) {
  if (value === null) return null;
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${path} must be an object or null`);
  }

  const clean = {};
  for (const [key, child] of Object.entries(value)) {
    const type = ONCHAIN_FIELD_TYPES[key];
    if (!type) throw new Error(`${path}.${key} is not in the public onchain schema`);
    clean[key] = expectType(child, type, `${path}.${key}`);
  }
  return clean;
}

export function assertNoPrivateAgentFields(agents, label = "registry response") {
  const hit = findPrivateField(agents);
  if (hit) {
    throw new Error(`${label} contains private agent metadata at ${hit}; refusing to render public artifacts`);
  }
}

export function sanitizePublicAgents(agents, label = "registry response") {
  if (!Array.isArray(agents)) throw new Error(`${label}.agents must be an array`);
  assertNoPrivateAgentFields(agents, label);

  return agents.map((agent, index) => {
    const path = `agents[${index}]`;
    if (!agent || typeof agent !== "object" || Array.isArray(agent)) {
      throw new Error(`${path} must be an object`);
    }

    const clean = {};
    for (const [field, value] of Object.entries(agent)) {
      if (!PUBLIC_AGENT_FIELDS.has(field)) continue;
      const fieldPath = `${path}.${field}`;
      if (STRING_FIELDS.has(field)) clean[field] = expectType(value, "string", fieldPath);
      else if (NULLABLE_STRING_FIELDS.has(field)) clean[field] = expectType(value, "nullable-string", fieldPath);
      else if (BOOLEAN_FIELDS.has(field)) clean[field] = expectType(value, "boolean", fieldPath);
      else if (STRING_ARRAY_FIELDS.has(field)) {
        if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
          throw new Error(`${fieldPath} must be an array of strings`);
        }
        clean[field] = [...value];
      } else if (field === "onchain") clean[field] = sanitizeOnchain(value, fieldPath);
    }
    return clean;
  });
}

export function sanitizeRegistryResponse(value, label = "registry response") {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} must be an object`);
  }
  if (!Object.hasOwn(value, "agents") || !Array.isArray(value.agents)) {
    throw new Error(`${label}.agents must be an array`);
  }
  return sanitizePublicAgents(value.agents, label);
}
