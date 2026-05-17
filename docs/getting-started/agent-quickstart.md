# 新手入门：Windows 用 CC Switch 接入 Agent

这篇给完全不熟悉开发工具的 Windows 用户。你只需要完成一条路径：安装一个 Agent，安装 CC Switch，把 Arqel 填进去，然后在 Agent 里问一个只读问题。

本页默认用 **Claude Code** 做演示。你也可以换成 Gemini CLI 或 Codex，但第一次建议只选一个工具，成功后再接第二个。

## 你会完成什么

完成后，你应该能确认三件事：

- 电脑上能打开一个 Agent。
- CC Switch 里有一个 Arqel Provider，并已应用到这个 Agent。
- Arqel 控制台能看到刚才 Agent 发出的请求记录。

::: details 图片占位：最终效果总览
这里放一张 Windows 真实截图，展示 CC Switch 中已启用 Arqel Provider，旁边是 Arqel 控制台请求记录。API Key 必须打码。
:::

## 1. 准备 Windows 和浏览器

请先确认你正在使用 Windows 10 或 Windows 11，并且可以用浏览器登录 Arqel 控制台。

如果你不知道什么是 PowerShell、终端、WSL，都没关系。这篇只按 Windows 桌面环境来讲。

## 2. 安装一个 Agent

第一次接入先装一个 Agent。这里用 Claude Code 举例：

1. 打开 Claude Code 官方安装页面。
2. 按 Windows 安装说明完成安装。
3. 安装完成后，从开始菜单或 PowerShell 打开 Claude Code。

如果你已经安装了 Gemini CLI 或 Codex，也可以继续用已有工具，不需要为了本教程重复安装 Claude Code。

安装完成后，只要能看到 Agent 的输入界面即可。此时它还不一定走 Arqel，后面再配置。

## 3. 在 Arqel 控制台找到三项信息

打开 Arqel 控制台，准备下面三项：

| 信息 | 填到哪里 |
| --- | --- |
| API Key | CC Switch 的 API Key 字段 |
| Base URL | CC Switch 的 Base URL / Endpoint 字段 |
| 模型名 | CC Switch 的模型字段 |

模型名请复制控制台里的完整名称，不要手写 `default`、`best` 或其他平台的模型别名。

::: details 图片占位：Arqel 控制台三项信息
这里放一张 Arqel 控制台真实截图，分别框出 API Key、Base URL、模型名。完整 API Key 必须打码。
:::

## 4. 安装 CC Switch

打开 CC Switch 下载页面，下载 Windows 安装包。通常选择 `.msi` 文件。

安装完成后，从开始菜单打开 CC Switch。

::: details 图片占位：下载 CC Switch
这里放一张浏览器真实截图，框出 Windows `.msi` 安装包下载位置。
:::

## 5. 添加 Arqel Provider

在 CC Switch 里新增一个 Provider，把 Arqel 控制台复制的信息填进去。

| 字段 | 建议填写 |
| --- | --- |
| Provider 名称 | `Arqel` |
| API Key | Arqel 控制台复制的 Key |
| Base URL | Arqel 控制台复制的 Base URL |
| 模型名 | Arqel 控制台复制的具体模型名 |
| Provider 类型 | 先按 CC Switch 当前界面对你选择的 Agent 给出的默认或推荐项填写 |

新手不要在这里纠结 Provider 类型。先按当前界面给出的说明选；如果界面没有明确提示，就截图去交流群问，不要反复更换 API Key。

::: details 图片占位：CC Switch 新增 Provider 表单
这里放一张 CC Switch 真实截图，框出 Provider 名称、API Key、Base URL、模型名、Provider 类型。API Key 必须打码。
:::

## 6. 把 Provider 应用到 Agent

在 CC Switch 里找到你刚才安装或准备使用的 Agent，例如 Claude Code。

1. 进入这个 Agent 的配置页面。
2. 选择刚创建的 `Arqel` Provider。
3. 保存或启用配置。
4. 关闭正在运行的 Agent。
5. 重新打开 Agent。

只配置一个 Agent。等它成功后，再接 Gemini CLI、Codex 或其他工具。

::: details 图片占位：在 CC Switch 启用 Agent
这里放一张 CC Switch 真实截图，展示 Claude Code 或另一个 Agent 页面里启用了 Arqel Provider。
:::

## 7. 在 Agent 里做只读测试

重新打开 Agent 后，先问一个不会修改文件的问题：

```text
请用一句话说明你现在可以正常回答。不要修改任何文件。
```

如果你是在一个项目目录里打开 Agent，也可以问：

```text
请说明当前项目大概是什么，不要修改任何文件。
```

新手第一次验证就放在 Agent 里完成；确认记录时看 Arqel 控制台即可。

## 8. 回到 Arqel 控制台确认

Agent 能回复还不够。请回到 Arqel 控制台，看是否出现刚才的请求记录。

重点看三件事：

- 请求时间能对上。
- Key 名称能对上。
- 模型名能对上。

::: details 图片占位：Arqel 请求记录
这里放一张 Arqel 控制台真实截图，框出请求时间、Key 名称和模型名。不要展示完整 API Key 或私有提示词。
:::

## 如果卡住了

先看 [接入检查清单](/getting-started/troubleshooting/checklist) 和 [请求失败排查](/help/troubleshooting/)。

如果按步骤仍然解决不了，可以到交流群询问：

```text
交流群：<群号待填写>
```

提问时建议说明：你用的 Agent、Windows 版本、卡在哪一步、错误截图、Arqel 控制台是否有请求记录。不要发送完整 API Key。
