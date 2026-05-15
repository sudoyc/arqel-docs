# Codex 接入

Codex 是 OpenAI 的代码 Agent 产品族，不只有 CLI。官方文档把 Codex 分为 App、IDE Extension、CLI、Web/cloud、GitHub / Slack / Linear 集成等 surface。

接入 Arqel 前，需要确认你正在使用的 Codex surface 是否支持自定义 Provider、API Key、Base URL 和模型配置。

::: info Version note
Last verified: 2026-05-15. These tools change quickly. UI and configuration keys may differ by version. Always check the current official documentation when behavior differs.
:::

::: warning 协议兼容
Codex 的 Provider 配置随 surface 和版本变化。OpenAI-compatible Base URL 只有在当前 Codex surface 明确支持自定义 Provider、API Key、Base URL 和模型配置时才可用。接入前请先阅读 [工具接入总览](/tools/) 的协议兼容说明。
:::

本页按 Codex 产品族说明，终端部分会明确写作 Codex CLI：

- 使用 CC Switch 管理配置。
- 手动配置环境变量或 Codex 配置。

## 先分清 Codex 产品

| 你看到的产品 | 说明 | Arqel 接入关注点 |
| --- | --- | --- |
| Codex CLI | 本地终端里的 `codex` 命令 | 是否支持自定义 Provider / API Key / Base URL |
| Codex App | 桌面 App 体验，可通过 `codex app` 或 Codex App 页面进入 | 是否支持第三方 Provider 要看 App 设置 |
| Codex IDE Extension | VS Code、Cursor、Windsurf 等编辑器插件 | 插件是否使用本地 Codex 配置或独立登录 |
| Codex Web / cloud | `chatgpt.com/codex` 的云端 Agent | 通常更依赖 OpenAI / ChatGPT 账号体系，不要默认可填 Arqel Base URL |
| GitHub / Slack / Linear 集成 | OpenAI 官方集成 | 通常是官方云端集成，不应默认走 Arqel |

::: warning
Codex CLI 能配置 Arqel，不代表 Codex App、Codex Web 或 IDE Extension 也自动使用同一套配置。每个 surface 都要单独验证请求是否出现在 Arqel 控制台。
:::

::: details 图片占位：Codex CLI 启动界面
这里需要一张 Codex CLI 在终端启动后的截图，展示可输入任务的界面，不要包含 API Key。
:::

## 安装

Codex CLI 官方 README 提供 npm、Homebrew 和 GitHub Release 二进制安装方式。先确认你要安装的是 CLI，而不是 Codex App 或 Web/cloud。

如果使用 npm，先确认 Node.js 和 npm 可用：

```bash
node -v
npm -v
```

macOS / Linux / WSL：

```bash
npm install -g @openai/codex
codex --version
```

macOS Homebrew：

```bash
brew install --cask codex
codex --version
```

Windows PowerShell：

```powershell
npm install -g @openai/codex
codex --version
```

也可以从 GitHub Releases 下载对应平台二进制。新手优先使用 npm 或 Homebrew。

如果 Windows 原生环境遇到兼容问题，建议切到 WSL2。

### macOS 注意事项

- 安装后重开终端验证 `codex --version`。
- 如果遇到权限问题，优先用 nvm 处理 Node 环境。

### Windows 注意事项

- Codex 在 Windows 原生环境中可能存在版本差异或兼容问题。
- 如果遇到登录、shell、MCP、stdio 相关异常，建议在 WSL2 中安装和运行 Codex。

### WSL 注意事项

- WSL 中的 Codex 配置与 Windows 原生 Codex 配置分离。
- 使用 VS Code 时建议通过 Remote - WSL 打开项目。

## 配置思路

如果当前版本支持 OpenAI-compatible 配置，可以使用：

```bash
export OPENAI_API_KEY="$ARQEL_API_KEY"
export OPENAI_BASE_URL="$ARQEL_BASE_URL"
```

然后在 Codex 配置中选择对应 provider 或模型。

模型名必须来自 Arqel 控制台。不要把 Codex 或 OpenAI 文档里的模型别名、模型家族名或示例占位文字直接填进 Arqel 配置。

