# CC Switch 添加 Arqel Provider

这一页只讲怎么把 Arqel 加进 CC Switch。

## 先准备什么

- Arqel API Key。
- Arqel Base URL。
- 一个具体可用的模型名。

这些信息都以 Arqel 控制台当前显示为准。API Key 只复制到本机工具或安全配置里，不要放进截图、群聊或共享文档。

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

1. 点击 Add Provider 或新增 Provider。
2. 选择预设或 Custom Provider。
3. 填入 Provider 名称。
4. 填入 Arqel API Key。
5. 填入 Arqel Base URL。
6. 填入具体模型名。
7. 保存。
8. 点击 Enable 或切换到该 Provider。

::: warning
模型名必须填写 Arqel 控制台里可用的具体名称。不要使用不存在的模型名、其他平台别名或文档中的占位文字。

CC Switch 可以管理 Provider 和路由配置，但不代表 Arqel 自动兼容所有 Agent 协议。保存后请逐个 Agent 做只读测试，并回到 Arqel 控制台核对请求记录。
:::
