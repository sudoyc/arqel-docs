# Arqel Docs 修复与改进实施计划

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task when appropriate. This plan is for the standalone docs repo only.

**Goal:** 修复多人群评估中发现的 P0/P1 文档缺陷，并完成一轮可本地验证的 public docs copy/IA 改进。

**Architecture:** 保持 VitePress 结构不变，优先做 copy-only 和信息架构小调整；不改部署架构、不改生产配置、不改主前端。所有公开面继续使用 Arqel 品牌，不暴露 Sub2API。对未验证协议保持谨慎，不新增 Arqel 支持 Anthropic/Gemini/Codex-specific 协议的声明。

**Tech Stack:** VitePress, Markdown, Vue SFC for docs homepage, pnpm.

**Repo:** `/home/ycyc/projects/arqel-docs`

**Source of truth:**
- Project rules: `AGENTS.md`
- Evaluation summary: `.hermes/reports/docs-multi-persona-evaluation-summary.md`
- Docs source: `docs/`
- VitePress config: `docs/.vitepress/config.ts`
- Home component: `docs/.vitepress/theme/components/DocsHome.vue`

**Out of scope:**
- No deploy or push unless separately requested.
- No docs ownership changes between `arqel-docs` and `/home/ycyc/projects/sub2api`.
- No generated `docs/.vitepress/dist` manual edits.
- No real screenshots; keep `图片占位` blocks.
- No Hermes install commands.
- No broad rewrite of all Agent pages in this pass; only add safe state/compatibility framing and remove misleading copy.

---

## Acceptance criteria

1. `pnpm run build` passes in `/home/ycyc/projects/arqel-docs`.
2. No public source docs match these residue checks except inside evaluation reports/plans if intentionally historical:
   - `Sub2API`, `sub2api`
   - `auto route`, `Auto Route`, `自动路由`, `不提供 auto`
   - old flat routes: `/tools/cursor`, `/tools/claude-code`, `/tools/gemini-cli`, `/tools/codex-cli`, `/tools/openai-sdk`, `/tools/compare`
3. P0 broken auth examples are fixed:
   - no `Authorization: Bearer *** \` in docs source
   - no `$env:A...KEY`
   - no `Authorization: Bearer *** Key>` / `Authorization: Bearer *** API Key>`
4. Top nav includes `API 参考` linking to `/api/`.
5. Homepage no longer uses `auto route` or raw `surface` wording.
6. Agent/CC Switch pages clearly say CC Switch configuration does not guarantee Arqel protocol compatibility.
7. First request path includes a clear minimal flow: API Key, Base URL, model name, cURL with HTTP status, and console record check.

---

## Task 1: Fix P0 executable authentication examples

**Objective:** Make the first-request and authentication examples copy-paste safe and remove broken redacted headers from executable code blocks.

**Files:**
- Modify: `docs/getting-started/api/first-request.md`
- Modify: `docs/api/authentication.md`
- Modify: `docs/setup/terminal-basics.md`
- Modify if matched by residue search: `docs/help/troubleshooting/errors.md`, `docs/getting-started/troubleshooting/success-and-failure-examples.md`, `docs/help/index.md`

**Steps:**
1. Replace Bash cURL auth headers in executable code blocks with:
   ```bash
   -H "Authorization: Bearer $ARQEL_API_KEY" \
   ```
2. Replace PowerShell cURL auth headers with:
   ```powershell
   -H "Authorization: Bearer $env:ARQEL_API_KEY" `
   ```
3. Add HTTP status output to first-request cURL examples where practical:
   ```bash
   -w "\nHTTP %{http_code}\n"
   ```
   For PowerShell/curl.exe, use the same cURL `-w` pattern if it keeps the example readable.
4. Replace explanatory header placeholders with:
   ```text
   Authorization: Bearer <你的 API Key>
   ```
   or a safe redacted example:
   ```text
   Authorization: Bearer sk-...abcd
   ```
5. Update first-request success section so `HTTP 200` is visible because the command prints it.
6. Make `terminal-basics.md` examples either valid runnable examples or explicitly marked as non-runnable illustration. Prefer simple non-secret examples for terminal basics.

