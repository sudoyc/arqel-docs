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
```

如果某些工具只识别 OpenAI 风格变量，可以做映射：

```bash
OPENAI_API_KEY="$ARQEL_API_KEY"
OPENAI_BASE_URL="$ARQEL_BASE_URL"
```

## 不同平台写法

macOS / Linux / WSL：

```bash
export ARQEL_API_KEY="sk-..."
export ARQEL_BASE_URL="https://api.arqel.dev/v1"
```

Windows PowerShell：

```powershell
$env:ARQEL_API_KEY="sk-..."
$env:ARQEL_BASE_URL="https://api.arqel.dev/v1"
```

Windows 长期设置：

```powershell
setx ARQEL_API_KEY "sk-..."
setx ARQEL_BASE_URL "https://api.arqel.dev/v1"
```

## `.env` 文件建议

如果你的项目使用 `.env`：

```text
ARQEL_API_KEY=sk-...
ARQEL_BASE_URL=https://api.arqel.dev/v1
```

请确保 `.gitignore` 包含：

```text
.env
.env.*
*.key
```

## 安全原则

- 不要把 Key 写进前端代码。
- 不要把 Key 提交到 Git。
- 不要把完整 Key 发给他人排查。
- 不同工具使用不同 Key，方便定位用量。
- 怀疑泄露时，立即删除旧 Key 并创建新 Key。

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
