# Cloudflare Pages

## Project Settings

Connect this GitHub repository to Cloudflare Pages:

```text
Repository: sudoyc/arqel-docs
Framework preset: None, or VitePress if available
Install command: pnpm install
Build command: pnpm run build
Build output directory: docs/.vitepress/dist
```

## Custom Domain

Configure the custom domain in Cloudflare Pages:

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

Cloudflare Pages does not require a `wrangler.json` for this static VitePress site.

## Local Verification

Before changing Pages settings or pushing docs changes:

```bash
pnpm install
pnpm run build
```

Optional local preview:

```bash
pnpm run preview
```

Then open the URL printed by VitePress, usually:

```text
http://127.0.0.1:4173
```

## Notes

- The old Cloudflare Workers React/Vite template files were removed during migration.
- This site should be deployed as static output from VitePress, not as a Worker application.
- Do not commit `docs/.vitepress/dist` or `docs/.vitepress/cache`.
