# 发送第一条请求

下面示例使用 OpenAI-compatible 的请求方式。实际 Base URL 和模型名以你的 Arqel 控制台为准。

::: warning
模型名请使用 Arqel 控制台中显示的具体名称。不要把其他平台里的模型别名或示例占位文字直接填入请求。
:::

这一页的目标不是让你马上写程序，而是先确认三件事：

1. API Key 是有效的。
2. Base URL 填对了。
3. 模型名可用。

只要这一条请求跑通，后面接 Cursor、Claude Code、Gemini CLI、Codex 或 SDK 都会容易很多。

## 开始前准备

你需要提前准备：

- 一个 Arqel API Key，例如 `sk-...`。
- Arqel Base URL，例如 `https://api.arqel.dev/v1`。
- 一个控制台里显示可用的具体模型名。
- 一个终端：macOS 终端、Windows PowerShell、Linux / WSL 终端都可以。

如果你还没有这些，请先阅读：

- [环境准备总览](/setup/)
- [创建 API Key](/getting-started/api/api-key)

## 1. 设置环境变量

环境变量可以避免你把 Key 直接写在命令里。

macOS / Linux / WSL：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
export ARQEL_MODEL="请替换为控制台里可用的模型名"
```

Windows PowerShell：

```powershell
$env:ARQEL_API_KEY="sk-..."
$env:ARQEL_BASE_URL="https://api.arqel.dev/v1"
$env:ARQEL_MODEL="请替换为控制台里可用的模型名"
```

::: tip
这里的 `sk-...` 和模型名都要替换成你自己的实际内容。不要连引号里的示例文字一起原样复制。
:::

## 2. 确认 cURL 可用

cURL 是一个在终端里发送网络请求的工具。

macOS 和大多数 Linux 通常自带 cURL。Windows 10/11 通常也已经内置。

验证：

```bash
curl --version
```

如果能看到版本号，就可以继续。

如果 Windows PowerShell 行为异常，可以先跳过 cURL，后续使用 OpenAI SDK 或工具内置测试；但建议优先把 cURL 跑通，因为它最直接。

## cURL 示例

macOS / Linux / WSL：

```bash
curl "$ARQEL_BASE_URL/chat/completions" \
  -H "Authorization: Bearer $ARQEL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "'"$ARQEL_MODEL"'",
    "messages": [
      { "role": "user", "content": "你好，介绍一下 Arqel" }
    ]
  }'
```

Windows PowerShell 使用 `curl.exe`，不要只写 `curl`。在 PowerShell 里，`curl` 可能是 `Invoke-WebRequest` 的别名，行为和真正的 cURL 不完全一样。

```powershell
$body = @{
  model = $env:ARQEL_MODEL
  messages = @(
    @{
      role = "user"
      content = "你好，介绍一下 Arqel"
    }
  )
} | ConvertTo-Json -Depth 5

curl.exe "$env:ARQEL_BASE_URL/chat/completions" `
  -H "Authorization: Bearer $env:ARQEL_API_KEY" `
  -H "Content-Type: application/json" `
  -d $body
```

PowerShell 多行命令末尾的反引号 `` ` `` 表示“下一行还是同一条命令”。反引号后面不要加空格，否则可能失效。

如果你不想处理 cURL，也可以使用 PowerShell 原生的 `Invoke-RestMethod`：

```powershell
$body = @{
  model = $env:ARQEL_MODEL
  messages = @(
    @{
      role = "user"
      content = "你好，介绍一下 Arqel"
    }
  )
} | ConvertTo-Json -Depth 5

Invoke-RestMethod `
  -Uri "$env:ARQEL_BASE_URL/chat/completions" `
  -Method Post `
  -Headers @{
    Authorization = "Bearer $env:ARQEL_API_KEY"
    "Content-Type" = "application/json"
  } `
  -Body $body
```

## 3. 这段请求每一部分是什么意思

```text
POST /chat/completions
```

表示你要发送一个聊天补全请求。

```text
Authorization: Bearer <你的 API Key>
```

表示用你的 Key 证明“我是有权限调用的人”。

```json
{
  "model": "模型名",
  "messages": [
    { "role": "user", "content": "你好，介绍一下 Arqel" }
  ]
}
```

表示你指定一个模型，并发送一条用户消息。

## 成功后应该看到什么

- HTTP 状态码是 `200`。
- 返回内容里有模型回复。
- 控制台中可以看到这次调用的消耗或记录。

返回内容通常是一大段 JSON。新手不需要全部看懂，先找这几个信号：

- 没有出现 `401`、`403`、`429`、`500` 等错误码。
- 返回里有 `choices` 或类似字段。
- `message.content` 或类似字段里有文字回复。

## 如果失败

优先检查：

1. API Key 是否复制完整。
2. Base URL 是否填写正确。
3. `Authorization` 头是否是 `Bearer sk-...`。
4. 模型名是否可用。
5. 账户余额或额度是否足够。

更多排查见 [成功和失败示例](/getting-started/troubleshooting/success-and-failure-examples) 和 [请求失败排查](/help/troubleshooting/)。

## 下一步

请求跑通后，你可以继续：

- [Cursor 接入](/tools/agents/cursor)
- [Claude Code 接入](/tools/agents/claude-code)
- [Gemini CLI 接入](/tools/agents/gemini-cli)
- [Codex 接入](/tools/agents/codex-cli)
- [OpenAI SDK 接入](/tools/sdk/openai)
