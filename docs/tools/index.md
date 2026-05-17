# 工具接入

这部分说明如何把 Arqel 接入 Cursor、Agent 工具、SDK 和 CC Switch。CC Switch 是多工具配置管理的辅助路径，不是 Arqel 的必要前置。

如果你在排查鉴权、Base URL 或模型名，API 调用示例可以作为独立基准；如果你只是要接工具，直接看对应页面即可。

## 选择入口

| 目标 | 入口 | 先确认 |
| --- | --- | --- |
| 在 Cursor 里写代码 | [Cursor](/tools/agents/cursor) | 自定义 API 设置是否作用于当前 Chat / Agent 功能 |
| 在终端或 IDE 里运行 Agent | [Agent 接入总览](/tools/agents/) | 当前产品入口支持的 Provider、协议和模型字段 |
| 在后端服务或脚本调用模型 | [SDK 接入](/tools/sdk/) | Key 不暴露到浏览器前端 |
| 同时管理多个 Agent | [CC Switch](/tools/cc-switch/) | CC Switch 写入配置不等于每个 Agent 都已验证可用 |
| 验证 API 调用链路 | [API 调用示例](/getting-started/api/first-request) | Key、Base URL、模型名和请求结构可单独核对 |

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
| OpenAI SDK | [OpenAI SDK](/tools/sdk/openai) | OpenAI-compatible Chat Completions | 已给出基础文本请求示例 | 确认 `model` + `messages` 请求结构 |
| Cursor | [Cursor](/tools/agents/cursor) | OpenAI-compatible / Custom API 配置 | 可按当前版本配置自定义 API 后验证 | 在 Cursor 发送只读问题，看控制台记录 |
| Claude Code | [Claude Code](/tools/agents/claude-code) | 非 OpenAI-compatible 协议或已验证适配路径 | 需要按当前产品入口确认，不代表 Arqel 已支持 | 只读测试，核对 Key 和模型名 |
| Gemini CLI | [Gemini CLI](/tools/agents/gemini-cli) | Gemini 原生协议或版本特定 Provider | 需要按当前版本确认，不代表 Arqel 已支持 | 只读测试，核对控制台记录 |
| Codex | [Codex](/tools/agents/codex-cli) | 当前 Codex 入口支持的 Provider / Base URL 配置 | CLI、App、IDE、Web 需分开确认 | 只读测试，不外推到其他入口 |
| Hermes Agent | [Hermes Agent](/tools/agents/hermes) | Hermes 当前版本支持的协议和配置项 | 待验证路径，只记录验证前检查项 | 不写长期配置，先做只读测试 |
| CC Switch | [CC Switch](/tools/cc-switch/) | 配置管理、routing/proxy 能力，非默认协议转换承诺 | 可用于管理配置，兼容性逐个工具验证 | 每个 managed app 单独测试 |

“文档状态”不是服务等级承诺，只表示本站当前提供了什么程度的接入说明。第三方工具更新后，字段名称和 Provider 能力可能变化。

## 验证顺序

1. 配置目标工具。
2. 在工具里发送只读测试问题。
3. 回到 Arqel 控制台核对请求时间、Key 名称和模型名。
4. 多个工具分开验证，不要只看其中一个工具有回复。
5. 如需排除 API 层问题，再对照 [API 调用示例](/getting-started/api/first-request)。

## 手动配置还是 CC Switch

| 方式 | 适合 | 风险 |
| --- | --- | --- |
| 手动配置 | 只用一个工具，或想先理解工具自己的配置 | 每个工具位置不同，容易填错环境或产品入口 |
| CC Switch | 多 Agent、经常切换 Provider、需要统一管理配置 | 不保证自动解决协议兼容；仍要逐个 Agent 验证 |

## 协议边界

“能填 Base URL”和“协议兼容”不是一回事。

- OpenAI-compatible 只表示当前文档覆盖的 Bearer 鉴权和 Chat Completions 基础文本请求格式，不自动包含 Streaming、Tool calling、Responses API、Embeddings 或其他端点。
- Claude Code 可能要求非 OpenAI-compatible 协议或经过验证的适配路径；这不代表 Arqel 已支持该协议。
- Gemini CLI 可能要求 Gemini 原生协议或当前版本提供的特定 Provider 配置；这不代表 Arqel 已支持该协议。
- Codex 的 CLI、App、IDE Extension、Web/cloud 入口不一定共享 Provider 配置。
- CC Switch 可以管理 Provider、routing/proxy 和工具配置，但不要默认把它当作通用协议转换器。

工具能回复不够。最终以 Arqel 控制台请求记录为准。
