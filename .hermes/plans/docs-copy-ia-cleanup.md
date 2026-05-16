# Arqel docs copy / IA cleanup plan

## Problem observed

The current docs are directionally correct but feel verbose and circular:

- Home, Getting Started, Choose Path, Tools, and Agents pages all repeat similar route-selection copy.
- Multiple pages use abstract labels like “路径 / 路线 / 已整理页面 / 下一步”, which makes categories feel less concrete.
- The sidebar has too many “总览” and nested conceptual groups before the user understands what to do.
- Warnings are accurate but sometimes repeated in the opening sections, slowing down public-facing reading.
- Tools docs mix three concerns on one page: choosing tool type, protocol boundaries, and platform caveats.

## Scope

Edit only the standalone docs site:

- /home/ycyc/projects/arqel-docs/docs/.vitepress/config.ts
- /home/ycyc/projects/arqel-docs/docs/.vitepress/theme/components/DocsHome.vue
- /home/ycyc/projects/arqel-docs/docs/getting-started/index.md
- /home/ycyc/projects/arqel-docs/docs/getting-started/basics/choose-path.md
- /home/ycyc/projects/arqel-docs/docs/tools/index.md
- /home/ycyc/projects/arqel-docs/docs/tools/agents/index.md
- /home/ycyc/projects/arqel-docs/docs/api/index.md

Do not touch payment logic, backend, deployment config, or the main sub2api frontend repo.

## Copy direction

Use clearer top-level categories:

1. Start: create Key, copy Base URL/model, send first request.
2. Build: use SDK/API from a backend or script.
3. Connect tools: Cursor / Agent / CC Switch.
4. Operate: usage, errors, security.

Avoid making every page re-explain every path. Each hub page should answer one question:

- Home: Which door should I open?
- Getting Started: What is the minimum API path?
- Choose Path: Which setup matches my actual goal?
- Tools: Which integration category do I need?
- Agents: What must I verify for agent-style tools?
- API: What endpoint/shape is documented?

## Concrete edits

1. Sidebar/nav
   - Rename broad labels to action-oriented categories where useful.
   - Reduce ambiguity from repeated “总览”.
   - Keep existing routes stable.

2. Home
   - Shorten hero description.
   - Replace long card details with direct category labels.
   - Make entry cards map to Start / API / Tools / Help.

3. Getting Started index
   - Remove duplicate “完整学习路线” + “最短接入路径” repetition.
   - Keep one minimal checklist and one concise category table.
   - Keep necessary model-name/API-key safety note.

4. Choose Path
   - Replace six long repeated sections with a compact decision table.
   - Keep completion standards, but move them into table cells.
   - Preserve protocol-boundary warning for Agent/CC Switch only.

5. Tools index
   - Split into a simple decision table first.
   - Move long caveats below the decision table.
   - Remove duplicated “已有页面 / 推荐新手路线” lists.

6. Agents index
   - Make it a concise category page: support status table, verify checklist, product-surface warning.
   - Keep safety/protocol accuracy.

7. API index
   - Rename “已整理页面 / 下一步” into clearer “Reference pages / Common tasks”.
   - Keep current capability-boundary claims conservative.

## Verification

After edits:

1. Run residue checks for public branding and old routes.
2. Run pnpm build in arqel-docs.
3. Verify the running local docs server responds at http://127.0.0.1:5173/.
4. Spot-check rendered text via curl for home/docs pages if browser inspection is not necessary.

No push/deploy in this pass unless explicitly requested.
