# OpenAI SDK 接入

如果你的应用使用 OpenAI SDK，并且 SDK 支持自定义 `baseURL`，通常可以较容易接入 Arqel。

::: warning
OpenAI SDK 接入依赖 OpenAI-compatible（OpenAI 兼容请求格式）行为。它不代表 Claude Code、Gemini CLI、Codex 等 Agent 产品自动兼容。Agent 接入请先阅读 [工具接入总览](/tools/) 的协议兼容说明。
:::

## 环境变量

先把 Arqel 控制台里的三件事放进环境变量：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
export ARQEL_MODEL="<从 Arqel 控制台复制的模型名>"
```

实际 Base URL 和模型名以控制台为准。

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
- 先用最小 `model` + `messages` 请求跑通，再逐步增加高级参数。
- Streaming、tool calling、JSON mode 等能力请先确认 Arqel 已支持，不要直接照搬其他平台示例。
