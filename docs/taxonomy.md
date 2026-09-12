# Taxonomy — how the index classifies the stack

Every entry is described on four axes plus interfaces. This is the category language the index (and satohub.ai) uses; the export feed carries all facets.

## Axis 1 — Class (`entity_class`)

- **`resource`** — something you build/run/deploy agents *with* (the core of the index)
- **`agent`** — a deployed/deployable agent itself (a separate, trust-gated lane; live agents with passports get their own section)
- **`reference`** — editorial/non-product (research papers, communities); never scored

## Axis 2 — Resource type (`resource_type`)

What kind of thing it is — its *role*, not how you call it:

| Type | Examples |
|---|---|
| **Framework** | agent build/run frameworks (onchain-native like ElizaOS, AgentKit — vs general harnesses, kept in their own band) |
| **Infrastructure** | wallets, key management, RPC, execution rails |
| **Tool/Service** | data feeds, trading tools, security scanners |
| **Venue** | DEXs, launchpads, agent marketplaces |
| **Standard** | ERC-8004, x402, A2A, MCP |
| **Network** | chains and L2s agents run on |

## Axis 3 — Use cases (`use_cases`)

`trading` · `payments` · `wallets` · `data` · `identity` · `privacy` · `launch` · `security` · `build`

## Axis 4 — Chains (`chains_supported`)

The chains a resource actually supports (facts, not aspirations).

## Interfaces (`interfaces`) — how you access it

`mcp` · `sdk` · `api` · `plugin` · `cli` · `ui` · `contract`. A single data service can be all of API+SDK+MCP — interface is deliberately separate from type.

## Standards (`standards`) — cross-cutting protocol facet

`x402` · `erc-8004` · `erc-8183` · `mcp` · `a2a`

---

The README's sections group the directory's categories along these axes. The full facet data is in [`data/index.json`](../data/index.json).
