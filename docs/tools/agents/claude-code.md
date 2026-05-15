# Claude Code 接入

Claude Code 是 Anthropic 的代码 Agent，不只存在于命令行。官方文档描述的 surface 包括 Terminal CLI、VS Code / IDE 插件、Claude Desktop 的 Code tab、Web、JetBrains 等。

接入 Arqel 时，重点不是“Claude 能不能回复”，而是你当前使用的 Claude Code surface 是否支持第三方 Provider、自定义 Base URL、API Key 和具体模型名。

::: info Version note
Last verified: 2026-05-15. These tools change quickly. UI and configuration keys may differ by version. Always check the current official documentation when behavior differs.
:::

::: warning 协议兼容
Claude Code 通常需要 Anthropic-compatible 支持或经过验证的适配路径。OpenAI-compatible Base URL 不代表 Claude Code 一定可以直接使用。接入前请先阅读 [工具接入总览](/tools/) 的协议兼容说明。
:::

本页分两种方式：

- 使用 CC Switch 管理配置。
- 手动配置环境变量或工具配置。

如果你同时使用多个 Agent，建议优先读 [CC Switch 使用教程](/tools/cc-switch/)。

::: details 图片占位：Claude Code 在终端中的启动界面
这里需要一张 Claude Code 启动后的终端截图，展示已经进入 Claude Code 交互界面。截图中不要包含 API Key。
:::

## 先分清 Claude 产品

| 你看到的产品 | 说明 | Arqel 接入关注点 |
| --- | --- | --- |
| Claude Code Terminal | 在终端里运行 `claude` | 是否支持第三方 Provider / Base URL / 环境变量 |
| Claude Code IDE 插件 | VS Code、Cursor、JetBrains 等 IDE 中的 Claude Code | 插件是否连接本地 Claude Code，以及是否继承同一套 Claude Code 设置 |
| Claude Desktop 的 Code tab | Claude 桌面 App 中的软件开发界面 | 官方称属于 Claude Code surface，settings、CLAUDE.md、MCP servers 可跨 surface 生效 |
| Claude Desktop Chat | 普通 Claude 桌面聊天和 MCP 使用场景 | 传统 MCP 示例使用 `claude_desktop_config.json`，不要直接等同于 Claude Code 设置 |
| Claude Web / claude.ai/code | 浏览器里的 Claude Code | 是否支持第三方 Provider 需要单独确认 |

::: warning
Claude Code 官方文档说明 Claude Code 的多个 surface 使用同一底层 Claude Code engine，`CLAUDE.md`、settings、MCP servers 可跨 surface 生效。但 MCP 官方给 Claude Desktop 的传统示例仍使用 `~/Library/Application Support/Claude/claude_desktop_config.json` 或 `%APPDATA%\Claude\claude_desktop_config.json`。不要把这两个配置文件路径混成一个。
:::

## 安装 Claude Code CLI

官方文档当前推荐原生安装脚本、Homebrew 或 WinGet。Node.js / npm 安装方式可能仍能在一些版本中看到，但新手应优先按官方当前安装页操作。

macOS / Linux / WSL 原生安装：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell：

```powershell
irm https://claude.ai/install.ps1 | iex
```

Windows CMD：

