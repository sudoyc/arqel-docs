# Arqel docs-site development handoff

Updated: 2026-05-15 17:48:27 CST
Repo: `/home/ycyc/projects/arqel-docs`
Branch: `main`
Scope: standalone VitePress docs site under `docs/`

## Current status

The docs site has broad documentation restructure changes plus a custom docs homepage implementation. This handoff is intentionally repo-local so the next session can continue without reconstructing context.

Do not deploy from this handoff. Validate locally first.

## Working tree summary

Relevant homepage files changed in this session:

- `docs/index.md`
  - switched from VitePress default `layout: home` frontmatter to a page mounting `<DocsHome />`
  - homepage disables sidebar/outline/prev/next
- `docs/.vitepress/theme/index.ts`
  - registers the custom `DocsHome` component through `enhanceApp`
- `docs/.vitepress/theme/components/DocsHome.vue`
  - custom homepage content and layout
- `docs/.vitepress/theme/style.css`
  - arqel-aligned homepage styling and VitePress theme color variables

There are also many docs restructure changes outside the homepage, including moved/deleted flat docs pages and new nested directories under:

- `docs/getting-started/api/`
- `docs/getting-started/basics/`
- `docs/getting-started/troubleshooting/`
- `docs/tools/agents/`
- `docs/tools/cc-switch/`
- `docs/tools/sdk/`
- `docs/help/troubleshooting/`
- `docs/help/security/`
- `docs/api/`
- `docs/concepts/`
- `docs/setup/`

Existing untracked planning/style docs observed:

- `DOCS_IMPROVEMENT_PLAN.md`
- `DOCS_RESTRUCTURE_HANDOFF.md`
- `DOCS_VISUAL_STYLE.md`

Sketches observed:

- `sketches/004-docs-config-map/`
- `sketches/004-docs-content-types/`
- `sketches/004-docs-reading-path-refined/`

## Current homepage direction

Latest user direction: make the homepage more restrained and less like it is telling the reader what to do. Remove unnecessary content and keep the landing page compact.

Current implemented shape:

- Left hero:
  - kicker: `接入文档`
  - h1: `Arqel`
  - subtitle: `一个入口，连接主流 AI 模型`
  - short description: `API Key、Base URL、模型选择和工具配置整理在这里。需要时再进入概念、排错和安全说明。`
  - CTAs: `快速开始`, `工具接入`
- Right card:
  - title: `文档入口`
  - short helper: `按当前需要选择，不必按顺序阅读。`
  - 3 links: `快速开始`, `工具接入`, `概念与排错`
- Lower cards:
  - 3 cards: `入门教程`, `工具和 Agent`, `常见帮助`
- Low-key note:
  - `Arqel 不提供 auto route；请求时请使用控制台中显示的具体模型名。`

Earlier rejected patterns to avoid:

- Do not use `Arqel Docs` as the giant h1.
- Do not use `接入文档` as the giant h1.
- Do not show a 5-step reading path above the fold.
- Avoid tutorial/commanding phrasing such as `先跑通，再接工具`, `按实际接入顺序`, `不需要先理解全部概念`, `接入前确认`.
- Do not restore big warning/boundary panel unless requested.
- Do not add terminal/config-map panel on this homepage; the selected direction is compact docs entry, not product demo.

## Visual implementation notes

`style.css` currently uses docs-home scoped classes so docs interior pages are not polluted.

Key computed/browser-verified values from the latest check:

- `.docs-home-title` text: `Arqel`
- `.docs-home-title` computed font size: `74px`
- `.docs-home-title` computed font weight: `780`
- `.docs-home-hero` height: about `470px`
- `.docs-home-guide-item` count: `3`
- `.docs-home-entry-card` count: `3`
- old `.docs-home-path-card`: absent
- old `.docs-home-boundary`: absent
- homepage horizontal overflow: `0`
- interior `/tools/` page: `.docs-home` absent, sidebar present, horizontal overflow `0`

Important: VitePress can override h1 styling. Always verify `.docs-home-title` with `getComputedStyle`, not only by reading CSS.

## Validation already run

From `/home/ycyc/projects/arqel-docs`:

```bash
pnpm run build
```

Result: passed.

From `/home/ycyc/projects/sub2api`:

```bash
git diff --check -- docs/index.md docs/.vitepress/theme/index.ts docs/.vitepress/theme/components/DocsHome.vue docs/.vitepress/theme/style.css
```

Result: passed, no output.

Homepage-focused stale/correction scan:

