# CC Switch FAQ

## 切换 Provider 后没有生效

按顺序排查：

1. 是否点击了 Enable / 启用。
2. 是否重启了对应 CLI。
3. 是否重启了 VS Code 插件。
4. 当前运行的是 Windows 里的 CLI，还是 WSL 里的 CLI。
5. Provider 里 Base URL、API Key、模型名是否填写正确。

## 我还能切回官方登录吗？

可以。CC Switch 支持保留官方登录或官方 Provider。建议不要删除默认配置，新增 Arqel Provider 后在两者之间切换。

## CC Switch 会替我创建 Arqel Key 吗？

不会。API Key 仍然需要你在 Arqel 控制台创建。

## 是否必须使用 CC Switch？

不是。单个工具可以手动配置。多工具并行时，CC Switch 能减少重复配置和路径错误。

## Windows 版 CC Switch 能管理 WSL 里的 CLI 吗？

不一定。WSL 里的 CLI 通常读取 WSL 用户目录。Windows 版 CC Switch 写入的 Windows 用户目录配置，不一定会影响 WSL。

## 下一步

- [CC Switch 总览](/tools/cc-switch/)
- [CC Switch 安装](/tools/cc-switch/install)
- [CC Switch 添加 Arqel Provider](/tools/cc-switch/provider)
- [CC Switch 应用于各 Agent](/tools/cc-switch/agents)
