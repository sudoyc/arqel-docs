# Cursor 接入

Cursor 适合在编辑器里直接使用 AI 辅助写代码。它本质上是一个编辑器产品，不是单纯的 CLI 工具。如果你的 Cursor 配置支持自定义 OpenAI-compatible API，可以接入 Arqel。

Cursor 和命令行 Agent 不完全一样。它主要是编辑器应用，配置入口通常在设置界面里，而不是终端配置文件。即使你在 Cursor 的 integrated terminal 里运行了某个 CLI，也不代表 Cursor 自己的模型设置会读取那份 CLI 配置。

::: info Version note
Last verified: 2026-05-15. These tools change quickly. UI and configuration keys may differ by version. Always check the current official documentation when behavior differs.
:::

::: details 图片占位：Cursor 设置入口
这里需要一张 Cursor 设置页面截图，标注进入模型/API 配置的位置。
:::

## 准备工作

- 一个 Arqel API Key。
- Arqel Base URL。
- 一个 Arqel 控制台中可用的具体模型名。

## macOS / Windows / Linux 差异

Cursor 是桌面应用，三端核心配置思路一致：

1. 打开 Cursor 设置。
2. 找到模型或 API 配置。
3. 填入 API Key、Base URL、模型名。
4. 保存后重启 Cursor 或 Reload Window。

差异主要在安装方式：

- macOS：下载 `.dmg`，拖入 Applications。
- Windows：下载安装包并按提示安装。
- Linux：根据官方提供的安装包或 AppImage 安装。

如果你在 WSL 中开发代码，但 Cursor 运行在 Windows 上，需要确认 Cursor 实际读取的是 Windows 环境还是 Remote - WSL 项目环境。

## 配置思路

1. 打开 Cursor 的模型或 API 设置。
2. 找到 OpenAI-compatible / Custom API 配置项。
3. 填入 Arqel API Key。
4. 填入 Arqel Base URL。
5. 选择模型并发送测试问题。

## Cursor 和其他 Agent 的区别

| 场景 | 说明 |
| --- | --- |
| Cursor 自己的 Chat / Agent | 通常读取 Cursor 设置里的模型/API 配置 |
| Cursor integrated terminal 里的 `claude` / `gemini` / `codex` | 读取对应 CLI 的配置，不一定读取 Cursor 设置 |
| Cursor 安装 Claude Code 插件 | 需要区分 Cursor 模型设置和 Claude Code 插件设置 |
| Cursor Rules / MCP / Skills | 属于 Cursor 工作区能力，不等同于 Arqel API 配置 |

因此，如果 Cursor 内有多个 AI 入口，每个入口都要单独验证是否走 Arqel。

::: warning
不同 Cursor 版本的设置入口可能变化。如果你找不到对应字段，先查看 Cursor 当前版本设置里的 Models、API、OpenAI-compatible 或 Custom API 相关入口，再继续配置。
:::

::: details 图片占位：Cursor 自定义 API 配置表单
这里需要一张 Cursor 模型/API 设置表单截图，标注 API Key、Base URL、模型名字段。请打码 Key。
:::

## 测试问题

可以先问一个很短的问题：

```text
请用一句话解释 Base URL 是什么。
```

如果能正常回复，再尝试真实代码任务。

## 确认真的走了 Arqel

不要只看 Cursor 能回复，还要确认请求记录出现在 Arqel 控制台。

验证步骤：

1. 在 Cursor 里发送一个只读测试问题。
2. 打开 Arqel 控制台。
3. 查看使用记录或请求记录。
4. 核对时间是否和刚才测试一致。
5. 核对 Key 名称是否是 Cursor 使用的 Key。
6. 核对模型名是否是 Cursor 配置里的具体模型名。

::: details 图片占位：Arqel 使用记录确认 Cursor 请求
这里需要一张 Arqel 控制台使用记录截图，框出请求时间、Key 名称、模型名。截图中不要显示完整 API Key。
:::

## 常见问题

### Cursor 没有自定义 Base URL 入口

不同版本和订阅状态可能影响可配置项。请先确认当前 Cursor 版本是否支持 OpenAI-compatible / Custom API。

### 配置后仍然失败

按顺序检查：

1. Arqel API Key 是否可用。
2. Base URL 是否完整。
3. 模型名是否来自 Arqel 控制台。
4. Cursor 是否需要重启或 Reload Window。
5. 当前请求是否真的走了自定义 Provider。

## 官方链接

- Cursor 官网：[https://cursor.com](https://cursor.com)
- Cursor Docs：[https://docs.cursor.com](https://docs.cursor.com)
