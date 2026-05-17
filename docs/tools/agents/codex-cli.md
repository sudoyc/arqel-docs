# Codex 接入

Codex 是 OpenAI 的代码 Agent 产品族，不只有 CLI。它可能出现在 Codex CLI、Codex App、IDE Extension、Web/cloud、GitHub / Slack / Linear 集成等入口里。

接入 Arqel 前，先确认你正在使用的 Codex 入口是否支持自定义 Provider、API Key、Base URL 和模型配置。

::: info 版本说明
最后核对时间：2026-05-15。第三方工具变化很快，界面和配置键可能随版本变化；如果行为不同，请以当前官方文档为准。
:::

::: warning 协议边界
OpenAI-compatible Base URL 只有在当前 Codex 入口明确支持自定义 Provider、API Key、Base URL 和模型配置时才可用。Codex CLI 能配置，不代表 Codex App、IDE Extension 或 Web/cloud 自动使用同一套配置。
:::

## 先分清入口

| 入口 | 接入时重点确认 |
| --- | --- |
| Codex CLI | 本地 `codex` 命令是否支持自定义 Provider / API Key / Base URL |
| Codex App | App 设置是否支持第三方 Provider |
| Codex IDE Extension | 插件使用本地 Codex 配置、独立登录，还是官方账号 |
| Codex Web / cloud | 通常更依赖 OpenAI / ChatGPT 账号体系，不要默认可填 Arqel Base URL |
| GitHub / Slack / Linear 集成 | 通常是官方云端集成，不应默认走 Arqel |

本文只有在明确指终端命令时才写作 Codex CLI。其他时候用 Codex 表示产品族。

## 推荐方式：CC Switch

适合 Windows 用户、IDE 用户或同时使用多个 Agent 的用户。

1. 打开 CC Switch。
2. 新增 Arqel Provider，填写 API Key、Base URL 和 Arqel 控制台里的具体模型名。
3. 进入 Codex 配置页。
4. 启用 Arqel Provider。
5. 关闭正在运行的 Codex。
6. 如果使用 IDE Extension，Reload Window 或重启编辑器。
7. 重新打开终端或对应入口。

只读测试：

```text
请列出当前项目的主要目录，并解释每个目录的作用。不要修改文件。
```

## 备用方式：手动配置

手动配置前先看 [手动配置参考](/tools/agents/manual-config)。如果当前 Codex 入口明确支持 OpenAI-compatible 第三方 Provider，可以按该入口的官方说明填写 API Key、Base URL 和模型名。

终端里常见的 OpenAI 风格变量形态如下：

```bash
export OPENAI_API_KEY="$ARQEL_API_KEY"
export OPENAI_BASE_URL="$ARQEL_BASE_URL"
```

Windows PowerShell：

```powershell
$env:OPENAI_API_KEY=$env:ARQEL_API_KEY
$env:OPENAI_BASE_URL=$env:ARQEL_BASE_URL
```

这些变量只适用于明确读取 OpenAI 风格配置的 Codex 入口。Codex App、IDE Extension、Web/cloud 不一定读取 Codex CLI 的环境变量。

## 验证

1. 在当前 Codex 入口里发送只读测试任务。
2. 打开 Arqel 控制台。
3. 查看请求记录或用量记录。
4. 核对请求时间、Key 名称和模型名。

Codex 能回复不等于一定走了 Arqel。以 Arqel 控制台记录为准，也不要把一个 Codex 入口的成功外推到另一个入口。

## 常见问题

### Codex 读不到配置

先确认当前运行的是 Codex CLI、App、IDE Extension 还是 Web/cloud；再确认它在 Windows、macOS、Linux / WSL 的哪一个环境里运行。

### IDE Extension 仍然走官方账号

不要假设它会读取 CLI 环境变量。需要在插件设置或 Codex 官方 IDE 文档中确认 Provider 行为。

### Windows 原生环境异常

如果遇到 shell、MCP、stdio 或路径相关问题，可以考虑在 WSL2 中运行 Codex CLI，并用 VS Code Remote - WSL 打开项目。

## 官方链接

- Codex Docs：[https://developers.openai.com/codex](https://developers.openai.com/codex)
- Codex GitHub：[https://github.com/openai/codex](https://github.com/openai/codex)
- Codex IDE：[https://developers.openai.com/codex/ide](https://developers.openai.com/codex/ide)
- Codex App：[https://chatgpt.com/codex](https://chatgpt.com/codex)
