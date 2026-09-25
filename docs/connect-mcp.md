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

## Hosted assistants and agent builders

No editor needed. These products add a remote MCP server by URL in their own settings: paste `https://satohub.ai/api/mcp` and choose no authentication. Each path below was read from that product's own docs on 2026-09-25; the always-current list, with notes, is at [satohub.ai/install#hosted](https://satohub.ai/install#hosted).

| Product | Where |
|---|---|
| ChatGPT (Business, Enterprise, Edu) | Settings → Apps → Advanced settings → Developer mode, then Apps → Create → Scan Tools |
| Mistral Le Chat | Connectors → + Add Connector → Custom MCP Connector (admin; name it `satohub`) |
| Dify | Integrations → Tools → MCP → add server (identifier `satohub`) |
| Langflow | Settings → MCP Servers → Add MCP Server → HTTP/SSE |
| Relevance AI | Agent → Tools → Add MCP → Connect my own |
| Composio | `POST /api/v3.1/custom/toolkits/upsert` with `"auth_schemes":[{"mode":"NO_AUTH"}]` (experimental, API only) |
| Claude (web, desktop, mobile) | Settings → Connectors → Add custom connector |

Not confirmed yet: Flowise (Custom MCP, Streamable HTTP; config shape unverified) and n8n (its MCP Client Tool documents an SSE endpoint, which this server does not serve — use HTTP Request nodes instead).

To check it worked, ask for a build: *"Use Sato Hub to plan a trading agent on Base and give me the install steps."* A working connection returns a stack with install steps and a Preflight summary for each pick.

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
| `onchain_agent_recommend_stack` | Start here for a build: a goal in plain words → a stack from the index, each pick with a Preflight summary |
| `onchain_agent_get_deploy_spec` | Install steps for each pick, marked where Sato Hub reproduced the install |
| `onchain_agent_preflight` | What is on record about a repo, package, MCP endpoint, agent or token before you install, connect, pay or trade |
| `onchain_agent_search_resources` | Search the index (text, category, chain, standard filters) |
| `onchain_agent_get_resource` | Full detail for one listing: Sato Score, liveness, provenance-backed fields |
| `onchain_agent_get_score_methodology` | The Sato Score rubric, to quote rather than infer |
| `onchain_agent_search_agents` / `_get_agent_passport` | The Agent Passport registry |
| `onchain_agent_get_agent_economy` | Measured agent-economy numbers, each with its stage and method |

The Sato Score measures how open, active and verifiable a project is. It is not a safety, security, quality or returns grade.

No MCP client? The raw feed works anywhere:

```sh
curl -s https://satohub.ai/api/export/index.json
```

Full docs: [satohub.ai/mcp](https://satohub.ai/mcp)
