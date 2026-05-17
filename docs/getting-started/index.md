# 开始使用 Arqel

这部分是技术接入入口：先按你的目标选路径，再进入 API、工具、SDK、基础概念或排障页面。

## 推荐入口

| 你的目标 | 先看 | 完成标准 |
| --- | --- | --- |
| 不知道从哪开始 | [按目标选择](/getting-started/basics/choose-path) | 能判断自己该先看 API、工具还是基础概念 |
| 想看 API 调用和鉴权示例 | [创建 API Key](/getting-started/api/api-key) → [Base URL 和模型名](/getting-started/api/base-url-and-model) → [API 调用示例](/getting-started/api/first-request) | 能理解 Key、Base URL、模型名分别填在哪里 |
| Windows 用户，想接入多个 Agent | [Windows 最快接入：用 CC Switch 配置 Arqel](/getting-started/windows-ccswitch) | 每个 Agent 都完成只读验证，并能在控制台看到对应记录 |
| 想配置某个具体工具 | [工具接入参考](/tools/) | 目标工具使用独立 Key，并通过控制台记录验证 |
| 后端或脚本调用模型 | [API 参考](/api/) / [OpenAI SDK](/tools/sdk/openai) | Key 只保存在后端或安全环境中，不暴露到浏览器前端 |
| 请求失败或工具没走 Arqel | [接入检查清单](/getting-started/troubleshooting/checklist) | 能定位是 Key、Base URL、模型名、余额、协议还是工具配置问题 |

::: tip
如果你不确定先看什么，优先看 [按目标选择](/getting-started/basics/choose-path)。如果术语不熟，再看 [基础概念](/getting-started/basics/basic-concepts)。
:::

## 你需要准备的三件事

| 项目 | 从哪里来 | 填到哪里 |
| --- | --- | --- |
| API Key | Arqel 控制台的 API Keys / Keys / Developer settings 页面 | 请求头、SDK 配置或工具的 API Key 字段 |
| Base URL | Arqel 控制台的 API / Developer / Provider 配置区域 | SDK 或工具的 Base URL / API Base / Endpoint 字段 |
| 模型名 | Arqel 控制台的 Models / 模型列表 / 请求示例 | 请求体里的 `model` 字段或工具的模型字段 |

实际控制台菜单名称可能随产品界面调整。如果团队给你单独的控制台入口或组织工作区入口，以团队给你的入口为准。

::: details 图片占位：Arqel 控制台三件套位置
这里需要一张 Arqel 控制台截图，分别框出 API Key、Base URL、模型名的位置。截图中不要显示完整 API Key。
:::

## 文档怎么读

- **入门教程**：带你完成一次真实接入，先解决“该填什么、填到哪里、怎样算成功”。
- **工具参考**：说明 Cursor、Claude Code、Gemini CLI、Codex、CC Switch 等入口的差异和验证方式。
- **API 参考**：给后端、脚本和 SDK 用户查接口格式。
- **概念 / 排障**：遇到问题时再看。

## 接入顺序

1. 先确定你要走 API、SDK、工具还是 CC Switch。
2. 从控制台复制 API Key、Base URL 和具体模型名。
3. 按对应页面配置工具或服务。
4. 用只读请求或只读任务验证接入。
5. 回到 Arqel 控制台核对请求时间、Key 名称和模型名。

工具能回复不等于一定走了 Arqel。最终以 Arqel 控制台请求记录为准。
