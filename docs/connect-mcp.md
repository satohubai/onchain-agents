# Query this index from your agent (MCP)

The index is queryable live over the [Model Context Protocol](https://modelcontextprotocol.io) — your agent gets search, per-resource detail, Docker-verified deploy specs, agent passports, news, and live metrics, straight from the same data this repo renders from.

**Endpoint:** `https://satohub.ai/api/mcp` (Streamable HTTP, read-only, no key)

## Claude Code

```sh
claude mcp add --transport http satohub https://satohub.ai/api/mcp
```

## Claude Desktop / Cursor (via mcp-remote)

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

## Tools (12, read-only)

| Tool | What it does |
|---|---|
| `onchain_agent_search_resources` | Search the index (text, category, chain filters) |
| `onchain_agent_get_resource` | Full detail for one listing (score, liveness, provenance-backed fields) |
| `onchain_agent_get_deploy_spec` | Docker-verified install/entry spec for a listing |
| `onchain_agent_list_categories` / `_list_chains` | The facet vocabularies |
| `onchain_agent_search_agents` / `_get_agent_passport` | The live Agent Passport registry |
| `onchain_agent_get_news` | The filtered onchain-agent news feed |
| `onchain_agent_get_metrics` | Live metrics (e.g. ERC-8004 registered-agent count) |
| `onchain_agent_recent_changes` | The changelog feed ("new this week") |
| `onchain_agent_list_wiki_pages` / `_get_wiki_page` | The wiki |

No MCP client? The raw feed works anywhere:

```sh
curl -s https://satohub.ai/api/export/index.json
```

Full docs: [satohub.ai/mcp](https://satohub.ai/mcp)
