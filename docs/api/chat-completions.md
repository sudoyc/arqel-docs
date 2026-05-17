# Chat Completions

Chat Completions（聊天补全）用于发送一组对话消息，并让指定模型返回回复。

::: warning 覆盖范围
本页只说明基础文本对话请求。不要根据 OpenAI 官方文档默认推断 Arqel 已支持 Streaming、Tool calling、JSON mode、多模态输入或其他高级字段。
:::

## Endpoint

```http
POST /chat/completions
```

完整请求地址通常是：

```text
<Base URL>/chat/completions
```

Base URL 以 Arqel 控制台为准。

## 请求头

```http
Authorization: Bearer <你的 API Key>
Content-Type: application/json
```

## 基础请求体

```json
{
  "model": "<从 Arqel 控制台复制的模型名>",
  "messages": [
    { "role": "user", "content": "你好" }
  ]
}
```

## 请求字段说明

| 字段 | 类型 | 是否必填 | 说明 |
| --- | --- | --- | --- |
| `model` | string | 是 | Arqel 控制台显示的具体模型名 / model ID |
| `messages` | array | 是 | 对话消息列表 |
| `messages[].role` | string | 是 | 消息角色；最小测试先使用 `user` |
| `messages[].content` | string | 是 | 消息内容 |

`model` 必须填写 Arqel 控制台显示的具体模型名。不要把模型家族名、其他平台别名或示例占位文字直接填入请求。

以下常见 Chat Completions 参数当前文档未确认支持状态，不要在生产配置中默认启用：

| 参数 | 当前文档状态 |
| --- | --- |
| `temperature`、`top_p` | 未确认 |
| `max_tokens` / `max_completion_tokens` | 未确认 |
| `stop`、`n` | 未确认 |
| `presence_penalty`、`frequency_penalty` | 未确认 |
| `response_format` / JSON mode | 未确认 |
| `tools` / `tool_choice` | 未确认 |

## 基础响应示例

```json
{
  "id": "chatcmpl_example",
  "object": "chat.completion",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "你好，我可以帮助你了解 Arqel。"
      }
    }
  ]
}
```

基础文本请求通常先关注：

- `choices`
- `choices[0].message.content`
- 是否有 `error` 字段

## 响应字段说明

| 字段 | 当前文档状态 | 说明 |
| --- | --- | --- |
| `choices[].message.content` | 已在示例中展示 | 基础文本回复内容 |
| `id`、`object` | 示例字段 | 可用于排查，但是否稳定以实际返回为准 |
| `model`、`created` | 未确认 | 如需记录，请做可选字段处理 |
| `choices[].finish_reason` | 未确认 | 不要依赖它做生产分支，除非完成验证 |
| `usage` | 未确认 | 计费和用量以控制台和产品说明为准 |
| 请求 ID / trace ID | 视实际返回而定 | 如果响应头、响应体或控制台提供，请记录到应用日志 |

## 高级参数边界

建议先确认基础字段和响应结构，再逐步增加参数。以下能力当前文档不承诺可用：

- `stream: true`
- tool calling / function calling
- JSON mode / structured output
- 多模态输入
- 非 Chat Completions endpoint

如果你需要这些能力，请先确认 Arqel 控制台、API 返回或产品说明是否已经明确支持。

## 错误响应

错误响应格式以 Arqel 实际返回为准。常见结构可能包含：

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid API key"
  }
}
```

常见状态码见 [错误码](/help/troubleshooting/errors)。

生产服务不要只解析 `error.message`。建议同时记录 HTTP 状态码、`error.code`、`error.message`、请求时间、模型名、Key 名称或前后几位，以及请求 ID / trace ID（如果有）。
