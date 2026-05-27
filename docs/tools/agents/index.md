# Agent 接入

Agent 是指能读取项目、执行命令或修改文件的 AI 工具。这页帮你在 Cursor、Claude Code、Codex、Hermes Agent 中快速定位对应接入步骤。

接入 Arqel 时，推荐先用 CC Switch 管理 Provider，再按工具逐个验证。Windows 新手建议先从 Codex 开始。

如果你是 Windows 新手，先看 [新手入门](/getting-started/agent-quickstart)。如果你已经知道要用哪个工具，直接进入对应工具页。

## 选择工具

| 工具 / 产品入口 | 推荐页面 | 首选方式 |
| --- | --- | --- |
| Cursor 桌面编辑器 | [Cursor](/tools/agents/cursor) | 先看 Cursor 自己的 Custom API 设置 |
| Codex | [Codex](/tools/agents/codex-cli) | CC Switch |
| Claude Code | [Claude Code](/tools/agents/claude-code) | CC Switch |
| Hermes Agent | [Hermes Agent](/tools/agents/hermes) | 先确认官方配置和协议状态 |
| 多 Agent 管理 | [CC Switch](/tools/cc-switch/) | CC Switch |

::: warning 协议边界
OpenAI-compatible Base URL 不代表所有 Agent 都能直接使用。不要把一个工具的成功结果外推到另一个工具。
:::

## 如果不用 CC Switch

手动配置时先看 [手动配置参考](/tools/agents/manual-config)，再看对应工具页。macOS、Windows、Linux / WSL 的配置位置不同，尤其不要把 Windows 和 WSL 混在一起。

## 验证 checklist

1. 在 CC Switch 里先选择目标 Agent，例如 Codex。
2. 在该 Agent 页面添加 Arqel Provider。
3. 给目标 Agent 使用单独命名的 Key，方便查记录。
4. 配置目标 Agent 的 API Key、Base URL 和模型名。
5. 启用 Provider，并按工具要求重启终端或应用。
6. 第一次只问只读问题，例如"请说明当前项目是什么，不要修改任何文件"。
7. 打开 Arqel 控制台，核对请求时间、Key 名称、模型名。
8. 确认无误后，再让 Agent 修改文件或执行命令。

## 产品入口不要混用

同一品牌可能有 CLI、桌面 App、IDE 插件、网页端和云端 Agent。它们不一定共享配置文件、环境变量或 Provider 设置；如果工具明确说明共享，就按该工具规则处理。Codex 的本地 App、CLI、IDE Extension 共享同一套 Codex 配置，Web / cloud 和云端集成单独确认。

如果不确定选哪个，先看 [工具对比](/tools/agents/compare)。
