# API 参考

Arqel 当前文档优先覆盖 OpenAI-compatible 的基础调用：Bearer Token 鉴权和 Chat Completions。

::: warning
每次请求都要填写 Arqel 控制台中显示的具体模型名。不要把模型家族名、其他平台别名或示例占位文字直接填入请求。
:::

## 基础信息

```text
Base URL: 以 Arqel 控制台显示为准，例如 https://api.arqel.dev/v1
Auth: Authorization: Bearer <API Key>
```

文档示例用于说明结构，不代表所有账号、区域或环境都使用同一个地址。

## 参考页面

| 页面 | 内容 |
| --- | --- |
| [鉴权](/api/authentication) | Authorization header 和 Key 使用方式 |
| [Chat Completions](/api/chat-completions) | 基础聊天补全请求格式 |
| [错误码](/help/troubleshooting/errors) | 常见失败状态和排查方向 |

## 最小请求

```http
POST /chat/completions
```

```json
{
  "model": "<从 Arqel 控制台复制的模型名>",
  "messages": [
    { "role": "user", "content": "你好" }
  ]
}
```

## 能力边界

| 能力 | 当前文档状态 | 使用建议 |
| --- | --- | --- |
| Bearer Token 鉴权 | 已文档化 | 每个请求都带 `Authorization: Bearer <API Key>` |
| Chat Completions 基础文本请求 | 已文档化 | 先用 `model` + `messages` 跑通 |
| Streaming | 当前文档未覆盖 | 不要默认传 `stream: true`；需要时先确认产品能力 |
| Tool calling / function calling | 当前文档未覆盖 | 不要照搬其他平台参数 |
| JSON mode / structured output | 当前文档未覆盖 | 需要时先做最小请求验证，再确认支持状态 |
| Embeddings / Images / Responses API / Models list | 当前文档未覆盖 | 以控制台和后端实际能力为准 |
| Anthropic-compatible / Gemini-compatible / Codex-specific 协议 | 未确认 | Agent 接入请看工具页的兼容说明 |

## 常见任务

| 任务 | 入口 |
| --- | --- |
| 测试 API 请求 | [API 请求测试](/getting-started/api/first-request) |
| 使用 SDK | [OpenAI SDK 接入](/tools/sdk/openai) |
| 请求失败 | [错误码](/help/troubleshooting/errors) |
