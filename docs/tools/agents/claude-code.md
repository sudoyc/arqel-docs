# Claude Code 接入

Claude Code 是 Anthropic 的代码 Agent 产品族，可能出现在终端、IDE 插件、Desktop Code tab、Web 等入口里。接入 Arqel 时，不要只看“Claude 能不能回复”，要确认你正在使用的那个入口是否真的走了 Arqel。

::: info 版本说明
最后核对时间：2026-05-15。第三方工具变化很快，界面和配置键可能随版本变化；如果行为不同，请以当前官方文档为准。
:::

::: warning 协议边界
Claude Code 可能要求非 OpenAI-compatible 协议或经过验证的适配路径。能填写 Base URL 不代表 Arqel 已支持 Claude Code 所需协议；最终以产品确认或只读实测为准。
:::

## 先分清入口

| 入口 | 接入时重点确认 |
| --- | --- |
| Claude Code Terminal | `claude` 命令读取哪份 Provider、settings 或环境变量 |
| Claude Code IDE 插件 | 插件是否连接本地 Claude Code，以及是否继承同一套设置 |
| Claude Desktop Code tab | 是否使用 Claude Code 设置，而不是普通 Desktop Chat 的 MCP 配置 |
| Claude Web / cloud | 是否支持第三方 Provider；不要默认读取本地配置 |

Claude Code 的 settings、MCP servers、`CLAUDE.md` 等项目配置和普通 Claude Desktop MCP 教程里的 `claude_desktop_config.json` 不是一回事。看到相似文件名时，先确认它属于哪个产品入口。

## 推荐方式：CC Switch

适合 Windows 用户、同时使用多个 Agent 的用户，以及不想手动改配置文件的用户。

1. 安装并打开 CC Switch。
2. 新增 Arqel Provider，填写 API Key、Base URL 和 Arqel 控制台里的具体模型名。
3. 进入 Claude Code 配置页。
4. 启用 Arqel Provider。
5. 关闭正在运行的 Claude Code。
6. 重新打开终端或 IDE，再启动 Claude Code。

只读测试：

```text
请阅读当前目录，说明这是什么项目。不要修改任何文件。
```

如果 CC Switch 写入后没有变化，先确认当前 Claude Code 是在 Windows、macOS、Linux / WSL，还是 IDE 插件里运行。不同环境可能读取不同用户目录。

## 备用方式：手动配置

手动配置前先看 [手动配置参考](/tools/agents/manual-config)。只有在当前 Claude Code 入口明确支持第三方网关，并且 Arqel 或已验证适配层确认支持对应协议时，才按工具文档配置。

常见需要核对的位置：

| 项目 | 可能位置 |
| --- | --- |
| 用户 settings | `~/.claude/settings.json` |
| 项目 settings | `.claude/settings.json` |
| 本地项目 settings | `.claude/settings.local.json` |
| 状态和部分 MCP 配置 | `~/.claude.json` |
| 项目说明 | `CLAUDE.md` 或 `.claude/CLAUDE.md` |

Windows 中 `~` 对应 `%USERPROFILE%`。如果你在 WSL 里运行 `claude`，它读取的是 WSL 的 Linux 用户目录，不是 Windows 用户目录。

有些 Claude Code 配置路径可能出现类似变量：

```bash
export ANTHROPIC_API_KEY="$ARQEL_API_KEY"
export ANTHROPIC_BASE_URL="$ARQEL_BASE_URL"
```

这只说明 Claude Code 侧可能存在这种配置形态，不代表 Arqel 已支持 Anthropic-compatible 协议。若 Arqel 控制台没有请求记录，先停止调整 Key，回到当前版本官方文档确认 Provider / Gateway 入口。

## 验证

1. 在 Claude Code 里发送只读测试问题。
2. 打开 Arqel 控制台。
3. 查看请求记录或用量记录。
4. 核对请求时间、Key 名称和模型名。

Claude Code 能回复不等于一定走了 Arqel。以 Arqel 控制台记录为准。

## 常见问题

### `claude` 命令找不到

先确认 Claude Code 已按官方说明安装，并重新打开终端。如果是在 IDE 插件里使用，还要确认插件连接的是哪一个本地 Claude Code。

### CC Switch 切换后还是走旧配置

检查 CC Switch 是否启用了正确 Provider、是否重启 Claude Code、当前运行环境是否和 CC Switch 管理的环境一致。Windows 终端、WSL、IDE 插件可能不是同一套配置。

### 能启动但请求失败

优先检查 API Key、Base URL、模型名，以及 Claude Code 当前入口支持的 Provider / Gateway / 协议。只有在深度排障时，才需要到 API 参考区单独检查请求结构。

## 官方链接

- Claude Code Overview：[https://docs.anthropic.com/en/docs/claude-code/overview](https://docs.anthropic.com/en/docs/claude-code/overview)
- Claude Code Settings：[https://docs.anthropic.com/en/docs/claude-code/settings](https://docs.anthropic.com/en/docs/claude-code/settings)
- Claude Code Desktop：[https://docs.anthropic.com/en/docs/claude-code/desktop](https://docs.anthropic.com/en/docs/claude-code/desktop)
- Claude Desktop MCP 示例：[https://modelcontextprotocol.io/quickstart/user](https://modelcontextprotocol.io/quickstart/user)
