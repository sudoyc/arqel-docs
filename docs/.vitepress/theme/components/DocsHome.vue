<script setup lang="ts">
const guideLinks = [
  {
    title: '快速开始',
    detail: 'API Key、Base URL、模型名和第一条请求。',
    href: '/getting-started/'
  },
  {
    title: '工具接入',
    detail: 'Cursor、Claude Code、Gemini CLI、SDK 与 CC Switch。',
    href: '/tools/'
  },
  {
    title: '概念与排错',
    detail: '用量、余额、错误码和常见失败原因。',
    href: '/concepts/'
  }
]

const entryCards = [
  {
    label: 'Start',
    title: '入门教程',
    detail: '创建 Key、复制 Base URL、发送第一条请求。',
    href: '/getting-started/'
  },
  {
    label: 'Tools',
    title: '工具和 Agent',
    detail: '按具体工具查看配置方式和注意事项。',
    href: '/tools/'
  },
  {
    label: 'Help',
    title: '常见帮助',
    detail: '请求失败、鉴权、模型不可用和余额问题。',
    href: '/help/'
  }
]
</script>

<template>
  <div class="docs-home docs-home-compact">
    <section class="docs-home-hero" aria-labelledby="docs-home-title">
      <div class="docs-home-copy">
        <p class="docs-home-kicker docs-home-reveal">接入文档</p>
        <h1 id="docs-home-title" class="docs-home-title docs-home-reveal docs-home-d2">
          Arqel
        </h1>
        <p class="docs-home-subtitle docs-home-reveal docs-home-d3">
          一个入口，连接主流 AI 模型
        </p>
        <p class="docs-home-description docs-home-reveal docs-home-d4">
          API Key、Base URL、模型选择和工具配置整理在这里。需要时再进入概念、排错和安全说明。
        </p>
        <div class="docs-home-actions docs-home-reveal docs-home-d5">
          <a class="docs-home-button docs-home-button-primary" href="/getting-started/">
            快速开始
            <span aria-hidden="true">→</span>
          </a>
          <a class="docs-home-button docs-home-button-secondary" href="/tools/">
            工具接入
          </a>
        </div>
      </div>

      <aside class="docs-home-guide-card docs-home-reveal docs-home-d3" aria-labelledby="docs-home-guide-title">
        <div class="docs-home-guide-header">
          <h2 id="docs-home-guide-title">文档入口</h2>
          <p>按当前需要选择，不必按顺序阅读。</p>
        </div>
        <div class="docs-home-guide-list">
          <a
            v-for="item in guideLinks"
            :key="item.href"
            class="docs-home-guide-item"
            :href="item.href"
          >
            <span>
              <strong>{{ item.title }}</strong>
              <small>{{ item.detail }}</small>
            </span>
            <span class="docs-home-guide-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </aside>
    </section>

    <section class="docs-home-entry-grid" aria-label="常用入口">
      <a
        v-for="(card, index) in entryCards"
        :key="card.href"
        class="docs-home-entry-card docs-home-reveal"
        :class="`docs-home-d${index + 5}`"
        :href="card.href"
      >
        <span class="docs-home-entry-icon">{{ card.label }}</span>
        <h2>{{ card.title }}</h2>
        <p>{{ card.detail }}</p>
      </a>
    </section>

    <p class="docs-home-note docs-home-reveal docs-home-d8">
      Arqel 不提供 auto route；请求时请使用控制台中显示的具体模型名。
    </p>
  </div>
</template>
