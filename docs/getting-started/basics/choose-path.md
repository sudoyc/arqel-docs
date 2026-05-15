# 选择你的入门路径

如果你是第一次使用 Arqel，不需要一次读完整个文档。先根据你的目标选择一条路径，把一个最小任务跑通，再回头补概念。

最小任务的标准是：你能用一个具体模型名发出请求，并且能在 Arqel 控制台看到对应使用记录。

## 路径 1：完全新手

适合：

- 不确定 API、API Key、Base URL 是什么。
- 不熟悉终端或命令行。
- 想先知道每一步在哪里操作。

建议顺序：

1. [基础概念](/getting-started/basics/basic-concepts)
2. [环境准备总览](/setup/)
3. [创建 API Key](/getting-started/api/api-key)
4. [Base URL 和模型名](/getting-started/api/base-url-and-model)
5. [发送第一条请求](/getting-started/api/first-request)
6. [成功和失败示例](/getting-started/troubleshooting/success-and-failure-examples)

完成标准：你知道自己在哪个终端里操作，能复制 Key 和 Base URL，能发出一条测试请求。

## 路径 2：只想测试 API

适合：

- 已经知道 API Key 和 HTTP 请求是什么。
- 只想确认 Arqel 是否能返回结果。
- 暂时不接 Cursor 或其他 Agent 产品。

建议顺序：

1. [创建 API Key](/getting-started/api/api-key)
2. [Base URL 和模型名](/getting-started/api/base-url-and-model)
3. [发送第一条请求](/getting-started/api/first-request)
4. [成功和失败示例](/getting-started/troubleshooting/success-and-failure-examples)

完成标准：你能确认 Arqel API 本身可用。后续如果工具接入失败，优先排查工具配置。

## 路径 3：Cursor 用户

适合：

- 主要在 Cursor 编辑器里写代码。
- 想把 Cursor 的自定义 API 配置接到 Arqel。

建议顺序：

1. [创建 API Key](/getting-started/api/api-key)
2. [Base URL 和模型名](/getting-started/api/base-url-and-model)
3. [发送第一条请求](/getting-started/api/first-request)
4. [Cursor 接入](/tools/agents/cursor)

完成标准：Cursor 发出的测试请求出现在 Arqel 控制台记录里，而不是只看 Cursor 是否有回复。

## 路径 4：Claude Code / Gemini / Codex 用户

适合：

- 已经在终端、IDE 插件、桌面 App 或网页端使用 Coding Agent。
- 想让 Agent 使用 Arqel Provider。
- 能接受不同产品界面配置方式随版本变化。

建议顺序：

1. [工具接入总览](/tools/)
2. [Base URL 和模型名](/getting-started/api/base-url-and-model)
3. 先用 [发送第一条请求](/getting-started/api/first-request) 验证 API 本身可用。
4. 按你的工具选择 [Claude Code](/tools/agents/claude-code)、[Gemini CLI](/tools/agents/gemini-cli) 或 [Codex](/tools/agents/codex-cli)。

完成标准：先在对应 Agent 里问一个只读问题，再到 Arqel 控制台核对时间、Key 名称和模型名。

::: warning 协议边界
不同 Agent 需要的协议不一定相同。同一品牌的 CLI、桌面 App、网页端、IDE 插件也不一定共享配置。OpenAI-compatible Base URL 不代表 Claude Code、Gemini CLI、Codex 一定可以直接使用。请先阅读 [工具接入总览](/tools/) 中的协议兼容说明。
:::

## 路径 5：SDK 用户

适合：

- 你在自己的后端服务里写代码调用模型。
- 你已经使用 OpenAI SDK 或类似 SDK。

建议顺序：

1. [创建 API Key](/getting-started/api/api-key)
2. [Base URL 和模型名](/getting-started/api/base-url-and-model)
3. [发送第一条请求](/getting-started/api/first-request)
4. [OpenAI SDK 接入](/tools/sdk/openai)
5. [API 总览](/api/)

完成标准：你的后端服务能调用 Arqel，且 API Key 没有出现在浏览器前端、Git 仓库或截图里。

## 路径 6：多 Agent / CC Switch 用户

适合：

- 同时使用多个 Agent。
- 经常切换 Provider、模型、MCP 或项目规则。
- 不想手动维护多个配置文件。

建议顺序：

1. [工具接入总览](/tools/)
2. [CC Switch 使用教程](/tools/cc-switch/)
3. 为每个 Agent 单独做只读测试。
4. 确认请求记录出现在 Arqel 控制台后，再让 Agent 修改项目。

完成标准：每个 Agent 都单独验证，不要只因为 CC Switch 里启用了 Provider 就认为所有工具都已生效。

## 如果你卡住了

- 不知道命令应该输在哪里：看 [终端基础](/setup/terminal-basics)。
- Windows 和 WSL 分不清：看 [Windows 环境选择](/setup/which-environment)。
- 请求返回错误：看 [成功和失败示例](/getting-started/troubleshooting/success-and-failure-examples)。
- Agent 能回复但不确定是否走 Arqel：看对应工具页的“确认真的走了 Arqel”。

## 无论走哪条路都要记住

模型名请使用 Arqel 控制台中显示的具体名称。每接入一个工具，都要用控制台请求记录确认它真的走了 Arqel。
