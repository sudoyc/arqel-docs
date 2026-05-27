# macOS 环境准备

macOS 推荐使用 Homebrew 安装基础工具。它可以统一管理 Git、Node.js、VS Code 和部分 CLI。

如果你没有用过终端，可以按 `Command + 空格` 打开 Spotlight，输入“终端”或 “Terminal”，回车打开。

## 1. 安装 Homebrew

打开终端，按 [Homebrew 官网](https://brew.sh/) 的最新命令安装。

安装完成后，根据终端提示把 `brew` 加入 `PATH`。

验证：

```bash
brew --version
```

如果提示 `command not found: brew`，通常是安装后还没按提示把 Homebrew 加到 PATH。回到安装输出，复制它给你的 `eval ...` 或 `echo ... >> ~/.zprofile` 命令执行。

## 2. 安装 Git、Node.js 和 VS Code

```bash
brew install git node
brew install --cask visual-studio-code
```

验证：

```bash
git --version
node -v
npm -v
code --version
```

建议 Node.js 使用 20+，更推荐 22。

### 这些软件分别做什么

- Git：让你看到项目改了哪些文件，也能在出错时回滚。
- Node.js：运行 JavaScript 工具，很多 AI CLI 都依赖它。
- npm：Node.js 自带的软件包安装器。
- VS Code：编辑器，也能安装 Claude、Codex 等插件。

## 3. 可选：安装 AI CLI

如果你准备使用这些 Agent 工具，可以按需安装：

```bash
npm install -g @anthropic-ai/claude-code
npm install -g @openai/codex
```

验证：

```bash
claude --version
codex --version
```

如果全局安装出现权限问题，优先考虑用 nvm 管理 Node，而不是直接长期使用 `sudo npm install -g`。

### 什么是 `npm install -g`

`npm install` 是“安装软件包”。

`-g` 表示“全局安装”，也就是安装后你可以在任何目录里输入 `claude`、`gemini`、`codex` 这些命令。

## 4. 配置 Arqel 环境变量

临时测试：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://arqel.net"
```

临时 `export` 只对当前终端窗口有效，适合短时间测试。关闭终端后变量会消失。

长期使用可以写入 `~/.zshrc`：

```bash
cat >> ~/.zshrc <<'EOF'
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://arqel.net"
EOF

source ~/.zshrc
```

### 为什么要写进 `~/.zshrc`

macOS 默认 shell 通常是 zsh。`~/.zshrc` 是 zsh 每次启动时会读取的配置文件。把 Key 写进去后，你重新打开终端也能继续使用。

如果只是临时 `export`，关闭终端后变量就没了。

::: warning
`~/.zshrc` 是本机用户可读的 shell 配置文件，适合个人开发机，不适合生产服务或共享电脑。不要把完整 API Key 发到截图、论坛或交流群里。需要别人帮你排查时，只说 Key 名称或隐藏中间部分，例如 `sk-abc...xyz`。
:::

如果不再使用这台机器，或 Key 曾经暴露在截图、录屏、终端历史里，请删除 `~/.zshrc` 中对应的两行，重新打开终端，并在 Arqel 控制台停用旧 Key、创建新 Key。

## 5. 下一步

- [创建 API Key](/getting-started/api/api-key)
- [新手入门](/getting-started/agent-quickstart)
- [Claude Code 接入](/tools/agents/claude-code)
- [Codex 接入](/tools/agents/codex-cli)
