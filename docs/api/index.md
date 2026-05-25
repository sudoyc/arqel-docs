# API 参考

本部分面向后端、脚本和 SDK 用户，说明 Arqel 的鉴权方式、基础 Chat Completions 请求格式和调用示例。

如果你是新手，只想接入 Cursor、Claude Code、Gemini CLI、Codex 或 CC Switch，请先看 [新手入门](/getting-started/agent-quickstart)。这一部分不是 Agent 入门的必经步骤。

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

## 基础调用结构

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

## 能力矩阵

| 能力 | 文档状态 | 接入建议 |
| --- | --- | --- |
| Bearer Token 鉴权 | 已文档化 | 每个请求都带 `Authorization: Bearer <API Key>` |
| Chat Completions 基础文本请求 | 已文档化 | 使用 `model` + `messages` 作为基础结构 |
| Streaming | 未确认 | 不要默认传 `stream: true`；需要时先确认产品能力 |
| Tool calling / function calling | 未确认 | 不要照搬其他平台参数 |
| JSON mode / structured output | 未确认 | 不要默认启用；需要时先用测试 Key 验证 |
| Embeddings | 未确认 | 不要假设 `/embeddings` 可用 |
| Images / Audio / 多模态输入 | 未确认 | 以控制台和产品说明为准 |
| Responses API / Models list | 未确认 | 不要把其他平台端点直接迁移过来 |
| Agent 专用或非 OpenAI 请求协议 | 未确认 | 不要作为 Arqel 能力编写生产配置 |

“未确认”表示本站当前没有把该能力作为稳定接入面文档化。需要这些能力时，请使用独立测试 Key 验证，并等待产品或后端确认后再进入生产服务。

## 生产接入需要确认

在把 Arqel 接入生产服务前，请确认这些信息：

| 项目 | 当前文档状态 | 建议 |
| --- | --- | --- |
| 请求字段范围、默认值和最大长度 | 未完整文档化 | 先限制在本文档列出的基础字段 |
| 响应字段稳定性 | 未完整文档化 | 只依赖已验证存在的字段，其他字段做可选处理 |
| 错误对象结构 | 未完整文档化 | 同时记录 HTTP 状态码和响应中的 `error` 对象 |
| 限流和 `Retry-After` | 未完整文档化 | 对 `429` 做有限重试，不要无限重试 |
| 请求 ID / trace ID | 视实际返回而定 | 如果响应或控制台提供，请记录到应用日志 |
| 模型能力和上下文长度 | 以控制台和产品说明为准 | 不要把其他平台同名模型能力直接套用 |

## 常见任务

| 任务 | 入口 |
| --- | --- |
| 查看 API 调用示例 | [API 调用示例](/api/request-example) |
| 使用 SDK | [OpenAI SDK 接入](/tools/sdk/openai) |
| 请求失败 | [错误码](/help/troubleshooting/errors) |
