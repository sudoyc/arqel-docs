# 核心概念

这页解释接入 Arqel 时反复出现的几个基础概念。你不必一次看完，遇到不认识的术语时再回来翻。

- [Base URL](/concepts/base-url)：客户端请求的 API 地址。
- [模型选择](/concepts/models-and-routing)：你调用哪个具体模型，以及模型名应该从哪里复制。
- [用量、余额和计费](/concepts/usage-and-billing)：每次调用如何产生消耗，如何查看。

## Arqel 的角色

Arqel 是 AI API 接入层。它负责帮助你统一接入、管理 Key、查看用量和呈现错误状态。

它不替代上游模型提供方，也不改变上游模型本身的能力、速度、规则或可用性。
