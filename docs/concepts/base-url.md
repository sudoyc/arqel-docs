# Base URL

Base URL 是客户端发送 API 请求的基础地址。

如果一个工具原本请求：

```text
https://api.openai.com/v1
```

接入 Arqel 后，通常会改成 Arqel 提供的地址，例如：

```text
https://api.arqel.dev/v1
```

## 它和 API Key 的区别

- Base URL 决定请求发到哪里。
- API Key 决定你是谁、是否有权限、消耗记到哪个账户或 Key 上。

## 常见错误

- Base URL 多写或少写 `/v1`。
- 工具里同时配置了多个 Provider，实际请求没有走 Arqel。
- 环境变量名称写错，导致工具仍然使用默认地址。
