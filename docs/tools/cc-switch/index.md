# CC Switch 参考

CC Switch 是一个跨平台桌面工具，用来统一管理 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw、Hermes Agent 等 Agent 工具的 Provider、MCP、Prompts 和 Skills。

如果你是 Windows 新手，可以直接看 [新手入门](/getting-started/agent-quickstart)。本文作为 CC Switch 的补充参考。

::: info 第三方工具版本
CC Switch 和各 Agent 的界面、字段名称、配置路径可能随版本变化。如果你的界面和截图占位描述不同，请以当前 CC Switch 和目标 Agent 的界面为准。
:::

## 推荐路径

1. Windows 新手先看 [新手入门](/getting-started/agent-quickstart)。
2. 需要字段细节时看 [添加 Arqel Provider](/tools/cc-switch/provider)。
3. 需要按工具检查时看 [应用于各 Agent](/tools/cc-switch/agents)。
4. 出问题时看 [CC Switch FAQ](/tools/cc-switch/faq)。

## 你需要准备什么

- Arqel API Key。
- Arqel Base URL。
- 一个具体可用的模型名。
- 已安装的目标 Agent 工具。

CC Switch 不是模型服务，也不是 Arqel 的替代品。它只是帮你把不同工具的配置集中管理。

## 什么时候该用 CC Switch

| 情况 | 建议 |
| --- | --- |
| 只用 Cursor 或只用一个 SDK | 先手动配置，不必一开始安装 CC Switch |
| 同时用 Claude Code、Gemini CLI、Codex | 适合使用 CC Switch 统一管理 Provider |
| 经常切换官方 Provider 和 Arqel Provider | 适合使用 CC Switch，减少手改配置 |
| 需要管理 MCP、Prompts、Skills | 适合使用 CC Switch |
| Windows 工具用户 | 直接看 [新手入门](/getting-started/agent-quickstart)，或继续阅读本文 |

## CC Switch 可管理的应用

CC Switch 面向多个 Agent 工具提供配置管理入口，包括：

- Claude Code
- Codex
- Gemini CLI
- OpenCode
- OpenClaw
- Hermes Agent

这里的“可管理”只表示 CC Switch 可以管理相关配置，不代表 Arqel 已经验证每个 Agent 的协议兼容。请按 [工具接入总览](/tools/) 的兼容状态矩阵逐个验证。

## CC Switch 自身能力

CC Switch 的常见能力包括：

- Provider Management
- MCP / Prompts / Skills
- Session Manager
- Usage tracking
- Local Routing / proxy
- Failover
- Model tests
- Deep Link
- Cloud sync

这些是 CC Switch 自身能力，不代表本站已验证这些能力与 Arqel 的组合行为。配置管理、Local Routing / proxy、failover、Cloud sync 都不等同于 Arqel 对所有 Agent、协议和模型的兼容承诺。

::: warning Key 存储和同步边界
在把生产 Key 放入 CC Switch 前，请先确认当前版本对 API Key、Provider 配置、本地数据库、备份和 Cloud sync 的存储与加密行为。未确认前，建议只使用测试 Key。
:::

## 接入 Arqel 的参考流程

1. 先在 Arqel 控制台创建一个专门给 CC Switch 用的 Key。
2. 记录控制台里的 Base URL。
3. 选择一个控制台里明确存在的具体模型名。
4. 在 CC Switch 添加 Arqel Provider。
5. 只启用到一个 Agent，例如 Claude Code。
6. 发送只读测试问题。
7. 到 Arqel 控制台核对请求记录。
8. 再逐个启用 Gemini CLI、Codex、Hermes Agent 等其他 Agent。

不要一次性把所有 Agent 都切到 Arqel。逐个验证更容易定位问题。

## 本地数据位置

CC Switch 常见本地数据位置：

- Database：`~/.cc-switch/cc-switch.db`
- Local settings：`~/.cc-switch/settings.json`
- Backups：`~/.cc-switch/backups/`
- Skills：`~/.cc-switch/skills/`
- Skill backups：`~/.cc-switch/skill-backups/`

::: warning 协议边界
CC Switch 不应默认理解为协议转换器。它能帮你管理和写入配置，但目标 Agent 是否能使用 Arqel，仍取决于该 Agent 当前版本支持的 Provider 类型和协议。请先阅读 [工具接入总览](/tools/) 的协议兼容说明。

即使使用 Local Routing / proxy / failover，也要通过 Arqel 控制台使用记录确认请求真的走了 Arqel。
:::

## 官方链接

- 官网：[https://ccswitch.io](https://ccswitch.io)
- GitHub：[https://github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch)
- User Manual：[https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md](https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md)

## 下一步

- [CC Switch 安装](/tools/cc-switch/install)
- [CC Switch 添加 Arqel Provider](/tools/cc-switch/provider)
- [CC Switch 应用于各 Agent](/tools/cc-switch/agents)
- [CC Switch FAQ](/tools/cc-switch/faq)
