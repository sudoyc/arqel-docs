# Arqel docs tutorial/reference split plan

## User feedback

Current docs still feel too indirect:

- They emphasize “run the first API command” too much.
- Tutorial content and reference explanations are mixed together.
- Users who just want to use tools must jump through route-selection pages, API basics, and conceptual notes.
- Windows users need a direct fastest path.

## Target structure

Make the docs start from actual tool usage:

1. Primary tutorial: Windows fastest setup with CC Switch.
2. Tool usage first: CC Switch config, then mainstream tools.
3. Existing API/concept/setup pages become reference/supporting docs, not the main tutorial path.
4. Keep conservative compatibility wording: CC Switch manages configuration; each tool still needs verification.

## Concrete path changes

### New tutorial page

Create:

- `docs/getting-started/windows-ccswitch.md`

Purpose:

- A single, fast Windows path for tool users.
- Uses CC Switch as the configuration tool.
- Covers mainstream tools in one tutorial: Claude Code, Gemini CLI, Codex, Cursor note, Hermes Agent note.
- Does not require reading API reference first.
- Does not lead with cURL / first API command.

Proposed outline:

```md
# Windows 最快接入：用 CC Switch 配置 Arqel

## 适合谁
## 你要准备的东西
## 1. 安装 CC Switch
## 2. 在 Arqel 控制台准备 Key、Base URL、模型名
## 3. 在 CC Switch 添加 Arqel Provider
## 4. 选择要接入的工具
## 5. 重启工具并验证
## 主流工具说明
  - Claude Code
  - Gemini CLI
  - Codex
  - Cursor
  - Hermes Agent
## 常见卡点
## 需要更多说明时
```

Tone:

- Direct and task-oriented.
- “先用起来”，不是“先学习 API”。
- Avoid repeatedly saying “第一条请求”.
- Use “验证工具是否真的走 Arqel” instead of “跑通第一条命令”.

### Existing Getting Started index

Rewrite:

- Make `/getting-started/` point primarily to Windows + CC Switch tutorial.
- Reposition old pages as supplemental references.
- Remove “最小 API 路径” as the main mental model.

New role:

```md
# 开始使用 Arqel

## 推荐入口
Windows 用户：用 CC Switch 接入主流工具

## 其他情况
- API/SDK 开发者
- 只查概念
- 排查问题
```

### Sidebar/nav

In `docs/.vitepress/config.ts`:

- Change nav “入门” to point to `/getting-started/windows-ccswitch` or keep `/getting-started/` but make it redirect-like content.
- In sidebar, put `Windows + CC Switch` as the first tutorial item.
- Rename broad “入门教程” to “快速教程”.
- Move API command pages under “参考：API 调用” or keep but collapsed.
- Keep existing routes stable.

Suggested sidebar first group:

```ts
{
  text: '快速教程',
  collapsed: false,
  items: [
    { text: 'Windows + CC Switch', link: '/getting-started/windows-ccswitch' },
    { text: '入口总览', link: '/getting-started/' },
    ...reference groups collapsed
  ]
}
```

### Home page

Update `DocsHome.vue`:

- Primary CTA: “Windows 快速接入” → `/getting-started/windows-ccswitch`
- Secondary CTA: “工具文档” → `/tools/`
- Do not center the homepage around first API request.
- Emphasize “用 CC Switch 配置主流工具”。

### Tools and CC Switch pages

Adjust minimal wording:

- `/tools/cc-switch/` should no longer say “还没跑通第一条请求就先不要接 CC Switch”.
- Replace with “如果你主要是工具用户，可以直接从 Windows + CC Switch 教程开始；API 开发者再看 API 参考。”
- `/tools/` can link the new fastest tutorial at the top.

## Edit order

1. Create this plan file.
2. Create `docs/getting-started/windows-ccswitch.md`.
3. Rewrite `docs/getting-started/index.md` as an entry hub, not a tutorial.
4. Update `docs/.vitepress/config.ts` sidebar/nav labels and links.
5. Update `docs/.vitepress/theme/components/DocsHome.vue` CTA and copy.
6. Patch `/tools/` and `/tools/cc-switch/` to link the new tutorial and remove first-command-first framing.
7. Run residue search:
   - public brand leaks: `Sub2API|sub2api`
   - old route leaks: `/tools/cursor`, `/tools/claude-code`, `/tools/gemini-cli`, `/tools/codex-cli`, `/tools/openai-sdk`, `/tools/compare`
   - unwanted framing: `第一条请求|先跑通 API|最小 API|最小路径`
8. Run `pnpm run build`.
9. Browser-verify:
   - `/`
   - `/getting-started/`
   - `/getting-started/windows-ccswitch`
   - `/tools/`
   - `/tools/cc-switch/`

## Non-goals

- No payment changes.
- No backend changes.
- No main `/home/ycyc/projects/sub2api/frontend` changes unless later explicitly requested.
- No deploy or push in this pass.