::: warning
Codex 的认证和配置方式会随 surface 与版本变化。请以你正在使用的 Codex App、IDE Extension、CLI 或 Web/cloud 官方文档为准；终端用户可同时查看 `codex --help`。
:::

## 方式 A：使用 CC Switch

步骤：

1. 打开 CC Switch。
2. 新增 Arqel Provider，填写 API Key、Base URL、具体模型名。
3. 切换到 Codex 页面。
4. 启用 Arqel Provider。
5. 关闭正在运行的 Codex。
6. 如果使用 VS Code 插件，Reload Window 或重启 VS Code。
7. 重新打开终端。
8. 运行 `codex`。

只读测试：

```text
请列出当前项目的主要目录，并解释每个目录的作用。不要修改文件。
```

::: details 图片占位：CC Switch 中 Codex Provider 配置
这里需要一张 CC Switch 的 Codex 配置截图，标注 Arqel Provider 已启用。
:::

## 方式 B：手动配置

如果当前 Codex 版本支持 OpenAI-compatible 配置，可以设置：

macOS / Linux / WSL：

```bash
export OPENAI_API_KEY="$ARQEL_API_KEY"
export OPENAI_BASE_URL="$ARQEL_BASE_URL"
```

Windows PowerShell：

```powershell
$env:OPENAI_API_KEY=$env:ARQEL_API_KEY
$env:OPENAI_BASE_URL=$env:ARQEL_BASE_URL
```

然后按 Codex 当前版本要求选择 Provider 和模型。

## 建议先执行只读任务

```text
请阅读当前项目结构，并说明如何运行测试。不要修改文件。
```

确认请求和上下文读取正常后，再执行代码修改任务。

## 确认真的走了 Arqel

Codex 能回复不一定代表它使用了 Arqel。请用控制台记录确认。

验证步骤：

1. 在 Codex 中发送只读测试任务。
2. 打开 Arqel 控制台。
3. 查看使用记录或请求记录。
4. 核对时间是否和刚才测试一致。
5. 核对 Key 名称是否是 Codex 使用的 Key。
6. 核对模型名是否是 Codex 配置的具体模型名。

::: details 图片占位：Arqel 使用记录确认 Codex 请求
这里需要一张 Arqel 控制台使用记录截图，框出请求时间、Key 名称、模型名，并说明这条记录来自 Codex 测试。
:::

## 推荐项目规则

可以在项目根目录准备 `AGENTS.md`：

```markdown
# AGENTS.md

## How to run
- Install:
- Test:

## Rules
- Make the smallest change that fixes the issue.
- Show a plan before editing.
- Never commit secrets or credentials.
- Before finishing, run tests or explain why not.
```

## VS Code 插件

如果你使用 Codex IDE / VS Code 插件：

1. 打开 VS Code。
2. 进入 Extensions。
3. 搜索 Codex。
4. 安装对应插件。
5. 配置登录或 API Provider。
6. 如果通过 CC Switch 切换配置，建议 Reload Window。

如果插件仍然走官方账号或 ChatGPT 登录，不要假设它会读取 CLI 的环境变量。需要在插件设置或 Codex 官方 IDE 文档中确认 Provider 行为。

::: details 图片占位：VS Code 扩展市场中的 Codex 插件
这里需要一张 VS Code Extensions 页面截图，框出 Codex 插件。
:::

## 常见问题

### Codex 读不到配置

检查：

1. 当前运行的是 Windows 版还是 WSL 版 Codex。
2. CC Switch 写入的是哪套配置。
3. 是否重启 CLI 和 VS Code 插件。
4. 是否填写了 Arqel 支持的具体模型名。

### Windows 原生环境异常

优先尝试 WSL2。Codex、MCP、stdio 工具在类 Linux 环境里通常更稳定。

## 官方链接

- Codex Docs：[https://developers.openai.com/codex](https://developers.openai.com/codex)
- Codex GitHub：[https://github.com/openai/codex](https://github.com/openai/codex)
- Codex IDE：[https://developers.openai.com/codex/ide](https://developers.openai.com/codex/ide)
- Codex App：[https://chatgpt.com/codex](https://chatgpt.com/codex)
