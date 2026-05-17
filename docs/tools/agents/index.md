# Agent 接入

Agent 工具会读项目、执行命令或修改文件。接入 Arqel 时，先做只读验证，再让它处理真实项目。

如果你要先排查 API 层，API 调用示例可以单独作为基准；如果你已经知道 Key、Base URL 和模型名可用，就直接看对应 Agent 页面。

## 选择工具

| 工具 / 产品入口 | 推荐页面 | 接入前必须确认 |
| --- | --- | --- |
| Cursor 桌面编辑器 | [Cursor](/tools/agents/cursor) | 自定义 API 是否作用于当前 Chat / Agent 功能 |
| Claude Code | [Claude Code](/tools/agents/claude-code) | 当前版本支持的 Provider / 协议路径 |
| Gemini CLI | [Gemini CLI](/tools/agents/gemini-cli) | 是否需要 Gemini 原生协议、Gemini-compatible 协议或版本特定 Provider 配置；是否可走 Arqel 需验证 |
| Codex | [Codex](/tools/agents/codex-cli) | CLI、App、IDE、Web 是否共享配置 |
| Hermes Agent | [Hermes Agent](/tools/agents/hermes) | 官方配置方式和 Arqel 协议支持状态 |
| 多 Agent 管理 | [CC Switch](/tools/cc-switch/) | CC Switch 只管理配置；兼容性仍要实测 |

::: warning 协议边界
OpenAI-compatible Base URL 不代表所有 Agent 都能直接使用。不要把一个工具的成功结果外推到另一个工具。
:::

## 验证状态

| 工具 | 本文建议 | 不要做 |
| --- | --- | --- |
| Cursor | 按当前设置页配置自定义 API 后验证 | 不要假设 integrated terminal 里的 CLI 会读取 Cursor 设置 |
| Claude Code | 确认当前入口支持的 Provider / Gateway / 协议 | 不要只因为有 Base URL 就当作已支持 |
| Gemini CLI | 确认版本、可信目录、Provider 类型和配置文件 | 不要把 Gemini 内置别名直接填到 Arqel 模型名 |
| Codex | 区分 CLI、App、IDE Extension、Web/cloud | 不要把 CLI 成功外推到其他 Codex 入口 |
| Hermes Agent | 先确认官方安装和配置项，再用只读测试验证 | 不要在未确认时写入长期生产配置 |

## 验证 checklist

1. 在 CC Switch 或目标 Agent 中配置 Arqel Provider。
2. 给目标 Agent 使用单独命名的 Key，方便查记录。
3. 配置目标 Agent 的 API Key、Base URL 和模型名。
4. 第一次只问只读问题，例如“总结当前项目结构”。
5. 打开 Arqel 控制台，核对请求时间、Key 名称、模型名。
6. 确认无误后，再让 Agent 修改文件或执行命令。

## 产品入口不要混用

同一品牌可能有 CLI、桌面 App、IDE 插件、网页端和云端 Agent。它们不一定共享配置文件、环境变量或 Provider 设置。

如果不确定选哪个，先看 [工具对比](/tools/agents/compare)。
