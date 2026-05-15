# SDK 接入总览

SDK 适合在自己的后端服务、脚本或应用中调用 Arqel。当前优先覆盖 OpenAI SDK 风格接入。

::: warning
不要在浏览器前端直接暴露 Arqel API Key。生产服务建议由后端持有 Key，再由前端请求你的后端。
:::

## 已有页面

- [OpenAI SDK](/tools/sdk/openai)

## 接入前准备

- Arqel API Key。
- Arqel Base URL。
- Arqel 控制台中显示的具体模型名。
