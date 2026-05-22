# Codex 接入

Codex 是 OpenAI 的代码 Agent 产品族，不只有 CLI。它可能出现在 Codex CLI、Codex App、IDE Extension、Web/cloud、GitHub / Slack / Linear 集成等入口里。

接入 Arqel 前，先确认你正在使用的是本地 Codex 入口，还是 Web / cloud、GitHub、Slack、Linear 这类云端集成。

Windows 新手请按 [新手入门](/getting-started/agent-quickstart) 使用 Codex + CC Switch 接入 Arqel。本地 Codex App、Codex CLI 和 Codex IDE Extension 共享同一套 Codex Provider 配置；你可以用 Codex App 入门，也可以用 Codex CLI 做可复现的验证。

::: info 版本说明
最后核对时间：2026-05-15。第三方工具变化很快，界面和配置键可能随版本变化；如果行为不同，请以当前官方文档为准。
:::

::: warning 协议边界
OpenAI-compatible Base URL 只有在当前 Codex 入口明确支持自定义 Provider、API Key、Base URL 和模型配置时才可用。本地 Codex App、Codex CLI 和 Codex IDE Extension 共享同一套 Codex 配置；Codex Web / cloud 和云端集成不要默认套用本地配置。
:::

## 先分清入口

| 入口 | 接入时重点确认 |
| --- | --- |
| Codex App | 作为本地 Codex 入口，读取同一套 Codex Provider 配置 |
| Codex CLI | 本地 `codex` 命令读取同一套 Codex Provider 配置，便于复现和排查 |
| Codex IDE Extension | 读取同一套 Codex Provider 配置；切换后建议 Reload Window |
| Codex Web / cloud | 通常更依赖 OpenAI / ChatGPT 账号体系，不要默认可填 Arqel Base URL |
| GitHub / Slack / Linear 集成 | 通常是官方云端集成，不应默认走 Arqel |

本文只有在明确指终端命令时才写作 Codex CLI。其他时候用 Codex 表示产品族。

## 推荐方式：CC Switch

适合 Windows 用户、IDE 用户或同时使用多个 Agent 的用户。

1. 打开 CC Switch。
2. 在应用切换器里选择 Codex。
3. 在 Codex 页面新增 Arqel Provider，填写 API Key、Base URL 和 Arqel 控制台里的具体模型名。
4. 保存后启用 Arqel Provider。
5. 关闭正在运行的 Codex 入口。
6. 如果使用 Codex App，退出后重新打开。
7. 如果使用 IDE Extension，Reload Window 或重启编辑器。
8. 如果使用 Codex CLI，重新打开终端。

只读测试：

```text
请说明当前项目是什么，不要修改任何文件。
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

这些变量只适用于明确读取 OpenAI 风格配置的本地 Codex 入口。Codex App、Codex CLI 和 Codex IDE Extension 共享 Codex Provider 配置，但不等于它们都会读取你当前终端窗口里的临时环境变量；切换后请重启对应入口。

## 验证

1. 在当前 Codex 入口里发送只读测试任务。
2. 打开 Arqel 控制台。
3. 查看请求记录或用量记录。
4. 核对请求时间、Key 名称和模型名。

Codex 能回复不等于一定走了 Arqel。以 Arqel 控制台记录为准；如果你使用的是 Web / cloud 或云端集成，请单独确认它是否支持 Arqel。

## 常见问题

### Codex 读不到配置

先确认当前运行的是本地 Codex App、Codex CLI、Codex IDE Extension，还是 Web / cloud；再确认它在 Windows、macOS、Linux / WSL 的哪一个环境里运行。如果使用 CC Switch，先确认添加 Provider 时选中的是 Codex 页面。

### IDE Extension 仍然走官方账号

先 Reload Window 或重启编辑器，再确认 CC Switch 的 Codex 页面已经启用 Arqel Provider。如果仍然走官方账号，再查看当前 Codex IDE Extension 的设置和版本说明。

### Windows 原生环境异常

如果遇到 shell、MCP、stdio 或路径相关问题，可以考虑在 WSL2 中运行 Codex CLI，并用 VS Code Remote - WSL 打开项目。

## 官方链接

- Codex Docs：[https://developers.openai.com/codex](https://developers.openai.com/codex)
- Codex GitHub：[https://github.com/openai/codex](https://github.com/openai/codex)
- Codex IDE：[https://developers.openai.com/codex/ide](https://developers.openai.com/codex/ide)
- Codex App：[https://chatgpt.com/codex](https://chatgpt.com/codex)
