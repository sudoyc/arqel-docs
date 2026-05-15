# Arqel Docs Improvement Plan

## Background

The `docs-site` VitePress documentation site currently covers:

- Getting started tutorials
- Multi-platform environment setup
- API Key / Base URL / first request
- Cursor / Claude Code / Gemini CLI / Codex CLI / OpenAI SDK
- CC-switch
- Concepts
- FAQ / errors / API skeleton

Multiple review agents simulated different reader levels: complete beginner, command-line beginner, Agent power user, technical accuracy reviewer, and content-structure reviewer.

The conclusion: the docs are readable for users with some command-line experience, but still have gaps for nearly zero-background users. Some Agent integration text also needs stronger protocol-accuracy boundaries.

## Core Principles

1. Arqel does not provide auto route.
2. Every request must explicitly use a concrete model name shown in the Arqel console.
3. Do not imply that any Agent can connect just because an OpenAI-compatible Base URL exists.
4. Beginner docs must explain where to act, why the step is needed, what success looks like, and how to interpret failure.
5. Tool docs must distinguish macOS, Windows, Linux, and WSL where behavior differs.
6. Missing images should use explicit placeholders describing what screenshot or diagram is needed.
7. Before public release, backend/product must confirm supported protocols and endpoints.

## P0: Required First

### 1. Add a Path Selection Page

Suggested file:

`docs/getting-started/basics/choose-path.md`

Goal: help users decide where to start.

Required routes:

- Complete beginner route
- API-only test route
- Cursor route
- Claude Code / Gemini CLI / Codex CLI route
- SDK route
- Multi-Agent / CC-switch route

Also update:

- `docs/index.md`
- `docs/getting-started/index.md`
- `docs/.vitepress/config.ts`

### 2. Add a Basic Concepts Page

Suggested file:

`docs/getting-started/basics/basic-concepts.md`

Goal: explain the core concepts in beginner language.

Required concepts:

- API
- Request
- API Key
- Base URL
- Model name
- Relationship between Arqel, tools, and model providers

Image placeholder:

- Diagram: Tool -> Arqel -> Model provider -> Response -> Tool

### 3. Add a Base URL and Model Name Page

Suggested file:

`docs/getting-started/api/base-url-and-model.md`

Goal: make Base URL and model name as concrete as API Key creation.

Required content:

- Where to find Base URL in the Arqel console
- Where to find available model names
- Difference between display name and real model name
- The model name must be copied exactly
- Do not use `auto`, `default`, `best`, or model family names unless the console explicitly lists them as concrete model names

Image placeholders:

- Arqel console Base URL location
- Arqel console model list location
- Correct model-name copy example

### 4. Enforce the No Auto Route Principle Globally

Review and strengthen these files:

- `docs/getting-started/index.md`
- `docs/getting-started/api/first-request.md`
- `docs/tools/index.md`
- `docs/concepts/models-and-routing.md`
- `docs/api/index.md`
- `docs/tools/sdk/openai.md`

Standard wording:

> Arqel does not provide auto route. You must use a concrete model name shown in the Arqel console. Do not use `auto`, `default`, `best`, or model family names unless they are explicitly listed as concrete model names in the console.

### 5. Fix Protocol Compatibility Wording

Risk to address:

- OpenAI-compatible does not mean Claude Code is automatically supported.
- OpenAI-compatible does not mean Gemini CLI is automatically supported.
- CC-switch does not necessarily perform protocol conversion.
- One Base URL / Key / model name may not work across all Agents.

Add a protocol compatibility block, likely in:

`docs/tools/index.md`

Then reference it from tool pages.

Required distinctions:

- OpenAI-compatible
- Anthropic-compatible
- Gemini native / Gemini-compatible
- Cursor / OpenAI SDK are closer to OpenAI-compatible clients
- Claude Code needs Anthropic-compatible support or a verified adapter path
- Gemini CLI needs version-specific support or a verified provider path
- Codex CLI needs version-specific provider configuration

### 6. Fix the Windows First Request Example

File:

