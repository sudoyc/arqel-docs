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

## 字段说明

| 字段 | 类型 | 是否必填 | 说明 |
| --- | --- | --- | --- |
| `model` | string | 是 | Arqel 控制台显示的具体模型名 / model ID |
| `messages` | array | 是 | 对话消息列表 |
| `messages[].role` | string | 是 | 消息角色；最小测试先使用 `user` |
| `messages[].content` | string | 是 | 消息内容 |

`model` 必须填写 Arqel 控制台显示的具体模型名。不要把模型家族名、其他平台别名或示例占位文字直接填入请求。

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

新手优先看：

- `choices`
- `choices[0].message.content`
- 是否有 `error` 字段

如果响应里还包含 `usage`、`finish_reason`、`model` 等字段，可以用于排查和记录；具体字段以实际返回为准。

## 高级参数边界

先用最小请求跑通，再逐步增加参数。以下能力当前文档不承诺可用：

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
