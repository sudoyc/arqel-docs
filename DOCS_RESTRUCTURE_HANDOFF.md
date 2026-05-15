# Docs Restructure Handoff

## Purpose

This handoff captures the next documentation refactor after P0/P1/P2 content work.

The user explicitly requested:

- Each major category should avoid direct leaf-level pages unless unavoidable.
- Agent pages and integration methods should move into second-level directories.
- Tool instructions must be verified against each project's README or current web docs before writing concrete usage steps.
- CC Switch usage/path details likely need correction.
- Add Hermes Agent.
- Fill missing official links.

## Current State

The docs site is a VitePress project at:

`/home/ycyc/projects/arqel-docs`

Current docs root:

`/home/ycyc/projects/arqel-docs/docs`

Current sidebar file:

`/home/ycyc/projects/arqel-docs/docs/.vitepress/config.ts`

Build command:

```bash
pnpm run build
```

Working directory for build:

```text
/home/ycyc/projects/arqel-docs
```

Previous build passed after P2 work.

## Important Existing Constraints

1. Arqel does not provide auto route.
2. Every request must explicitly use a concrete model name shown in the Arqel console.
3. Do not imply that any Agent can connect just because an OpenAI-compatible Base URL exists.
4. Tool-specific instructions must be checked against official docs or project READMEs before claiming exact commands, paths, or config keys.
5. CC Switch can manage providers and includes proxy / Local Routing capabilities, but Arqel docs must not claim Arqel has verified every Agent/protocol unless product/backend confirms it.
6. If Hermes Agent official source cannot be confidently identified, write Hermes docs conservatively and only state facts confirmed through CC Switch release notes/docs.

## Verified CC Switch Facts

Sources checked:

- `https://github.com/farion1231/cc-switch`
- `https://github.com/farion1231/cc-switch/releases`
- `https://ccswitch.io`
- `https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md`

Confirmed facts:

- Official name in project README: `CC Switch`.
- Official website: `https://ccswitch.io`.
- GitHub repository: `https://github.com/farion1231/cc-switch`.
- Latest release observed during research: `v3.14.1`.
- CC Switch supports Claude Code, Codex, Gemini CLI, OpenCode, OpenClaw, and Hermes Agent.
- README tagline: All-in-One Manager for Claude Code, Codex, Gemini CLI, OpenCode, OpenClaw & Hermes Agent.
- CC Switch has provider management, MCP, Prompts, Skills, Session Manager, Usage tracking, Local Routing / proxy, failover, model tests, Deep Link, and cloud sync features.
- Data storage from README FAQ:
  - Database: `~/.cc-switch/cc-switch.db`
  - Local settings: `~/.cc-switch/settings.json`
  - Backups: `~/.cc-switch/backups/`
  - Skills: `~/.cc-switch/skills/`
  - Skill backups: `~/.cc-switch/skill-backups/`
- Install sources:
  - Windows: `CC-Switch-v{version}-Windows.msi` or portable ZIP from Releases.
  - macOS: `CC-Switch-v{version}-macOS.dmg` or Homebrew.
  - Linux: `.deb`, `.rpm`, or `.AppImage`; Arch can use `paru -S cc-switch-bin` per README.
- macOS Homebrew commands from README:
  - `brew tap farion1231/ccswitch`
  - `brew install --cask cc-switch`
  - `brew upgrade --cask cc-switch`
- CC Switch User Manual says it covers Provider Management, MCP/Prompts/Skills, Proxy & High Availability, and FAQ.
- CC Switch v3.14.0 release says Hermes Agent became the 6th managed app.
- Hermes-related CC Switch facts from v3.14.0/v3.14.1 release notes:
  - Hermes config path: `~/.hermes/config.yaml`.
  - Hermes supports protocols in CC Switch context: `chat_completions`, `anthropic_messages`, `codex_responses`, `bedrock_converse`.
  - Hermes Web UI / dashboard command mentioned by CC Switch release notes: `hermes dashboard`.
  - CC Switch removed its Hermes config health scanner in v3.14.1; deep Hermes config health is delegated to Hermes itself.

## Current Problems To Fix

### 1. Sidebar is still too flat

Current major categories still directly list leaf pages, for example:

- `tools/cursor.md`
- `tools/claude-code.md`
- `tools/gemini-cli.md`
- `tools/codex-cli.md`
- `tools/openai-sdk.md`
- several `getting-started/*.md` pages directly under the major category
- `help/security.md`, `help/errors.md`, `help/troubleshooting.md` directly under help

