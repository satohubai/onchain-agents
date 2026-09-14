Rendered from satohub.ai data; canonical: https://satohub.ai/docs/taxonomy

# Taxonomy

Every entry in the index is described on four axes plus interfaces. The export feed (`data/index.json`, `https://satohub.ai/api/export/index.json`) carries all of them as fields, so a filter you can express here is a filter you can run against the data.

## Axis 1 — Class (`entity_class`)

| Value | What it is |
|---|---|
| `resource` | Something you build, run or deploy agents **with**. The core of the index. |
| `agent` | A deployed or deployable agent itself. A separate, trust-gated lane — live agents with a passport get their own section. |
| `reference` | Editorial or non-product: research papers, communities, newsletters. Never scored. |

## Axis 2 — Resource type (`resource_type`)

What kind of thing it is — its **role**, not how you call it.

| Type | Examples |
|---|---|
| `Framework` | Agent build and run frameworks. Onchain-native ones (ElizaOS, AgentKit) are kept separate from general coding harnesses. |
| `Infrastructure` | Wallets, key management, RPC, execution rails |
| `Tool/Service` | Data feeds, trading tools, security scanners |
| `Venue` | DEXs, launchpads, agent marketplaces |
| `Standard` | ERC-8004, x402, A2A, MCP |
| `Network` | Chains and L2s agents run on |

## Axis 3 — Use cases (`use_cases`)

`trading` · `payments` · `wallets` · `data` · `identity` · `privacy` · `launch` · `security` · `build`

## Axis 4 — Chains (`chains_supported`)

The chains a resource actually supports. Facts, not roadmaps — a chain listed as planned is not listed here.

## Interfaces (`interfaces`)

How you reach it: `mcp` · `sdk` · `api` · `plugin` · `cli` · `ui` · `contract`.

Interface is deliberately separate from type. One data service can be API **and** SDK **and** MCP at once, and a reader looking for any of the three should find it.

## Standards (`standards`)

A cross-cutting protocol facet: `x402` · `erc-8004` · `erc-8183` · `mcp` · `a2a` · `erc-7715` · `eip-7702`.

**The field is not the tag.** A `standards` value means the project **implements** the standard. A tag of the same name means it **works with** it. Folding the two together inflates every count and disagrees with both the directory filter and the export, so the index never does it. See [Standards](Standards).

## Layers

The README and the browsable pages group these axes into nine layers — runtimes, action kits, MCP servers, wallets, data, payment rails, identity, security, trading venues. **Layers are not exclusive**: an x402 MCP server belongs in both the MCP layer and the payments layer, because a reader looking for either should find it.

---

[Home](Home) · [Glossary](Glossary) · [Standards](Standards) · [Sato Score](Sato-Score-Methodology)
