# Windows 工具接入：用 CC Switch 管理 Arqel Provider

这页保留给已经熟悉 Windows 工具的用户作参考。完全新手请先看 [新手入门：Windows 用 CC Switch 接入 Arqel](/getting-started/agent-quickstart)。

本文只补充 CC Switch 管理多个 Agent 时的判断点，不再重复每一步截图教程。

## 适合谁

| 情况 | 建议 |
| --- | --- |
| Windows 新手 | 先看 [新手入门](/getting-started/agent-quickstart) |
| Windows 用户，想尽快接入 Claude Code / Gemini CLI / Codex | 优先用 CC Switch |
| 同时使用多个 Agent | 走本教程，用 CC Switch 统一管理 |
| 只在后端代码里调用 API | 看 [API 参考](/api/) 和 [OpenAI SDK](/tools/sdk/openai) |
| 只用 Cursor 一个工具 | 可以先看 [Cursor](/tools/agents/cursor)，也可以继续用 CC Switch 管理其他 Agent |

## 准备内容

你只需要准备四样东西：

1. Windows 10 或 Windows 11。
2. CC Switch。
3. Arqel 控制台里的 API Key、Base URL、模型名。
4. 你要使用的工具，例如 Claude Code、Gemini CLI 或 Codex。

## 1. 安装 CC Switch

推荐 Windows 用户下载 `.msi` 安装包。

1. 打开 [CC Switch Releases](https://github.com/farion1231/cc-switch/releases/latest)。
2. 下载 Windows `.msi` 安装包。
3. 双击安装。
4. 从开始菜单打开 CC Switch。

如果你想看更多安装说明，参考 [CC Switch 安装](/tools/cc-switch/install)。

## 2. 准备 Arqel Provider 信息

打开 Arqel 控制台，准备：

| 字段 | 填什么 |
| --- | --- |
| API Key | 在 Arqel 控制台创建的 Key |
| Base URL | 控制台显示的 API 地址 |
| 模型名 | 控制台显示的具体可用模型名 |

模型名要复制控制台里的完整名称。不要填 `default`、`best`、模型家族名或其他工具里的别名，除非它们明确出现在 Arqel 控制台中。

## 3. 在 CC Switch 添加 Arqel Provider

在 CC Switch 中添加一个 Provider：

| 字段 | 建议值 |
| --- | --- |
| Provider 名称 | `Arqel`，或按工具拆成 `Arqel Claude` / `Arqel Gemini` |
| API Key | Arqel API Key |
| Base URL | Arqel Base URL |
| 模型名 | Arqel 控制台里的具体模型名 |
| Provider 类型 | 按目标工具选择；不确定时先看 CC Switch 当前界面说明 |

保存后，先不要一次性切到所有工具。先选一个你最常用的工具验证。

更细的字段说明见 [添加 Arqel Provider](/tools/cc-switch/provider)。

## 4. 选择要接入的工具

| 工具 | 在 CC Switch 里的操作 | 验证方式 |
| --- | --- | --- |
| Claude Code | 选择 Claude Code，启用 Arqel Provider | 重启 Claude Code，问一个只读问题 |
| Gemini CLI | 选择 Gemini CLI，启用 Arqel Provider | 重开终端，运行 Gemini CLI，问一个简单问题 |
| Codex | 选择 Codex，启用 Arqel Provider | 重启 Codex CLI / IDE Extension，执行只读任务 |
| Hermes Agent | 选择 Hermes Agent 前先确认当前 Hermes 官方配置 | 只做只读测试 |
| Cursor | Cursor 通常在编辑器内配置；是否由 CC Switch 管理以当前版本为准 | 看 Cursor 请求是否出现在 Arqel 控制台 |

::: warning
CC Switch 管理配置，不等于所有工具协议都自动兼容。每个工具都要单独验证。
:::

## 5. 重启工具并验证

切换 Provider 后，重启对应工具：

- CLI 工具：关闭终端，重新打开。
- VS Code / IDE 插件：Reload Window 或重启编辑器。
- 桌面工具：退出后重新打开。

推荐第一个测试问题：

```text
请说明当前目录是什么项目，不要修改任何文件。
```

然后打开 Arqel 控制台，核对：

- 请求时间是否对应刚才的测试。
- Key 名称是否是你给 CC Switch / 该工具配置的 Key。
- 模型名是否是你在 CC Switch 填写的模型名。

工具有回复不够。以 Arqel 控制台记录为准。

## 主流工具说明

### Claude Code

适合代码阅读、修改和项目任务。建议先在可信项目目录里做只读测试。不要一开始就让它改文件。

### Gemini CLI

适合终端和 IDE companion 工作流。Windows 用户如果遇到路径或环境变量问题，先重开终端，再确认 CC Switch 写入的是 Windows 环境还是 WSL 环境。

### Codex

Codex 有 CLI、App、IDE Extension、Web/cloud 等入口。它们不一定共享配置。你用哪个入口，就验证哪个入口。

### Cursor

Cursor 主要在编辑器设置中配置自定义 API。是否由 CC Switch 管理要看当前版本和具体入口；不要假设 Cursor 会读取终端 CLI 的配置。

### Hermes Agent

CC Switch 可以管理 Hermes Agent 配置，但 Hermes 官方配置项和 Arqel 协议支持状态需要单独确认。未确认前只做只读测试。

## 常见卡点

| 问题 | 处理 |
| --- | --- |
| 切换 Provider 后工具没变化 | 重启对应工具；CLI 要重开终端，IDE 插件要 Reload Window |
| Windows 和 WSL 混用 | Windows 版 CC Switch 不一定影响 WSL 里的 CLI；先确认工具运行在哪个环境 |
| 模型不可用 | 回到 Arqel 控制台复制具体模型名，不要手写别名 |
| 工具有回复但控制台没有记录 | 说明它可能没走 Arqel；检查 Provider 是否启用到这个工具入口 |
| 只某一个工具失败 | 不要改全部配置，先看该工具页和 CC Switch FAQ |

## 更多说明

- [CC Switch 总览](/tools/cc-switch/)
- [添加 Arqel Provider](/tools/cc-switch/provider)
- [应用于各 Agent](/tools/cc-switch/agents)
- [工具接入参考](/tools/)
- [API 参考](/api/)