User requested that major categories should not contain leaf-level docs unless unavoidable.

### 2. CC Switch docs need correction

Current docs still use `CC-switch` in several places. Prefer `CC Switch` in user-facing text, keeping URL slug `cc-switch`.

Current docs under:

```text
docs/tools/cc-switch/
```

Need to update content using verified official facts above.

### 3. Hermes Agent is missing

Need a Hermes Agent page, plus Hermes entries in:

- tool comparison
- tool overview
- CC Switch Agent application page
- sidebar
- getting started route if mentioning multi-Agent route

### 4. External links are incomplete

Need a central source-links section/page or per-page links to official docs.

## Proposed New Directory Structure

Keep top-level category `index.md` files as category landing pages. Move leaf docs into second-level directories.

### Getting Started

Target:

```text
docs/getting-started/index.md
docs/getting-started/basics/choose-path.md
docs/getting-started/basics/basic-concepts.md
docs/getting-started/basics/glossary.md
docs/getting-started/api/api-key.md
docs/getting-started/api/base-url-and-model.md
docs/getting-started/api/first-request.md
docs/getting-started/troubleshooting/success-and-failure-examples.md
docs/getting-started/troubleshooting/checklist.md
```

Current source files to move:

```text
docs/getting-started/choose-path.md -> docs/getting-started/basics/choose-path.md
docs/getting-started/basic-concepts.md -> docs/getting-started/basics/basic-concepts.md
docs/getting-started/glossary.md -> docs/getting-started/basics/glossary.md
docs/getting-started/api-key.md -> docs/getting-started/api/api-key.md
docs/getting-started/base-url-and-model.md -> docs/getting-started/api/base-url-and-model.md
docs/getting-started/first-request.md -> docs/getting-started/api/first-request.md
docs/getting-started/success-and-failure-examples.md -> docs/getting-started/troubleshooting/success-and-failure-examples.md
docs/getting-started/checklist.md -> docs/getting-started/troubleshooting/checklist.md
```

### Tools

Target:

```text
docs/tools/index.md
docs/tools/agents/index.md
docs/tools/agents/compare.md
docs/tools/agents/cursor.md
docs/tools/agents/claude-code.md
docs/tools/agents/gemini-cli.md
docs/tools/agents/codex-cli.md
docs/tools/agents/hermes.md
docs/tools/sdk/index.md
docs/tools/sdk/openai.md
docs/tools/cc-switch/index.md
docs/tools/cc-switch/install.md
docs/tools/cc-switch/provider.md
docs/tools/cc-switch/agents.md
docs/tools/cc-switch/faq.md
```

Current source files to move:

```text
docs/tools/compare.md -> docs/tools/agents/compare.md
docs/tools/cursor.md -> docs/tools/agents/cursor.md
docs/tools/claude-code.md -> docs/tools/agents/claude-code.md
docs/tools/gemini-cli.md -> docs/tools/agents/gemini-cli.md
docs/tools/codex-cli.md -> docs/tools/agents/codex-cli.md
docs/tools/openai-sdk.md -> docs/tools/sdk/openai.md
```

New files:

```text
docs/tools/agents/index.md
docs/tools/agents/hermes.md
docs/tools/sdk/index.md
```

### Help

Target:

```text
docs/help/index.md
docs/help/security/index.md
docs/help/troubleshooting/index.md
docs/help/troubleshooting/errors.md
```

Current source files to move:

```text
docs/help/security.md -> docs/help/security/index.md
docs/help/troubleshooting.md -> docs/help/troubleshooting/index.md
docs/help/errors.md -> docs/help/troubleshooting/errors.md
```

### Setup

Setup is already a top-level section nested under the `入门教程` sidebar group. It can remain as-is for now, or later move into:

```text
docs/setup/platforms/macos.md
docs/setup/platforms/windows.md
docs/setup/platforms/linux-wsl.md
```

For the next pass, do not move setup unless necessary. Focus first on `getting-started`, `tools`, and `help`.

## Sidebar Target Shape

Update `docs/.vitepress/config.ts` to this general structure:

