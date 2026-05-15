# 工具接入总览

工具接入不是把同一组 Key 复制到所有软件里就结束。很多品牌不是只有一个 CLI：同一品牌可能同时有桌面应用、网页端、IDE 插件、终端 CLI、后台云端 Agent。你需要先判断自己正在配置的是哪一个产品界面，再确认它当前版本支持的协议和配置位置。

大多数工具接入 Arqel 时都围绕三个信息：

- **API Key**：Arqel 控制台创建的 Key。
- **Base URL**：Arqel 提供的 API 地址。
- **模型名**：Arqel 控制台里可用的具体模型名。

不同 Agent 工具的配置位置不一样：有的读环境变量，有的读 JSON，有的读 TOML，有的通过桌面应用设置页管理，有的还会区分 Windows 和 WSL。新手最容易出错的地方不是 Key 本身，而是“我到底把 Key 填到哪个产品、哪个界面、哪个系统环境里了”。

::: warning 模型名必须具体
模型名请使用 Arqel 控制台中显示的具体名称。不要把模型家族名、占位文字或其他工具里的别名直接填进 Arqel 请求。
:::

## 先选路线

| 你的目标 | 推荐路线 | 先读 |
| --- | --- | --- |
| 在编辑器里写代码 | Cursor | [Cursor](/tools/agents/cursor) |
| 在终端里让 Agent 读项目/改代码 | Claude Code / Gemini CLI / Codex | [Agent 接入总览](/tools/agents/) |
| 在桌面 App 或 IDE 插件里使用同一品牌 Agent | 先确认具体 surface | [Agent 接入总览](/tools/agents/) |
| 同时管理多个 Agent | CC Switch | [CC Switch 使用教程](/tools/cc-switch/) |
| 在自己的后端服务调用模型 | SDK | [SDK 接入总览](/tools/sdk/) |
| 只想验证 API 是否可用 | cURL / SDK 测试 | [发送第一条请求](/getting-started/api/first-request) |

## 两条接入方式

### 路线 A：手动配置

适合：

- 你只使用一个工具。
- 你想先理解每个工具自己的配置方式。
- 你不想安装额外桌面管理工具。

阅读对应工具。每个工具都需要单独验证，不要因为一个工具可用就认为其他工具也可用：

- [Cursor](/tools/agents/cursor)
- [Claude Code](/tools/agents/claude-code)
- [Gemini CLI](/tools/agents/gemini-cli)
- [Codex](/tools/agents/codex-cli)
- [Hermes Agent](/tools/agents/hermes)
- [OpenAI SDK](/tools/sdk/openai)

### 路线 B：使用 CC Switch 统一管理

适合：

- 你同时使用 Claude Code、Gemini CLI、Codex、Hermes Agent，或正在试 OpenCode / OpenClaw。
- 你需要经常切换 Provider。
- 你不想手动编辑多个配置文件。
- 你还要管理 MCP、Prompts、Skills。

推荐先读：

- [CC Switch 使用教程](/tools/cc-switch/)
- [工具对比](/tools/agents/compare)

CC Switch 的拆分页现在放在二级目录里，更好找也更不挤。

::: details 图片占位：手动配置 vs CC Switch 配置流程图
这里需要一张流程图：左边是手动配置，每个工具单独填 Key/Base URL/模型名；右边是 CC Switch，统一添加 Arqel Provider 后同步到多个工具。
:::

## 已整理的工具文档

- [CC Switch](/tools/cc-switch/)
- [CC Switch 安装](/tools/cc-switch/install)
- [CC Switch 添加 Arqel Provider](/tools/cc-switch/provider)
- [CC Switch 应用于各 Agent](/tools/cc-switch/agents)
- [CC Switch FAQ](/tools/cc-switch/faq)
- [Cursor](/tools/agents/cursor)
- [Claude Code](/tools/agents/claude-code)
- [Gemini CLI](/tools/agents/gemini-cli)
- [Codex](/tools/agents/codex-cli)
- [Hermes Agent](/tools/agents/hermes)
- [OpenAI SDK](/tools/sdk/openai)

## 推荐验证顺序

1. 先用 [发送第一条请求](/getting-started/api/first-request) 验证 Arqel API 本身可用。
2. 再配置目标工具。
3. 在目标工具里发送只读测试问题。
4. 打开 Arqel 控制台，看请求记录是否出现。
5. 核对时间、Key 名称、模型名。
6. 确认无误后，再让 Agent 修改项目或接入生产服务。

## 官方直连和 Arqel 接入的区别

很多工具默认连接官方 API、官方账号或官方云端 Agent。接入 Arqel 时，通常需要额外配置：

