# 按目标选择

先选你现在要完成的任务。不要先读完整套文档。

| 你的情况 | 先做 | 完成标准 |
| --- | --- | --- |
| 第一次接触 API、Key、终端 | [基础概念](/getting-started/basics/basic-concepts) → [环境准备](/setup/) → [创建 API Key](/getting-started/api/api-key) | 知道 Key、Base URL、模型名分别填在哪里 |
| 只想确认 API 可用 | [创建 API Key](/getting-started/api/api-key) → [Base URL 和模型名](/getting-started/api/base-url-and-model) → [API 请求测试](/getting-started/api/first-request) | 测试返回成功，控制台出现请求记录 |
| 使用 Cursor | 看 [Cursor 接入](/tools/agents/cursor)，按当前版本配置自定义 API | Cursor 的测试请求出现在 Arqel 控制台 |
| 使用 Claude Code / Gemini CLI / Codex | 先看 [Agent 接入总览](/tools/agents/)，再进入对应工具页 | Agent 做只读测试后，控制台能看到对应 Key 和模型 |
| 在自己的服务里调用模型 | [API 总览](/api/) → [OpenAI SDK](/tools/sdk/openai) | Key 只在后端或安全环境中使用，不暴露到浏览器前端 |
| 同时管理多个 Agent | [CC Switch](/tools/cc-switch/) → 逐个 Agent 验证 | 每个 Agent 单独通过只读测试，不只看 CC Switch 是否写入配置 |

## Agent 和 CC Switch 注意

OpenAI-compatible Base URL 不等于所有 Agent 都能直接使用。Claude Code、Gemini CLI、Codex、Hermes Agent 可能需要不同协议或已验证适配路径。

## 卡住时

| 问题 | 看这里 |
| --- | --- |
| 不知道命令输在哪里 | [终端基础](/setup/terminal-basics) |
| Windows / WSL 分不清 | [Windows 环境选择](/setup/which-environment) |
| 请求报错 | [成功和失败示例](/getting-started/troubleshooting/success-and-failure-examples) |
| 工具有回复但不确定是否走 Arqel | 对应工具页里的验证步骤，或 [接入检查清单](/getting-started/troubleshooting/checklist) |
