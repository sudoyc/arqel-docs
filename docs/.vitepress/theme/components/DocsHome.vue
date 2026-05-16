<script setup lang="ts">
const guideLinks = [
  {
    title: 'Windows + CC Switch',
    detail: '最快接入 Claude Code、Gemini CLI、Codex 等工具。',
    href: '/getting-started/windows-ccswitch'
  },
  {
    title: 'Tools',
    detail: '查看 Cursor、Agent、SDK、CC Switch 的配置差异。',
    href: '/tools/'
  },
  {
    title: 'CC Switch Provider',
    detail: '把 Arqel API Key、Base URL、模型名填进 CC Switch。',
    href: '/tools/cc-switch/provider'
  },
  {
    title: 'API / SDK',
    detail: '后端服务或脚本接入时查看接口说明。',
    href: '/api/'
  }
]

const entryCards = [
  {
    label: 'Guide',
    title: 'Windows 快速接入',
    detail: '用 CC Switch 统一配置 Arqel，再接入主流 Agent 工具。',
    href: '/getting-started/windows-ccswitch'
  },
  {
    label: 'Tools',
    title: '工具参考',
    detail: '按产品入口区分 Cursor、Claude Code、Gemini CLI、Codex。',
    href: '/tools/'
  },
  {
    label: 'API',
    title: 'API 参考',
    detail: '给后端、脚本和 SDK 用户查鉴权与请求格式。',
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
          用工具接入 Arqel
        </h1>
        <p class="docs-home-subtitle docs-home-reveal docs-home-d3">
          从 Windows + CC Switch 开始配置主流 Agent
        </p>
        <p class="docs-home-description docs-home-reveal docs-home-d4">
          先把 Arqel Provider 配进 CC Switch，再接入 Claude Code、Gemini CLI、Codex、Cursor 或 SDK。API 和概念说明作为参考资料保留。
        </p>
        <div class="docs-home-actions docs-home-reveal docs-home-d5">
          <a class="docs-home-button docs-home-button-primary" href="/getting-started/windows-ccswitch">
            Windows 快速接入
            <span aria-hidden="true">→</span>
          </a>
          <a class="docs-home-button docs-home-button-secondary" href="/tools/">
            工具文档
          </a>
        </div>
      </div>

      <aside class="docs-home-guide-card docs-home-reveal docs-home-d3" aria-labelledby="docs-home-guide-title">
        <div class="docs-home-guide-header">
          <h2 id="docs-home-guide-title">按用途进入</h2>
          <p>教程和参考分开：先接工具，需要时再查 API。</p>
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
      工具有回复后，仍以 Arqel 控制台请求记录确认是否真正接入。
    </p>
  </div>
</template>
