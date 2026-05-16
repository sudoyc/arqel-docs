# 工具接入

这部分是参考文档。Windows 用户如果想尽快把 Arqel 接入主流 Agent，先看 [Windows + CC Switch 教程](/getting-started/windows-ccswitch)。

下面用于查询不同工具入口和验证方式。

## 选择入口

| 目标 | 入口 | 先确认 |
| --- | --- | --- |
| 在 Cursor 里写代码 | [Cursor](/tools/agents/cursor) | 自定义 API 设置是否作用于当前 Chat / Agent 功能 |
| 在终端或 IDE 里运行 Agent | [Agent 接入总览](/tools/agents/) | 当前产品入口支持的 Provider、协议和模型字段 |
| 在后端服务或脚本调用模型 | [SDK 接入](/tools/sdk/) | Key 不暴露到浏览器前端 |
| 同时管理多个 Agent | [CC Switch](/tools/cc-switch/) | CC Switch 写入配置不等于每个 Agent 都已验证可用 |
| 只想测试 API | [API 请求测试](/getting-started/api/first-request) | Key、Base URL、模型名可用 |

## 接入时只认三件事

- **API Key**：在 Arqel 控制台创建。
- **Base URL**：复制 Arqel 控制台显示的 API 地址。
- **模型名**：复制控制台显示的具体模型名。

::: warning
不要把同一品牌的 CLI、桌面 App、网页端、IDE 插件默认当成同一个配置入口。除非官方文档明确说明，否则逐个验证。
:::

## 验证顺序

1. 配置目标工具。
2. 在工具里发送只读测试问题。
3. 回到 Arqel 控制台核对请求时间、Key 名称和模型名。
4. 多个工具分开验证，不要只看其中一个工具有回复。
5. 如需排除 API 本身问题，再使用 [API 请求测试](/getting-started/api/first-request)。

## 手动配置还是 CC Switch

| 方式 | 适合 | 风险 |
| --- | --- | --- |
| 手动配置 | 只用一个工具，或想先理解工具自己的配置 | 每个工具位置不同，容易填错环境或产品入口 |
| CC Switch | 多 Agent、经常切换 Provider、需要统一管理配置 | 不保证自动解决协议兼容；仍要逐个 Agent 验证 |

## 协议边界

“能填 Base URL”和“协议兼容”不是一回事。Cursor / OpenAI SDK 通常更接近 OpenAI-compatible；Claude Code、Gemini CLI、Codex、Hermes Agent 需要按当前产品入口确认支持状态。

工具能回复不够。最终以 Arqel 控制台请求记录为准。
