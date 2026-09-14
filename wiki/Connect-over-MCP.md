Rendered from satohub.ai data; canonical: https://satohub.ai/mcp

# Connect over MCP

The index is queryable live over the [Model Context Protocol](https://modelcontextprotocol.io). Your agent gets search, per-listing detail, deploy specs, agent passports, agent-economy numbers and preflight checks from the same data this repo renders from — current, rather than recalled.

**Endpoint:** `https://satohub.ai/api/mcp` — Streamable HTTP, read-only, no auth, no key, no sign-up.

## Claude Code

```sh
claude mcp add --transport http satohub https://satohub.ai/api/mcp
```

## Claude Desktop

Settings → Connectors → add `https://satohub.ai/api/mcp`.

## Cursor, Windsurf, and anything else using mcp-remote

```json
{
  "mcpServers": {
    "satohub": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://satohub.ai/api/mcp"]
    }
  }
}
```

Every other client: https://satohub.ai/install

## Where to start

| Tool | What it does |
|---|---|
| `onchain_agent_search_resources` | Free text plus filters — chain, category, standard, status |
| `onchain_agent_get_resource` | The full record for one slug |
| `onchain_agent_recommend_stack` | A goal in plain words becomes a build stack, bucketed by slot, with the gaps named |
| `onchain_agent_get_deploy_spec` | Runtime, install commands, entry snippet, required env, and whether the deploy was reproduced |
| `onchain_agent_preflight` | A token or contract address, checked before you route anything at it |

The live tool list and count are published at `https://satohub.ai/api/mcp/tools.json` — read it there rather than trusting a number written in a document, which is how every stale count in this repo started.

## No client at all

- `https://satohub.ai/api/export/index.json` — the full catalog (also `.csv`, `.ndjson`)
- `https://satohub.ai/api/changes` — what moved, with its coverage caveat attached
- `https://satohub.ai/api/openapi.json` — every public operation
- `https://satohub.ai/llms.txt` — the site index for agents

## Rules that travel with the data

- Cite the record's `sato_url`. Where one exists, `verify_url` is the public score report.
- `verification_status` is not a verdict — `Self-Reported` means the project said so.
- `null` means unknown, never zero.
- A record is evidence, not an endorsement. It carries no security review and no claim about returns.

---

[Home](Home) · [How to cite](How-to-cite) · [Standards](Standards)