- 自定义 API Key。
- 自定义 Base URL。
- 自定义模型名。

如果某个 surface 不支持自定义 Base URL，就不能直接以 OpenAI-compatible 方式接入 Arqel。比如同一品牌的 CLI 支持自定义 Provider，不代表它的网页端、桌面 App 或 IDE 插件也支持同样配置。

## 产品族和配置位置

| 品牌/工具 | 常见 surface | 配置是否一定共享 |
| --- | --- | --- |
| Claude Code | Terminal CLI、IDE 插件、Claude Desktop 的 Code tab、Web | Claude Code 官方文档说明这些 surface 使用同一底层 Claude Code engine，CLAUDE.md、settings、MCP servers 可跨 surface 生效；但传统 Claude Desktop 的 MCP 示例仍使用 `claude_desktop_config.json`，不要混为一个文件 |
| Gemini CLI | Terminal CLI、VS Code companion extension、ACP-compatible IDE | Gemini CLI 以 CLI 配置为核心，用户配置在 `~/.gemini/settings.json`，项目配置在 `.gemini/settings.json`；IDE 集成通常连接到 CLI，而不是独立配置一套 Arqel Provider |
| Codex | CLI、Codex App、IDE Extension、Web/cloud、GitHub/Slack/Linear 集成 | OpenAI 官方把 Codex 分成 App、IDE Extension、CLI、Web 等 surface；是否共享同一配置要看具体 Codex 文档和登录方式 |
| Cursor | 桌面编辑器、Agent、Rules、MCP、Skills、CLI 文档 | Cursor 主要在编辑器设置里配置；不要假设它读取终端里的 CLI 配置 |

## 协议兼容说明

“支持自定义 Base URL”和“协议兼容”是两件事。一个工具能填 Base URL，不代表它一定能使用 Arqel 的当前接口。

常见协议边界：

- OpenAI-compatible：更接近 Cursor 自定义 API、OpenAI SDK 这类客户端。
- Anthropic-compatible：Claude Code 可能需要这类接口，或需要经过已验证的适配路径。
- Gemini native / Gemini-compatible：Gemini CLI 可能需要 Gemini 原生协议，或需要版本支持的 Provider 配置。
- Codex：需要看当前使用的是 CLI、App、IDE Extension 还是 Web/cloud，再确认该 surface 是否支持自定义 Provider、API Key、Base URL 和模型配置。
- Hermes Agent：需要确认 Hermes 当前版本使用的协议，以及 CC Switch 是否写入了正确配置。
- CC Switch：可以管理 Provider、Local Routing / proxy、failover 等，但不能替代 Arqel 侧的协议确认。

因此，一组 Base URL、API Key、模型名不一定能跨所有 Agent、所有 surface 通用。接入前请先确认目标工具当前版本支持的 Provider 类型，再做只读测试。

## 怎么判断“真的接上了”

看工具有回复不够。你需要在 Arqel 控制台看到对应请求记录。

请核对：

- 请求时间是否刚好对应你的测试。
- Key 名称是否是你给这个工具创建的 Key。
- 模型名是否是你在工具里填写的具体模型名。
- 如果有多个 Agent，是否能区分每个 Agent 的 Key 或请求时间。

## 平台差异一定要注意

### macOS

macOS 通常最简单。终端、Homebrew、Node.js、CLI 工具都在同一个用户环境中。

常见问题：

- 安装后命令找不到：重开终端。
- npm 全局安装权限问题：考虑 nvm。
- 配置写入 `~/.zshrc` 后未生效：运行 `source ~/.zshrc` 或重开终端。

### Windows

Windows 有两套常见环境：

- PowerShell / Windows Terminal：Windows 原生环境。
- WSL2：Windows 里的 Linux 环境。

这两套环境的配置不自动同步。你在 PowerShell 里设置的 Key，WSL 里通常读不到。

### Linux / WSL

Linux / WSL 更接近服务器环境，适合运行命令行 Agent。

常见问题：

- 项目放在 `/mnt/c/...` 下导致性能差。
- Node.js 用系统包安装后版本太旧。
- WSL 里的 CLI 读不到 Windows 版 CC Switch 写入的配置。

## 推荐新手路线

1. 先完成 [环境准备](/setup/)。
2. 用 [发送第一条请求](/getting-started/api/first-request) 验证 Arqel API 可用。
3. 如果只用一个工具，按对应工具文档手动配置。
4. 如果用多个 Agent，安装 [CC Switch](/tools/cc-switch/) 统一管理。
5. 每接入一个工具，都先做只读测试，不要一上来让 Agent 修改项目。
