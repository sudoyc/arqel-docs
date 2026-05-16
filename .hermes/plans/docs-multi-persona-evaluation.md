# Arqel docs multi-persona evaluation plan

Goal: Evaluate the current standalone Arqel docs site from multiple external-user perspectives, identify copy/information-architecture defects, and produce a prioritized improvement backlog. This is an evaluation-only pass: no docs or app code changes.

Scope:
- Primary repo: /home/ycyc/projects/arqel-docs
- Docs root: /home/ycyc/projects/arqel-docs/docs
- VitePress config: /home/ycyc/projects/arqel-docs/docs/.vitepress/config.ts
- Public docs pages only. Exclude generated cache/dist as source of truth.
- Main app frontend in /home/ycyc/projects/sub2api is out of scope unless a persona explicitly needs to compare public homepage/docs consistency.

Constraints:
- Use Arqel as public brand.
- Do not recommend exposing Sub2API in public docs unless clearly describing upstream/internal context.
- Do not make claims that Arqel supports Anthropic-compatible, Gemini-compatible, or Codex-specific protocols unless confirmed by current docs/backend.
- Do not prescribe implementation/deployment yet.
- Report defects with evidence: file path, heading/section, why it hurts this persona, and suggested remediation.

Subagent personas:
1. Near-zero-background beginner
   - Goal: Can a non-expert understand what Arqel is, what to install, where to click, and how to make first successful request?
   - Focus pages: docs/index.md, getting-started/index.md, setup/*, getting-started/api/*, glossary.

2. Developer integrating OpenAI-compatible API
   - Goal: Can a developer quickly find base URL, API key, model name, sample request, error handling, and SDK guidance?
   - Focus pages: api/*, getting-started/api/*, tools/sdk/*, concepts/base-url.md, concepts/models-and-routing.md.

3. AI-agent power user using Claude Code / Codex / Gemini / Cursor / Hermes
   - Goal: Can an agent-tool user know which path applies to their tool, what is verified vs uncertain, and avoid wrong compatibility assumptions?
   - Focus pages: tools/agents/*, tools/cc-switch/*, tools/index.md.

4. Security / ops / reliability reviewer
   - Goal: Are security boundaries, key handling, MCP warnings, billing/usage risks, troubleshooting, and operational failure modes clear enough?
   - Focus pages: help/security/*, concepts/mcp-security.md, concepts/usage-and-billing.md, help/troubleshooting/*, getting-started/troubleshooting/*.

5. Product copy / IA reviewer
   - Goal: Does the public surface feel consistent, polished, non-upstream-branded, and easy to navigate? Are duplicate concepts or route names confusing?
   - Focus pages: full docs tree, especially landing pages and nav/sidebar config.

Deliverable format per subagent:
- Persona summary: 2-4 bullets
- Top defects: severity P0/P1/P2/P3, file path, section/heading, evidence, impact, suggested fix
- Missing content: bullets
- Confusing wording/branding: bullets
- Quick wins: 3-7 items
- Larger follow-ups: 2-5 items

Aggregation after subagents finish:
- Merge duplicate findings.
- Produce prioritized backlog:
  P0: blocking/wrong/harmful claims
  P1: first-run success blockers or major confusion
  P2: clarity/polish improvements
  P3: nice-to-have refinements
- Keep final response concise: conclusion, strongest findings, next recommended edits.
