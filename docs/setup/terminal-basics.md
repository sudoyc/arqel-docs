# 终端基础

终端是输入命令的地方。很多 AI CLI、环境变量和 API 测试都需要在终端里完成。

你不需要成为命令行专家，只需要先掌握这一页的基础操作。

## 什么是终端

终端是一个文本窗口。你输入命令，按 Enter，电脑执行命令并显示结果。

常见终端：

- macOS：Terminal，中文系统里叫“终端”。
- Windows：Windows Terminal 或 PowerShell。
- Linux：Terminal。
- WSL：Windows Terminal 里的 Ubuntu 或其他 Linux 发行版。

## 如何打开终端

### macOS

1. 按 `Command + Space` 打开 Spotlight。
2. 输入 `Terminal` 或 `终端`。
3. 按 Enter 打开。

### Windows PowerShell

1. 打开开始菜单。
2. 搜索 `PowerShell` 或 `Windows Terminal`。
3. 打开后确认标签页显示 PowerShell。

### WSL Ubuntu

1. 先安装 WSL 和 Ubuntu。
2. 打开 Windows Terminal。
3. 新建标签页，选择 Ubuntu。

## 在哪里粘贴命令

命令要粘贴到终端提示符后面。

常见提示符长这样：

```text
$
```

或：

```text
PS C:\Users\you>
```

粘贴后按 Enter。只粘贴命令本身，不要把文档里的说明文字一起粘贴。

## 多行命令是什么

有些命令太长，会分成多行。

macOS / Linux / WSL 通常用反斜杠 `\` 表示下一行仍属于同一条命令：

```bash
echo "第一行" \
  && echo "第二行"
```

Windows PowerShell 通常用反引号 `` ` ``：

```powershell
Write-Output "第一行" `
  "第二行"
```

注意：PowerShell 的反引号后面不要加空格。

## 当前目录是什么

当前目录就是终端现在所在的文件夹。

查看当前目录：

macOS / Linux / WSL：

```bash
pwd
```

Windows PowerShell：

```powershell
Get-Location
```

进入某个目录使用 `cd`：

```bash
cd ~/code/my-project
```

PowerShell 示例：

```powershell
cd C:\Users\you\code\my-project
```

如果路径里有空格，用引号包起来：

```powershell
cd "C:\Users\you\My Projects\demo"
```

## 什么是命令找不到

如果你看到类似提示：

```text
command not found: node
```

或：

```text
'node' is not recognized as an internal or external command
```

通常表示：

- 软件还没安装。
- 安装后没有重新打开终端。
- 命令所在路径没有加入 PATH。
- 你在 PowerShell 里安装了工具，却在 WSL 里运行。

先关闭终端重新打开，再运行版本检查命令。

## 成功和失败输出的区别

成功输出通常会显示版本号或正常结果：

```bash
node -v
```

可能返回：

```text
v22.11.0
```

失败输出通常包含：

- `command not found`
- `not recognized`
- `permission denied`
- `401`
- `403`
- `429`

## 下一步

- [环境准备总览](/setup/)
- [Windows 环境选择](/setup/which-environment)
- [环境变量与安全](/setup/env-vars)