```batch
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

macOS Homebrew：

```bash
brew install --cask claude-code
```

Windows WinGet：

```powershell
winget install Anthropic.ClaudeCode
```

安装后验证：

macOS / Linux / WSL：

```bash
claude --version
```

Windows PowerShell：

```powershell
claude --version
```

### macOS 注意事项

- 推荐先用 Homebrew 或 nvm 安装 Node.js。
- 如果 `npm install -g` 权限失败，优先处理 Node 安装方式，不建议长期依赖 `sudo`。
- 安装后如果 `claude` 命令找不到，重开终端再试。

### Windows 注意事项

- 推荐在 Windows Terminal / PowerShell 中安装。
- Windows 原生安装建议同时安装 Git for Windows，这样 Claude Code 可以使用 Bash tool；WSL 环境不需要 Git for Windows。
- 安装后务必重新打开终端。
- 如果后续涉及复杂 MCP 或 shell 工具，遇到兼容问题时再考虑 WSL2。

### WSL 注意事项

- 如果你在 WSL 里安装 Claude Code，就要在 WSL 里配置 Key。
- Windows PowerShell 里的环境变量不会自动同步到 WSL。
- 项目建议放在 `~/code/...`，不要放在 `/mnt/c/...`。

## 适用场景

- 在终端里让 Agent 阅读、修改和解释项目代码。
- 做代码审查、错误排查、重构建议。
- 执行多步骤开发任务。

## 配置要点

- API Key 使用 Arqel 创建的 Key。
- Base URL 使用 Arqel 提供的地址。
- 模型名使用 Arqel 控制台中显示的具体名称，并按工具支持情况填写。

模型名请使用 Arqel 控制台中显示的具体名称，并按 Claude Code 当前 surface 支持的字段填写。

常见环境变量形态：

```bash
export ANTHROPIC_API_KEY="$ARQEL_API_KEY"
export ANTHROPIC_BASE_URL="$ARQEL_BASE_URL"
```

::: warning
Claude Code 的配置能力会随版本变化。请以当前版本官方文档为准确认 Base URL / Gateway 配置项，以及它需要的是 Anthropic-compatible 还是其他已验证的适配路径。
:::

## Claude Code 配置文件

官方 settings 文档中列出的 Claude Code 配置范围包括：

- User settings：`~/.claude/settings.json`
- Project settings：`.claude/settings.json`
- Local project settings：`.claude/settings.local.json`
- 其他状态和 MCP 配置：`~/.claude.json`
- Project MCP servers：`.mcp.json`
- 项目说明：`CLAUDE.md` 或 `.claude/CLAUDE.md`

Windows 中 `~/.claude` 对应 `%USERPROFILE%\.claude`。

如果你使用 Claude Desktop 的普通 Chat + MCP 教程，看到的可能是 `claude_desktop_config.json`。那是 Claude Desktop MCP 配置路径，不应直接当作 Claude Code 的 Provider 配置路径。

## 方式 A：使用 CC Switch

适合多工具用户。

步骤：

1. 安装并打开 CC Switch。
2. 新增 Arqel Provider。
3. Provider 中填写 Arqel API Key、Base URL、具体模型名。
4. 切到 Claude Code 页面。
5. 启用 Arqel Provider。
6. 关闭正在运行的 Claude Code。
7. 重新打开终端，进入项目目录。
8. 运行 `claude`。

只读测试：

```text
请阅读当前目录，说明这是什么项目。不要修改任何文件。
```

::: details 图片占位：CC Switch 中 Claude Code Provider 配置
这里需要一张 CC Switch 的 Claude Code 配置截图，标注 Arqel Provider 已启用。
:::

## 方式 B：手动配置

如果当前 Claude Code 版本支持通过环境变量指定网关，可以按工具文档配置类似变量：

macOS / Linux / WSL：

```bash
export ANTHROPIC_API_KEY="$ARQEL_API_KEY"
export ANTHROPIC_BASE_URL="$ARQEL_BASE_URL"
```

Windows PowerShell：

```powershell
$env:ANTHROPIC_API_KEY=$env:ARQEL_API_KEY
$env:ANTHROPIC_BASE_URL=$env:ARQEL_BASE_URL
```

然后运行：

```bash
claude
```

::: warning
不同版本 Claude Code 对 Base URL / Gateway 的支持方式可能不同。若命令无法识别，请以官方文档和当前版本帮助信息为准。
:::

## VS Code 插件

如果你使用 Claude Code 的 VS Code 插件：

1. 打开 VS Code。
2. 进入 Extensions。
3. 搜索 Claude Code。
4. 安装插件。
5. 按插件提示登录或连接本地 CLI。
6. 如果刚通过 CC Switch 切换 Provider，建议执行 Reload Window 或重启 VS Code。

官方文档还说明 Claude Code 可安装到 Cursor。此时要区分两件事：Cursor 自己的模型/API 设置，和 Claude Code 插件连接的 Claude Code 设置。

::: details 图片占位：VS Code 扩展市场中的 Claude Code 插件
这里需要一张 VS Code Extensions 页面截图，框出 Claude Code 插件。
:::

## 建议先测试

在真实项目里执行复杂任务前，先让 Agent 回答一个不改文件的问题：

```text
请说明当前目录下 package.json 的 scripts 含义，不要修改文件。
```

确认请求能正常返回后，再授权它进行代码修改。

## 确认真的走了 Arqel

Claude Code 能回复不一定代表它使用了 Arqel。请用控制台记录确认。

验证步骤：

1. 在 Claude Code 中发送只读测试问题。
2. 打开 Arqel 控制台。
3. 查看使用记录或请求记录。
4. 核对时间是否和刚才测试一致。
5. 核对 Key 名称是否是 Claude Code 使用的 Key。
6. 核对模型名是否是 Claude Code 配置的具体模型名。

::: details 图片占位：Arqel 使用记录确认 Claude Code 请求
这里需要一张 Arqel 控制台使用记录截图，框出请求时间、Key 名称、模型名，并说明这条记录来自 Claude Code 测试。
:::

## 推荐项目规则

在项目根目录准备 `CLAUDE.md`，写清楚：

```markdown
# CLAUDE.md

## Project
- Tech stack:
- How to run tests:

## Rules
- Prefer small, reviewable diffs.
- Do not commit secrets.
- Before finishing, show changed files and verification results.
```

## 常见问题

### `claude` 命令找不到

先检查：

```bash
node -v
npm -v
```

再重新安装 Claude Code，并重开终端。

### 切换 CC Switch 后还是走旧配置

检查：

1. CC Switch 是否启用了正确 Provider。
2. 是否重启 Claude Code。
3. 当前是在 macOS/Windows 终端，还是 WSL 终端。
4. 你安装的 Claude Code 是否和 CC Switch 管理的是同一套用户目录。
5. 你当前使用的是 Terminal、IDE 插件、Desktop Code tab，还是普通 Claude Desktop Chat。

### 能启动但请求失败

优先检查 Arqel API Key、Base URL、模型名。不要先怀疑 Agent，先用 [发送第一条请求](/getting-started/api/first-request) 验证 API 本身可用。

## 官方链接

- Claude Code Overview：[https://docs.anthropic.com/en/docs/claude-code/overview](https://docs.anthropic.com/en/docs/claude-code/overview)
- Claude Code Settings：[https://docs.anthropic.com/en/docs/claude-code/settings](https://docs.anthropic.com/en/docs/claude-code/settings)
- Claude Code Desktop：[https://docs.anthropic.com/en/docs/claude-code/desktop](https://docs.anthropic.com/en/docs/claude-code/desktop)
- Claude Desktop MCP 示例：[https://modelcontextprotocol.io/quickstart/user](https://modelcontextprotocol.io/quickstart/user)
