# 开始使用 Arqel

如果你的目标是使用 AI 编程工具，推荐直接从 Windows + CC Switch 教程开始。其他页面作为参考资料，需要时再查。

## 推荐入口

| 目标 | 入口 |
| --- | --- |
| Windows 用户，想接入 Claude Code / Gemini CLI / Codex | [Windows 最快接入：用 CC Switch 配置 Arqel](/getting-started/windows-ccswitch) |
| 已经在用 CC Switch | [添加 Arqel Provider](/tools/cc-switch/provider) |
| 想看某个具体工具 | [工具接入参考](/tools/) |
| 后端或脚本调用模型 | [API 参考](/api/) / [OpenAI SDK](/tools/sdk/openai) |
| 请求失败或工具没走 Arqel | [接入检查清单](/getting-started/troubleshooting/checklist) |

## 文档怎么读

- **教程**：带你完成一个实际接入，例如 Windows + CC Switch。
- **工具参考**：说明 Cursor、Claude Code、Gemini CLI、Codex 等工具的差异和验证方式。
- **API 参考**：给后端、脚本和 SDK 用户查接口格式。
- **概念 / 排障**：遇到问题时再看。

## 最少需要知道

| 项目 | 说明 |
| --- | --- |
| API Key | Arqel 控制台创建的调用凭证，不要公开 |
| Base URL | 填进工具或 SDK 的 API 地址 |
| 模型名 | 控制台显示的具体模型名称 |
| 请求记录 | 判断工具是否真的走 Arqel 的依据 |

如果你不确定从哪开始，选 [Windows + CC Switch](/getting-started/windows-ccswitch)。
