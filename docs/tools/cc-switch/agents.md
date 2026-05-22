# CC Switch 应用于各 Agent

这一页只讲怎么把 CC Switch 里的 Arqel Provider 应用到各 Agent。CC Switch 按应用管理 Provider：先选应用，再添加或启用 Provider。Arqel 文档不会默认宣称所有 Agent 都已完成实测，请用控制台使用记录确认。

## CC Switch 支持范围

CC Switch 可以管理多个 Agent 的配置。可管理配置不等于 Arqel 已验证对应协议；请把每个 Agent 当成独立接入来验证。

| Agent | 建议状态 | 验证重点 | 完整接入说明 |
| --- | --- | --- | --- |
| Claude Code | 按当前版本确认协议后验证 | 是否支持目标 Provider / Gateway / Base URL | [Claude Code 接入](/tools/agents/claude-code) |
| Gemini CLI | 按当前版本确认 Provider 后验证 | 是否读取 CC Switch 写入的配置 | [Gemini CLI 接入](/tools/agents/gemini-cli) |
| Codex | 本地 App / CLI / IDE Extension 走同一套 Codex 配置；Web / cloud 单独确认 | 是否已在 Codex 页面启用 Arqel Provider | [Codex 接入](/tools/agents/codex-cli) |
| Hermes Agent | 待验证路径 | 先确认 Hermes 官方配置项，再做只读测试 | [Hermes Agent 接入](/tools/agents/hermes) |
| OpenCode / OpenClaw | 本站暂不提供步骤 | 先确认官方配置和 Arqel 协议支持 | — |

## 通用操作流程

1. 在 CC Switch 的**应用切换器**里选择目标 Agent。
2. 在该 Agent 页面添加 Arqel Provider（API Key、Base URL、具体模型名）。
3. 启用 Arqel Provider。
4. 按目标工具要求**重启**终端、Reload Window 或重启应用。
5. 发送只读测试问题。
6. 打开 Arqel 控制台核对请求记录。

各 Agent 的具体说明和 CC Switch 操作细节见上表"完整接入说明"列。

## 先做只读测试

无论哪个 Agent，先发送只读问题，再让它修改文件。

测试问题：

```text
请说明当前项目是什么，不要修改任何文件。
```

## 确认真的走了 Arqel

1. 发送只读测试问题。
2. 打开 Arqel 控制台。
3. 查看使用记录或请求记录。
4. 核对时间、Key 名称和模型名。
