# CC Switch 应用于各 Agent

这一页只讲怎么把 CC Switch 里的 Arqel Provider 应用到各 Agent。Arqel 文档不会默认宣称所有 Agent 都已完成实测，请用控制台使用记录确认。

## CC Switch 支持范围

CC Switch 可以管理多个 Agent 的配置。可管理配置不等于 Arqel 已验证对应协议；请把每个 Agent 当成独立接入来验证。

| Agent | 建议状态 | 验证重点 |
| --- | --- | --- |
| Claude Code | 按当前版本确认协议后验证 | 是否支持目标 Provider / Gateway / Base URL |
| Gemini CLI | 按当前版本确认 Provider 后验证 | 是否读取 CC Switch 写入的配置 |
| Codex | 区分 CLI、IDE Extension、App、Web | 当前入口是否读取同一套 Provider 配置 |
| Hermes Agent | 待验证路径 | 先确认 Hermes 官方配置项，再做只读测试 |
| OpenCode / OpenClaw | 本站暂不提供步骤 | 先确认官方配置和 Arqel 协议支持 |

## Claude Code

1. 在 CC Switch 里选择 Claude Code。
2. 启用 Arqel Provider。
3. 关闭正在运行的 Claude Code。
4. 重新打开终端。
5. 进入项目目录。
6. 运行 `claude`。
7. 发送一个只读测试问题。

测试问题：

```text
请说明当前目录是什么项目，不要修改任何文件。
```

## Gemini CLI

1. 在 CC Switch 里选择 Gemini CLI。
2. 启用 Arqel Provider。
3. 关闭正在运行的 Gemini CLI。
4. 重新打开终端。
5. 进入可信项目目录。
6. 运行 `gemini`。
7. 发送一个简单问题测试。

## Codex

1. 在 CC Switch 里选择 Codex。
2. 启用 Arqel Provider。
3. 重启你正在使用的 Codex 产品入口，例如 Codex CLI 或 IDE Extension。
4. 如果使用 VS Code 插件，也建议 Reload Window 或重启 VS Code。
5. 运行 `codex` 或执行一个只读任务。

Windows 用户如果遇到 Codex 原生环境兼容问题，建议在 WSL2 中使用。

## Hermes Agent

Hermes Agent 在 CC Switch 中可能作为可管理应用出现。不同版本或第三方文档中可能提到配置路径、dashboard 命令或多种 Provider 类型。那些信息只能说明 Hermes 侧可能存在对应配置项，不代表 Arqel 已支持这些协议，也不代表 CC Switch 已经为你的 Hermes 版本写入了正确位置。

使用前请确认：

- Hermes 官方安装来源和当前版本。
- Hermes 当前版本实际读取的配置文件或设置入口。
- Hermes 当前版本要求的 Provider 类型或协议。
- Arqel 当前是否支持该协议，或是否存在经过验证的适配层。
- CC Switch 修改的是不是 Hermes 实际读取的位置。

验证前请把 Hermes Agent 视为待验证路径，只做只读测试。更多说明见 [Hermes Agent](/tools/agents/hermes)。

## OpenCode / OpenClaw

OpenCode 和 OpenClaw 可由 CC Switch 管理时，仍然需要先确认它们当前版本的 Provider 配置和协议要求。本站暂不提供具体接入步骤。

## 先做只读测试

无论哪个 Agent，先发送只读问题，再让它修改文件。

## 确认真的走了 Arqel

1. 发送只读测试问题。
2. 打开 Arqel 控制台。
3. 查看使用记录或请求记录。
4. 核对时间、Key 名称和模型名。

::: details 图片占位：Arqel 使用记录确认 CC Switch Provider 生效
这里需要一张 Arqel 控制台使用记录截图，框出请求时间、Key 名称、模型名，并标注对应的 CC Switch Provider 名称。
:::