```ts
{
  text: '入门教程',
  items: [
    { text: '总览', link: '/getting-started/' },
    {
      text: '基础知识',
      collapsed: true,
      items: [
        { text: '选择入门路径', link: '/getting-started/basics/choose-path' },
        { text: '基础概念', link: '/getting-started/basics/basic-concepts' },
        { text: '词汇表', link: '/getting-started/basics/glossary' }
      ]
    },
    {
      text: 'API 入门',
      collapsed: true,
      items: [
        { text: '创建 API Key', link: '/getting-started/api/api-key' },
        { text: 'Base URL 和模型名', link: '/getting-started/api/base-url-and-model' },
        { text: '发送第一条请求', link: '/getting-started/api/first-request' }
      ]
    },
    {
      text: '排障与检查',
      collapsed: true,
      items: [
        { text: '成功和失败示例', link: '/getting-started/troubleshooting/success-and-failure-examples' },
        { text: '接入检查清单', link: '/getting-started/troubleshooting/checklist' }
      ]
    },
    {
      text: '环境准备',
      collapsed: true,
      items: [existing setup links]
    }
  ]
}
```

For tools:

```ts
{
  text: '工具接入',
  items: [
    { text: '总览', link: '/tools/' },
    {
      text: 'Agents',
      collapsed: true,
      items: [
        { text: '对比', link: '/tools/agents/compare' },
        { text: 'Cursor', link: '/tools/agents/cursor' },
        { text: 'Claude Code', link: '/tools/agents/claude-code' },
        { text: 'Gemini CLI', link: '/tools/agents/gemini-cli' },
        { text: 'Codex CLI', link: '/tools/agents/codex-cli' },
        { text: 'Hermes Agent', link: '/tools/agents/hermes' }
      ]
    },
    {
      text: 'SDK',
      collapsed: true,
      items: [
        { text: 'OpenAI SDK', link: '/tools/sdk/openai' }
      ]
    },
    {
      text: 'CC Switch',
      collapsed: true,
      items: [existing cc-switch links]
    }
  ]
}
```

For help:

```ts
{
  text: '常见帮助',
  items: [
    { text: 'FAQ', link: '/help/' },
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
```

## Content Updates Required

### CC Switch terminology

Replace user-facing `CC-switch` / `CC-switch` with `CC Switch` where appropriate.

Keep slug/path `cc-switch`.

Search terms:

```text
CC-switch
CC-switch
cc-switch
```

When writing prose, use:

```text
CC Switch
```

When writing URLs/slugs, use:

```text
/tools/cc-switch/
```

### CC Switch install page corrections

Update `docs/tools/cc-switch/install.md` after restructure remains at same path.

Add or verify:

- Official website: `https://ccswitch.io`
- GitHub: `https://github.com/farion1231/cc-switch`
- Latest releases: `https://github.com/farion1231/cc-switch/releases/latest`
- Official docs: `https://ccswitch.io/zh/docs`
- User manual: `https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md`
- System requirements from README:
  - Windows 10+
  - macOS 12 Monterey+
  - Linux mainstream distributions, README mentions Ubuntu 22.04+ / Debian 11+ / Fedora 34+
- Arch install:
  - `paru -S cc-switch-bin`
- Windows files:
  - `CC-Switch-v{version}-Windows.msi`
  - `CC-Switch-v{version}-Windows-Portable.zip`
- macOS files:
  - `CC-Switch-v{version}-macOS.dmg`
  - optional `.tar.gz` / `.zip` if listed in release assets
- Linux files:
  - `CC-Switch-v{version}-Linux.deb`
  - `CC-Switch-v{version}-Linux.rpm`
  - `CC-Switch-v{version}-Linux.AppImage`

### CC Switch overview corrections

Update `docs/tools/cc-switch/index.md`:

- State official supported apps from README/release:
  - Claude Code
  - Codex
  - Gemini CLI
  - OpenCode
  - OpenClaw
  - Hermes Agent
- Add feature summary:
  - Provider Management
  - MCP / Prompts / Skills
  - Usage tracking
  - Sessions
  - Local Routing / proxy
  - Failover
  - Deep Link
  - Cloud sync
- Add data storage section:
  - `~/.cc-switch/cc-switch.db`
  - `~/.cc-switch/settings.json`
  - `~/.cc-switch/backups/`
  - `~/.cc-switch/skills/`
- Clarify boundary:
  - CC Switch may support Local Routing / proxy / format conversion.
  - Arqel documentation still must not claim that Arqel has verified every protocol and Agent.
  - Users should verify via Arqel usage records.

### CC Switch Agents page corrections

Update `docs/tools/cc-switch/agents.md`:

