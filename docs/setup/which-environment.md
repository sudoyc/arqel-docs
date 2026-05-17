# Windows 环境选择

Windows 用户最容易遇到的问题是：同一台电脑里其实有多个环境。PowerShell、WSL、VS Code、Cursor、CC Switch、CLI 工具可能不在同一个地方运行。

## 先判断你在哪里运行工具

常见组合：

| 场景 | 实际环境 | 配置通常写在哪里 |
| --- | --- | --- |
| PowerShell 里运行 `claude` / `gemini` / `codex` | Windows 原生 | Windows 用户目录 |
| WSL Ubuntu 里运行 CLI | WSL Linux | WSL 用户目录 |
| VS Code Remote - WSL 打开项目 | WSL Linux | WSL 用户目录 |
| Cursor Windows 桌面应用 | Windows 原生 | Cursor 应用设置或 Windows 用户目录 |

## 什么时候用 PowerShell

适合：

- 使用 Cursor 这类 Windows 桌面应用。
- 不想安装和维护 Linux 环境。
- 只是设置简单环境变量并做短期测试。

如果你只是接 Agent，不需要先用 PowerShell 手写 API 请求。

## 什么时候用 WSL

适合：

- 长期使用 Claude Code、Gemini CLI、Codex 或其他需要 shell/MCP 的 Agent。
- 需要运行 MCP、shell 脚本或类 Linux 工具。
- 项目本身更接近 Linux 服务端环境。
- Windows 原生环境里遇到路径、权限、stdio 或依赖兼容问题。

注意：WSL 里的环境变量和 Windows PowerShell 不自动同步。

## 环境变量不会自动同步

如果你在 PowerShell 里设置：

```powershell
$env:ARQEL_API_KEY="sk-..."
```

WSL 里通常读不到它。

如果你在 WSL 里设置：

```bash
export ARQEL_API_KEY="sk-..."
```

Windows 桌面应用通常也读不到它。

## CC Switch 和 WSL

Windows 版 CC Switch 通常管理 Windows 用户目录里的配置。WSL 里的 CLI 通常读取 WSL 用户目录，例如：

```text
/home/you/.codex
/home/you/.gemini
```

所以：

- Windows 版 CC Switch 不一定能影响 WSL 里的 CLI。
- WSL 里的 CLI 可能需要在 WSL 内单独配置。
- 如果你用 VS Code Remote - WSL，优先把 CLI 和配置也放在 WSL。

## 项目路径建议

如果你主要在 WSL 里开发，建议把项目放在 WSL 用户目录：

```text
~/code/my-project
```

不建议长期放在：

```text
/mnt/c/Users/you/...
```

原因是性能、文件监听和权限行为可能更复杂。

## 推荐选择

如果你不确定：

1. 用 Cursor：先按 Cursor Windows 桌面应用配置。
2. 用 Claude Code / Gemini CLI / Codex 做项目开发：优先考虑 WSL。
3. 已经用 CC Switch 管理 Windows CLI：先确认你的 CLI 不是装在 WSL 里。
4. 后端、脚本或 SDK 调试 API：再按 API 参考选择 PowerShell 或 WSL。

## 下一步

- [终端基础](/setup/terminal-basics)
- [Windows 环境准备](/setup/windows)
- [Linux / WSL 环境准备](/setup/linux-wsl)
