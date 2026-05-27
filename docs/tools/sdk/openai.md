# OpenAI SDK 接入

如果你的应用使用 OpenAI SDK，并且 SDK 支持自定义 `baseURL`，通常可以较容易接入 Arqel。

::: warning
OpenAI SDK 接入依赖 OpenAI-compatible（OpenAI 兼容请求格式）行为。它不代表 Claude Code、Codex 等 Agent 产品自动兼容。Agent 接入请先阅读 [工具接入总览](/tools/) 的协议兼容说明。
:::

## 环境变量

先把 Arqel 接入三要素放进环境变量：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://arqel.net"
export ARQEL_MODEL="<从 Arqel 控制台复制的模型名>"
```

实际 Base URL 和模型名以控制台为准。

## SDK 版本

示例假设你使用的 OpenAI SDK 支持自定义 `baseURL` / `base_url`。不同 SDK 大版本的构造参数和错误类型可能不同，请先确认当前项目安装的 SDK 文档。

常见安装方式：

```bash
npm install openai
```

```bash
pip install openai
```

## JavaScript 示例

```ts
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.ARQEL_API_KEY,
  baseURL: process.env.ARQEL_BASE_URL
})

const response = await client.chat.completions.create({
  model: process.env.ARQEL_MODEL!,
  messages: [
    { role: 'user', content: '你好，介绍一下 Arqel' }
  ]
})

console.log(response.choices[0]?.message?.content)
```

## Python 示例

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["ARQEL_API_KEY"],
    base_url=os.environ["ARQEL_BASE_URL"],
)

response = client.chat.completions.create(
    model=os.environ["ARQEL_MODEL"],
    messages=[{"role": "user", "content": "你好，介绍一下 Arqel"}],
)

print(response.choices[0].message.content)
```

## 注意事项

- 不要在浏览器前端直接暴露 API Key。
- 生产服务建议在后端调用，并由你的后端做用户鉴权和限流。
- 测试环境和生产环境使用不同 Key。
- 模型名需要填写 Arqel 控制台里可用的具体名称。
- 先用最小 `model` + `messages` 请求确认结构，再逐步增加高级参数。
- Streaming、tool calling、JSON mode 等能力请先确认 Arqel 已支持，不要直接照搬其他平台示例。

## 生产最小要求

生产服务至少应补齐：

- 请求超时，避免调用长期挂起。
- 对 `429` 和临时 `5xx` 做有限重试，并设置最大重试次数。
- 对 `401`、`403` 不自动重试，优先检查 Key 和权限。
- 日志中脱敏 `Authorization`、API Key、Cookie、用户隐私内容和完整 prompt。
- 记录请求时间、模型名、HTTP 状态码、错误信息、SDK 版本、请求 ID / trace ID（如果有）。
- 前端只调用你自己的后端，不直接调用 Arqel。
