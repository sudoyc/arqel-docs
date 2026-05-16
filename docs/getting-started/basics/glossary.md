# 词汇表

这里收集文档里最常见的新词。你可以把它当成快速查字典。

## API

软件之间沟通的接口。你的工具或代码通过 API 向 Arqel 发送请求。

## SDK

软件开发工具包。比如 OpenAI SDK 是一个让你在代码里更方便调用 API 的库。

## CLI

命令行工具。你需要在终端里输入命令使用它，例如 `claude`、`gemini`、`codex`。

## Agent

能理解任务、读取上下文并执行多步操作的 AI 工具。

## Provider

工具实际使用的后端来源或配置源。这里可能是 Arqel、官方服务或其他兼容服务。

## MCP

模型上下文协议。常用于让 Agent 连接额外能力，例如文件系统、数据库或内部工具。

## Skills

某些 Agent 用来定义能力或任务模板的配置。

## 环境变量

终端或程序运行时读取的配置值，例如 `ARQEL_API_KEY`。

## PATH

系统用来查找命令的位置列表。命令找不到时，常和 PATH 有关。

## WSL

Windows Subsystem for Linux。让你在 Windows 里运行 Linux 环境。

## Token

模型处理文本时使用的计量单位。通常和用量、计费有关。

## Base URL

API 请求的根地址，例如 `https://api.arqel.dev/v1`。

## API Key

访问 Arqel API 的钥匙。

## Current directory

终端当前所在的文件夹。

## Shell

你在终端里输入命令时使用的命令解释器，例如 Bash、Zsh、PowerShell。

## npm

Node.js 的包管理器之一，用来安装 JavaScript 工具。

## Node.js

让 JavaScript 可以在电脑本地运行的运行时。


## OpenAI-compatible（OpenAI 兼容请求格式）

指请求形态接近 OpenAI 的 API，例如 Bearer Token、Base URL 和 Chat Completions 请求体。它不代表 Arqel 自动支持 OpenAI 官方文档里的全部 endpoint 或高级参数。

## Chat Completions（聊天补全）

一种对话接口。你发送 `messages`，模型返回一段回复。

## Surface / 产品入口 / 使用界面

同一个产品品牌下可能有 CLI、桌面 App、IDE 插件、网页端或云端 Agent。它们不一定共享同一套配置。

## Arqel Provider

在工具或 CC Switch 里指向 Arqel 的一组配置，通常包括 API Key、Base URL 和模型名。

## Upstream provider（上游提供方）

Arqel 背后实际提供模型能力的服务。普通用户通常不需要直接配置它。

## Model name / Model ID / 模型名

请求里的 `model` 字段。请复制 Arqel 控制台显示的具体字符串，不要只写模型家族名。
