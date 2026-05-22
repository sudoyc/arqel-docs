# Arqel Docs 润色实施计划

> **For Hermes:** 按任务顺序逐一执行。每个任务完成后跑 `pnpm run build` 验证无报错，再做 residue 检查。
>
> **目标:** 消除冗余内容、统一术语、降低防御性措辞密度、改善导航结构，不改变文档的核心信息架构。
>
> **原则:** 优先改文案和导航，不动路由结构（除非明确需要）。每步可独立提交。

**验证命令:** `cd /home/ycyc/projects/arqel-docs && pnpm run build`

**Residue 检查项:**
```
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

---

## Phase 1: 导航与架构调整

### Task 1: 修正 Sidebar 标题，与顶层 Nav 对齐

**目标:** 顶层 nav 叫 "入门"，sidebar 第一组叫 "快速教程"——统一为 "入门"。

**文件:** `docs/.vitepress/config.ts`

**Step 1:** 修改 sidebar 第一组 `text: '快速教程'` → `text: '入门'`

**验证:** `pnpm run build` 通过，sidebar 显示 "入门"

---

### Task 2: 提升 "电脑环境" 到 Sidebar 第二层

**目标:** setup 页面目前藏在 快速教程 > 参考：电脑环境（第4层），提升为 sidebar 独立分组，降低发现门槛。

**文件:** `docs/.vitepress/config.ts`

**Step 1:** 从 `快速教程` 组的 items 中移除 `参考：电脑环境` 整个 collapsed 块。

**Step 2:** 在 `快速教程` 组之后新增一个 sidebar 分组：

```ts
{
  text: '环境准备',
  collapsed: true,
  items: [
    { text: '环境总览', link: '/setup/' },
    { text: '终端基础', link: '/setup/terminal-basics' },
    { text: 'Windows 环境选择', link: '/setup/which-environment' },
    { text: 'macOS', link: '/setup/macos' },
    { text: 'Windows', link: '/setup/windows' },
    { text: 'Linux / WSL', link: '/setup/linux-wsl' },
    { text: '环境变量与安全', link: '/setup/env-vars' }
  ]
}
```

**验证:** `pnpm run build` 通过，sidebar 中出现独立的环境准备分组。

---

### Task 3: 删除或重定向 choose-path 僵尸页面

**目标:** `docs/getting-started/basics/choose-path.md` 仅一行文字说明已合并。要么用 VitePress redirect frontmatter 做 301，要么删除。

**文件:** `docs/getting-started/basics/choose-path.md` + `docs/.vitepress/config.ts`

**Step 1:** 在 `choose-path.md` 的 frontmatter 添加 redirect：

```yaml
---
redirect: /getting-started/
---
```

**Step 2:** 如果 VitePress redirect 不生效，则删除文件并从 config.ts sidebar 中移除 `{ text: '选择你的路径', link: '/getting-started/basics/choose-path' }`（如果它还在 sidebar 中）。

**验证:** 访问旧路径跳转到 `/getting-started/`，或 build 无死链。

---

## Phase 2: 内容去重

### Task 4: CC Switch agents.md 改为汇总表 + 链接

**目标:** `cc-switch/agents.md` 里每个 Agent 的 CC Switch 操作步骤和各 Agent 独立页重复。改为汇总表，只保留 Agent 独立页的权威步骤。

**文件:** `docs/tools/cc-switch/agents.md`

**Step 1:** 将每个 Agent 的编号步骤替换为表格行 + 链接。保留 CC Switch 支持范围表格和最后的"只读测试""确认走了 Arqel"通用说明。

替换后的结构：

```markdown
## CC Switch 支持范围

（保留现有表格）

## 各 Agent 操作入口

| Agent | CC Switch 操作 | 完整接入说明 |
| --- | --- | --- |
| Claude Code | 选择 Claude Code → 添加 Arqel Provider | [Claude Code 接入](/tools/agents/claude-code) |
| Gemini CLI | 选择 Gemini CLI → 添加 Arqel Provider | [Gemini CLI 接入](/tools/agents/gemini-cli) |
| Codex | 选择 Codex → 添加 Arqel Provider | [Codex 接入](/tools/agents/codex-cli) |
| Hermes Agent | 选择 Hermes → 添加 Arqel Provider | [Hermes Agent 接入](/tools/agents/hermes) |
| OpenCode / OpenClaw | 待验证 | 本站暂不提供步骤 |

