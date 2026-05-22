# Gemini CLI 接入

Gemini CLI 是 Google 的终端 Agent，也可以和 VS Code companion extension、ACP-compatible IDE 等入口配合使用。接入 Arqel 时，重点是确认当前 CLI 版本支持哪种 Provider 配置，以及 IDE 集成是否读取同一份 CLI 配置。

::: info 版本说明
最后核对时间：2026-05-15。第三方工具变化很快，界面和配置键可能随版本变化；如果行为不同，请以当前官方文档为准。
:::

::: warning 协议边界
OpenAI-compatible Base URL 不代表 Gemini CLI 一定可以直接使用。Gemini CLI 可能需要 Gemini 原生协议、版本特定 Provider 配置，或经过验证的适配路径；Arqel 是否支持该路径需要以产品确认或实测为准。
:::

## 先分清入口

| 入口 | 接入时重点确认 |
| --- | --- |
| Terminal CLI | `gemini` 命令读取的 settings、环境变量和当前工作目录 |
| VS Code companion extension | 是否只是连接本地 CLI，以及 CLI 使用哪份配置 |
| ACP-compatible IDE | IDE 调用的是哪一份 Gemini CLI 和哪一份配置 |

如果你在 IDE 里运行 Gemini CLI，先确认 CLI 当前目录、环境变量和项目配置是否与 IDE 工作区一致。

## 推荐方式：CC Switch

适合 Windows 用户、同时使用多个 Agent 的用户，以及不想手动改 settings 文件的用户。

1. 打开 CC Switch。
2. 在应用切换器里选择 Gemini CLI。
3. 在 Gemini CLI 页面新增 Arqel Provider，填写 API Key、Base URL 和 Arqel 控制台里的具体模型名。
4. 保存后启用 Arqel Provider。
5. 关闭正在运行的 Gemini CLI。
6. 重新打开终端。
7. 进入项目目录，运行 `gemini`。

只读测试：

```text
请说明当前项目是什么，不要修改任何文件。
```

如果你在 WSL 里运行 `gemini`，Windows 版 CC Switch 不一定会影响 WSL 用户目录里的配置。

## 备用方式：手动配置

手动配置前先看 [手动配置参考](/tools/agents/manual-config)。Gemini CLI 常见配置来源包括：

| 配置来源 | 可能位置 |
| --- | --- |
| 用户 settings | `~/.gemini/settings.json` |
| 项目 settings | `.gemini/settings.json` |
| Linux system settings | `/etc/gemini-cli/settings.json` |
| Windows system settings | `C:\ProgramData\gemini-cli\settings.json` |
| macOS system settings | `/Library/Application Support/GeminiCli/settings.json` |
| 环境变量 | 当前 shell、系统环境变量或 `.env` |

不同版本的 Provider 字段可能不同。只有在当前 Gemini CLI 明确支持 OpenAI 风格 Provider，并且 Arqel 路径已验证可用时，才考虑类似映射：

```bash
export OPENAI_API_KEY="$ARQEL_API_KEY"
export OPENAI_BASE_URL="$ARQEL_BASE_URL"
```

Windows PowerShell：

```powershell
$env:OPENAI_API_KEY=$env:ARQEL_API_KEY
$env:OPENAI_BASE_URL=$env:ARQEL_BASE_URL
```

这些变量不是 Gemini 原生协议支持证明。若控制台没有请求记录，先查看 `gemini --help`、当前版本文档和实际读取的 settings 文件。

## 验证

1. 在 Gemini CLI 里发送只读测试问题。
2. 打开 Arqel 控制台。
3. 查看请求记录或用量记录。
4. 核对请求时间、Key 名称和模型名。

Gemini CLI 能回复不等于一定走了 Arqel。以 Arqel 控制台记录为准。

## 常见问题

### `.env` 或 settings 不生效

检查当前目录是否被 Gemini CLI 视为可信目录、配置文件是否放在 CLI 实际读取的位置、环境变量是否属于当前终端会话。

### CC Switch 切换后没变化

检查 CC Switch 是否在 Gemini CLI 页面启用了正确 Provider，管理的是 Windows 原生 Gemini CLI 还是 WSL 里的 Gemini CLI，并重新打开终端。

### IDE 集成不生效

检查是否在 IDE 的 integrated terminal 中运行 `gemini`、当前目录是否和 workspace 一致，以及 IDE companion / ACP 状态是否连接成功。

## 官方链接

- Gemini CLI GitHub：[https://github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)
- Gemini CLI Docs：[https://www.geminicli.com/docs/](https://www.geminicli.com/docs/)
- IDE Integration：[https://www.geminicli.com/docs/ide-integration](https://www.geminicli.com/docs/ide-integration)
- Configuration：[https://www.geminicli.com/docs/reference/configuration](https://www.geminicli.com/docs/reference/configuration)
