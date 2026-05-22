# 新手入门：Windows 用 Codex + CC Switch 接入

这篇给完全不熟悉开发工具的 Windows 用户。你只需要完成一条路径：准备 Codex 入口，安装 CC Switch，准备 Arqel 接入三要素，在 CC Switch 里选择 Codex，再把 Arqel Provider 添加进去，最后用 Codex 做一次只读测试。

本页默认从 **Codex** 入门。Codex App、Codex CLI、Codex IDE Extension 使用同一套本地 Codex 配置；你可以把 Codex App 当作日常入口。文中仍保留 Codex CLI 命令，是因为命令行结果更容易截图、复现和排查。

## 你会完成什么

完成后，你应该能确认三件事：

- Codex App、Codex CLI 或 Codex IDE Extension 至少有一个入口可以使用。
- CC Switch 的 Codex 页面里有一个 Arqel Provider，并已启用。
- Arqel 控制台能看到刚才 Codex 发出的请求记录。

::: details 图片占位：最终效果总览
这里放一张 Windows 真实截图，展示 CC Switch 的 Codex 页面中已启用 Arqel Provider，旁边是 Arqel 控制台请求记录。API Key 必须打码。
:::

## 1. 准备 Windows 和浏览器

请先确认你正在使用 Windows 10 或 Windows 11，并且可以用浏览器登录 Arqel 控制台。

如果你不知道什么是 PowerShell、终端、WSL，都没关系。这篇只按 Windows 桌面环境来讲。遇到需要输入命令的步骤，就打开 Windows Terminal 或 PowerShell，把命令粘贴进去后按 Enter。

## 2. 准备 Codex 入口

新手建议先用 Codex App 做日常入口：界面更直观，也不需要一开始就熟悉终端。这里的“准备”只表示确认你电脑上有一个可打开的 Codex 入口；Arqel 接入要等 CC Switch 写入 Provider 后再验证。

你可以按自己的情况选一个入口：

| 入口 | 适合谁 | 现在要做什么 |
| --- | --- | --- |
| Codex App | 完全新手、想用图形界面 | 安装或打开 Codex App，确认能进入主界面，然后先退出 |
| Codex IDE Extension | 主要在 VS Code / IDE 里写代码 | 确认插件已安装，后面启用 Provider 后再 Reload Window |
| Codex CLI | 需要排查、截图、复现问题 | 按下面的可选步骤安装 |

如果你没有特别偏好，就先准备 Codex App；如果后面排查时需要命令行，再补装 Codex CLI。

::: details 图片占位：Codex App 准备完成
这里放一张 Windows 真实截图，展示 Codex App 已安装或已打开到主界面。截图只用于说明“入口已准备好”，不要在这一步测试 Arqel，也不要展示私人项目、聊天内容或账号敏感信息。
:::

### 可选：安装 Codex CLI

Codex CLI 当前常见安装方式是 npm。你需要先有 Node.js 和 npm。