## 先做只读测试

无论哪个 Agent，先发送只读问题，再让它修改文件。

## 确认真的走了 Arqel

1. 发送只读测试问题。
2. 打开 Arqel 控制台。
3. 查看使用记录或请求记录。
4. 核对时间、Key 名称和模型名。
```

**Step 2:** 删除原页面中 Claude Code / Gemini CLI / Codex / Hermes / OpenCode 的单独章节（约 50 行）。

**验证:** `pnpm run build` 通过，页面无断裂链接。

---

### Task 5: 合并 concepts/base-url.md 和 getting-started/api/base-url-and-model.md 的重复内容

**目标:** 两页内容高度重叠（Base URL 概念、常见错误）。保留 concepts 页为技术解释，getting-started 页侧重"从哪里找到、填到哪里"的操作指引。

**文件:** `docs/concepts/base-url.md` + `docs/getting-started/api/base-url-and-model.md`

**Step 1:** `concepts/base-url.md` 保持不变（它是概念深度页）。

**Step 2:** `getting-started/api/base-url-and-model.md` 做以下精简：

- 删除与 concepts 页重复的 "Base URL 和路径和完整地址" 表格（已在 concepts 页）
- 删除 "它和 API Key 的区别"（已在 basic-concepts 页）
- 保留：从哪里找到、模型名字段填写、常见错误（加入指向 concepts 页的"详细说明见"链接）
- 在顶部加一句："本文告诉你从控制台哪里复制这些信息。技术细节见 [Base URL 概念](/concepts/base-url)。"

**验证:** `pnpm run build` 通过，两页不互相矛盾。

---

## Phase 3: 文案润色

### Task 6: 统一"只读测试"措辞

**目标:** "发送只读测试问题"的措辞在 6+ 个页面各不相同。统一为一个标准模板，其他页面引用。

**文件:**
- `docs/getting-started/agent-quickstart.md`（已有）
- `docs/tools/agents/index.md`（"总结当前项目结构"）
- `docs/tools/agents/claude-code.md`（"请阅读当前目录，说明这是什么项目"）
- `docs/tools/agents/codex-cli.md`（"请列出当前项目的主要目录"）
- `docs/tools/agents/gemini-cli.md`
- `docs/tools/cc-switch/agents.md`

**Step 1:** 选定标准模板为 agent-quickstart 的版本（最完整）：

```text
请说明当前项目是什么，不要修改任何文件。
```

**Step 2:** 在 `tools/agents/index.md` 的验证 checklist 里使用标准模板。

**Step 3:** 逐个页面替换，将措辞统一为上述模板或近义变体（保留各工具页特有的上下文问题，但核心"不要修改任何文件"统一）。

**验证:** `pnpm run build` 通过。search_files 搜索"不要修改"确认每处只读测试都包含此短语。

---

### Task 7: 降低各页面防御性措辞密度

**目标:** 每个页面只保留 1-2 处醒目的协议边界/警告，正文减少"不代表""不等于""不要默认认为"的重复。

**涉及文件（按影响从大到小）:**
1. `docs/tools/index.md` — 协议边界段已有一个 `::: warning`，正文仍有 4+ 处独立警告
2. `docs/tools/agents/index.md` — 有 `::: warning 协议边界` + 正文多处
3. `docs/tools/cc-switch/index.md` — 两处 `::: warning 协议边界` 内容相似
4. `docs/tools/cc-switch/provider.md` — Provider 类型警告 + 底部警告
5. `docs/tools/agents/claude-code.md` — `::: warning 协议边界` + 正文 "只说明……不代表"
6. `docs/api/index.md` — 多处 "未确认" 标注

**Step 1:** `docs/tools/index.md`

- 保留 "协议边界" `::: warning` 块（包含 5 条细分说明）
- 删除正文中第 82-84 行的重复警告（OpenAI-compatible 不代表 Claude Code……这些内容已在 warning 块中）
- 删除第 88 行 "CC Switch 可以管理……但不要默认把它当作通用协议转换器"（已在 warning 块第 5 条覆盖）

**Step 2:** `docs/tools/agents/index.md`

- 保留 `::: warning 协议边界`
- 删除 "产品入口不要混用" 段中 "不代表 Arqel 已支持" 的附加说明（仅在 warning 块说明一次）

**Step 3:** `docs/tools/cc-switch/index.md`

- 合并两处 `::: warning 协议边界` 为页面底部一处
- 正文里重复的 "不代表" 替换为 "详见下方协议边界"

**Step 4:** `docs/tools/cc-switch/provider.md`

- 保留 `::: warning Provider 类型不是协议转换承诺`
- 底部 `::: warning` 中删除 "不代表 Arqel 自动兼容所有 Agent 协议"（上方已有更完整的警告）

**Step 5:** `docs/tools/agents/claude-code.md`

- 保留 `::: warning 协议边界`
- 删除手动配置段 "这只说明 Claude Code 侧可能存在这种配置形态，不代表 Arqel 已支持"——简化为 "详细说明见本页顶部协议边界"

**验证:** `pnpm run build` 通过。每页搜索"不代表""不等于"确认不超过 1 处（warning 块内不计）。

---

### Task 8: 首页文案润色

**目标:** 让主标题更有信息量，副标题更简洁。

**文件:** `docs/.vitepress/theme/components/DocsHome.vue`

**Step 1:** 修改 hero 区域：

```
title: 接入 Arqel
subtitle: 为 Cursor、Claude Code、Codex 等 AI 工具配置 Arqel API

