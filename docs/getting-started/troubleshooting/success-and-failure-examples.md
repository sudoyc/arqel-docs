# Agent 成功和失败示例

新手入门时，先看工具界面是否能回答只读问题，再看 Arqel 控制台是否出现请求记录。HTTP 状态码和 JSON 结构主要用于 API、SDK 或深度排障。

## Agent 接入成功

成功时通常同时满足：

- Agent 能回答只读问题。
- Arqel 控制台出现对应请求记录。
- 请求时间、Key 名称和模型名能对上。

推荐只读问题：

```text
请说明当前项目是什么，不要修改任何文件。
```

## API 成功响应参考

如果你在后端、脚本或 SDK 中调试，成功时通常会看到 HTTP 状态码 `200`，返回内容里有模型回复。

示例结构：

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

优先找：

- `choices`
- `message`
- `content`

## 401：API Key 无效

常见原因：

- API Key 复制不完整。
- Key 前后多了空格。
- `Authorization` 没有写成 `Bearer sk-...`。
- Key 已删除或被禁用。

示例结构：

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid API key"
  }
}
```

处理方式：

1. 回到 Arqel 控制台确认 Key 是否仍然存在。
2. 重新复制 API Key，并更新 Agent 或 SDK 配置。
3. 重启对应 Agent、Reload Window 或重新打开终端。
4. 如果是 API / SDK 调试，再确认请求头是 `Authorization: Bearer <你的 API Key>`。

## 403：没有权限

常见原因：

- 当前账户没有这个模型的权限。
- 当前 Key 不允许调用该资源。
- 账户状态或组织权限限制。

处理方式：

1. 回到控制台确认这个 Key 没有被停用，并且有权限调用目标模型。
2. 确认模型在当前账户可用列表中。
3. 如果权限看起来正确，联系支持并提供请求时间、模型名、错误码，不要提供完整 API Key。

## 404：路径或模型名错误

常见原因：

- Base URL 写错。
- 请求路径写错，例如少了 `/chat/completions`。
- 模型名不是控制台中的具体模型名。

处理方式：

1. 重新复制 Base URL。
2. 如果是 Agent，确认 Base URL 填在工具要求的 Base URL / Endpoint / API Base 字段里。
3. 如果是 API / SDK，检查请求路径。
4. 重新从控制台复制模型名。

## 429：额度或速率限制

常见原因：

- 请求太频繁。
- 当前额度不足。
- 达到某个模型或账户限制。

处理方式：

1. 暂停自动化 Agent，等待一段时间后重试；如果响应里有 `Retry-After`，以它为准。
2. 回到控制台查看用量、余额或限额。
3. 降低并发或请求频率，并限制自动重试次数。

## 500 / 502 / 503：服务错误

常见原因：

- Arqel 或上游模型服务临时异常。
- 网络中间链路异常。
- 请求触发了后端未处理的错误。

处理方式：

1. 稍后重试一次；自动重试请使用有限次数的指数退避。
2. 换一个控制台中可用的具体模型名测试。
3. 如果持续失败，记录请求时间、Base URL、模型名、错误码和错误信息后联系支持。

## 怎么定位错误码和错误信息

先看终端或工具界面里最明显的数字：

- `401`
- `403`
- `404`
- `429`
- `500`
- `502`
- `503`

再找 JSON 里的：

- `error.code`
- `error.message`
- `message`

向支持反馈时可以提供：

- 请求时间。
- 使用的工具。
- Base URL。
- 模型名。
- HTTP 状态码。
- 错误信息。
- 工具或 SDK 版本（如果知道）。
- 请求 ID / trace ID（如果响应或控制台提供）。

不要提供完整 API Key。

## 下一步

- [请求失败排查](/help/troubleshooting/)
- [错误码](/help/troubleshooting/errors)
- [接入检查清单](/getting-started/troubleshooting/checklist)