- Add Hermes Agent section.
- Add OpenCode / OpenClaw as supported by CC Switch, but mark Arqel-specific usage as pending unless verified.
- For Hermes:
  - Mention config path `~/.hermes/config.yaml`.
  - Mention dashboard command `hermes dashboard`.
  - Mention CC Switch v3.14.0+ treats Hermes as first-class managed app.
  - Mention protocols in CC Switch release context: `chat_completions`, `anthropic_messages`, `codex_responses`, `bedrock_converse`.
  - Do not provide Hermes install command unless official Hermes docs are confirmed.

### Hermes Agent page

Create:

```text
docs/tools/agents/hermes.md
```

Suggested content:

- What Hermes Agent is: an Agent managed by CC Switch as of v3.14.0. Keep wording conservative.
- What is confirmed from CC Switch release notes.
- What needs separate Hermes official documentation confirmation.
- Arqel integration prerequisites:
  - Arqel API Key
  - Arqel Base URL
  - concrete model name
  - compatible protocol or verified CC Switch routing/proxy path
- Configuration notes:
  - `~/.hermes/config.yaml`
  - `hermes dashboard`
- Verification:
  - send read-only prompt
  - check Arqel usage records by timestamp, Key name, model name
- Version note.

### Tool comparison update

Move to `docs/tools/agents/compare.md` and add rows for:

- Hermes Agent
- OpenCode
- OpenClaw

Keep Arqel-specific support marked as “needs verification” unless confirmed.

### External links to add

Add to relevant pages. If not sure where, add a short `官方链接` section per page.

CC Switch:

- Website: `https://ccswitch.io`
- GitHub: `https://github.com/farion1231/cc-switch`
- Releases latest: `https://github.com/farion1231/cc-switch/releases/latest`
- User Manual: `https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md`
- v3.14.1 Release: `https://github.com/farion1231/cc-switch/releases/tag/v3.14.1`
- v3.14.0 Release: `https://github.com/farion1231/cc-switch/releases/tag/v3.14.0`

Tools:

- Cursor: `https://cursor.com`
- Claude Code docs: find and confirm official current URL before writing exact steps.
- Gemini CLI repo/docs: find and confirm official current URL before writing exact steps.
- Codex CLI repo/docs: find and confirm official current URL before writing exact steps.
- OpenAI SDK docs: `https://platform.openai.com/docs/libraries` or current official SDK docs after verification.

Basic setup:

- Node.js: `https://nodejs.org`
- Git: `https://git-scm.com`
- VS Code: `https://code.visualstudio.com`
- WSL: `https://learn.microsoft.com/windows/wsl/`
- Homebrew: `https://brew.sh`

## Implementation Order

1. Create new second-level directories.
2. Move files using `apply_patch` delete/add or move headers.
3. Update all internal links.
4. Update sidebar grouping in `docs/.vitepress/config.ts`.
5. Correct CC Switch pages using verified facts.
6. Add Hermes Agent page.
7. Update comparison and tool overview.
8. Add official links sections.
9. Run build.
10. Search for old-path residues.

## Verification Commands

Run from:

```text
/home/ycyc/projects/arqel-docs
```

Build:

```bash
pnpm run build
```

Search old paths / names:

```text
tools/cursor
tools/claude-code
tools/gemini-cli
tools/codex-cli
tools/openai-sdk
tools/compare
cc-switch-install
cc-switch-provider
cc-switch-agents
cc-switch-faq
```

Search banned/unsupported wording:

```text
自动路由
Auto Route
fallback
```

Search terminology to fix:

```text
CC-switch
CC-switch
```

## Open Questions

1. Which exact Hermes Agent project should be treated as official?
2. Does Arqel support Anthropic-compatible APIs?
3. Does Arqel support Gemini-compatible APIs?
4. Has Arqel tested Claude Code through CC Switch?
5. Has Arqel tested Gemini CLI through CC Switch?
6. Has Arqel tested Codex CLI through CC Switch?
7. Has Arqel tested Hermes Agent through CC Switch?
8. Should OpenCode and OpenClaw also get dedicated Arqel pages now that CC Switch supports them?

## Safety Notes For Next Assistant

- Do not remove the no-auto-route warnings.
- Do not claim Hermes direct Arqel support unless verified.
- Do not claim CC Switch guarantees Arqel compatibility for every Agent.
- Preserve explicit screenshot placeholders.
- After every directory move, run build to catch broken links.
