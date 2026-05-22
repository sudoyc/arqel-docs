# AGENTS.md

## Project Shape

- Standalone VitePress docs site for `docs.arqel.net`; docs live under `docs/`.
- VitePress config and sidebar are in `docs/.vitepress/config.ts`; homepage copy is in `docs/.vitepress/theme/components/DocsHome.vue`, not `docs/index.md`.
- Build output is `docs/.vitepress/dist`; `wrangler.toml` serves that directory as Cloudflare Workers static assets.

## Commands

- Use pnpm only: lockfile is `pnpm-lock.yaml` and scripts are only in the root `package.json`.
- Install: `pnpm install`
- Dev server: `pnpm run dev` (`vitepress dev docs --host 0.0.0.0`)
- Build / required verification: `pnpm run build`
- Preview: `pnpm run preview`
- Deploy: `pnpm run deploy` runs `wrangler deploy`; do not deploy unless explicitly asked.
- There are no repo-defined lint, test, typecheck, or CI workflows at the time of writing.

## Documentation Conventions

- Write for near-zero-background users first; prefer concrete steps and verification over abstract explanation.
- Keep unreplaced screenshots as VitePress details blocks containing `图片占位`; never include full API keys or private customer data in screenshots or examples.
- Use `Arqel` and `CC Switch` exactly; keep the CC Switch URL slug as `cc-switch`.
- Treat Claude Code, Gemini CLI, Codex, Cursor, Hermes, and CC Switch as product surfaces, not generic CLIs.
- Use `Codex` for the product family; use `Codex CLI` only when referring specifically to the terminal `codex` command.
- Do not claim config sharing between product surfaces unless the docs already verify it. The current Codex quickstart explicitly says Codex App, Codex CLI, and Codex IDE Extension share local Codex Provider config.
- Model names should be described as concrete values copied from the Arqel console; avoid old “auto route” phrasing.
- Do not claim Arqel supports Anthropic-compatible, Gemini-compatible, or Codex-specific protocols unless product/backend confirmation exists.
- Do not claim CC Switch guarantees Arqel compatibility for every Agent; it can manage providers/routing, but Arqel compatibility still needs validation.
- Do not add Hermes install commands until the official Hermes Agent source is confirmed; preserve the existing warning posture on `docs/tools/agents/hermes.md`.

## Routes And Links

- Current tool routes are nested: `docs/tools/agents/*`, `docs/tools/sdk/*`, and `docs/tools/cc-switch/*`.
- Avoid reintroducing old flat links such as `/tools/cursor`, `/tools/claude-code`, `/tools/gemini-cli`, `/tools/codex-cli`, `/tools/openai-sdk`, or `/tools/compare`.
- When adding or moving docs pages, update `docs/.vitepress/config.ts` sidebar/nav in the same change.

## Pre-Finish Checks

- Run `pnpm run build` before finishing documentation changes.
- For route/wording cleanup, search for stale terms: `auto route`, `Auto Route`, `自动路由`, `不提供 auto`, and the old flat `/tools/...` paths listed above.
- Do not remove warnings, security guidance, or “待验证” caveats just to shorten pages.
