import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Arqel Docs',
  description: 'Arqel 入门教程、工具接入、概念说明和常见帮助。',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { property: 'og:site_name', content: 'Arqel Docs' }],
    ['meta', { property: 'og:url', content: 'https://docs.arqel.net/' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Arqel Docs',
    nav: [
      { text: '入门', link: '/getting-started/' },
      { text: 'API 参考', link: '/api/' },
      { text: '工具接入', link: '/tools/' },
      { text: '概念', link: '/concepts/' },
      { text: '帮助', link: '/help/' }
    ],
    sidebar: [
      {
        text: '快速教程',
        collapsed: false,
        items: [
          { text: '入口总览', link: '/getting-started/' },
          { text: '新手入门（Windows）', link: '/getting-started/agent-quickstart' },
          { text: '接入检查清单', link: '/getting-started/troubleshooting/checklist' },
          {
            text: '准备知识',
            collapsed: true,
            items: [
              { text: '基础概念', link: '/getting-started/basics/basic-concepts' },
              { text: '词汇表', link: '/getting-started/basics/glossary' }
            ]
          },
          {
            text: '参考：API 信息',
            collapsed: true,
            items: [
              { text: '创建 API Key', link: '/getting-started/api/api-key' },
              { text: 'Base URL 和模型名', link: '/getting-started/api/base-url-and-model' }
            ]
          },
          {
            text: '参考：验证与排障',
            collapsed: true,
            items: [
              { text: '成功和失败示例', link: '/getting-started/troubleshooting/success-and-failure-examples' }
            ]
          },
          {
            text: '参考：电脑环境',
            collapsed: true,
            items: [
              { text: '环境总览', link: '/setup/' },
              { text: '终端基础', link: '/setup/terminal-basics' },
              { text: 'Windows 环境选择', link: '/setup/which-environment' },
              { text: 'macOS', link: '/setup/macos' },
              { text: 'Windows', link: '/setup/windows' },
              { text: 'Linux / WSL', link: '/setup/linux-wsl' },
              { text: '环境变量与安全', link: '/setup/env-vars' }
            ]
          }
        ]
      },
      {
        text: 'API 参考',
        collapsed: false,
        items: [
          { text: 'API 入口', link: '/api/' },
          { text: '鉴权', link: '/api/authentication' },
          { text: 'Chat Completions', link: '/api/chat-completions' },
          { text: 'API 调用示例', link: '/api/request-example' }
        ]
      },
      {
        text: '工具接入',
        collapsed: false,
        items: [
          { text: '选择接入方式', link: '/tools/' },
          {
            text: 'Agent 工具',
            collapsed: true,
            items: [
              { text: 'Agent 总览', link: '/tools/agents/' },
              { text: '工具对比', link: '/tools/agents/compare' },
              { text: '手动配置参考', link: '/tools/agents/manual-config' },
              { text: 'Cursor', link: '/tools/agents/cursor' },
              { text: 'Claude Code', link: '/tools/agents/claude-code' },
              { text: 'Gemini CLI', link: '/tools/agents/gemini-cli' },
              { text: 'Codex', link: '/tools/agents/codex-cli' },
              { text: 'Hermes Agent', link: '/tools/agents/hermes' }
            ]
          },
          {
            text: 'SDK',
            collapsed: true,
            items: [
              { text: 'SDK 总览', link: '/tools/sdk/' },
              { text: 'OpenAI SDK', link: '/tools/sdk/openai' }
            ]
          },
          {
            text: 'CC Switch',
            collapsed: true,
            items: [
              { text: 'CC Switch 总览', link: '/tools/cc-switch/' },
              { text: '安装', link: '/tools/cc-switch/install' },
              { text: '添加 Arqel Provider', link: '/tools/cc-switch/provider' },
              { text: '应用于各 Agent', link: '/tools/cc-switch/agents' },
              { text: '多 Agent 管理参考', link: '/getting-started/windows-ccswitch' },
              { text: 'FAQ', link: '/tools/cc-switch/faq' }
            ]
          }
        ]
      },
      {
        text: '概念',
        collapsed: true,
        items: [
          { text: '概念总览', link: '/concepts/' },
          { text: 'Base URL', link: '/concepts/base-url' },
          { text: 'MCP 安全', link: '/concepts/mcp-security' },
          { text: '模型选择', link: '/concepts/models-and-routing' },
          { text: '用量、余额和计费', link: '/concepts/usage-and-billing' }
        ]
      },
      {
        text: '帮助',
        collapsed: true,
        items: [
          { text: '常见问题', link: '/help/' },
          {
            text: '安全',
            collapsed: true,
            items: [
              { text: '安全总览', link: '/help/security/' }
            ]
          },
          {
            text: '排障',
            collapsed: true,
            items: [
              { text: '请求失败排查', link: '/help/troubleshooting/' },
              { text: '错误码', link: '/help/troubleshooting/errors' }
            ]
          }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '语言',
    externalLinkIcon: true,
    footer: {
      message: 'Arqel 是 AI API 接入层，模型能力、速度和可用性仍受上游状态影响。',
      copyright: 'Copyright © 2026 Arqel'
    }
  }
})