**Verification:**
- Search source docs:
  ```bash
  rg -n 'Authorization: Bearer \*\*\*|\$env:A\.\.\.KEY|Bearer \*\*\* Key>|Bearer \*\*\* API Key>' docs --glob '*.md'
  ```
  Expected: no matches except quoted historical text in `.hermes/` is irrelevant because path is outside `docs/`.
- Read the edited code blocks to confirm bash and PowerShell syntax is visually complete.

---

## Task 2: Fix troubleshooting auth wording and support evidence template

**Objective:** Repair the broken troubleshooting checklist and make support/debug evidence safer and more actionable.

**Files:**
- Modify: `docs/help/troubleshooting/index.md`
- Modify: `docs/help/troubleshooting/errors.md`
- Modify: `docs/getting-started/troubleshooting/success-and-failure-examples.md`
- Modify: `docs/help/index.md`

**Steps:**
1. Fix the broken line in `docs/help/troubleshooting/index.md`:
   - From incomplete ``Authorization: Bearer ***`
   - To `Authorization: Bearer <你的 API Key>` or `Authorization: Bearer sk-...`.
2. Add a note: never send full API Key in support/chat/screenshots.
3. Standardize “when contacting support / still failing” evidence fields:
   - request time and timezone
   - Key name, not full Key
   - Base URL
   - model name
   - HTTP status code and error message
   - tool/SDK and version if known
   - request id / trace id if response or console provides one
4. Add concise retry guidance to error pages:
   - 401/403: do not retry automatically; fix credentials/permissions.
   - 429/5xx: use limited retries, exponential backoff, respect `Retry-After` if present.

**Verification:**
- Search for malformed Bearer placeholders in `docs/`.
- Search for `request id|trace id|Retry-After|指数退避` to confirm new operational guidance exists.

---

## Task 3: Improve first-run path and console three-piece guidance

**Objective:** Make the beginner path concrete: where to get API Key, Base URL, model name, and how to confirm the request appears in console.

**Files:**
- Modify: `docs/getting-started/index.md`
- Modify: `docs/getting-started/api/api-key.md`
- Modify: `docs/getting-started/api/base-url-and-model.md`
- Modify: `docs/getting-started/api/first-request.md`
- Modify: `docs/getting-started/troubleshooting/checklist.md`

**Steps:**
1. Update `getting-started/index.md` route:
   - Separate “minimal API test” from “full development environment”.
   - Do not imply Git/Node/VS Code are required for first cURL request.
2. In `api-key.md`, replace vague “打开 Arqel 网站” with a stable pattern:
   - “打开 Arqel 控制台（以当前产品入口为准）。”
   - “进入 API Key / Keys / Developer settings 一类页面。”
   - Keep wording flexible if actual console URL is not confirmed.
3. In `base-url-and-model.md`, make field guidance more concrete:
   - Base URL is API root, usually ending in `/v1` if console says so.
   - Full chat endpoint is Base URL + `/chat/completions`.
   - Model name / Model ID must be copied exactly from console or request example.
4. Add/keep `图片占位` blocks for:
   - API Key page
   - Base URL position
   - model name / model ID copy
   - usage/request record check
5. In `first-request.md`, add “how to confirm it really used Arqel”:
   - terminal has HTTP 200
   - returned JSON has `choices` and content
   - console usage/request record shows matching time, Key name, model name if available

**Verification:**
- Read edited beginner pages for a complete path with no missing “where do I click” gaps except explicit “以当前产品入口为准”.
- Search for “安装 Git、Node.js、VS Code” to ensure it is not framed as required for minimal API test.

---

## Task 4: Adjust navigation and public homepage copy

**Objective:** Make public IA match an API product and remove internal/technical residue from the homepage.

**Files:**
- Modify: `docs/.vitepress/config.ts`
- Modify: `docs/.vitepress/theme/components/DocsHome.vue`
- Modify: `docs/index.md` if adding a maintainer note is useful

**Steps:**
1. Add top-nav API entry:
   ```ts
   { text: 'API 参考', link: '/api/' }
   ```
   Recommended order: 入门 / API 参考 / 工具接入 / 概念 / 帮助.
2. Move `API 参考` sidebar group above `工具接入`, or at least make it not buried at the end.
3. Rename `常见帮助` nav/sidebar group to `帮助` unless this creates too much churn.
4. In `DocsHome.vue`:
   - Replace `surface` with “使用入口” / “产品入口”.
   - Replace auto-route note with positive copy about exact model names and console verification.
   - Add or keep an API-oriented CTA, e.g. `API 参考` linking to `/api/` if layout allows without structural churn.
5. Optionally add a short HTML comment or markdown comment in `docs/index.md` noting that homepage copy lives in `DocsHome.vue`.

**Verification:**
- Search:
  ```bash
  rg -n 'auto route|Auto Route|自动路由|不提供 auto|surface' docs --glob '*.{md,vue,ts}'
  ```
  Expected: no public-copy occurrences of auto-route terms; `surface` only if part of deliberate bilingual term definition.
- Build must pass.

---

## Task 5: Add API capability matrix and clean API/SDK examples

**Objective:** Give developers a single safe reference for what is documented/confirmed, while improving SDK examples.

**Files:**
- Modify: `docs/api/index.md`
- Modify: `docs/api/chat-completions.md`
- Modify: `docs/tools/sdk/openai.md`
- Modify: `docs/concepts/base-url.md` if needed

**Steps:**
1. In `api/index.md`, add a capability matrix with statuses:
   - Bearer Token: documented
   - Chat Completions basic text: documented
   - Streaming: not documented / confirm in console/product before use, unless existing docs confirm support
   - Tool calling, JSON mode, Embeddings, Images, Responses API, Models list: not documented unless confirmed
   - Anthropic-compatible / Gemini-compatible / Codex-specific: not confirmed; do not assume
2. In `chat-completions.md`, make request/response schema clearer:
   - minimum request fields
   - common response fields to check
   - advanced fields are not guaranteed unless documented
3. In `tools/sdk/openai.md`:
   - Use `process.env.ARQEL_API_KEY`, `process.env.ARQEL_BASE_URL`, `process.env.ARQEL_MODEL`
   - Remove duplicate bullet
   - Add a Python example if concise
   - Explicitly say SDK examples should run from backend/server, not browser frontend
4. In `concepts/base-url.md`, add a small table:
   - Base URL
   - endpoint path
   - full URL
   - common mistakes: duplicated `/v1`, including `/chat/completions` in Base URL incorrectly

**Verification:**
- Search for hardcoded `https://api.arqel.dev/v1` in executable SDK/Agent examples; it can remain as explanatory example only if clearly marked.
- Search `模型名需要填写` duplicate in `openai.md`.

