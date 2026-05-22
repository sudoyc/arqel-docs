# 手动配置参考

首选方式是使用 CC Switch。只有在 CC Switch 不适合当前工具、当前版本或当前环境时，再手动配置。

手动配置不是一套通用命令。不同工具读取的配置文件、环境变量和产品入口不同；同一工具在 Windows、macOS、Linux / WSL 里也可能读取不同位置。

## 先确认工具运行在哪里

| 运行位置 | `~` 指向哪里 | 常见情况 |
| --- | --- | --- |
| macOS 终端 | `/Users/<你的用户名>` | Homebrew、npm、shell 环境变量、工具用户配置 |
| Windows PowerShell | `C:\Users\<你的用户名>` | Windows 版 CLI、桌面应用、用户环境变量 |
| Linux / WSL | `/home/<你的用户名>` | Linux CLI、WSL 项目、shell 环境变量 |

Windows 和 WSL 是两个环境。Windows 里设置的变量，WSL 通常读不到；WSL 里的配置，Windows 桌面应用通常也读不到。

## 常见配置位置

| 工具 | macOS | Windows | Linux / WSL |
| --- | --- | --- | --- |
| Claude Code | `~/.claude/settings.json`、`.claude/settings.json`、`.claude/settings.local.json`、`~/.claude.json` | `%USERPROFILE%\.claude\settings.json`、项目 `.claude\settings.json`、`%USERPROFILE%\.claude.json` | `~/.claude/settings.json`、项目 `.claude/settings.json`、`~/.claude.json` |
| Gemini CLI | `~/.gemini/settings.json`、项目 `.gemini/settings.json`、`/Library/Application Support/GeminiCli/settings.json`、`.env` | `%USERPROFILE%\.gemini\settings.json`、项目 `.gemini\settings.json`、`C:\ProgramData\gemini-cli\settings.json`、`.env` | `~/.gemini/settings.json`、项目 `.gemini/settings.json`、`/etc/gemini-cli/settings.json`、`.env` |
| Codex | 当前 Codex CLI 配置、环境变量、入口自己的设置 | 当前 Codex CLI / App / IDE Extension 设置、环境变量 | 当前 Codex CLI 配置、环境变量、入口自己的设置 |
| Cursor | 应用内 Models / API / Custom API 设置 | 应用内 Models / API / Custom API 设置 | 应用内设置；Remote / WSL 项目需单独确认 |

这张表只说明“可能在哪里”。具体字段名以当前工具版本为准。

## macOS

临时变量只对当前终端窗口有效，适合确认某个 CLI 是否读取环境变量：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
export ARQEL_MODEL="<从 Arqel 控制台复制的模型名>"
```

长期使用时，再根据目标工具文档写入 `~/.zshrc`、工具 settings 文件或应用设置。修改 shell 配置后，需要重新打开终端。

## Windows

PowerShell 当前窗口临时变量：

```powershell
$env:ARQEL_API_KEY="sk-..."
$env:ARQEL_BASE_URL="https://api.arqel.dev/v1"
$env:ARQEL_MODEL="<从 Arqel 控制台复制的模型名>"
```

长期变量可以用 Windows 用户环境变量或工具自己的设置界面。`setx` 生效后要重新打开终端：

```powershell
setx ARQEL_API_KEY "sk-..."
setx ARQEL_BASE_URL "https://api.arqel.dev/v1"
setx ARQEL_MODEL "<从 Arqel 控制台复制的模型名>"
```

如果你在 Windows 版 CC Switch 里配置了 Provider，不要默认认为 WSL 里的 CLI 也会读取它。

## Linux / WSL

临时变量：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
export ARQEL_MODEL="<从 Arqel 控制台复制的模型名>"
```

长期使用时，按 shell 写入 `~/.bashrc` 或 `~/.zshrc`，或者写入目标工具自己的配置文件。

WSL 用户建议把项目放在 Linux 用户目录，例如：

```text
~/code/my-project
```

这样文件监听、权限和终端工具行为更稳定。

## OpenAI 风格变量

有些工具只识别 OpenAI 风格变量。只有在目标工具明确支持 OpenAI-compatible Provider，并且当前 Arqel 路径已验证可用时，才做映射：

```bash
export OPENAI_API_KEY="$ARQEL_API_KEY"
export OPENAI_BASE_URL="$ARQEL_BASE_URL"
```

Windows PowerShell：

```powershell
$env:OPENAI_API_KEY=$env:ARQEL_API_KEY
$env:OPENAI_BASE_URL=$env:ARQEL_BASE_URL
```

不要把这组变量当成所有 Agent 都会读取的通用配置，也不要由此推断 Arqel 已支持某个 Agent 专用或非 OpenAI 请求协议。

## 怎么验证

配置完成后，在目标工具里问一个只读问题，然后回 Arqel 控制台看请求记录。

如果工具能回复但控制台没有记录，通常说明它还在使用默认 Provider，或者你改的不是当前工具实际读取的配置。先确认产品入口和运行环境，再改配置。
