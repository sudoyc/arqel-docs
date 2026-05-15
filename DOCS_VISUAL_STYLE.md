# Arqel Docs Visual Style

This file records the selected art direction for the Arqel documentation homepage and related docs landing pages.

Reference sketch:

- `sketches/004-docs-reading-path-refined/index.html`

## Selected direction

Use the refined Reading Path direction as the baseline for docs homepage work.

The page should feel like a documentation-native extension of the Arqel public homepage: polished dark/purple, restrained, readable, and clearly structured around actual setup tasks. It should not feel like a generic SaaS splash page or a decorative terminal demo.

## Core layout

- Keep the Product Split composition:
  - left side: Arqel Docs hero copy and primary actions
  - right side: docs-relevant navigation card
- The right-side card should be useful documentation structure, not decoration.
- Preferred right-side pattern: `推荐阅读路径` with concise entries for:
  - API 地址
  - 模型凭证
  - 模型名称
  - 请求状态
- Avoid mechanical labels such as `4 steps` on the homepage. Use natural documentation copy, for example:
  - `按实际接入顺序阅读，不需要先理解全部概念。`

## Visual language

- Dark baseline: `#09090b`.
- Primary accent: `#6467f2` purple/blue.
- Use subtle radial ambience and a very low-opacity grid, consistent with the public Arqel homepage.
- Use thin borders, restrained card depth, and clear typography.
- Do not introduce heavy glow, decorative light beams, excessive glassmorphism, or unrelated visual effects.
- Avoid decorative terminal cards unless the terminal content directly supports a docs task. A terminal block that only repeats setup commands feels like filler here.

## Typography and spacing

- Hero title can stay large and brand-forward, but overview/card headings must remain materially smaller.
- Body copy should be beginner-accessible without being patronizing.
- Prefer factual, slightly implicit copy over overly literal tutorial wording.
- Keep line-height generous enough for Chinese copy readability.
- Right-side cards should have enough padding and spacing to scan quickly.

## Motion

- Hero elements should reveal upward in sequence.
- Lower entry cards should also reveal upward with staggered delays.
- The motion should stay restrained: upward movement plus slight blur removal is enough.
- Hover states may use small translate movement and border-color changes.

## Homepage copy boundaries

Use language like:

- `面向 AI 编程工具的模型接入`
- `把 Claude、GPT、Gemini 接入你的工作流`
- `统一 API 地址、清晰的模型配置和用量记录`

Avoid claims or wording that imply:

- Arqel provides auto route.
- One API key manages all models.
- Users can ignore concrete model names.
- A generic OpenAI-compatible Base URL automatically works with every Agent.

Always distinguish:

- API 地址 / Base URL
- 模型或服务凭证
- 模型名称
- 请求状态、用量、余额和错误

## Implementation note

When implementing this in the real docs site, preserve the selected sketch as the visual target, but translate it into the actual VitePress/docs structure rather than copying throwaway HTML blindly.

Before calling the implementation done, verify the actual page in a browser, not only with typecheck/build.