```bash
grep -RInE "TokenFlux|TokenDocs|Sub2API|一个密钥|统一密钥|从 0 开始|先跑通|不需要先|按实际接入|接入前确认|4 steps|Arqel<br|Arqel Docs</h1" --exclude-dir=node_modules --exclude-dir=dist docs/.vitepress/theme docs/index.md || true
```

Result: no output.

Browser checks run against `http://127.0.0.1:5174/` and `http://127.0.0.1:5174/tools/` using DOM/computed style probes. Vision provider was unavailable, but browser screenshots were captured and OCR was used as a fallback.

## Commands to rerun next session

```bash
cd /home/ycyc/projects/arqel-docs

git status --short --branch

git diff --check -- docs/index.md docs/.vitepress/theme/index.ts docs/.vitepress/theme/components/DocsHome.vue docs/.vitepress/theme/style.css

cd /home/ycyc/projects/arqel-docs
pnpm run build
```

If a docs dev server is needed:

```bash
cd /home/ycyc/projects/arqel-docs
pnpm run dev -- --host 127.0.0.1 --port 5174
```

Browser DOM checks for homepage:

```js
(() => {
  const q = s => document.querySelector(s)
  const title = q('.docs-home-title')
  return {
    title: title?.textContent?.trim(),
    titleStyle: title ? {
      fontSize: getComputedStyle(title).fontSize,
      fontWeight: getComputedStyle(title).fontWeight,
      lineHeight: getComputedStyle(title).lineHeight,
      letterSpacing: getComputedStyle(title).letterSpacing
    } : null,
    guideCount: document.querySelectorAll('.docs-home-guide-item').length,
    cardCount: document.querySelectorAll('.docs-home-entry-card').length,
    hasOldPathCard: !!q('.docs-home-path-card'),
    hasBoundary: !!q('.docs-home-boundary'),
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth
  }
})()
```

Expected result:

- `title: "Arqel"`
- title font size around `74px` on desktop
- `guideCount: 3`
- `cardCount: 3`
- `hasOldPathCard: false`
- `hasBoundary: false`
- `overflow: 0`

Interior page check on `/tools/`:

```js
({
  hasDocsHome: !!document.querySelector('.docs-home'),
  hasSidebar: !!document.querySelector('.VPSidebar'),
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  title: document.title
})
```

Expected:

- `hasDocsHome: false`
- `hasSidebar: true`
- `overflow: 0`

## Next-session priorities

1. Inspect the whole docs working tree before committing; the homepage is only one part of a broader docs restructure.
2. Keep the homepage compact unless the user asks for more content.
3. Review all internal links after the directory restructure, especially old flat routes that moved into nested paths.
4. Run `pnpm run build` after any docs route/config change.
5. Do not deploy to VPS from docs work unless explicitly requested.
6. Do not commit generated build output from `docs/.vitepress/dist` unless the project convention explicitly requires it.

## START PROMPT

You are continuing work on the arqel docs site in `/home/ycyc/projects/arqel-docs` on branch `main`.

Load the `sub2api-frontend-workflow` skill and its `references/arqel-docs-homepage-alignment.md` reference before editing. The current task is to continue or review the VitePress docs-site work, especially the compact custom homepage under `docs/.vitepress/theme/components/DocsHome.vue` and `docs/.vitepress/theme/style.css`.

Current user preference for this homepage: restrained, compact, not tutorial-like, not telling the reader what to do. Preserve h1 `Arqel`, use documentation wording only as kicker/subtitle, keep the right side to 3 document-entry links, keep lower cards to 3 compact cards, and keep the no-auto-route boundary as a low-key one-line note.

Do not restore the rejected 5-step reading path, big boundary panel, `Arqel Docs` as the giant h1, `接入文档` as the giant h1, or commanding copy like `先跑通，再接工具` / `按实际接入顺序` / `不需要先理解全部概念`.

Before making changes, run:

```bash
cd /home/ycyc/projects/arqel-docs
git status --short --branch
git diff --check -- docs/index.md docs/.vitepress/theme/index.ts docs/.vitepress/theme/components/DocsHome.vue docs/.vitepress/theme/style.css
```

After changes, run:

```bash
cd /home/ycyc/projects/arqel-docs
pnpm run build
```

Then verify the homepage in browser at `http://127.0.0.1:5174/` with DOM/computed style checks: h1 text `Arqel`, title size/weight, 3 guide items, 3 entry cards, no old path card, no big boundary panel, no horizontal overflow. Also open `/tools/` and confirm docs-home is absent, sidebar is present, and no horizontal overflow.

Keep final responses concise: conclusion, changed files, verification results.
