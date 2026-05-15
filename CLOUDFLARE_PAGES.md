# Cloudflare Deployment

The active Cloudflare project for this repository is currently a Workers project named `arqel-docs`, not a Cloudflare Pages project.

## Current: Cloudflare Workers static assets

This repository builds a static VitePress site and deploys the generated assets through Workers static assets.

Cloudflare Workers build settings:

```text
Install command: pnpm install
Build command: pnpm run build
Deploy command: pnpm run deploy
```

The deploy script runs:

```bash
wrangler deploy
```

`wrangler.toml` points Workers assets at:

```text
docs/.vitepress/dist
```

## Local verification

Before pushing changes that affect deployment:

```bash
pnpm install
pnpm run build
pnpm exec wrangler deploy --dry-run
```

## Optional: Cloudflare Pages instead

If this site is later recreated as a Cloudflare Pages project, use these settings:

```text
Framework preset: None, or VitePress if available
Install command: pnpm install
Build command: pnpm run build
Build output directory: docs/.vitepress/dist
```

Cloudflare Pages does not need `wrangler.toml` or a deploy command. The current Workers project does need `wrangler.toml` and `pnpm run deploy`.

## Custom domain

The intended docs domain is:

```text
docs.arqel.net
```

The repository also includes:

```text
docs/public/CNAME
```

Its content is:

```text
docs.arqel.net
```
