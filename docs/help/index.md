# 常见问题

这页整理接入 Arqel 时最常见的问题，按主题快速分类。你可以直接跳到关心的部分，不需要按顺序阅读。

## 快速分类

- [API Key](#api-key)
- [Base URL](#base-url)
- [模型名](#模型名)
- [Windows / WSL](#windows--wsl)
- [CC Switch](#cc-switch)
- [工具接入](#cursor--claude-code--gemini-cli--codex)
- [请求失败](#请求失败)
- [安全](#安全)

## API Key

### API Key 可以公开吗？

不可以。API Key 应该只放在本地环境变量、后端服务或安全的 Secret 管理系统里。

不要把完整 Key 发给任何人。排查问题时最多提供 Key 名称、前后几位、请求时间和错误码。

### 一个 Key 可以给所有工具用吗？

技术上可能可以，但不推荐。建议按用途拆分：

- 本地测试一个 Key。
- Cursor 一个 Key。
- Claude Code / Gemini CLI / Codex 各自一个 Key。
- 生产服务单独一个 Key。

这样更容易定位用量，也方便单独停用有风险的 Key。

### Key 设置了环境变量还是无效怎么办？

先确认你设置环境变量的终端，和运行工具的终端是同一个环境。

Windows PowerShell、WSL、macOS 终端、VS Code 内置终端可能读取不同的配置。设置后建议关闭并重新打开终端。

## Base URL

### Base URL 应该填什么？

填 Arqel 控制台显示的 API 根地址。示例可能长这样：

```text
https://api.arqel.dev/v1
```

实际值以控制台为准。

### Base URL 要不要加 `/chat/completions`？

通常不要。Base URL 是根地址，请求路径由 SDK、工具或命令追加。

如果你在 API、SDK 或后端代码里手动拼完整请求，就会看到：

```text
$ARQEL_BASE_URL/chat/completions
```

### 工具里有多个 URL 字段，填哪个？

优先找这些名称：

- Base URL
- API Base
- Endpoint
- Provider URL
- OpenAI-compatible URL

如果工具写的是网页登录地址、账号登录地址或代理地址，不要随意填写，先查看该工具文档。

## 模型名

### 我应该填写什么模型名？

请填写 Arqel 控制台里显示的具体可用模型名。不同工具对模型名的字段位置不同，但不要随意编写不存在的模型名。

### 能不能填写 `default`、`best` 或模型家族名？

不能，除非它们明确作为具体模型名出现在 Arqel 控制台中。

每次请求都必须填写控制台显示的具体模型名。

### 为什么别的平台模型名不能直接用？

不同平台的模型命名、权限和路由方式不同。即使模型看起来属于同一个家族，也要以 Arqel 控制台列出的名称为准。

## Windows / WSL

### PowerShell 和 WSL 是一回事吗？

不是。PowerShell 是 Windows 原生环境，WSL 是 Windows 里的 Linux 环境。它们的环境变量、用户目录、配置文件通常不自动同步。

### 我应该用 PowerShell 还是 WSL？

如果你主要使用 Cursor 这类桌面工具，先用 PowerShell 或工具自己的设置界面。如果你要长期运行 Claude Code、Gemini CLI、Codex、MCP 或类 Linux 工具，WSL 通常更稳定。

详见 [Windows 环境选择](/setup/which-environment)。

### Windows 版 CC Switch 能管理 WSL 里的 CLI 吗？

不一定。WSL 里的 CLI 通常读取 WSL 用户目录下的配置。Windows 版 CC Switch 写入的 Windows 用户目录配置，不一定会影响 WSL。

## CC Switch

### 是否必须使用 CC Switch？

不是。只接一个工具时可以手动配置。多个 Agent 并行使用时，优先考虑 CC Switch，它可以减少重复配置和路径错误。

### CC Switch 会替我创建 Arqel Key 吗？

不会。API Key 仍然需要在 Arqel 控制台创建。

### CC Switch 会做协议转换吗？

不要默认这样理解。CC Switch 主要负责配置管理和写入。目标工具是否能使用 Arqel，仍取决于该工具当前版本支持的 Provider 类型和协议。

## Cursor / Claude Code / Gemini CLI / Codex

### Cursor 能接 Arqel 吗？

如果你的 Cursor 版本支持 OpenAI-compatible / Custom API 配置，通常更容易接入。具体字段和入口以当前 Cursor 版本为准。

### Claude Code 能直接用 OpenAI-compatible Base URL 吗？

不能直接假设。Claude Code 可能要求非 OpenAI-compatible 协议或已验证的适配路径；Arqel 是否支持该路径需要以产品确认或实测为准。

### Gemini CLI 能直接用 OpenAI-compatible Base URL 吗？

不能直接假设。Gemini CLI 可能需要 Gemini 原生协议、版本特定 Provider 配置或经过验证的适配路径；Arqel 是否支持该路径需要以产品确认或实测为准。

### Codex 为什么配置方式变化？

Codex 有 App、CLI、IDE Extension、Web/cloud 等产品入口。本地 Codex App、Codex CLI 和 Codex IDE Extension 共享同一套 Codex Provider 配置；Web/cloud 和云端集成仍要按当前官方界面单独确认。终端用户可同时查看 `codex --help`。

## 请求失败

### 请求没有返回

先看 [请求失败排查](/help/troubleshooting/)。通常和 Key、Base URL、模型名、余额或上游状态有关。

如果按文档仍然卡住，可以到交流群询问：

```text
交流群：<群号待填写>
```

### 返回 401 怎么办？

通常是 Key 无效或请求头格式错误。确认 `Authorization: Bearer <你的 API Key>` 是否正确。

### 返回 429 怎么办？

通常是额度、限流或请求过于频繁。先降低频率，检查控制台用量和余额，再重试。

### 怎么确认请求真的走了 Arqel？

发送只读测试后，打开 Arqel 控制台查看使用记录，核对时间、Key 名称、模型名和请求来源。

## 安全

### 我应该如何保护 API Key？

参见 [安全](/help/security/)。核心原则是：不要把完整 Key 放进前端代码、Git、截图或聊天记录里。

### Agent 可以直接看我的 `.env` 吗？

最好不要默认这样做。`.env` 里通常有敏感配置。只有在你明确信任 Agent、并且确实需要它处理该文件时才这么做。

### 我能给生产环境和本地环境用同一个 Key 吗？

不建议。最好分开管理本地、测试和生产 Key。

### 如果 Key 泄露了怎么办？

立即停用或删除该 Key，然后创建新 Key 并更新所有配置。详见 [安全](/help/security/)。

### Arqel 是官方模型服务吗？

不是。Arqel 是接入层，不替代官方服务，也不承诺绕过平台规则。

### 截图可以发给别人吗？

可以发打码后的截图。截图中必须隐藏：

- 完整 API Key。
- 账号敏感信息。
- 私有项目路径或客户数据。

可以保留：

- 错误码。
- 错误信息。
- Key 名称。
- 模型名。
- 请求时间。
