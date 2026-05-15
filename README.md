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

- Domain: `docs.arqel.net`
- Build command: `pnpm run build`
- Build output: `docs/.vitepress/dist`

## Cloudflare Pages

Create a Cloudflare Pages project connected to this repository:

- Framework preset: `None` or `VitePress` if available
- Install command: `pnpm install`
- Build command: `pnpm run build`
- Output directory: `docs/.vitepress/dist`
- Production branch: configure in Cloudflare Pages according to the repository default branch

Custom domain `docs.arqel.net` should be configured in Cloudflare Pages. The repository also includes `docs/public/CNAME` for hosts that read static CNAME files.
