# Linux / WSL 环境准备

Linux 和 WSL 的配置方式接近。Windows 用户如果使用 WSL2，建议项目放在 Linux 文件系统中，例如 `~/code/project`，不要放在 `/mnt/c/...` 下做大量编译或测试。

WSL 可以理解成 Windows 里的 Linux 环境。它适合运行很多原本面向 Linux/macOS 的开发工具。

## 0. Windows 安装 WSL2

如果你已经在使用 Linux，可以跳过本节。

打开 Windows PowerShell 管理员窗口：

1. 按 Windows 键。
2. 输入 `PowerShell`。
3. 右键选择“以管理员身份运行”。
4. 看到管理员权限确认弹窗时，点击“是”。

然后运行：

```powershell
wsl --install -d Ubuntu
```

安装完成后重启电脑。第一次打开 Ubuntu 时，窗口会提示你等待初始化，然后创建 Linux 用户名和密码。输入密码时屏幕可能没有任何字符显示，这是正常现象。这个密码不是 Windows 密码，但执行 `sudo` 时会用到。

## 1. 安装基础依赖

Ubuntu / Debian：

```bash
sudo apt update
sudo apt install -y git curl build-essential ca-certificates
```

验证：

```bash
git --version
curl --version
```

## 2. 安装 Node.js

推荐使用 nvm：

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22
```

验证：

```bash
node -v
npm -v
```

### 什么是 nvm

nvm 是 Node Version Manager，意思是 Node.js 版本管理器。它适合 Linux / WSL，因为你可以轻松切换 Node 版本，也不容易遇到全局安装权限问题。

如果 `source ~/.bashrc` 后仍然找不到 `nvm`，关闭 Ubuntu 终端重新打开再试。

## 3. WSL 中使用 VS Code

Windows 上安装 VS Code 后，再安装扩展：

```text
Remote - WSL
```

进入 WSL 项目目录后运行：

```bash
code .
```

这样打开的 VS Code 左下角通常会显示 `WSL: Ubuntu`。这说明 VS Code 正在连接 WSL 环境，而不是直接使用 Windows 文件系统。

## 4. 可选：安装 AI CLI

```bash
npm install -g @anthropic-ai/claude-code
npm install -g @google/gemini-cli
npm install -g @openai/codex
```

验证：

```bash
claude --version
gemini --version
codex --version
```

## 5. 配置 Arqel 环境变量

临时设置：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
```

临时 `export` 只对当前 WSL 终端有效，适合短时间测试。关闭窗口后变量会消失。

长期设置到 `~/.bashrc`：

```bash
cat >> ~/.bashrc <<'EOF'
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
EOF

source ~/.bashrc
```

如果你使用的是 zsh，把 `~/.bashrc` 换成 `~/.zshrc`。

::: warning
`~/.bashrc` 和 `~/.zshrc` 是当前 Linux 用户可读的 shell 配置文件，适合个人开发机，不适合生产服务、共享机器或包含客户数据的环境。生产环境请使用 Secret Manager、云平台 Secrets 或服务器侧安全环境变量。
:::

如果不再使用这台机器，或 Key 曾经暴露在截图、录屏、终端历史里，请删除 `~/.bashrc` 或 `~/.zshrc` 中对应的两行，重新打开终端，并在 Arqel 控制台停用旧 Key、创建新 Key。

## 6. Windows 和 WSL 环境变量不会自动同步

如果你在 Windows PowerShell 用 `setx` 设置了 Key，WSL 里通常读不到。请在 WSL 的 `~/.bashrc` 或 `~/.zshrc` 中单独配置。

反过来也一样：你在 WSL 里 `export` 的变量，Windows PowerShell 也读不到。
