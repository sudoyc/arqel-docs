# 环境准备总览

这页告诉你用 Cursor、Claude Code、Gemini CLI、Codex、CC Switch 等工具之前，电脑需要准备到什么程度。接 Agent、接 SDK、调试 API，所需环境不一样。

如果你几乎没有编程基础，优先按 [新手入门](/getting-started/agent-quickstart) 走。环境页只解释电脑、终端和配置位置，不替代具体工具教程。

## 接 Agent 需要什么

如果你要用 Cursor、Claude Code、Gemini CLI、Codex 或 CC Switch，通常需要：

- **浏览器**：登录 Arqel 控制台，复制 API Key、Base URL 和模型名。
- **一个 Agent 工具**：例如 Cursor、Claude Code、Gemini CLI、Codex，或用 CC Switch 管理多个 Agent。
- **终端或编辑器**：CLI Agent 需要终端；Cursor 主要在编辑器设置里配置。

不同 Agent 的安装要求不同。不要一开始把所有工具都装上，先选一个工具完成接入。

## API 和 SDK 调试需要什么

后端、脚本和 SDK 用户通常需要终端、运行时环境和安全的 Key 保存方式。对应接口格式放在 [API 参考](/api/)。

## 接 SDK / Agent 时会安装什么

接入 SDK、CLI Agent 或编辑项目时，通常还会用到：

- **Node.js**：很多 AI 命令行工具依赖它运行。
- **npm**：Node.js 自带的软件包安装器，一些 AI CLI 会用它安装，例如 Gemini CLI 或 Codex CLI。
- **Git**：代码版本管理工具，用来查看修改、回滚、提交。
- **VS Code**：编辑器，用来打开项目、安装插件、配合 Agent 工作。

## 软件包、CLI、环境变量是什么意思

这些词第一次看会很陌生，可以先按下面理解：

| 名词 | 可以理解成 | 例子 |
| --- | --- | --- |
| 软件包 | 可以安装的小工具或程序 | `@google/gemini-cli` |
| 包管理器 | 帮你下载、安装、更新软件包的工具 | npm、Homebrew、winget |
| CLI | 需要在终端里输入命令使用的工具 | `gemini`、`claude`、`codex` |
| 环境变量 | 存在电脑里的配置值，程序运行时会读取 | `ARQEL_API_KEY` |
| API Key | 访问 Arqel API 的钥匙 | `sk-...` |
| Base URL | API 请求要发往的地址 | `https://api.arqel.dev/v1` |

你不需要一次理解所有概念。先按步骤安装和验证，后面遇到具体工具时会反复用到。

## 按系统选择

- [macOS 环境准备](/setup/macos)
- [Windows 环境准备](/setup/windows)
- [Linux / WSL 环境准备](/setup/linux-wsl)
- [终端基础](/setup/terminal-basics)
- [Windows 环境选择](/setup/which-environment)
- [环境变量与安全](/setup/env-vars)

## 每一步怎么判断成功

安装命令本身不重要，重要的是最后能验证成功。

| 验证命令 | 成功时大概会看到 |
| --- | --- |
| `node -v` | `v20.x.x` 或 `v22.x.x` |
| `npm -v` | 一串版本号，例如 `10.x.x` |
| `git --version` | `git version ...` |
| `code --version` | VS Code 版本号 |
| `claude --version` | Claude Code 版本号 |
| `gemini --version` | Gemini CLI 版本号 |
| `codex --version` | Codex CLI 版本号 |

如果提示“命令找不到”，通常不是你输错了，而是软件没有安装好，或者安装后的路径还没有被终端识别。先关闭终端重新打开，再验证一次。

## API 参考什么时候看

如果你是在后端服务、脚本或 SDK 里调用 Arqel，可以看 [API 参考](/api/)。如果你只是接 Agent，优先看对应工具页。

## 版本建议

| 工具 | 建议版本 | 用途 |
| --- | --- | --- |
| Node.js | 20+，推荐 22 | 安装和运行多数 AI CLI |
| Git | 最新稳定版 | 查看 diff、提交、回滚 |
| VS Code | 最新稳定版 | 编辑器和插件入口 |
| pnpm | 可选 | 如果你参与前端或文档站开发 |

::: warning
API Key 永远不要写进仓库。不要把 `.env`、截图里的完整 Key、终端历史里的 Key 发到公开渠道。
:::
