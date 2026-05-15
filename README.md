# Arqel Docs

This repository contains the VitePress documentation site for `docs.arqel.net`.

## Development

```bash
pnpm install
pnpm run dev
```

Local dev server:

```text
http://127.0.0.1:5173
```

## Build

```bash
pnpm run build
```

## Preview

```bash
pnpm run preview
```

## Deployment target

The repository can be deployed in two ways. The current Cloudflare project is a Workers project named `arqel-docs`, so the active deployment path is Workers static assets.

### Current: Cloudflare Workers static assets

Cloudflare Workers build settings:

- Install command: `pnpm install`
- Build command: `pnpm run build`
- Deploy command: `pnpm run deploy`

`pnpm run deploy` runs `wrangler deploy`, which publishes the generated VitePress static output from `docs/.vitepress/dist` according to `wrangler.toml`.

### Alternative: Cloudflare Pages

If the site is recreated as a Pages project later:

- Domain: `docs.arqel.net`
- Build command: `pnpm run build`
- Build output: `docs/.vitepress/dist`

## Cloudflare Pages

For a Pages project, create a Cloudflare Pages project connected to this repository:

- Framework preset: `None` or `VitePress` if available
- Install command: `pnpm install`
- Build command: `pnpm run build`
- Output directory: `docs/.vitepress/dist`
- Production branch: configure in Cloudflare Pages according to the repository default branch

Custom domain `docs.arqel.net` should be configured in Cloudflare Pages. The repository also includes `docs/public/CNAME` for hosts that read static CNAME files.
