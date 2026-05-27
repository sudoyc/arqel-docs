# Base URL

Base URL 是客户端发送 API 请求的基础地址。

如果一个工具原本请求：

```text
https://api.openai.com/v1
```

接入 Arqel 后，通常会改成 Arqel 控制台提供的地址，例如：

```text
https://arqel.net
```

实际值以控制台为准。

## 它和 API Key 的区别

- Base URL 决定请求发到哪里。
- API Key 决定你是谁、是否有权限、消耗记到哪个账户或 Key 上。

## Base URL、路径和完整地址

| 名称 | 示例 | 填在哪里 |
| --- | --- | --- |
| Base URL | `https://arqel.net` | SDK 或工具的 Base URL / API Base 字段 |
| 请求路径 | `/chat/completions` | cURL 手动请求或 API 参考中看到的 endpoint |
| 完整地址 | `https://arqel.net/chat/completions` | cURL 实际请求地址 |

多数 SDK 会自动拼接 endpoint。给 SDK 填 Base URL 时，通常不要再把 `/chat/completions` 放进去。

## 常见错误

- Base URL 多写了 `/chat/completions`。
- 把完整地址填进只需要 Base URL 的字段，导致路径重复。
- 工具里同时配置了多个 Provider，实际请求没有走 Arqel。
- 环境变量名称写错，导致工具仍然使用默认地址。
- 在 PowerShell 设置了环境变量，却在 WSL 里运行工具；两边配置通常不自动同步。
