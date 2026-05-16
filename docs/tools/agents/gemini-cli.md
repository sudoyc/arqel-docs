# Gemini CLI 接入

Gemini CLI 是 Google 的开源终端 Agent，但它也可以和 IDE 集成。官方文档提到 VS Code companion extension，以及通过 ACP 与 JetBrains、Zed 等支持 Agent Client Protocol 的 IDE 集成。

接入 Arqel 时，重点是确认 CLI 当前版本支持哪种 Provider 配置，以及 IDE 集成是否只是连接 CLI，还是另有独立配置入口。

::: info 版本说明
最后核对时间：2026-05-15。第三方工具变化很快，界面和配置键可能随版本变化；如果行为不同，请以当前官方文档为准。
:::

::: warning 协议兼容
OpenAI-compatible Base URL 不代表 Gemini CLI 一定可以直接使用。Gemini CLI 可能需要 Gemini 原生协议、版本特定的 Provider 配置，或经过验证的适配路径。接入前请先阅读 [工具接入总览](/tools/) 的协议兼容说明。
:::

本页分两种方式：

- 使用 CC Switch 管理配置。
- 手动配置环境变量或 CLI 配置。

## 先分清 Gemini CLI 的使用界面

| 使用方式 | 说明 | Arqel 接入关注点 |
| --- | --- | --- |
| Terminal CLI | 直接运行 `gemini` | 主要看 `~/.gemini/settings.json`、环境变量和 CLI 参数 |
| VS Code companion extension | 让 CLI 获得 IDE 上下文、打开 diff | 通常仍以 CLI 为核心，需要在 CLI 侧确认 Provider |
| ACP-compatible IDE | JetBrains、Zed 等通过 ACP registry 集成 | 需要确认 IDE 调用的是哪份 Gemini CLI 和哪份配置 |

::: warning
Gemini CLI 的 IDE 集成不等于“另一个独立 Gemini App”。如果你在 IDE 里运行，先确认 CLI 的当前工作目录、配置文件和环境变量是否与 IDE 工作区一致。
:::

::: details 图片占位：Gemini CLI 启动界面
这里需要一张 Gemini CLI 在终端中启动后的截图，展示可输入提示词的界面，不要包含 API Key。
:::

## 安装

先确认 Node.js 和 npm 可用：

```bash
node -v
npm -v
```

macOS / Linux / WSL：

```bash
npm install -g @google/gemini-cli
gemini --version
```

Windows PowerShell：

```powershell
npm install -g @google/gemini-cli
gemini --version
```

macOS 如果偏好 Homebrew，也可以查看当前 Homebrew 是否提供对应包。

### macOS 注意事项

- npm 安装后如果命令找不到，重开终端。
- 如果使用 Homebrew 安装 Gemini CLI，注意它和 npm 安装的版本可能不是同一份。

### Windows 注意事项

- 推荐用 PowerShell 安装和测试。
- 如果 Gemini CLI 在 Windows 原生环境里配置不生效，先确认环境变量是否在当前 PowerShell 会话中。
- 遇到复杂 shell/MCP 兼容问题，可以改用 WSL2。

### WSL 注意事项

- WSL 里安装的 `gemini` 读取 WSL 的 `~/.gemini` 和环境变量。
- Windows 版 CC Switch 写入的配置不一定会影响 WSL 里的 Gemini CLI。

## Gemini CLI 配置文件

官方配置文档说明 Gemini CLI 使用多层配置：

- User settings：`~/.gemini/settings.json`
- Project settings：项目根目录下的 `.gemini/settings.json`
- System settings：Linux `/etc/gemini-cli/settings.json`，Windows `C:\ProgramData\gemini-cli\settings.json`，macOS `/Library/Application Support/GeminiCli/settings.json`
- 环境变量和 `.env` 文件
- 命令行参数

配置优先级中，环境变量和命令行参数会覆盖 settings 文件。排查时不要只看一个文件。

## 准备工作

- Arqel API Key。
- Arqel Base URL。
- Gemini 相关的具体可用模型名。

模型名必须来自 Arqel 控制台。不要把 Gemini CLI 内置别名、模型家族名或示例占位文字直接填进 Arqel 配置。

## 常见配置方式

