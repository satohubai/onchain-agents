# Query this index from your agent (MCP)

The index is queryable live over the [Model Context Protocol](https://modelcontextprotocol.io). Your agent gets search, per-listing detail, deploy specs, Preflight checks, agent passports, agent-economy numbers and news, from the same data this repo renders from.

**Endpoint:** `https://satohub.ai/api/mcp` (Streamable HTTP, no key, no account)

**Tool list:** [`https://satohub.ai/api/mcp/tools.json`](https://satohub.ai/api/mcp/tools.json) carries the current tools, their input schemas and which ones change state. Most tools only read. The few that do something (watch a dependency, submit a project, register an agent passport, prepare a swap) are listed in its `write_tools` field; none of them holds a key, signs or broadcasts.

## Claude Code

```sh
claude mcp add --transport http satohub https://satohub.ai/api/mcp
```

## Claude Desktop

Settings → Connectors → add a custom connector with the URL `https://satohub.ai/api/mcp`.

## Cursor

Cursor speaks Streamable HTTP natively. Add this to your Cursor `mcp.json` (the same file ships at the root of this repo):

```json
{
  "mcpServers": {
    "sato-hub": {
      "url": "https://satohub.ai/api/mcp"
    }
  }
}
```

This repo is also a Cursor plugin ([`.cursor-plugin/plugin.json`](../.cursor-plugin/plugin.json)), submitted to the Cursor Marketplace and awaiting review there.

## Any other MCP client

Clients that only launch local (stdio) servers can bridge with `mcp-remote`:

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

## Where to start

| Tool | What it does |
|---|---|
| `onchain_agent_preflight` | What is on record about a repo, package, MCP endpoint, agent or token before you install, connect, pay or trade |
| `onchain_agent_search_resources` | Search the index (text, category, chain, standard filters) |
| `onchain_agent_get_resource` | Full detail for one listing: Sato Score, liveness, provenance-backed fields |
| `onchain_agent_recommend_stack` | A goal in plain words → components from the index |
| `onchain_agent_get_score_methodology` | The Sato Score rubric, to quote rather than infer |
| `onchain_agent_get_deploy_spec` | Install and entry steps for a listing, where one is on record |
| `onchain_agent_search_agents` / `_get_agent_passport` | The Agent Passport registry |
| `onchain_agent_get_agent_economy` | Measured agent-economy numbers, each with its stage and method |

The Sato Score measures how open, active and verifiable a project is. It is not a safety, security, quality or returns grade.

No MCP client? The raw feed works anywhere:

```sh
curl -s https://satohub.ai/api/export/index.json
```

Full docs: [satohub.ai/mcp](https://satohub.ai/mcp)
