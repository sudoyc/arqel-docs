# OpenAI SDK 接入

如果你的应用使用 OpenAI SDK，并且 SDK 支持自定义 `baseURL`，通常可以较容易接入 Arqel。

::: warning
OpenAI SDK 接入依赖 OpenAI-compatible 行为。它不代表 Claude Code、Gemini CLI、Codex 等 Agent 产品自动兼容。Agent 接入请先阅读 [工具接入总览](/tools/) 的协议兼容说明。
:::

## JavaScript 示例

```ts
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.ARQEL_API_KEY,
  baseURL: 'https://api.arqel.dev/v1'
})

const response = await client.chat.completions.create({
  model: '请替换为控制台里可用的模型名',
  messages: [
    { role: 'user', content: '你好，介绍一下 Arqel' }
  ]
})

console.log(response.choices[0]?.message?.content)
```

## 注意事项

- 不要在浏览器前端直接暴露 API Key。
- 生产服务建议在后端调用。
- 测试环境和生产环境使用不同 Key。
- 模型名需要填写 Arqel 控制台里可用的具体名称。
- 模型名需要填写 Arqel 控制台里可用的具体名称。
