# Arqel Docs 多人群评估汇总

评估时间：2026-05-16
范围：/home/ycyc/projects/arqel-docs/docs 公开文档源文件；排除 docs/.vitepress/cache 与 docs/.vitepress/dist。
方式：6 个 subagent 分别模拟不同人群，只读评估，不修改文档、不部署、不 push。

## Personas

1. 近零背景新手
2. API 集成开发者
3. AI Agent / CC Switch 高阶用户
4. 安全、运维、可靠性评审
5. 产品文案与信息架构评审
6. 双语/全球开发者术语一致性评审

## 总体结论

当前 docs 的方向正确：Arqel 品牌基本一致，未发现 Sub2API 暴露；核心路径强调“先跑通 API，再接工具”，对 Agent 协议边界也有不少谨慎提示。

但所有 persona 都集中发现几个高优先级问题：

1. 首次请求与鉴权示例存在坏命令，属于最高优先级。
2. API 参考入口不够显眼，不符合 API 产品的用户预期。
3. Agent / CC Switch / 协议兼容边界写得谨慎但分散，部分可复制配置容易被误读为已验证支持。
4. 首页和工具页仍有内部/技术残留措辞，如 auto route、surface、release notes、仍需产品/后端确认。
5. 控制台路径、API Key、Base URL、模型名、请求记录的获取流程不够具体。
6. 安全/运维文档有原则，但缺生产级 checklist：后端代理、限流、重试、预算、Key 轮换、事故响应。

## 优先级 backlog

### P0：必须先修

#### P0-1 修复所有不可运行的 Authorization / cURL 示例

涉及文件：
- docs/getting-started/api/first-request.md
- docs/api/authentication.md
- docs/setup/terminal-basics.md

问题：
- `-H "Authorization: Bearer *** \` 引号未闭合，且不是可运行变量。
- PowerShell 示例出现 `$env:A...KEY`，应为 `$env:ARQEL_API_KEY`。

建议：
- Bash/macOS/Linux/WSL 示例统一：
  `-H "Authorization: Bearer $ARQEL_API_KEY" \\`
- PowerShell 示例统一：
  `-H "Authorization: Bearer $env:ARQEL_API_KEY" ``
- 可复制示例不要用 `***`；脱敏示例只放说明文本。
- curl 建议加状态码输出：
  `-w "\nHTTP %{http_code}\n"`

#### P0-2 修复排障页残缺鉴权说明

涉及文件：
- docs/help/troubleshooting/index.md

问题：
- `Authorization: Bearer ***` 反引号/句子未闭合。

建议：
- 改为 `Authorization: Bearer <你的 API Key>`。
- 补一句不要把完整 Key 发给支持或贴到公开渠道。

### P1：影响首次成功和产品可信度

#### P1-1 增加顶栏 API 参考入口

涉及文件：
- docs/.vitepress/config.ts

问题：
- 顶栏没有 API/API 参考；API 参考在 sidebar 后段且 collapsed。

建议：
- 顶栏改成：入门 / API 参考 / 工具接入 / 概念 / 帮助。
- sidebar 中 API 参考上移到工具接入前。

#### P1-2 首页删除 auto route，改成正向模型名提醒

涉及文件：
- docs/.vitepress/theme/components/DocsHome.vue

问题：
- 首页出现 “Arqel 不提供 auto route”，像内部/竞品/限制说明。

建议：
- 改为：
  “请求时请复制控制台显示的具体模型名；接入工具后，建议回到控制台核对请求记录。”

#### P1-3 明确控制台入口和三件套获取路径

涉及文件：
- docs/getting-started/index.md
- docs/getting-started/api/api-key.md
- docs/getting-started/api/base-url-and-model.md
- docs/getting-started/api/first-request.md

问题：
- “打开 Arqel 网站”“找到 API Key、令牌、密钥或类似名称的页面”过泛。
- 缺少控制台 URL、菜单路径、截图占位、字段名。

建议：
- 增加“控制台入口”和具体路径：Console → API Keys / Models / Usage。
- 若 URL 未定，至少放 release blocker：`Arqel 控制台入口：待补充`。
- 增加截图占位：登录、创建 Key、复制 Base URL、复制模型名、查看请求记录。

#### P1-4 建立 Agent / CC Switch 兼容状态矩阵

