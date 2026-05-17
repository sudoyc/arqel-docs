# 环境变量与安全

多数 AI CLI 和 SDK 都支持通过环境变量读取 API Key 和 Base URL。这样可以避免把敏感信息写死在代码里。

如果你没有接触过环境变量，可以把它理解成“给程序看的系统便签”。你把 API Key 放在这个便签里，程序运行时再读取它。

## 为什么不用直接写在命令里

直接写在命令里也能运行，但有几个风险：

- 终端历史可能记录完整 Key。
- 你复制命令给别人时可能忘记隐藏 Key。
- 命令太长，容易粘贴错误。

环境变量可以降低这些风险。

## Arqel 推荐变量

```bash
ARQEL_API_KEY="sk-..."
ARQEL_BASE_URL="https://api.arqel.dev/v1"
ARQEL_MODEL="<从 Arqel 控制台复制的模型名>"
```

如果某些工具只识别 OpenAI 风格变量，可以做映射：

```bash
OPENAI_API_KEY="$ARQEL_API_KEY"
OPENAI_BASE_URL="$ARQEL_BASE_URL"
```

只在目标工具明确支持 OpenAI-compatible 配置时再映射到 `OPENAI_*`。不要把这组变量当成所有 Agent 都会读取的通用配置。

## 不同平台写法

macOS / Linux / WSL：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
export ARQEL_MODEL="<从 Arqel 控制台复制的模型名>"
```

Windows PowerShell：

```powershell
$env:ARQEL_API_KEY="sk-..."
$env:ARQEL_BASE_URL="https://api.arqel.dev/v1"
$env:ARQEL_MODEL="<从 Arqel 控制台复制的模型名>"
```

Windows 长期设置：

```powershell
setx ARQEL_API_KEY "sk-..."
setx ARQEL_BASE_URL "https://api.arqel.dev/v1"
setx ARQEL_MODEL "<从 Arqel 控制台复制的模型名>"
```

`setx` 只会影响之后新打开的终端。当前窗口不会自动更新。

::: warning
`setx` 会把值写入 Windows 用户环境变量。它适合个人开发机的长期配置，但不适合生产服务、共享电脑、远程协助截图或录屏场景。生产环境请使用 Secret Manager、云平台 Secrets 或服务器侧安全环境变量。
:::

## `.env` 文件建议

如果你的项目使用 `.env`：

```text
ARQEL_API_KEY=sk-...
ARQEL_BASE_URL=https://api.arqel.dev/v1
ARQEL_MODEL=<从 Arqel 控制台复制的模型名>
```

请确保 `.gitignore` 包含：

```text
.env
.env.*
*.key
```

`.env` 本质上仍是本地明文配置文件。它只适合本地开发或测试项目，不要提交到 Git，不要放在前端项目的可公开目录，也不要把包含完整 Key 的文件发给他人排查。

如果 Key 曾经出现在截图、共享文档、终端历史、Git 提交或远程协助画面里，请直接停用旧 Key 并创建新 Key。

## 安全原则

- 不要把 Key 写进前端代码。
- 不要把 Key 提交到 Git。
- 不要把完整 Key 发给他人排查。
- 不同工具使用不同 Key，方便定位用量。
- 怀疑泄露时，立即删除旧 Key 并创建新 Key。

## 不再使用时怎么清理

- macOS / Linux / WSL：从 `~/.zshrc`、`~/.bashrc` 或项目 `.env` 中删除对应变量行，重新打开终端。
- Windows：在“系统属性 > 环境变量”里删除对应用户变量，重新打开 PowerShell。
- 生产环境：从 Secret Manager、云平台 Secrets 或部署平台环境变量中删除，再重新部署服务。

## 怎么检查变量是否设置成功

macOS / Linux / WSL：

```bash
echo $ARQEL_BASE_URL
```

Windows PowerShell：

```powershell
echo $env:ARQEL_BASE_URL
```

检查 Key 时不要把完整 Key 打印出来。如果确实要确认，可以只看前几个字符：

macOS / Linux / WSL：

```bash
echo ${ARQEL_API_KEY:0:6}
```

Windows PowerShell：

```powershell
$env:ARQEL_API_KEY.Substring(0, 6)
```

如果提示对象为空，说明当前 PowerShell 窗口没有读到 `ARQEL_API_KEY`。重新设置变量，或打开一个新终端再试。
