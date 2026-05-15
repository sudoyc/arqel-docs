# Hermes Agent 接入

Hermes Agent 是 CC Switch v3.14.0 起作为 managed app 提到的 Agent。由于 Hermes 的官方项目入口仍需单独确认，本页只记录已从 CC Switch release notes 确认的信息，以及接入 Arqel 时需要核对的边界。

如果你不是已经在使用 Hermes，建议先从 [Claude Code](/tools/agents/claude-code)、[Gemini CLI](/tools/agents/gemini-cli) 或 [Codex](/tools/agents/codex-cli) 这类更常见的 Agent 开始。

::: info Version note
Last verified: 2026-05-15. Hermes 相关信息来自 CC Switch v3.14.0 / v3.14.1 release notes。安装命令和完整配置项请以 Hermes 官方文档为准。
:::

## 已确认的信息

- CC Switch v3.14.0 将 Hermes Agent 作为第 6 个 managed app。
- CC Switch release notes 提到 Hermes 配置路径：`~/.hermes/config.yaml`。
- CC Switch release notes 提到 Hermes dashboard 命令：`hermes dashboard`。
- CC Switch release context 中提到协议：`chat_completions`、`anthropic_messages`、`codex_responses`、`bedrock_converse`。

## 接入 Arqel 前要确认

- 你安装的 Hermes Agent 版本。
- Hermes 使用哪个协议和 Provider 配置。
- Arqel 当前是否支持对应协议。
- CC Switch 是否已为你的 Hermes 版本写入正确配置。
- 模型名是否是 Arqel 控制台中显示的具体名称。

如果以上任意一项不确定，不要写入长期配置。先用 CC Switch 或 Hermes 自身的临时/测试方式验证。

::: warning
不要因为 Hermes 出现在 CC Switch 中，就默认 Hermes 已经通过 Arqel 实测。请先做只读测试，并在 Arqel 控制台核对使用记录。
:::

## 使用 CC Switch 管理

如果你通过 CC Switch 管理 Hermes：

1. 安装并打开 CC Switch。
2. 添加 Arqel Provider，填写 API Key、Base URL 和具体模型名。
3. 切到 Hermes Agent 应用。
4. 启用 Arqel Provider 或对应 routing/proxy 配置。
5. 重启 Hermes Agent。
6. 发送只读测试问题。

如果 CC Switch 页面中能看到 Hermes 但 Hermes 本身没有启动，先处理 Hermes 安装和版本问题，不要先改 Arqel Key。

只读测试示例：

```text
请说明当前工作区的目录结构，不要修改任何文件。
```

## 确认真的走了 Arqel

1. 记录测试请求的大致时间。
2. 打开 Arqel 控制台。
3. 查看使用记录或请求记录。
4. 核对时间、Key 名称和模型名。

如果 Hermes 有回复，但 Arqel 控制台没有记录，通常说明 Hermes 仍在使用其他 Provider、本地配置没有被 CC Switch 写入、或者当前协议没有走 Arqel。

## 暂不写安装命令的原因

Hermes 的官方项目入口和安装说明仍需要单独确认。为了避免把第三方工具、旧项目或同名项目写进教程，本页暂不提供 `brew`、`npm`、`pip` 或二进制安装命令。

::: details 图片占位：Arqel 使用记录确认 Hermes 请求
这里需要一张 Arqel 控制台使用记录截图，框出请求时间、Key 名称、模型名，并说明这条记录来自 Hermes Agent 测试。
:::

## 官方链接

- CC Switch v3.14.0 Release：[https://github.com/farion1231/cc-switch/releases/tag/v3.14.0](https://github.com/farion1231/cc-switch/releases/tag/v3.14.0)
- CC Switch v3.14.1 Release：[https://github.com/farion1231/cc-switch/releases/tag/v3.14.1](https://github.com/farion1231/cc-switch/releases/tag/v3.14.1)
