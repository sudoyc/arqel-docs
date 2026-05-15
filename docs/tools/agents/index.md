# Agent 接入总览

Agent 工具适合让模型阅读项目、解释代码、执行命令或修改文件。它们比普通 SDK 更容易出现“工具能启动，但请求没有走你以为的 Provider”的问题。

这里的“Agent”不只指 CLI。Claude、Gemini、Codex、Cursor 这类品牌经常同时提供 CLI、桌面 App、IDE 插件、网页端或云端 Agent。配置 Arqel 时，请先确认你正在配置的是哪个 surface。

接入 Arqel 前，先确认目标 Agent 当前版本支持的 Provider 类型、Base URL 配置方式和模型名配置方式。

::: warning 协议边界
OpenAI-compatible Base URL 不代表所有 Agent 都能直接使用。Claude Code、Gemini CLI、Codex、Hermes Agent 等产品可能需要不同协议或经过验证的适配路径。
:::

## 已有页面

- [工具对比](/tools/agents/compare)
- [Cursor](/tools/agents/cursor)
- [Claude Code](/tools/agents/claude-code)
- [Gemini CLI](/tools/agents/gemini-cli)
- [Codex](/tools/agents/codex-cli)
- [Hermes Agent](/tools/agents/hermes)

如果同时使用多个 Agent，建议阅读 [CC Switch](/tools/cc-switch/)。

## Agent 接入原则

1. 先跑通 Arqel API，再配置 Agent。
2. 每个 Agent 单独创建或至少单独命名 Key，方便回看请求记录。
3. 第一次测试只问只读问题，不要让 Agent 修改文件。
4. 工具有回复后，必须到 Arqel 控制台核对使用记录。
5. Windows 和 WSL 分开看，Windows 里的配置通常不会自动同步到 WSL。
6. 同一品牌不同 surface 不一定共享同一份配置，除非官方文档明确说明。

## 工具选择

| 工具 | 常见 surface | 优先场景 | 主要风险 |
| --- | --- | --- | --- |
| Cursor | 桌面编辑器、Agent、Rules、MCP、Skills、CLI 文档 | 编辑器内写代码 | 自定义 API 设置是否对当前模型生效 |
| Claude Code | Terminal、IDE、Desktop Code tab、Web | 代码 Agent 任务 | Claude Code surface 之间可能共享设置，但传统 Claude Desktop MCP 配置文件不同 |
| Gemini CLI | Terminal、VS Code companion、ACP-compatible IDE | Gemini 风格终端/IDE 工作流 | 可能需要 Gemini native / Gemini-compatible 支持 |
| Codex | CLI、App、IDE Extension、Web/cloud | OpenAI 生态代码 Agent | 不同 surface 的登录、配置和 Provider 支持可能不同 |
| Hermes Agent | 通过 CC Switch 管理 Hermes | Hermes 工作流 | Hermes 官方配置和 Arqel 协议支持仍需确认 |

## 配置共享不要猜

- Claude Code 官方文档说明 Terminal、IDE、Desktop Code tab、Web 使用同一底层 Claude Code engine，`CLAUDE.md`、settings、MCP servers 可跨 surface 生效。
- Claude Desktop 的传统 MCP 教程仍使用 `~/Library/Application Support/Claude/claude_desktop_config.json` 或 `%APPDATA%\Claude\claude_desktop_config.json`，这和 Claude Code 的 `~/.claude/settings.json` 不是同一个文件。
- Gemini CLI 的用户设置文件是 `~/.gemini/settings.json`，项目设置文件是 `.gemini/settings.json`；IDE companion extension 是连接 CLI 的集成方式。
- Codex 官方文档把 Codex 分为 App、IDE Extension、CLI、Web/cloud 等 surface；配置共享情况要按具体 surface 的官方文档判断。

如果你不确定选哪个，先看 [工具对比](/tools/agents/compare)。
