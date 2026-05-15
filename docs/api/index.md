# API 总览

Arqel API 目标是尽量兼容常见 OpenAI-style 调用方式，便于已有工具和 SDK 接入。

::: warning
每次请求都要填写 Arqel 控制台中显示的具体模型名。不要把模型家族名、其他平台别名或示例占位文字直接填入请求。
:::

## 基础信息

```text
Base URL: https://api.arqel.dev/v1
Auth: Authorization: Bearer <ARQEL_API_KEY>
```

实际 Base URL 以 Arqel 控制台为准。文档示例用于说明结构，不代表所有账号、区域或环境都使用同一个地址。

## 已整理页面

- [鉴权](/api/authentication)
- [Chat Completions](/api/chat-completions)
- [错误码](/help/troubleshooting/errors)

## Chat Completions

```http
POST /chat/completions
```

示例：

```json
{
  "model": "请替换为控制台里可用的模型名",
  "messages": [
    { "role": "user", "content": "你好" }
  ]
}
```

## 当前文档覆盖范围

这组 API 文档当前只覆盖最小可用调用：Bearer Token 鉴权和基础 Chat Completions 请求。

如果你需要 Streaming、Tool calling、Embeddings、Responses API、Images、多模态输入或模型列表接口，请以 Arqel 控制台和后端实际能力为准，不要根据 OpenAI 官方文档自行假设 Arqel 已支持。
