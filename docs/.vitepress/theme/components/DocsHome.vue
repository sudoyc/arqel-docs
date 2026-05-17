<script setup lang="ts">
const guideLinks = [
  {
    title: 'API 参考',
    detail: '查看鉴权、Base URL、Chat Completions 和能力边界。',
    href: '/api/'
  },
  {
    title: '工具接入',
    detail: '按 Cursor、Claude Code、Gemini CLI、Codex 或 Hermes Agent 进入对应页面。',
    href: '/tools/'
  },
  {
    title: '按目标选择',
    detail: '不确定先看哪里时，从接入目标反推文档路径。',
    href: '/getting-started/basics/choose-path'
  },
  {
    title: '基础概念',
    detail: '新手用户先了解 API Key、Base URL、模型名和 Provider。',
    href: '/getting-started/basics/basic-concepts'
  }
]

const entryCards = [
  {
    label: 'API',
    title: 'API 参考',
    detail: '给后端、脚本和 SDK 用户查鉴权、请求格式和错误处理。',
    href: '/api/'
  },
  {
    label: 'Tools',
    title: '工具接入',
    detail: '按产品入口区分 Cursor、Claude Code、Gemini CLI、Codex 和 CC Switch。',
    href: '/tools/'
  },
  {
    label: 'Guide',
    title: '新手路径',
    detail: '从基础概念、电脑环境和控制台三件套开始。',
    href: '/getting-started/'
  }
]
</script>

<template>
  <div class="docs-home docs-home-compact">
    <section class="docs-home-hero" aria-labelledby="docs-home-title">
      <div class="docs-home-copy">
        <p class="docs-home-kicker docs-home-reveal">Arqel Docs</p>
        <h1 id="docs-home-title" class="docs-home-title docs-home-reveal docs-home-d2">
          接入 Arqel
        </h1>
        <p class="docs-home-subtitle docs-home-reveal docs-home-d3">
          面向 API、SDK、工具和 CC Switch 的技术接入文档
        </p>
        <p class="docs-home-description docs-home-reveal docs-home-d4">
          先按场景选择 API 参考、工具接入、基础概念或排障页，再进入对应教程。新手用户可以从基础概念和环境准备开始。
        </p>
        <div class="docs-home-actions docs-home-reveal docs-home-d5">
          <a class="docs-home-button docs-home-button-primary" href="/api/">
            API 参考
            <span aria-hidden="true">→</span>
          </a>
          <a class="docs-home-button docs-home-button-secondary" href="/tools/">
            工具接入
          </a>
        </div>
      </div>

      <aside class="docs-home-guide-card docs-home-reveal docs-home-d3" aria-labelledby="docs-home-guide-title">
        <div class="docs-home-guide-header">
          <h2 id="docs-home-guide-title">接入入口</h2>
          <p>按 API、工具或新手路径进入。</p>
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
      请求时复制控制台显示的具体模型名；工具有回复后，仍以 Arqel 控制台请求记录确认是否真正接入。
    </p>
  </div>
</template>