`docs/getting-started/api/first-request.md`

Required changes:

- Use `curl.exe` in the Windows PowerShell example
- Add an `Invoke-RestMethod` alternative
- Explain PowerShell multiline backticks

### 7. Add Success and Failure Examples

Suggested file:

`docs/getting-started/troubleshooting/success-and-failure-examples.md`

Required examples:

- Successful response
- 401 invalid API Key
- 403 permission issue
- 404 wrong path or model name
- 429 quota or rate limit
- 500 / 502 / 503 service error
- How to locate the error code
- How to locate the error message

Image placeholders:

- Terminal success response
- Terminal 401 response
- Terminal 429 response

## P1: Important Improvements

### 1. Expand FAQ Home

File:

`docs/help/index.md`

Current issue: too short for a central FAQ.

Expand with:

- API Key questions
- Base URL questions
- Model name questions
- Windows / WSL questions
- CC-switch questions
- Cursor / Claude Code / Gemini CLI / Codex CLI questions
- Request failure questions
- Security questions

### 2. Complete the Error Code Page

File:

`docs/help/troubleshooting/errors.md`

Add:

- Error code
- Common cause
- What the user should do
- Whether support is needed
- What information to provide to support
- What must not be provided, such as a full API Key

### 3. Complete API Reference

Suggested split:

- `docs/api/index.md`
- `docs/api/authentication.md`
- `docs/api/chat-completions.md`

Requires backend/product confirmation:

- Base URL
- Endpoints
- Request fields
- Response fields
- Error format
- Streaming support
- Tool calling support
- Models list support
- Embeddings / responses / images support

### 4. Add Terminal Basics

Suggested file:

`docs/setup/terminal-basics.md`

Required content:

- What a terminal is
- How to open it on each platform
- Where to paste commands
- Press Enter after command input
- How multiline commands work
- What current directory means
- How to enter a directory
- What command not found means
- Difference between successful output and failed output

Image placeholders:

- macOS Terminal
- Windows PowerShell
- WSL Ubuntu terminal
- Successful command execution example

### 5. Add Windows Environment Decision Page

Suggested file:

`docs/setup/which-environment.md`

Required content:

- When to use PowerShell
- When to use WSL
- Where Cursor / VS Code / Agent is actually running
- Windows environment variables do not automatically sync to WSL
- Windows CC-switch may not manage CLI tools installed inside WSL
- Project path recommendations

### 6. Add “Confirm It Really Uses Arqel” to Each Tool Page

Affected files:

- `docs/tools/agents/claude-code.md`
- `docs/tools/agents/gemini-cli.md`
- `docs/tools/agents/codex-cli.md`
- `docs/tools/agents/cursor.md`
- `docs/tools/cc-switch/index.md`

Standard verification flow:

1. Send a read-only test prompt.
2. Open the Arqel console.
3. Check usage record timestamp.
4. Check Key name.
5. Check model name.
6. Confirm the request came from the tool just tested.

Image placeholders:

- Arqel usage record page
- Key-specific request record
- Model-name display in usage record

### 7. Split CC-switch Documentation

Current file is too long:

`docs/tools/cc-switch/index.md`

Suggested split:

- `docs/tools/cc-switch/index.md`: overview and shortest success path
- `docs/tools/cc-switch/install.md`: installation
- `docs/tools/cc-switch/provider.md`: adding Arqel Provider
- `docs/tools/cc-switch/agents.md`: applying to Claude / Gemini / Codex
- `docs/tools/cc-switch/faq.md`: troubleshooting and FAQ

## P2: Later Enhancements

### 1. Add a Glossary

Suggested file:

`docs/getting-started/basics/glossary.md`

Terms:

- API
- SDK
- CLI
- Agent
- Provider
- MCP
- Skills
- Environment variable
- PATH
- WSL
- Token
- Base URL
- API Key
- Current directory
- Shell
- npm
- Node.js

### 2. Add a Tool Comparison Page

Suggested file:

`docs/tools/agents/compare.md`

Compare:

