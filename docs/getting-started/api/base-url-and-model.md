# Base URL 和模型名

API Key 只是凭证。要真正发送请求，你还需要填对 Base URL 和模型名。

## 到哪里找 Base URL

请在 Arqel 控制台中查找 API、Provider、开发者设置或请求示例区域。实际入口可能随产品界面调整，但通常会和 API Key、模型列表、请求示例放在相近位置。

你要复制的是完整 Base URL，例如：

```text
https://api.arqel.dev/v1
```

复制时注意：

- 不要漏掉 `https://`。
- 不要多复制空格。
- 不要把 `/chat/completions` 当成 Base URL 的一部分，除非控制台明确这样写。
- 不要把网页控制台地址、登录页地址或文档地址填进 Base URL。
- 如果控制台显示的地址和文档示例不同，以控制台为准。

可以把它理解成：

| 名称 | 示例 | 用途 |
| --- | --- | --- |
| Base URL | `https://api.arqel.dev/v1` | API 根地址，填到 SDK 或工具的 Base URL 字段 |
| 请求路径 | `/chat/completions` | 聊天补全接口路径 |
| 完整请求地址 | `https://api.arqel.dev/v1/chat/completions` | cURL 手动请求时会用到 |

常见错误是重复写 `/v1`，或者把完整请求地址填进只需要 Base URL 的工具字段里。

如果找不到 Base URL，按这个顺序排查：

1. 回到 Arqel 控制台，不要在文档站或浏览器地址栏里复制。
2. 查找 `API`、`Endpoint`、`Base URL`、`Provider`、`开发者设置`、`请求示例`。
3. 如果页面提供 cURL 示例，先看 `https://.../v1/chat/completions` 这一类完整地址，再把 `/chat/completions` 前面的部分作为 Base URL。
4. 如果控制台给出的地址和本文示例不同，以控制台为准。

成功状态应该是：你能明确得到一个以 `https://` 开头、通常以 `/v1` 结尾的 API 根地址。

## 到哪里找模型名

请在 Arqel 控制台的模型列表、模型管理或请求示例区域查找可用模型名。最稳妥的方式是复制控制台请求示例里的 `model` 字段。

你要复制的是“请求中使用的模型名”，不是页面上的营销名称或分组标题。

有些界面也会把它叫做 `model`、`model id`、`模型 ID` 或“请求模型名”。如果控制台提供请求示例，优先复制示例 JSON 里的 `model` 字段。

如果找不到模型名，按这个顺序排查：

1. 查看模型列表、模型管理、Provider 详情或请求示例。
2. 搜索 `model`、`model id`、`模型`、`模型 ID`。
3. 如果只有显示名称，没有请求模型名，不要凭经验手写；请向团队管理员或 Arqel 支持确认。
4. 如果某个模型在控制台不可见，说明当前账号、组织或项目可能没有权限使用它。

成功状态应该是：你复制到了一个可以放进请求 JSON `model` 字段的完整字符串。

## 显示名称和真实模型名的区别

显示名称通常给人看，真实模型名给 API 请求用。

示例：

| 类型 | 例子 | 能不能直接填到请求里 |
| --- | --- | --- |
| 显示名称 | Claude Sonnet | 通常不能，除非控制台明确这样列为模型名 |
| 模型家族 | Claude / GPT / Gemini | 通常不能 |
| 真实模型名 | 控制台复制出来的完整字符串 | 可以 |

如果你不确定某个名称能不能用，优先复制控制台请求示例里的 `model` 字段。

## 模型名必须完整一致

模型名中的这些内容都可能有意义：

- 大小写。
- 横线、下划线、点号。
- 日期或版本后缀。
- Provider 前缀。

不要凭经验手写，也不要把另一个平台的模型名直接搬过来。

## 不要使用占位或泛称

模型名请使用 Arqel 控制台中显示的具体名称。不要把模型家族名、其他平台别名或示例占位文字直接填进请求。

错误示例：

```json
{
  "model": "default"
}
```

```json
{
  "model": "best"
}
```

```json
{
  "model": "Claude"
}
```

正确做法：

```json
{
  "model": "<从 Arqel 控制台复制的模型名>"
}
```

## 下一步

- [新手入门](/getting-started/agent-quickstart)
- [工具接入参考](/tools/)
- [API 参考](/api/)
- [成功和失败示例](/getting-started/troubleshooting/success-and-failure-examples)
- [模型选择](/concepts/models-and-routing)