description（移除，改为在 subtitle 下方的小字）：
或改为 "覆盖常用 AI 编程工具的接入步骤与排障指南"
```

具体改动：
- `docs-home-title`: "接入 Arqel" （保持不变，简洁有力）
- `docs-home-subtitle`: "为 Cursor、Claude Code、Codex 等工具配置 API →"
- `docs-home-description`: "工具接入优先使用 CC Switch；不适合时再手动配置。"

**Step 2:** 首页底部引导文字：

```
Windows 新手可以从"新手入门"开始；熟悉工具的用户直接进入工具接入页。
```
→ 改为：
```
新手？从"新手入门"开始。老手？直接进入工具接入页。
```

**验证:** `pnpm run dev` 预览首页，确认文案显示正常。

---

### Task 9: agent-quickstart 标题精确化

**目标:** 标题说"Windows 用 CC Switch 接入 Agent"但内容 100% 围绕 Codex。改标题如实反映内容。

**文件:** `docs/getting-started/agent-quickstart.md` + `docs/.vitepress/config.ts` + 所有引用该页面的链接文字

**Step 1:** 修改页面 h1：

```
# 新手入门：Windows 用 Codex + CC Switch 接入
```

**Step 2:** 修改 config.ts sidebar 中链接文字：

```
{ text: '新手入门（Windows）', link: '/getting-started/agent-quickstart' }
→
{ text: '新手入门：Codex + CC Switch', link: '/getting-started/agent-quickstart' }
```

**Step 3:** 更新全站引用文案（搜索 "新手入门" / "agent-quickstart"）：

```
search_files pattern="agent-quickstart" → 逐页更新链接文字
```

**验证:** `pnpm run build` 通过。确认没有断裂链接。

---

### Task 10: 修复代码块中的占位文字

**目标:** models-and-routing.md 里 `"请替换为控制台里可用的模型名"` 是指令而非示例，应分开。

**文件:** `docs/concepts/models-and-routing.md`

**Step 1:** 修改代码块：

```json
{
  "model": "claude-sonnet-4-20250514"
}
```

**Step 2:** 在代码块下方加一行：

```markdown
> 以上仅为示例。请替换为 Arqel 控制台里实际显示的模型名。
```

**验证:** `pnpm run build` 通过。

---

## Phase 4: 术语统一

### Task 11: 引入 "Arqel 接入三要素" 术语

**目标:** API Key、Base URL、模型名在全文被反复解释。引入固定术语，后续页面用链接引用而非重复解释。

**文件:** `docs/getting-started/index.md`（主定义） + 各引用页面

**Step 1:** 在 `docs/getting-started/index.md` 的"你需要准备的三件事"表格前加一个锚点：

```markdown
## Arqel 接入三要素
{#three-elements}
```

**Step 2:** 表格保持不变，但在表格下方加一句：

```markdown
全文用 **Arqel 接入三要素** 指代 API Key、Base URL 和模型名。
```

**Step 3:** 全文搜索"三件事""三项信息""准备什么"等表述，替换为带链接的"Arqel 接入三要素"：

```
你需要准备的三件事 → [Arqel 接入三要素](/getting-started/#three-elements)
接入时只认三件事 → 接入时只需要 [Arqel 接入三要素](...)
先在 Arqel 控制台找到三项信息 → 先在控制台找到 [Arqel 接入三要素](...)
```

涉及文件约 8 个。逐个替换，每次替换后确认链接有效。

**验证:** `pnpm run build` 通过。所有 `#three-elements` 链接可点击。

---

### Task 12: 对齐中英术语

**目标:** 同一篇内不要混用 "API Key" 和 "密钥"，"Provider" 和 "供应商"。

**文件:** 全局（先跑一遍 search_files 了解现状）

**Step 1:** 搜索当前混用情况：

```
search_files pattern="API 密钥" → 目前似乎没有
search_files pattern="供应商" → 检查
search_files pattern="提供方" → 检查
```

**Step 2:** 制定规范并逐页修正：

| 场景 | 推荐用词 |
|------|---------|
| 面向新手的页面 | API Key（不翻译，加中文解释）、Base URL、模型名 |
| 概念/API 参考 | API Key、Base URL、model name |
| Provider | 统一用 Provider（已有 "Arqel Provider" 固定用法，不需要翻译） |

**Step 3:** 在 `glossary.md` 中补充各英文术语的中文解释（不是翻译，是说明）。

**验证:** `pnpm run build` 通过。

---

## Phase 5: FAQ 页面优化

### Task 13: help/index.md 添加分类锚点导航

**目标:** FAQ 页面内容充实但首次打开是文字墙。在顶部添加锚点目录。

**文件:** `docs/help/index.md`

**Step 1:** 在现有 h1 和第一个问题之间插入：

```markdown
## 快速分类

- [API Key](#api-key)
- [Base URL](#base-url)
- [模型名](#模型名)
- [Windows / WSL](#windows--wsl)
- [CC Switch](#cc-switch)
- [工具接入](#cursor--claude-code--gemini-cli--codex)
- [请求失败](#请求失败)
- [安全](#安全)
```

**Step 2:** 将现有的 `## API Key` 等分类标题保持不变（它们已经是 `##`），确保锚点可跳转。

**验证:** `pnpm run build` 通过。预览页面确认锚点导航工作正常。

---

## Phase 6: 最终验证

### Task 14: 全站构建 + Residue 检查

**Step 1:** 运行构建：

```bash
cd /home/ycyc/projects/arqel-docs && pnpm run build
```

**Step 2:** Residue 检查（确认旧路由不残留）：

```
search_files pattern="auto route|Auto Route|自动路由|不提供 auto" → 0 results
search_files pattern="/tools/cursor|/tools/claude-code|/tools/gemini-cli|/tools/codex-cli|/tools/openai-sdk|/tools/compare" → 0 results（这些是旧路由格式，当前应全是 /tools/agents/...）
```

**Step 3:** 确认 choose-path 页面已重定向或删除。

**Step 4:** 确认 sidebar 中不再有 choose-path 条目。

---

## 执行顺序

1. Task 1 → 2 → 3（导航调整，无文案改动风险）
2. Task 4 → 5（去重，内容删减）
3. Task 6 → 7 → 8 → 9 → 10（文案润色）
4. Task 11 → 12（术语统一，需全局替换）
5. Task 13（FAQ 优化）
6. Task 14（最终验证）

每完成一个 Task 做一次 `pnpm run build`，确保不积累错误。
