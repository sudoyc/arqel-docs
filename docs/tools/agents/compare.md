# 工具对比

这页帮助你快速选工具。没有绝对最好，只有最适合你的工作流。

## 对比表

::: warning
下表说明工具和产品入口差异，不代表 Arqel 已验证所有协议。每个工具都要先做只读测试，并回到 Arqel 控制台核对请求记录。
:::


| 工具/产品族 | 常见产品入口 | 最适合谁 | Arqel 接入风险 |
| --- | --- | --- | --- |
| Cursor | 桌面编辑器、Agent、Rules、MCP、Skills | 喜欢在编辑器里直接改代码的人 | Cursor 自己的设置、integrated terminal 里的 CLI、插件配置可能不是同一套 |
| Claude Code | Terminal、IDE、Desktop Code tab、Web | 需要跨终端、IDE、桌面 App 做代码任务的人 | 可能要求非 OpenAI-compatible 协议或已验证适配路径 |
| Gemini CLI | Terminal、VS Code companion、ACP-compatible IDE | 需要 Gemini 风格终端/IDE 工作流的人 | IDE 集成通常连接 CLI，需要确认 CLI 配置和 IDE 工作区一致 |
| Codex | CLI、App、IDE Extension、Web/cloud、集成 | OpenAI 生态代码 Agent 用户 | Codex CLI 可配置不代表 App/Web/IDE 插件自动使用同一 Provider |
| Hermes Agent | Hermes、CC Switch managed app | 已在使用 Hermes 或通过 CC Switch 管理 Hermes 的人 | Hermes 官方配置和 Arqel 协议支持仍需确认 |
| OpenCode | CC Switch managed app | 已使用 OpenCode 工作流的人 | Arqel 专属步骤未验证 |
| OpenClaw | CC Switch managed app | 已使用 OpenClaw 工作流的人 | Arqel 专属步骤未验证 |
| OpenAI SDK | 后端服务、脚本、应用 | 要在自己的应用里调用模型的人 | 不要把 Key 放在浏览器前端 |
| CC Switch | 桌面管理工具 | 同时管理多个 Agent 配置的人 | 管理配置不等于所有协议都已通过 Arqel 实测 |

## 怎么选

- 你是第一次接触 AI 工具：先看 Cursor 或 OpenAI SDK。
- 你更习惯终端：先看 Claude Code、Gemini CLI 或 Codex。
- 你会切换多个 Agent：先看 CC Switch。
- 你要做自己的后端服务：先看 OpenAI SDK。
- 你已经在用 Hermes、OpenCode 或 OpenClaw：先确认官方配置方式和 Arqel 协议支持，再做只读测试。
- 你使用桌面 App、网页端或 IDE 插件：先确认它是否真的读取 CLI/本地配置。

## 选择提示

1. 先确认你使用的是 CLI、桌面 App、网页端、IDE 插件还是云端 Agent。
2. 再确认这个产品入口是否支持自定义 Provider / Base URL / API Key。
3. 再确认你是否要同时管理多个工具。
4. 最后再看对应工具是否当前版本支持你需要的协议。

::: warning
工具是否能接 Arqel，不只看是否能填 Base URL。还要看当前版本支持的 Provider 类型和协议。
:::