1. 打开 [Node.js 官网](https://nodejs.org/)。
2. 下载并安装 LTS 版本。
3. 关闭所有 PowerShell / Windows Terminal 窗口。
4. 重新打开 PowerShell。
5. 输入下面两行确认安装成功：

```powershell
node -v
npm -v
```

如果两行都返回版本号，就可以安装 Codex：

```powershell
npm i -g @openai/codex
```

安装完成后，输入：

```powershell
codex --version
```

能看到版本号，说明 Codex CLI 已经可以使用。此时还不需要让它正式工作，后面会先用 CC Switch 配置 Arqel。

::: details 图片占位：PowerShell 中 Codex 安装成功
这里放一张 Windows PowerShell 真实截图，展示 `node -v`、`npm -v`、`codex --version` 都返回版本号。
:::

## 3. 先理解 Codex 这一套配置

在这篇文档里，Codex 指本地使用的 Codex App、Codex CLI 和 Codex IDE Extension。它们共享同一套 Codex Provider 配置，所以你在 CC Switch 的 Codex 页面添加 Arqel Provider 后，接哪个本地入口都可以。

Codex Web / cloud 和 GitHub、Slack、Linear 这类云端集成不在本页范围内。它们是否读取同一套配置，以当前官方界面为准。

## 4. 安装 CC Switch

打开 [CC Switch 安装](/tools/cc-switch/install)，按 Windows 说明下载安装包。新手通常选择 `.msi` 文件。

安装完成后，从开始菜单打开 CC Switch。能看到 CC Switch 主窗口，就可以继续。

::: details 图片占位：下载 CC Switch
这里放一张浏览器真实截图，框出 Windows `.msi` 安装包下载位置。
:::

## 5. 在 Arqel 控制台找到 Arqel 接入三要素

打开 Arqel 控制台，准备下面三项：

| 信息 | 填到哪里 |
| --- | --- |
| API Key | CC Switch 的 API Key 字段 |
| Base URL | CC Switch 的 Base URL / Endpoint 字段 |
| 模型名 | CC Switch 的模型字段 |

模型名请复制控制台里的完整名称，不要手写 `default`、`best` 或其他平台的模型别名。

::: details 图片占位：Arqel 接入三要素
这里放一张 Arqel 控制台真实截图，分别框出 API Key、Base URL、模型名。完整 API Key 必须打码。
:::

## 6. 先选择 Codex

CC Switch 是按应用管理 Provider 的。请先在 CC Switch 顶部的应用切换器里选择 **Codex**，再添加 Provider。

你要确认当前页面显示的是 Codex，而不是 Claude Code、Gemini CLI 或其他工具。只有在 Codex 页面里添加的应用专属 Provider，才会写入 Codex 的配置。

::: details 图片占位：CC Switch 选择 Codex
这里放一张 CC Switch 真实截图，框出顶部应用切换器，并显示当前已选择 Codex。
:::

## 7. 在 Codex 页面添加 Arqel Provider

在 Codex 页面点击右上角的 `+` 或 Add 按钮，添加一个应用专属 Provider。

| 字段 | 建议填写 |
| --- | --- |
| Provider 名称 | `Arqel` |
| API Key | Arqel 控制台复制的 Key |
| Base URL | Arqel 控制台复制的 Base URL |
| 模型名 | Arqel 控制台复制的具体模型名 |
| 预设 / 类型 | 如果有 Custom / OpenAI-compatible 一类选项，优先按当前 CC Switch 的 Codex 页面说明填写 |

如果界面里没有你能确定的选项，先停下，不要反复更换 API Key。截图时请打码 Key，然后带着 Codex、CC Switch 版本、Arqel 控制台模型名去交流群询问。

保存后，在 Codex 的 Provider 列表里点击 Arqel Provider 的启用按钮。Codex App、Codex CLI、Codex IDE Extension 都建议重启后再验证。

::: details 图片占位：Codex 页面新增 Provider 表单
这里放一张 CC Switch 真实截图，展示 Codex 页面里的新增 Provider 表单。API Key 必须打码。
:::

## 8. 重启 Codex 入口

启用 Provider 后，请重启你要使用的 Codex 入口：

- Codex App：退出后重新打开。
- Codex IDE Extension：Reload Window 或重启编辑器。
- Codex CLI：关闭当前 PowerShell / Windows Terminal，再重新打开一个新的 PowerShell。

如果你要用 Codex CLI 验证，输入：

```powershell
codex
```

如果 Codex 打开后出现登录、初始化或权限提示，按当前界面提示处理。只要能进入可以输入任务的界面，就可以继续下一步。

## 9. 在 Codex 里做只读测试

先问一个不会修改文件的问题：

```text
请用一句话说明你现在可以正常回答。不要修改任何文件。
```

如果你是在一个项目目录里打开 Codex CLI，也可以问：

```text
请说明当前项目是什么，不要修改任何文件。
```

新手第一次验证可以直接在 Codex App 里问，也可以用 Codex CLI。关键不是入口，而是下一步必须回到 Arqel 控制台确认请求记录。

## 10. 回到 Arqel 控制台确认

Codex 能回复还不够。请回到 Arqel 控制台，看是否出现刚才的请求记录。

重点看三件事：

- 请求时间能对上。
- Key 名称能对上。
- 模型名能对上。

::: details 图片占位：Arqel 请求记录
这里放一张 Arqel 控制台真实截图，框出请求时间、Key 名称和模型名。不要展示完整 API Key 或私有提示词。
:::

## 结果怎么判断

| 你看到的结果 | 说明 | 下一步 |
| --- | --- | --- |
| Codex 能回复，Arqel 控制台也有记录 | 接入成功 | 可以开始用 Codex 做真实任务 |
| Codex 能回复，但控制台没有记录 | Codex 可能还在走其他 Provider | 回到 CC Switch，确认当前是 Codex 页面，且 Arqel Provider 已启用；然后重启 Codex 入口 |
| Codex 没有回复，控制台也没有记录 | Codex 可能没启动、没读到配置，或网络/账号流程未完成 | 如果用 CLI，先确认 `codex --version` 能返回版本号；再看 CC Switch 是否写入 Codex 配置 |
| 控制台有记录，但请求失败 | Arqel 已收到请求，问题多半在 Key、模型名、余额或协议字段 | 看 [请求失败排查](/help/troubleshooting/) |

## 如果卡住了

先看 [接入检查清单](/getting-started/troubleshooting/checklist) 和 [请求失败排查](/help/troubleshooting/)。

如果按步骤仍然解决不了，可以到交流群询问：

```text
交流群：<群号待填写>
```

提问时建议说明：你用的是 Codex App、Codex CLI 还是 Codex IDE Extension，Windows 版本、CC Switch 版本、卡在哪一步、错误截图、Arqel 控制台是否有请求记录。不要发送完整 API Key。