涉及文件：
- docs/tools/index.md
- docs/tools/agents/index.md
- docs/tools/agents/compare.md
- docs/tools/cc-switch/*.md
- docs/tools/agents/{claude-code,gemini-cli,codex-cli,hermes}.md

问题：
- 多处说“不要假设协议兼容”，但又给出 ANTHROPIC/Gemini/OpenAI 变量或 CC Switch Provider 类型，容易被当作已验证 recipe。

建议：
- 新增矩阵字段：Tool/surface、推荐路径、要求协议、Arqel 验证状态、Last verified、是否可复制配置、验证方法。
- 未确认的 Claude/Gemini/Codex/Hermes 配置块加明确前缀：仅当目标工具和 Arqel 均确认该协议可用时使用。
- CC Switch 页面强调：CC Switch 是配置/路由管理器，不保证 Arqel 自动支持所有 Agent 协议。

#### P1-5 API/SDK 示例改用环境变量，避免硬编码 Base URL

涉及文件：
- docs/tools/sdk/openai.md
- docs/tools/agents/gemini-cli.md

问题：
- 示例硬编码 `https://api.arqel.dev/v1`，但其他页面说以控制台为准。

建议：
- SDK 示例使用 `process.env.ARQEL_BASE_URL` / `process.env.ARQEL_MODEL`。
- 如果 `https://api.arqel.dev/v1` 是唯一官方地址，则在总览明确；否则一律以控制台为准。

### P2：清晰度、可维护性和生产可用性

#### P2-1 统一术语：OpenAI-compatible / surface / Provider / model name

涉及文件：
- docs/getting-started/basics/glossary.md
- docs/api/index.md
- docs/tools/index.md
- docs/tools/sdk/openai.md
- docs/tools/cc-switch/provider.md

建议：
- 统一为：`OpenAI-compatible（OpenAI 兼容请求格式）`。
- 首次解释：仅指当前文档覆盖的 Bearer 鉴权 + Chat Completions 基础文本请求，不自动包含 Streaming、Tools、Responses API、Embeddings 等。
- `surface` 改为“产品入口/使用界面”，并加入词汇表。
- Provider 拆清楚：工具里的 Provider 配置项、Arqel Provider、upstream provider。
- 增加 Model name / Model ID / 模型名词条。

#### P2-2 增加 API 能力矩阵

涉及文件：
- docs/api/index.md
- docs/api/chat-completions.md
- docs/tools/sdk/openai.md
- docs/tools/index.md

建议矩阵：
- Bearer Token：已文档化
- Chat Completions 基础文本：已文档化
- Streaming：已支持/未确认/不支持，需产品确认
- Tool calling / JSON mode / Embeddings / Images / Responses API / Models list：按实际状态标注
- Anthropic-compatible / Gemini-compatible / Codex-specific：未确认则明确不要假设

#### P2-3 重构“最小环境”和“完整开发环境”

涉及文件：
- docs/getting-started/index.md
- docs/setup/index.md
- docs/getting-started/troubleshooting/checklist.md

问题：
- 现在像是所有用户都要 Git、Node、VS Code；但第一条 API 请求只需要浏览器、终端、curl、Key、Base URL、模型名。

建议：
- 拆成：
  1. 最小 API 测试
  2. SDK 接入
  3. Agent/IDE 接入
  4. 生产上线前检查

#### P2-4 增加生产安全与运维 checklist

涉及文件：
- docs/help/security/index.md
- docs/concepts/usage-and-billing.md
- docs/help/troubleshooting/errors.md
- docs/concepts/mcp-security.md

建议覆盖：
- 后端代理最小安全要求：鉴权、限流、CORS、日志脱敏、请求体大小、不要暴露 Key、不要允许任意 Base URL。
- Key 生命周期：命名、分环境、轮换、停用、泄露响应。
- 用量风控：预算、余额告警、Agent 最大轮次/并发/输出长度、异常高频止损。
- 重试策略：429/5xx 指数退避、最大重试次数、尊重 Retry-After；401/403 不要重试。
- 支持模板：时间+时区、Key 名称/前后几位、模型名、状态码、error code/message、SDK/工具版本、request id/trace id（如有）。
- MCP 安全：来源审查、只读优先、限制目录、禁用/撤销、避免 secrets 文件。

#### P2-5 去除公开文档中的内部编辑痕迹

涉及文件：
- docs/tools/index.md
- docs/tools/agents/hermes.md
- docs/tools/cc-switch/agents.md

问题：
- “CC Switch 的拆分页现在放在二级目录里，更好找也更不挤。”
- “官方项目入口仍需单独确认”
- “信息来自 release notes”
- “仍需产品/后端确认”

建议：
- 面向用户写任务状态，不写内部改版/调研状态。
- 未验证工具统一放到“待验证/实验性”区，不与成熟路径并列。

#### P2-6 补 SDK 语言和参数覆盖

涉及文件：
- docs/tools/sdk/openai.md
- docs/api/chat-completions.md

建议：
- 增加 Python OpenAI SDK 示例。
- 增加安装命令、环境变量、错误捕获。
- 增加 request/response schema：model/messages/role/content、choices、finish_reason、usage（如支持/如返回）。
- 明确 streaming、tools、temperature、max_tokens 等参数状态。

### P3：polish

- 删除 docs/tools/sdk/openai.md 重复 bullet。
- “Version note / Last verified” 中文化。
- “常见帮助”可改为“帮助”或“帮助中心”。
- 给 local search 增加中英同义词落点：聊天补全/Chat Completions、智能体/Agent、模型 ID/model id、兼容接口/compatible API。
- docs/index.md 只有 `<DocsHome />`，建议加注释说明首页文案实际在 DocsHome.vue，或把 copy 数据抽到可审阅位置。

## 建议下一阶段执行顺序

1. 先修 P0 命令错误和排障页残缺文案。
2. 调整首页关键 copy：去 auto route、surface 中文化、删除内部口吻。
3. 调整 nav：增加 API 参考入口。
4. 补“第一条请求完整闭环”：控制台入口 → Key → Base URL → 模型名 → curl → HTTP 200 → 控制台记录。
5. 建立两张矩阵：API 能力矩阵、Agent/CC Switch 兼容矩阵。
6. 再做安全/运维 checklist 和 SDK/API reference 深化。

## 备注

本评估只读完成。未修改 docs 源文件。当前工作区已有其他未提交变更，需后续改动前先确认 diff 边界。
