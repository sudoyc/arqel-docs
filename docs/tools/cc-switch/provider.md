# CC Switch 添加 Arqel Provider

这一页只讲怎么把 Arqel 加进 CC Switch。

## 先准备什么

- Arqel API Key。
- Arqel Base URL。
- 一个具体可用的模型名。

::: details 图片占位：Arqel 控制台中 API Key / Base URL / 模型名的位置
这里需要一张截图，标注 Arqel 控制台里三个位置：API Key、Base URL、可用模型名。截图中请隐藏完整 Key，只保留前后几位。
:::

## 新增 Provider

不同版本界面文字可能略有差异，但核心字段通常类似：

| 字段 | 填什么 |
| --- | --- |
| Provider 名称 | `Arqel` 或 `Arqel Claude` |
| API Key | Arqel 控制台创建的 Key |
| Base URL | Arqel 控制台提供的 Base URL |
| 模型名 | 控制台里可用的具体模型名 |
| Provider 类型 | 按目标工具选择 Claude / OpenAI-compatible / Gemini 等 |

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
:::

::: details 图片占位：新增 Provider 表单
这里需要一张 CC Switch 新增 Provider 的截图，标注 Provider 名称、API Key、Base URL、模型名字段。请用打码 Key。
:::
