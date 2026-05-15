# CC Switch 应用于各 Agent

这一页只讲怎么把 CC Switch 里的 Arqel Provider 应用到各 Agent。Arqel 文档不会默认宣称所有 Agent 都已完成实测，请用控制台使用记录确认。

## CC Switch 支持范围

根据 CC Switch README 和 release notes，它支持 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw 和 Hermes Agent。

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
3. 重启你正在使用的 Codex surface，例如 Codex CLI 或 IDE Extension。
4. 如果使用 VS Code 插件，也建议 Reload Window 或重启 VS Code。
5. 运行 `codex` 或执行一个只读任务。

Windows 用户如果遇到 Codex 原生环境兼容问题，建议在 WSL2 中使用。

## Hermes Agent

CC Switch v3.14.0+ 将 Hermes Agent 作为 managed app。已从 CC Switch release notes 确认的信息：

- Hermes 配置路径：`~/.hermes/config.yaml`
- Hermes dashboard 命令：`hermes dashboard`
- release context 中提到协议：`chat_completions`、`anthropic_messages`、`codex_responses`、`bedrock_converse`

使用前请确认 Hermes 官方安装方式和当前版本配置项。Arqel 是否已验证 Hermes Agent 接入仍需产品/后端确认。更多说明见 [Hermes Agent](/tools/agents/hermes)。

## OpenCode / OpenClaw

CC Switch README 将 OpenCode 和 OpenClaw 列为 managed apps。Arqel 文档暂不提供具体接入步骤，除非完成官方文档核对和实际链路验证。

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
