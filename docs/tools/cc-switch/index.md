# CC Switch 参考

CC Switch 是一个跨平台桌面工具，用来统一管理 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw、Hermes Agent 等 Agent 工具的 Provider、MCP、Prompts 和 Skills。

如果你主要是 Windows 工具用户，建议直接从 [Windows + CC Switch 教程](/getting-started/windows-ccswitch) 开始。本文作为 CC Switch 的补充参考。

::: info 版本说明
最后核对时间：2026-05-15。第三方工具变化很快，界面和配置键可能随版本变化；如果行为不同，请以当前官方文档为准。
:::

## 推荐路径

1. Windows 用户先看 [Windows + CC Switch 教程](/getting-started/windows-ccswitch)。
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
| Windows 工具用户 | 直接看 [Windows + CC Switch 教程](/getting-started/windows-ccswitch) |

## CC Switch managed apps

根据 CC Switch README 和 release notes，CC Switch 覆盖这些 managed apps：

- Claude Code
- Codex
- Gemini CLI
- OpenCode
- OpenClaw
- Hermes Agent

Arqel 文档目前优先整理 Claude Code、Gemini CLI、Codex、Hermes Agent。这里的 managed app 只表示 CC Switch 可以管理相关配置，不代表 Arqel 已验证每个 Agent 的协议兼容。

## 主要能力

CC Switch 官方文档和 README 提到的能力包括：

- Provider Management
- MCP / Prompts / Skills
- Session Manager
- Usage tracking
- Local Routing / proxy
- Failover
- Model tests
- Deep Link
- Cloud sync

这些能力说明 CC Switch 不只是“写配置文件”的工具。但 Arqel 文档仍不能据此承诺所有 Agent、协议和模型都已经通过 Arqel 实测。

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

CC Switch README FAQ 提到的数据位置：

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
- Latest Releases：[https://github.com/farion1231/cc-switch/releases/latest](https://github.com/farion1231/cc-switch/releases/latest)
- User Manual：[https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md](https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md)

## 下一步

- [CC Switch 安装](/tools/cc-switch/install)
- [CC Switch 添加 Arqel Provider](/tools/cc-switch/provider)
- [CC Switch 应用于各 Agent](/tools/cc-switch/agents)
- [CC Switch FAQ](/tools/cc-switch/faq)
