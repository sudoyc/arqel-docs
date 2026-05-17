# 工具接入

这部分说明如何把 Arqel 接入 Cursor、Claude Code、Gemini CLI、Codex、Hermes Agent 等工具。

推荐顺序是：命令行 Agent 优先用 CC Switch 管理 Provider；Cursor 这类桌面编辑器优先看应用内设置；如果目标工具不适合用 CC Switch，再手动修改配置。

## 选择入口

| 目标 | 入口 | 先确认 |
| --- | --- | --- |
| Windows 新手 | [新手入门](/getting-started/agent-quickstart) | 先装一个 Agent，再用 CC Switch 接入 |
| 多个 Agent 一起管理 | [CC Switch](/tools/cc-switch/) | CC Switch 写入配置不等于每个 Agent 都已验证可用 |
| 在 Cursor 里写代码 | [Cursor](/tools/agents/cursor) | Cursor 自己的 API 设置是否可用 |
| 在终端或 IDE 里运行 Agent | [Agent 接入总览](/tools/agents/) | 当前产品入口支持的 Provider、协议和模型字段 |
| 在后端服务或脚本调用模型 | [SDK 接入](/tools/sdk/) | Key 不暴露到浏览器前端 |

## 接入时只认三件事

- **API Key**：在 Arqel 控制台创建。
- **Base URL**：复制 Arqel 控制台显示的 API 地址。
- **模型名**：复制控制台显示的具体模型名。

::: warning
不要把同一品牌的 CLI、桌面 App、网页端、IDE 插件默认当成同一个配置入口。除非官方文档明确说明，否则逐个验证。
:::

## 兼容状态矩阵

| 工具 / 入口 | 推荐路径 | 目标工具可能要求 | Arqel 文档状态 | 第一次验证 |
| --- | --- | --- | --- | --- |
| Cursor | [Cursor](/tools/agents/cursor) | 通常在应用设置中手动配置 | 如果当前版本支持 Custom API，可直接填写 | 在 Cursor 发送只读问题，看控制台记录 |
| Claude Code | [Claude Code](/tools/agents/claude-code) | 先试 CC Switch | 需要确认当前入口和协议支持 | 只读测试，核对 Key 和模型名 |
| Gemini CLI | [Gemini CLI](/tools/agents/gemini-cli) | 先试 CC Switch | 需要确认当前版本 Provider 配置 | 只读测试，核对控制台记录 |
| Codex | [Codex](/tools/agents/codex-cli) | 先试 CC Switch | CLI、App、IDE、Web 需分开确认 | 只读测试，不外推到其他入口 |
| Hermes Agent | [Hermes Agent](/tools/agents/hermes) | 先确认官方配置 | 待验证路径，只记录验证前检查项 | 不写长期配置，先做只读测试 |
| OpenAI SDK | [OpenAI SDK](/tools/sdk/openai) | 手动配置 | 后端、脚本或 SDK 场景 | 确认 `model` + `messages` 请求结构 |

“文档状态”不是服务等级承诺，只表示本站当前提供了什么程度的接入说明。第三方工具更新后，字段名称和 Provider 能力可能变化。

## 命令行 Agent：优先 CC Switch

CC Switch 适合 Claude Code、Gemini CLI、Codex 等 Agent 工具。它能减少重复填写 API Key、Base URL 和模型名，也方便切换 Provider。

基本流程：

1. 在 CC Switch 新增 Arqel Provider。
2. 填入 API Key、Base URL、模型名。
3. 选择一个 Agent 启用这个 Provider。
4. 重启该 Agent。
5. 发送只读问题。
6. 回 Arqel 控制台核对请求记录。

如果你的界面和文档不同，以当前 CC Switch 和目标工具界面为准。

## Cursor：优先应用内设置

Cursor 主要是桌面编辑器，通常先在 Cursor 自己的 Models、API、OpenAI-compatible 或 Custom API 设置里填写 Arqel 信息。不要默认认为 Cursor 会读取终端里 Claude Code、Gemini CLI 或 Codex 的配置。

如果你想让 CC Switch 管理 Cursor，请先确认当前 CC Switch 和 Cursor 版本明确支持这个入口。

## 备用方式：手动配置

| 方式 | 适合 | 风险 |
| --- | --- | --- |
| macOS | 终端工具、Homebrew / npm 安装的 CLI | 配置通常在 `~` 用户目录或 shell 环境变量里 |
| Windows | PowerShell、桌面 App、Windows 版 CLI | Windows 和 WSL 配置不互通 |
| Linux / WSL | 终端 Agent、MCP、项目开发 | 配置在 Linux 用户目录，和 Windows 桌面应用分开 |

手动配置时，请先看对应工具页。不要把 Claude Code、Gemini CLI、Codex、Cursor 的配置文件互相套用。

## 验证顺序

1. 先只配置一个工具。
2. 在工具里发送只读测试问题。
3. 回到 Arqel 控制台核对请求时间、Key 名称和模型名。
4. 成功后再配置下一个工具。
5. 如果没有控制台记录，先排查工具是否仍在使用默认 Provider。

## 协议边界

“能填 Base URL”和“协议兼容”不是一回事。

- OpenAI-compatible 只表示当前文档覆盖的 Bearer 鉴权和 Chat Completions 基础文本请求格式，不自动包含 Streaming、Tool calling、Responses API、Embeddings 或其他端点。
- Claude Code 可能要求非 OpenAI-compatible 协议或经过验证的适配路径；这不代表 Arqel 已支持该协议。
- Gemini CLI 可能要求 Gemini 原生协议或当前版本提供的特定 Provider 配置；这不代表 Arqel 已支持该协议。
- Codex 的 CLI、App、IDE Extension、Web/cloud 入口不一定共享 Provider 配置。
- CC Switch 可以管理 Provider、routing/proxy 和工具配置，但不要默认把它当作通用协议转换器。

工具能回复不够。最终以 Arqel 控制台请求记录为准。

遇到文档没有覆盖的界面变化，先记录工具名称、版本、截图和 Arqel 控制台是否有请求记录，再去帮助页排查。