- Cursor
- Claude Code
- Gemini CLI
- Codex CLI
- OpenAI SDK
- CC-switch

Dimensions:

- Best for whom
- Requires terminal or not
- Beginner friendliness
- Project editing suitability
- SDK/application development suitability
- Multi-tool management suitability

### 3. Add a Security Topic

Suggested file:

`docs/help/security/index.md`

Required content:

- Do not put API Key in frontend code
- Do not commit API Key to Git
- Do not share a full API Key
- Do not let Agent edit secret files casually
- Redact logs
- Use Secret Manager for production
- Separate local, staging, and production Keys
- Rotate Keys periodically
- What to do if a Key leaks

### 4. Add MCP Security Explanation

Suggested file:

`docs/concepts/mcp-security.md`

Required content:

- What MCP is
- MCP may read/write files
- MCP may execute commands
- MCP may access the network
- Do not connect untrusted MCP servers
- Add one MCP at a time and test it
- Keep Agent permissions minimal

### 5. Add Version Notes to Tool Pages

Suggested block:

```md
::: info Version note
Last verified: YYYY-MM-DD.
These tools change quickly. UI and configuration keys may differ by version. Always check the current official documentation when behavior differs.
:::
```

Apply to:

- Cursor
- Claude Code
- Gemini CLI
- Codex CLI
- CC-switch

## Screenshot Checklist

### P0 Screenshots

- Arqel login entry
- Arqel console home
- API Key page entry
- Create API Key button
- API Key creation success and copy button, with Key redacted
- Base URL location
- Model list / model name location
- Usage records page
- First request success response
- First request 401 response
- First request 429 response

### P1 Screenshots

- macOS Terminal
- Windows PowerShell
- WSL Ubuntu terminal
- `node -v` success output
- `npm -v` success output
- `git --version` success output
- Cursor API settings page
- CC-switch Add Provider form
- Claude Code successful startup
- Gemini CLI successful startup
- Codex CLI successful startup
- VS Code extension marketplace screenshot

### P2 Diagrams

- API request flow
- Windows vs WSL environment diagram
- Manual configuration vs CC-switch flow
- API Key / Base URL / model name relationship diagram

## Questions for Product or Backend

1. Does Arqel currently support only OpenAI-compatible APIs?
2. Does Arqel support Anthropic-compatible APIs?
3. Does Arqel support Gemini-compatible APIs?
4. Is the Base URL fixed as `https://api.arqel.dev/v1`?
5. Are there production, regional, or user-specific domains?
6. Are all model names shown in the console directly callable?
7. Are there any `auto`, `default`, `best`, or recommended-model aliases?
8. Does `/chat/completions` support streaming?
9. Does it support tool calling?
10. Does it support embeddings, responses, images, or models list?
11. Is the error response format stable?
12. Does API Key support model-level permissions, quota limits, expiration, or usage alerts?
13. Has Claude Code been tested through Arqel?
14. Has Gemini CLI been tested through Arqel?
15. Has Codex CLI been tested through Arqel?
16. In our recommended CC-switch flow, does CC-switch only write config, or do we depend on it for protocol adaptation?

## Suggested Execution Order

### Phase 1: Fix Direction and Beginner Gaps

1. Add `choose-path.md`.
2. Add `basic-concepts.md`.
3. Add `base-url-and-model.md`.
4. Strengthen no-auto-route wording globally.
5. Fix PowerShell request examples.
6. Add success/failure examples.

### Phase 2: Fix Tool Accuracy

1. Add protocol compatibility explanation.
2. Narrow Claude / Gemini / Codex integration claims.
3. Add verified/unverified markers per tool.
4. Add “confirm it really uses Arqel” steps.
5. Split CC-switch docs.

### Phase 3: Improve Help Center and API Reference

1. Expand FAQ.
2. Complete errors page.
3. Complete API reference.
4. Add security topic.
5. Add glossary.

### Phase 4: Add Visuals and UX Polish

1. Add screenshots from the checklist.
2. Add tool comparison page.
3. Add version notes.
4. Add screenshot naming convention.
