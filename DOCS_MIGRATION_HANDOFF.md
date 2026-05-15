# Docs Migration Handoff

## Summary

The Arqel documentation site was moved out of `/home/ycyc/projects/sub2api/docs-site` into a standalone repository:

```text
/home/ycyc/projects/arqel-docs
```

Remote:

```text
git@github.com:sudoyc/arqel-docs.git
```

The new repository is now a standalone VitePress docs project intended for Cloudflare Pages hosting at `docs.arqel.net`.

## What Changed

- Cloned `git@github.com:sudoyc/arqel-docs.git` into `/home/ycyc/projects/arqel-docs`.
- Replaced the existing Cloudflare Workers React/Vite template with the VitePress docs site.
- Copied docs content, VitePress config, theme, public assets, and documentation handoff files from `sub2api/docs-site`.
- Added Cloudflare Pages deployment notes to `README.md`.
- Added `.gitignore` for VitePress cache/build output and local env files.
- Removed docs-specific content from `sub2api`:
  - `docs-site/`
  - `deploy/docker-compose.docs-dev.yml`
  - docs-specific sketches under `sketches/004-docs-*`

## Current New Repository Layout

```text
arqel-docs/
  AGENTS.md
  CLOUDFLARE_PAGES.md
  DOCS_HOMEPAGE_HANDOFF.md
  DOCS_IMPROVEMENT_PLAN.md
  DOCS_MIGRATION_HANDOFF.md
  DOCS_RESTRUCTURE_HANDOFF.md
  DOCS_VISUAL_STYLE.md
  docs/
  package.json
  pnpm-lock.yaml
  README.md
```

## Build Status

Verified from `/home/ycyc/projects/arqel-docs`:

```bash
pnpm install
pnpm run build
```

Build succeeded after migration.

## Cloudflare Pages Settings

Use these settings in Cloudflare Pages:

```text
Framework preset: None, or VitePress if available
Install command: pnpm install
Build command: pnpm run build
Output directory: docs/.vitepress/dist
Custom domain: docs.arqel.net
```

The static CNAME file remains at:

```text
docs/public/CNAME
```

## Content State

The current docs include:

- Beginner onboarding and environment setup.
- API Key, Base URL, first request, and troubleshooting pages.
- Tool and Agent pages for Cursor, Claude Code, Gemini CLI, Codex, Hermes Agent, OpenAI SDK, and CC Switch.
- CC Switch pages split into install, provider setup, Agent application, and FAQ.
- Product-surface language for Claude Code, Gemini CLI, Codex, Cursor, and Hermes.
- Screenshot placeholders preserved as `图片占位` blocks.

## Important Editorial Rules

- Avoid repeatedly saying Arqel does not provide “auto route”; this is not a differentiating point for most gateway products.
- Keep the practical instruction: use the concrete model name shown in the Arqel console.
- User-facing name should be `Codex`, not `Codex CLI`, unless specifically discussing the terminal `codex` command.
- User-facing name should be `CC Switch`, not `CC-switch`.
- Do not claim Arqel compatibility for every Agent/protocol until verified.
- Do not write Hermes install commands until the official Hermes Agent source is confirmed.

## Open Questions

- Has Arqel verified Anthropic-compatible API support?
- Has Arqel verified Gemini-compatible API support?
- Has Arqel verified Codex-specific provider behavior?
- Has Arqel tested Claude Code, Gemini CLI, Codex, and Hermes through CC Switch?
- Should OpenCode and OpenClaw get dedicated Arqel pages?
- Which exact Hermes Agent project should be treated as official?

## Original Repository State

The original `/home/ycyc/projects/sub2api` repository now has docs deletion changes staged only in the working tree, not committed. It also has an untracked `.hermes/` local tool directory that was intentionally left untouched.

Do not re-add `docs-site/` to `sub2api`; future docs work belongs in this repository.