不同 CLI 版本可能不同，常见方式包括：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
```

如果工具要求使用 OpenAI 风格变量，可以按工具说明映射：

```bash
export OPENAI_API_KEY="$ARQEL_API_KEY"
export OPENAI_BASE_URL="$ARQEL_BASE_URL"
```

::: warning
变量名和 Provider 类型以实际 Gemini CLI 版本为准。如果你的版本不读取这些变量，不要继续反复改 Key，先查看 `gemini --help`、当前版本文档，或改用 CC Switch 做 Provider 管理。
:::

## 方式 A：使用 CC Switch

步骤：

1. 打开 CC Switch。
2. 新增 Arqel Provider，填写 API Key、Base URL、具体模型名。
3. 切换到 Gemini CLI 页面。
4. 启用 Arqel Provider。
5. 关闭正在运行的 Gemini CLI。
6. 重新打开终端。
7. 进入项目目录。
8. 运行 `gemini`。

测试问题：

```text
请用三句话说明当前项目的用途。不要修改文件。
```

::: details 图片占位：CC Switch 中 Gemini CLI Provider 配置
这里需要一张 CC Switch 的 Gemini CLI 配置截图，标注 Arqel Provider 已启用。
:::

## 方式 B：手动配置

不同 Gemini CLI 版本配置方式不同。常见方式是通过环境变量或 `~/.gemini/.env`。

macOS / Linux / WSL 临时变量：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
```

如果工具要求 OpenAI 风格变量，可以映射：

```bash
export OPENAI_API_KEY="$ARQEL_API_KEY"
export OPENAI_BASE_URL="$ARQEL_BASE_URL"
```

Windows PowerShell：

```powershell
$env:ARQEL_API_KEY="sk-..."
$env:ARQEL_BASE_URL="https://api.arqel.dev/v1"
$env:OPENAI_API_KEY=$env:ARQEL_API_KEY
$env:OPENAI_BASE_URL=$env:ARQEL_BASE_URL
```

然后运行：

```bash
gemini
```

## 测试建议

先执行只读问题，确认请求链路可用，再执行涉及文件修改的 Agent 任务。

## 确认真的走了 Arqel

Gemini CLI 能回复不一定代表它使用了 Arqel。请用控制台记录确认。

验证步骤：

1. 在 Gemini CLI 中发送只读测试问题。
2. 打开 Arqel 控制台。
3. 查看使用记录或请求记录。
4. 核对时间是否和刚才测试一致。
5. 核对 Key 名称是否是 Gemini CLI 使用的 Key。
6. 核对模型名是否是 Gemini CLI 配置的具体模型名。

::: details 图片占位：Arqel 使用记录确认 Gemini CLI 请求
这里需要一张 Arqel 控制台使用记录截图，框出请求时间、Key 名称、模型名，并说明这条记录来自 Gemini CLI 测试。
:::

## Trusted Folder 提醒

Gemini CLI 可能有可信目录机制。遇到 `.env` 或本地配置不生效时，先确认当前项目目录是否被标记为可信。

## IDE 集成提醒

官方文档提到 Gemini CLI Companion extension 可安装到 VS Code 或 VS Code compatible editors，也可通过 ACP 与支持的 IDE 集成。

如果 IDE 集成不生效，先检查：

1. 是否在 IDE 的 integrated terminal 中运行 `gemini`。
2. CLI 当前目录是否和 IDE 打开的 workspace 一致。
3. 是否运行过 `/ide enable`。
4. 是否能用 `/ide status` 看到连接状态。

## 推荐项目规则

可以在项目根目录准备 `GEMINI.md`：

```markdown
# GEMINI.md

## Project context
- What this repo is:
- How to run:
- How to test:

## Rules
- Explain before editing.
- Keep changes small.
- Never expose API keys.
```

## 常见问题

### `.env` 不生效

检查：

1. 当前目录是否可信。
2. `.env` 文件是否放在 Gemini CLI 会读取的位置。
3. 当前运行的是 Windows 版 Gemini，还是 WSL 版 Gemini。
4. 是否重启了终端。

### CC Switch 切换后没变化

检查：

1. CC Switch 是否管理的是你正在运行的那份 Gemini CLI。
2. 是否启用了 Arqel Provider。
3. 是否重新打开终端或重启 Gemini CLI。

## 官方链接

- Gemini CLI GitHub：[https://github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)
- Gemini CLI Docs：[https://www.geminicli.com/docs/](https://www.geminicli.com/docs/)
- IDE Integration：[https://www.geminicli.com/docs/ide-integration](https://www.geminicli.com/docs/ide-integration)
- Configuration：[https://www.geminicli.com/docs/reference/configuration](https://www.geminicli.com/docs/reference/configuration)
