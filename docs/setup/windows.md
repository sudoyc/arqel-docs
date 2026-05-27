# Windows 环境准备

Windows 推荐先走原生 PowerShell / Windows Terminal。只有遇到兼容问题时，再切到 WSL2。

如果你刚开始接触命令行，可以先使用 PowerShell。它是 Windows 自带的命令行环境。

## 1. 安装 Windows Terminal

建议使用 Windows Terminal，而不是旧版命令提示符。可以从 Microsoft Store 安装。

打开方式：

1. 按 Windows 键。
2. 输入 `Terminal` 或 `PowerShell`。
3. 点击打开。

如果你看到了一个可以输入文字的窗口，就可以继续下一步。

## 2. 安装 Node.js

方式一：官网下载 LTS 安装包。

- [Node.js 官网](https://nodejs.org/)

方式二：使用 winget。

```powershell
winget install OpenJS.NodeJS.LTS
```

验证时请重新打开一个终端：

```powershell
node -v
npm -v
```

### Node.js 和 npm 是什么

- Node.js 是运行 JavaScript 工具的环境。
- npm 是 Node.js 自带的软件包安装器。
- 一些 AI CLI 会通过 npm 安装，例如 Codex CLI。Claude Code 当前官方文档优先提供原生安装脚本、Homebrew 和 WinGet 等方式。

如果 `node -v` 没有输出版本号，说明 Node.js 没安装成功，或者安装后终端没有重启。

## 3. 安装 Git

方式一：下载安装包。

- [Git for Windows](https://git-scm.com/download/win)

方式二：使用 winget。

```powershell
winget install Git.Git
```

验证：

```powershell
git --version
```

安装 Git for Windows 时，如果安装器问你很多选项，大部分保持默认即可。新手不需要逐项修改。

## 4. 安装 VS Code

方式一：下载安装包。

- [VS Code 官网](https://code.visualstudio.com/)

方式二：使用 winget。

```powershell
winget install Microsoft.VisualStudioCode
```

验证：

```powershell
code --version
```

如果 `code --version` 找不到命令，通常不影响打开 VS Code。你可以先从开始菜单打开 VS Code。后续如果需要在终端里输入 `code .`，再到 VS Code 命令面板里启用 shell 命令。

## 5. 可选：安装 AI CLI

不同工具的官方安装方式不同。下面只保留常见示例，具体请以对应工具页为准。

```powershell
npm install -g @openai/codex
```

Claude Code 在 Windows 上可参考官方 PowerShell 安装方式：

```powershell
irm https://claude.ai/install.ps1 | iex
```

验证：

```powershell
claude --version
codex --version
```

如果命令找不到，先关闭并重新打开终端，再检查对应安装器是否把命令加入了 PATH。

### PowerShell 执行策略提示

如果 PowerShell 阻止脚本运行，可能会看到执行策略相关错误。新手可以先尝试使用 Windows Terminal 重新打开一个普通 PowerShell，再执行验证命令。

如果仍然失败，建议先跳过这个 CLI，改用 Cursor、CC Switch 或已经能正常启动的 Agent 完成 Arqel 接入，再单独排查 CLI 环境。

## 6. 配置 Arqel 环境变量

PowerShell 当前会话临时设置：

```powershell
$env:ARQEL_API_KEY="sk-..."
$env:ARQEL_BASE_URL="https://arqel.net"
```

长期设置：

```powershell
setx ARQEL_API_KEY "sk-..."
setx ARQEL_BASE_URL "https://arqel.net"
```

`setx` 后需要重新打开终端才会生效。

::: warning
`setx` 会写入 Windows 用户环境变量，适合个人开发机的长期配置，但不适合生产服务、共享电脑、远程协助截图或录屏场景。生产环境请使用 Secret Manager、云平台 Secrets 或服务器侧安全环境变量。
:::

### 临时变量和长期变量的区别

- `$env:ARQEL_API_KEY="..."` 只对当前 PowerShell 窗口有效。
- `setx ARQEL_API_KEY "..."` 会写入 Windows 用户环境变量，但新打开的终端才会读取。

如果你刚设置完就验证失败，先关掉终端重新打开。

如果不再使用这台机器，或 Key 曾经暴露在截图、录屏、终端历史里，请在“系统属性 > 环境变量”里删除对应用户变量，并在 Arqel 控制台停用旧 Key、创建新 Key。

## 7. 什么时候使用 WSL2

遇到这些情况可以切到 WSL2：

- 某些 CLI 在 Windows 原生环境下不稳定。
- MCP 或 stdio 工具启动失败。
- 你需要更接近 Linux/macOS 的 shell 体验。

继续阅读 [Linux / WSL 环境准备](/setup/linux-wsl)。