---

## Task 6: Add Agent / CC Switch compatibility framing without overclaiming

**Objective:** Reduce misleading protocol assumptions while keeping tool docs useful.

**Files:**
- Modify: `docs/tools/index.md`
- Modify: `docs/tools/agents/index.md`
- Modify: `docs/tools/agents/compare.md`
- Modify: `docs/tools/cc-switch/index.md`
- Modify: `docs/tools/cc-switch/provider.md`
- Modify: `docs/tools/cc-switch/agents.md`
- Modify targeted lines in `docs/tools/agents/claude-code.md`, `docs/tools/agents/gemini-cli.md`, `docs/tools/agents/codex-cli.md`, `docs/tools/agents/hermes.md`

**Steps:**
1. Add a compact status table in `tools/index.md` or `tools/agents/index.md`:
   - Tool / product entry
   - Recommended path
   - What must be verified
   - Safe first test
2. Replace raw `surface` wording with “产品入口/使用界面”.
3. Remove internal line from `tools/index.md`:
   - “CC Switch 的拆分页现在放在二级目录里，更好找也更不挤。”
4. In CC Switch pages, add a clear note:
   - “CC Switch 可以管理 Provider 和路由配置，但不代表 Arqel 自动兼容所有 Agent 协议。”
5. In pages with Anthropic/Gemini/Codex/Hermes configuration examples, add an explicit preface:
   - “仅当目标工具当前版本支持该配置方式，且 Arqel 已确认对应协议/适配路径可用时使用。”
6. For Hermes, keep no install commands and avoid making release-note protocol names look like Arqel-supported protocols.
7. Translate `Version note / Last verified` blocks to Chinese if present.

**Verification:**
- Search for old internal phrase and raw `Version note` / `Last verified` English blocks.
- Search for protocol names and inspect surrounding copy to ensure they are framed as requirements/unknowns, not Arqel support claims.

