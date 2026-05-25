# CC Switch 按应用添加 Arqel Provider

这一页只讲怎么把 Arqel 加进 CC Switch。CC Switch 的 Provider 是按应用管理的：先选择 Codex、Claude Code、Gemini CLI 等目标应用，再在当前应用页面添加 Provider。

## Arqel 接入三要素

- Arqel API Key。
- Arqel Base URL。
- 一个具体可用的模型名。

这些信息都以 Arqel 控制台当前显示为准。API Key 只复制到本机工具或安全配置里，不要放进截图、群聊或共享文档。

## 先选择应用

在 CC Switch 顶部应用切换器里选择你要接入的工具：

| 你要接入 | 先选择 |
| --- | --- |
| Codex CLI | Codex |
| Claude Code | Claude Code |
| Gemini CLI | Gemini CLI |
| OpenCode / OpenClaw | 对应应用 |

切换后，Provider 列表会显示当前应用的 Provider。应用专属 Provider 只作用于当前选中的应用；如果你在 Claude Code 页面添加 Provider，不会自动变成 Codex 的 Provider。

切换后请看页面标题、当前应用标签或 Provider 列表范围，确认你正在编辑目标应用。不要只凭窗口里曾经出现过某个应用名称判断当前页面。

## 新增 Provider

不同版本界面文字可能略有差异，但核心字段通常类似：

| 字段 | 填什么 |
| --- | --- |
| Provider 名称 | `Arqel` 或 `Arqel Claude` |
| API Key | Arqel 控制台创建的 Key |
| Base URL | Arqel 控制台提供的 Base URL |
| 模型名 | 控制台里可用的具体模型名 |
| Provider 类型 | 按目标工具和 CC Switch 当前界面选择；如果该类型代表协议，必须先确认 Arqel 和目标工具都支持 |

::: warning Provider 类型不是协议转换承诺
在 CC Switch 中看到 Claude、OpenAI-compatible、Gemini 等类型时，不要理解为 Arqel 自动支持这些协议。Provider 类型必须同时满足两件事：

1. 目标工具当前版本会读取这个 Provider 类型。
2. Arqel 或已验证适配层明确支持这个 Provider 类型对应的请求协议。

如果任意一项不确定，请先使用测试 Key 做只读验证，不要写入长期配置或生产配置。
:::

操作步骤：

1. 先确认顶部应用切换器已经选中目标应用。
2. 点击 Add Provider 或新增 Provider。
3. 选择应用专属 Provider。
4. 选择预设或 Custom Provider。
5. 填入 Provider 名称。
6. 填入 Arqel API Key。
7. 填入 Arqel Base URL。
8. 填入具体模型名。
9. 保存。
10. 点击 Enable 或切换到该 Provider。

保存后回到当前应用的 Provider 列表，确认新建的 Arqel Provider 已出现，并处于 Enabled、Active、Current 或类似状态。之后再重启目标 Agent 做只读验证。

::: warning
模型名必须填写 Arqel 控制台里可用的具体名称。不要使用不存在的模型名、其他平台别名或文档中的占位文字。
:::
