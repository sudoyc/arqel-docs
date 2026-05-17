<script setup lang="ts">
const entryCards = [
  {
    label: '入门',
    title: '新手入门',
    detail: 'Windows 用户用 CC Switch 接入第一个 Agent。',
    href: '/getting-started/agent-quickstart'
  },
  {
    label: '工具',
    title: '工具接入',
    detail: '按产品入口区分 Cursor、Claude Code、Gemini CLI、Codex 和 CC Switch。',
    href: '/tools/'
  },
  {
    label: 'API',
    title: 'API 参考',
    detail: '给后端、脚本和 SDK 用户查接口格式和错误处理。',
    href: '/api/'
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
          讲清楚各个工具怎么接入 Arqel
        </p>
        <p class="docs-home-description docs-home-reveal docs-home-d4">
          工具接入优先使用 CC Switch；不适合时，再按 macOS、Windows、Linux / WSL 的手动配置说明处理。
        </p>
        <div class="docs-home-actions docs-home-reveal docs-home-d5">
          <a class="docs-home-button docs-home-button-primary" href="/getting-started/">
            入口总览
            <span aria-hidden="true">→</span>
          </a>
          <a class="docs-home-button docs-home-button-secondary" href="/getting-started/agent-quickstart">
            新手入门
          </a>
        </div>
      </div>
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
      Windows 新手可以从“新手入门”开始；熟悉工具的用户直接进入工具接入页。
    </p>
  </div>
</template>