---

## Task 7: Expand glossary and terminology consistency

**Objective:** Improve bilingual/global developer clarity and searchability.

**Files:**
- Modify: `docs/getting-started/basics/glossary.md`
- Modify terms where needed across touched pages

**Steps:**
1. Add glossary entries:
   - OpenAI-compatible（OpenAI 兼容请求格式）
   - Chat Completions（聊天补全）
   - Surface / 产品入口 / 使用界面
   - Provider, Arqel Provider, upstream provider
   - Model name / Model ID / 模型名
2. In touched pages, use the same term consistently.
3. Prefer first mention style: `OpenAI-compatible（OpenAI 兼容请求格式）`; later mention can use shorter form.
4. Avoid using raw English if a simple Chinese equivalent is clearer for beginners.

**Verification:**
- Search key terms for consistency:
  ```bash
  rg -n 'OpenAI-style|OpenAI 风格|surface|Provider|Model ID|模型 ID' docs --glob '*.md'
  ```
- Inspect matches for intentional and explained usage.

---

## Task 8: Add production safety / operations checklist

**Objective:** Turn existing safety principles into actionable operational guidance without overclaiming console features.

**Files:**
- Modify: `docs/help/security/index.md`
- Modify: `docs/concepts/usage-and-billing.md`
- Modify: `docs/help/troubleshooting/errors.md`
- Modify: `docs/concepts/mcp-security.md`

**Steps:**
1. In security page, add “如果你写后端代理，至少要做”:
   - authenticate your own users
   - rate limit by user/IP/project
   - limit request body size
   - do not return Arqel Key to browser
   - redact logs
   - do not let users choose arbitrary Base URL
2. In usage/billing, add “上线前用量保护”:
   - separate Keys by environment/tool
   - set budgets/alerts if console supports them; otherwise schedule manual checks
   - set Agent max rounds/concurrency/output length
   - stop automation first when abnormal usage appears
3. In troubleshooting errors, add retry policy:
   - no auto-retry for auth/permission failures
   - bounded exponential backoff for 429/5xx
   - respect `Retry-After` if present
4. In MCP security, add operational checklist:
   - source review
   - least privilege
   - restrict project directory
   - avoid `.env`/secret paths
   - run read-only first
   - disable/revoke and rotate keys if suspicious behavior appears

**Verification:**
- Search for `后端代理`, `限流`, `Retry-After`, `指数退避`, `MCP` in relevant files.
- Ensure warnings are not removed just to make pages shorter.

---

## Task 9: Run validation and residue checks

**Objective:** Verify the docs build and public-surface residue checks before reporting.

**Files:**
- No source edits unless validation reveals issues.

**Steps:**
1. Run build:
   ```bash
   pnpm run build
   ```
2. Run residue checks on source docs only:
   ```bash
   rg -n 'Sub2API|sub2api|auto route|Auto Route|自动路由|不提供 auto' docs --glob '*.{md,vue,ts}'
   rg -n '/tools/(cursor|claude-code|gemini-cli|codex-cli|openai-sdk|compare)([^a-zA-Z0-9/_-]|$)' docs --glob '*.{md,vue,ts}'
   rg -n 'Authorization: Bearer \*\*\*|\$env:A\.\.\.KEY|Bearer \*\*\* Key>|Bearer \*\*\* API Key>' docs --glob '*.md'
   ```
3. Inspect relevant generated output if necessary:
   - `docs/.vitepress/dist/index.html`
   - `docs/.vitepress/dist/api/index.html`
   - first-request generated page
4. Check git diff scope:
   ```bash
   git diff -- docs .hermes/plans
   git status --short
   ```

**Expected result:**
- Build passes.
- Residue checks show no problematic public source matches.
- Diff only touches docs source and this plan/report area.

---

## Notes for implementation

- Existing worktree already had uncommitted changes before this plan. Inspect `git diff` before editing and avoid overwriting unrelated changes.
- Prefer targeted edits with `patch`; avoid broad rewrites.
- Keep copy concise and external-user-facing.
- If an exact product capability is unknown, write “如果控制台提供…” or “当前文档未覆盖/不要假设”， not a hard capability claim.
