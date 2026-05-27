# Hermes Agent 接入

Hermes Agent 是一个需要单独确认版本、配置项和协议的 Agent 路径。本页只说明接入 Arqel 前要核对什么，以及如何用只读测试判断是否真的走了 Arqel。

如果你不是已经在使用 Hermes，建议先从 [Claude Code](/tools/agents/claude-code) 或 [Codex](/tools/agents/codex-cli) 这类更常见的 Agent 开始。

::: warning 待验证路径
不要因为 Hermes 出现在 CC Switch 中，就默认 Hermes 已经通过 Arqel 实测。请先确认 Hermes 官方安装方式、当前版本配置项和所需协议，再做只读测试。
:::

## 接入前检查

- 你安装的 Hermes Agent 版本和官方项目来源。
- Hermes 使用哪个配置文件、环境变量或 Provider 配置。
- Arqel 当前是否支持对应协议。
- CC Switch 是否已为你的 Hermes 版本写入正确配置。
- 模型名是否是 Arqel 控制台中显示的具体名称。
- 测试 Key 是否专门用于 Hermes，方便在控制台里定位请求。

如果以上任意一项不确定，不要写入长期配置。先用 CC Switch 或 Hermes 自身的临时/测试方式验证。

Hermes 当前更适合已经在使用该工具的人按版本核对配置。看到 CC Switch 里有 Hermes 入口，也只能说明它可能被管理；具体能不能接 Arqel，还要看 Hermes 当前版本和协议支持。

## 可能需要核对的本地项

不同版本的 Hermes 可能使用不同配置。常见需要核对的项包括：

| 项目 | 你要确认什么 |
| --- | --- |
| 配置路径 | Hermes 当前版本实际读取哪个配置文件；不要直接套用网上旧路径 |
| Provider 类型 | Hermes 当前版本要求哪类 Provider 或协议；这不等于 Arqel 已支持该协议 |
| Dashboard / 管理界面 | 如果当前版本提供管理界面，确认是否能看到 Provider、模型名和请求状态 |
| CC Switch 写入结果 | CC Switch 修改的是不是 Hermes 实际读取的位置 |

## 使用 CC Switch 管理

如果你通过 CC Switch 管理 Hermes：

1. 安装并打开 CC Switch。
2. 切到 Hermes Agent 应用。
3. 在 Hermes Agent 页面添加 Arqel Provider，填写 API Key、Base URL 和具体模型名。
4. 启用 Arqel Provider 或对应 routing/proxy 配置。
5. 重启 Hermes Agent。
6. 发送只读测试问题。

如果 CC Switch 页面中能看到 Hermes 但 Hermes 本身没有启动，先处理 Hermes 安装和版本问题，不要先改 Arqel Key。

只读测试示例：

```text
请说明当前项目是什么，不要修改任何文件。
```

## 确认真的走了 Arqel

1. 记录测试请求的大致时间。
2. 打开 Arqel 控制台。
3. 查看使用记录或请求记录。
4. 核对时间、Key 名称和模型名。

如果 Hermes 有回复，但 Arqel 控制台没有记录，通常说明 Hermes 仍在使用其他 Provider、本地配置没有被 CC Switch 写入、或者当前协议没有走 Arqel。

## 安装来源

请使用 Hermes 官方来源提供的安装说明。本文只覆盖接入前检查、CC Switch 管理和只读验证。

## 下一步

- [CC Switch 应用于各 Agent](/tools/cc-switch/agents)
- [工具接入总览](/tools/)
- [接入检查清单](/getting-started/troubleshooting/checklist)
