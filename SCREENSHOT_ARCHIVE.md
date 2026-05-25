# 截图归档

这个文件只用于记录未来可能补齐的截图或动图需求，不加入文档站导航。公开文档正文应优先写成纯文字步骤，不能依赖图片才能完成操作。

补图时遵守这些规则：

- 只使用真实界面截图，不用主题伪装或无关系统代替。
- 不展示完整 API Key、私有提示词、客户数据、历史会话或私人项目。
- 如果必须展示 Key，只保留前后少量字符，中间打码。
- 如果截图没有补齐，不要在公开正文里留下临时占位块。
- 第三方工具界面可能改版，正文仍要以文字判断标准为主。

## 新手入门

| 原页面 | 画面 | 用途 | 补图要求 |
| --- | --- | --- | --- |
| `/getting-started/agent-quickstart` | 最终效果总览 | 展示 CC Switch 已启用 Arqel Provider，Arqel 控制台出现请求记录 | Windows 真实环境；API Key 打码；不展示私有提示词 |
| `/getting-started/agent-quickstart` | Codex App 准备完成 | 展示 Codex App 已安装或已打开到主界面 | 干净界面；不展示历史会话、私人项目或账号敏感信息 |
| `/getting-started/agent-quickstart` | PowerShell 中 Codex 安装成功 | 展示 `node -v`、`npm -v`、`codex --version` 均返回版本号 | Windows PowerShell 或 Windows Terminal；不用 Linux、WSL 或主题伪装 |
| `/getting-started/agent-quickstart` | CC Switch 下载页面 | 标出 Windows `.msi` 安装包下载位置 | 真实 Releases 页面；版本号可随当前最新版本变化 |
| `/getting-started/agent-quickstart` | Arqel 接入三要素 | 展示 API Key、Base URL、模型名的位置 | 完整 API Key 必须打码；Base URL 来自控制台配置片段，不是浏览器地址栏 |
| `/getting-started/agent-quickstart` | CC Switch 选择 Codex | 标出顶部应用切换器，并显示当前已选择 Codex | 使用当前 CC Switch 真实界面 |
| `/getting-started/agent-quickstart` | Codex 页面新增 Provider | 展示新增 Provider 表单和启用后的列表状态 | API Key 必须打码；字段以当前 CC Switch 界面为准 |
| `/getting-started/agent-quickstart` | Arqel 请求记录 | 标出请求时间、Key 名称和模型名 | 不展示完整 API Key、私有提示词或客户数据 |

## API 信息

| 原页面 | 画面 | 用途 | 补图要求 |
| --- | --- | --- | --- |
| `/getting-started/api/api-key` | API Key 创建完整流程 | 帮助新手识别控制台里的 API Key 创建入口 | 不展示完整 Key；组织和项目名称按需打码 |
| `/getting-started/api/api-key` | 创建 API Key 时聚焦名称与分组 | 展示 Key 名称、用途或分组字段 | 不展示真实生产 Key |
| `/getting-started/api/base-url-and-model` | Base URL 定位 | 展示从 `Use Key` 或请求示例复制 API 根地址 | 明确区分 API 根地址和浏览器地址栏 |
| `/getting-started/api/base-url-and-model` | 模型名定位 | 展示从模型列表或请求示例复制真实模型字符串 | 模型名使用控制台真实值，不使用泛称 |

## CC Switch

| 原页面 | 画面 | 用途 | 补图要求 |
| --- | --- | --- | --- |
| `/tools/cc-switch/provider` | 应用切换器选择 Codex | 说明 Provider 按应用管理 | 使用当前 CC Switch 真实界面 |
| `/tools/cc-switch/provider` | 新增并启用 Arqel Provider | 说明保存后还要确认启用状态 | API Key 打码；不暗示 CC Switch 保证所有 Agent 与 Arqel 兼容 |
