# AGENTS.md

## Project

This repository contains the standalone Arqel documentation site for `docs.arqel.net`.

- Framework: VitePress
- Package manager: pnpm
- Docs root: `docs/`
- VitePress config: `docs/.vitepress/config.ts`
- Theme files: `docs/.vitepress/theme/`
- Build output: `docs/.vitepress/dist`
- Hosting target: Cloudflare Pages

## Commands

Use pnpm only.

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

Cloudflare Pages should use:

```text
Install command: pnpm install
Build command: pnpm run build
Output directory: docs/.vitepress/dist
```

## Documentation Rules

- Write for near-zero-background users first.
- Prefer clear step-by-step instructions over abstract descriptions.
- Keep screenshots as explicit `图片占位` blocks until real images are available.
- Use `Arqel` consistently as the product name.
- Use `CC Switch` as the user-facing product name. Keep URL slug `cc-switch`.
- Use `Codex` as the product-family name. Use `Codex CLI` only when specifically referring to the terminal `codex` command.
- Treat Claude Code, Gemini CLI, Codex, Cursor, and Hermes as product families/surfaces, not just CLI tools.
- Do not imply that one product surface shares configuration with another unless official docs state it.
- Model names should be described as concrete names copied from the Arqel console. Avoid repeatedly framing this as an “auto route” issue.
- Do not claim Arqel supports Anthropic-compatible, Gemini-compatible, or Codex-specific protocols unless product/backend confirms it.
- Do not claim CC Switch guarantees Arqel compatibility for every Agent. CC Switch can manage providers and routing/proxy features, but Arqel-specific compatibility still needs validation.
- Do not provide Hermes installation commands until the official Hermes Agent source is confirmed.

## Verification

Before finishing documentation changes, run:

```bash
pnpm run build
```

Recommended residue checks:

```text
auto route
Auto Route
自动路由
不提供 auto
/tools/cursor
/tools/claude-code
/tools/gemini-cli
/tools/codex-cli
/tools/openai-sdk
/tools/compare
```

The path checks above should not match old flat routes. Current valid routes are under `docs/tools/agents/` and `docs/tools/sdk/`.

## Safety

- Never commit real API keys, `.env` files, screenshots with full keys, or private customer data.
- Do not remove warning or security content just to make pages shorter.
- Do not deploy or push unless explicitly requested.
