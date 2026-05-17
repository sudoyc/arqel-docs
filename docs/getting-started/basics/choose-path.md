# 按目标选择

先选你现在要完成的任务。不要先读完整套文档，也不要一开始就配置多个工具。

| 你的情况 | 先做 | 完成标准 |
| --- | --- | --- |
| 第一次接触 API、Key、终端 | [基础概念](/getting-started/basics/basic-concepts) → [终端基础](/setup/terminal-basics) → [创建 API Key](/getting-started/api/api-key) | 知道 Key、Base URL、模型名分别是什么 |
| 验证 API 调用链路 | [创建 API Key](/getting-started/api/api-key) → [Base URL 和模型名](/getting-started/api/base-url-and-model) → [API 调用示例](/getting-started/api/first-request) | 能看懂鉴权、Base URL 和模型字段分别做什么 |
| 使用 Cursor | 看 [Cursor 接入](/tools/agents/cursor)，按当前版本配置自定义 API | Cursor 的测试请求出现在 Arqel 控制台 |
| 使用 Claude Code / Gemini CLI / Codex | 先看 [Agent 接入总览](/tools/agents/)，再进入对应工具页 | Agent 做只读测试后，控制台能看到对应 Key 和模型 |
| 在自己的服务里调用模型 | [API 总览](/api/) → [OpenAI SDK](/tools/sdk/openai) | Key 只在后端或安全环境中使用，不暴露到浏览器前端 |
| 同时管理多个 Agent | [CC Switch](/tools/cc-switch/) → 逐个 Agent 验证 | 每个 Agent 单独通过只读测试，不只看 CC Switch 是否写入配置 |

## 基础接入路径

如果你不知道自己属于哪类，按这个顺序做：

1. 读 [基础概念](/getting-started/basics/basic-concepts)，确认 API Key、Base URL、模型名的含义。
2. 创建一个专门用于测试的 API Key。
3. 从控制台复制 Base URL 和具体模型名。
4. 完成 [API 调用示例](/getting-started/api/first-request)。
5. 再进入你要使用的工具页。

## Agent 和 CC Switch 注意

OpenAI-compatible Base URL 不等于所有 Agent 都能直接使用。Claude Code、Gemini CLI、Codex、Hermes Agent 可能需要不同协议、不同 Provider 类型或已验证适配路径。

如果一个工具能回复，但 Arqel 控制台没有请求记录，通常说明它没有走 Arqel。先排查工具配置，不要直接更换 Key。

## 卡住时

| 问题 | 看这里 |
| --- | --- |
| 不知道命令输在哪里 | [终端基础](/setup/terminal-basics) |
| Windows / WSL 分不清 | [Windows 环境选择](/setup/which-environment) |
| 请求报错 | [成功和失败示例](/getting-started/troubleshooting/success-and-failure-examples) |
| 工具有回复但不确定是否走 Arqel | 对应工具页里的验证步骤，或 [接入检查清单](/getting-started/troubleshooting/checklist) |
