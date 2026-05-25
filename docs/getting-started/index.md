# 入口总览

这页帮你选一条适合你的接入路线。Arqel 文档覆盖 Cursor、Claude Code、Gemini CLI、Codex、CC Switch 等工具的接入方式，整体原则是：优先用 CC Switch 管理 Provider，必要时再手动配置。

如果你是 Windows 新手，直接从 [新手入门：Codex + CC Switch](/getting-started/agent-quickstart) 开始。已经知道自己要用哪个工具，请直接看下面的表格。

## 推荐入口

| 你的目标 | 先看 | 完成标准 |
| --- | --- | --- |
| Windows 新手 | [新手入门](/getting-started/agent-quickstart) | 用 Codex + CC Switch 接入 Arqel，并能在控制台看到记录 |
| 想接入某个工具 | [工具接入](/tools/) | 知道这个工具推荐用 CC Switch 还是手动配置 |
| 同时使用多个 Agent | [CC Switch](/tools/cc-switch/) | 每个 Agent 都单独验证，不只看配置是否写入 |
| 后端或脚本调用模型 | [API 参考](/api/) / [OpenAI SDK](/tools/sdk/openai) | Key 只保存在后端或安全环境中，不暴露到浏览器前端 |
| 遇到问题 | [接入检查清单](/getting-started/troubleshooting/checklist) | 能说明工具、系统、错误截图和控制台记录情况 |

## Arqel 接入三要素 {#three-elements}

API Key、Base URL 和模型名是接入 Arqel 的三个必填项，后文统一称为 **Arqel 接入三要素**。

| 项目 | 从哪里来 | 填到哪里 |
| --- | --- | --- |
| API Key | Arqel 控制台的 API Keys / Keys / Developer settings 页面 | 请求头、SDK 配置或工具的 API Key 字段 |
| Base URL | Arqel 控制台的 API / Developer / Provider 配置区域 | SDK 或工具的 Base URL / API Base / Endpoint 字段 |
| 模型名 | Arqel 控制台的 Models / 模型列表 / 请求示例 | 请求体里的 `model` 字段或工具的模型字段 |

实际控制台菜单名称可能随产品界面调整。如果团队给你单独的控制台入口或组织工作区入口，以团队给你的入口为准。

## 文档怎么读

- **新手入门**：给 Windows 新手用户，从准备 Codex 入口，到用 CC Switch 确认请求记录。每步都说明"做到什么程度算成功"。
- **工具接入**：说明 Cursor、Claude Code、Gemini CLI、Codex、CC Switch 等入口的接入方式，按产品入口区分，不混用。
- **API 参考**：给后端、脚本和 SDK 用户查接口格式。新手接 Agent 不是必经步骤。
- **概念 / 排障**：概念可以选看，排障页遇到问题时再看。

## 接入顺序

1. 新手先从 Codex 开始，按教程接入 Arqel。
2. 命令行 Agent 优先用 CC Switch。
3. 在 CC Switch 里先选择目标应用（例如 Codex），再添加 Arqel Provider。
4. 如果 CC Switch 不适合，再按对应工具页的 macOS / Windows / Linux 手动配置说明处理。
5. 用只读问题验证接入。
6. 回到 Arqel 控制台核对请求时间、Key 名称和模型名。

工具能回复不等于一定走了 Arqel。最终以 Arqel 控制台请求记录为准。
