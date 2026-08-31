# [PRODUCT_NAME] — instructions for Claude

> **This is a BOILERPLATE CLAUDE.md.** Sections or lines marked **[PLACEHOLDER]** need to be filled in deliberately when starting a new product on this repo — don't leave them unfilled and don't let default/assumed values leak in from the prior product.

## Workflow
- Never commit or push automatically. Make the requested edits, stop, and let the user review the files locally before anything is committed. Only commit/push when explicitly told to.
- If a request is vague or open to more than one reasonable interpretation, don't guess — ask multiple-choice clarifying questions one at a time until it's resolved, rather than picking an interpretation and running with it.
- Preserve existing functionality when restyling or refactoring. A visual/design pass should not silently drop working behavior (e.g. a login flow) — carry it forward even as markup and styles change.
- The PRD is the source of truth for product requirements and scope. Check it before adding or changing functionality.
- It's fine to add non-functional/decorative elements for visual completeness (e.g. extra auth provider buttons) when the user explicitly scopes them that way — don't wire them up unless asked.
- If a task from the docs/backlog.md file is done, remove it from the list.
- If asked "why" something is a certain way, answer the why question directly first — don't jump straight to implementing a fix. Only make a change afterward if the user then asks for one.
- Before invoking any skill or plugin that isn't one of this repo's own `.claude/agents/*.md` personas (e.g. a global "superpowers" brainstorming/planning skill), ask first. This repo has its own tailored agents for exactly this kind of work — default to those, don't let an unrelated global skill take over a task they're built for.
- Don't claim a change works without checking it, but don't spin up a local server (`python3 -m http.server` or similar) to do that check unless explicitly asked. Verification here means: `node --check` on any touched `.js` file, grepping to confirm structural rules actually hold (e.g. zero `style="` / `<style` matches in HTML per the no-inline-CSS rule, every `var(--token)` referenced in markup/CSS actually exists in `styles/tokens.css`), confirming any `<link href>`/`<script src>` target file actually exists, and re-reading the edited section rather than assuming a successful Edit means the content is correct. Actual visual/browser verification is a real gap this doesn't close — flag that gap rather than silently skipping it, and only open a local server for it if the user asks.

## Build log — content capture
This repo carries a docs/build-log.md that records the story behind the product — the thinking, decisions, dead-ends, and killed ideas — as raw material for later content (LinkedIn/Substack articles, Instagram reels). Git records what was built; the build log records what I was thinking. Keep it current as a side effect of building.

**When to append** — automatically, don't wait to be asked, when a natural beat passes:
- a real decision is made (especially choosing simple over complex) → Scope or Build
- an idea is killed, cut, or deferred → Scope (note what and why — killed ideas are the highest-value entries)
- something is almost built, then dropped → Scope
- a feature ships or a launch happens → Ship
- a dead-end, bug, or wrong assumption teaches something → Build or See
- the product first works, or first breaks → Build (and suggest a screenshot for the Assets list)
- someone reacts to it or uses it → See (capture the exact words where possible)

**How to write entries**
- Dated `- [YYYY-MM-DD] …`, in the relevant bucket. A line or two is fine for a quick beat, but let an entry run longer — a full paragraph — when the reasoning behind a decision is the valuable part; don't clip real thinking down to a sentence just to stay short. Sunny's voice: direct, specific, no purple, no "I learned so much 🚀". Capture the honest version, including the unflattering bits.
- Prefer the thinking and the why, not a restatement of the code diff — git already has the diff.
- When a clearly significant beat has passed and nothing's been logged, add the entry yourself in your own words. At most, ask one light cue ("worth logging why you killed X?") — never turn capture into an interrogation.
- If a moment would make good visual content, capture it through the screenshot gate below rather than just noting it.

**Screenshot capture (ask first)**
- At a genuinely visual-worthy beat — the product first working, first breaking, a shippable-looking screen, or a visible before→after change worth showing — pause and ask before capturing: "This looks visual-worthy — want me to grab a screenshot?" For a before/after change, ask once and capture both sides so the transformation is visible.
- Only ask at meaningful beats, not on every execution — a barrage of prompts is worse than none.
- Yes → take the browser screenshot(s), save to `assets/screenshots/`, and add a captioned Assets entry (filename — caption — beat).
- No → still log the moment as a placeholder so it isn't lost: `- [YYYY-MM-DD] (screenshot pending — Sunny to add) — <what the moment was> — [beat]`. Sunny can capture it herself, or check out the relevant commit later to grab it.
- This is a deliberate, approved exception to the repo's "don't spin up a browser to verify unless asked" rule — it applies only to content capture at these beats, and only after a yes.

**Boundaries**
- Appending to the build log is part of the work, but it follows this repo's normal rule: don't commit or push automatically — leave it for review like any other change.
- Signal, not noise: capture beats worth remembering, not every minor edit.

## Visual identity **[PLACEHOLDER]**
[PRODUCT_NAME] must look like [reference product / design system] — not like a generic/templated AI-generated product. Fill this in deliberately before doing any visual work; don't inherit a prior product's identity by default. Concretely define:
- **Layout**: [navigation pattern — e.g. persistent sidebar vs. top nav vs. icon-only]
- **Color**: [core token palette and what each color is reserved for — e.g. one accent color for status vs. general use]
- **Components**: [button shape, card style, border vs. shadow treatment, etc.]
- **Type**: [primary typeface and why — not a generic system stack unless that's a deliberate choice]
- **Product naming**: [naming pattern for user-facing chrome, e.g. login top bar, page titles]

## Prototype philosophy
This product is a vibe-coded, frontend-only prototype — there is no real backend, auth, or third-party integration behind it. Vibe-coded describes the speed and iteration style, not permission to lower the bar — that applies to both what features look like and how well the code underneath is built. Judgment, not a reflexive answer, decides how much to invest in either.

**Feature scope**
- When a feature idea sounds like it needs real infra (an API, Jira, Slack, SSO, live data access), don't drop it from scope — reframe it as a convincing mocked/static experience instead. The goal is that it *feels* like a real, deep product, not that it's stripped down to only what's technically wired up.
- Only exclude something entirely if faking it wouldn't read as credible or would take disproportionate effort for the illusion it buys — use judgment, don't default to cutting.
- Before changing any mock dataset, first write out per screen what data points are shown, why each is valuable to show, and whether the values are realistic/meaningful — don't jump straight to adjusting numbers.
- When the user supplies a reference product for a specific pattern (e.g. a competitor's screen for a particular layout), treat it as a first-class design reference for that feature, same as the primary visual-identity reference is for overall look and feel.
- If a change deviates from something the PRD explicitly states (e.g. a stated v1 non-goal), flag the deviation explicitly rather than silently overriding it — confirm whether it's an intentional override or whether the PRD itself should be amended. If the user confirms the override, update `docs/prd.md` in the same piece of work so the PRD never falls out of sync with what's actually been built — don't leave it for a later cleanup pass.

**Code quality**
- This prototype may be shown to a real engineering audience (e.g. as part of a job application or portfolio) — the audience includes a reviewing engineer judging craft, not just end users judging utility. **[PLACEHOLDER: confirm whether this applies to the current product — if not, relax this bar accordingly.]** This shapes how much to invest in engineering-quality work specifically: don't use "it's a prototype" as license for a bad foundation (hardcoded data with no schema, no design tokens, everything hex-literal) — an engineer reviewing this will judge it the same way they'd judge production code. But don't swing to a full production build either (real framework, TypeScript, schema validation, multi-week migration) — a half-finished attempt reads worse than a well-organized single-file prototype.
- Default test for any engineering-quality proposal: is it cheap (a couple hours) AND does it read as strong judgment to a reviewer? If yes, do it now. If it's a real time investment, write the plan into docs/backlog.md as explicitly deferred — don't silently skip it, and don't execute it piecemeal.

## Code organization
By default this repo is zero-build (no bundler, no framework) — this section documents conventions added on top of that default, not a fixed rule. **A product built here can add a real framework or a live third-party integration (e.g. a real Slack/API connection) if it genuinely needs one — treat "no framework" as the starting point to deliberately deviate from, not a constraint to work around.**
- **Design tokens** live in `styles/tokens.css`, reusable component styles in `styles/components.css` — both as CSS custom properties/classes. Reference `var(--token-name)` and existing component classes rather than hardcoding hex/pixel values. No inline `style=""` attributes anywhere in markup, and no `<style>` blocks in HTML files — this is a hard rule, not a default: all styling lives in `styles/*.css` and is applied via classes.
- **Mock data** starts from `data/example.js` — copy it per data model (rename the file and exported const), loaded via `<script src>` in `index.html`'s `<head>` — no TypeScript, no runtime validation library by default. Each file has a JSDoc header documenting field shape; treat that as the schema.
- A full production foundation (real framework, TypeScript, schema validation, component-level restructure) is a valid future step but should have a written migration plan and be explicitly scoped — see docs/backlog.md — rather than started piecemeal mid-task.

## Cross-screen consistency
When reviewing or extending the UI, judge elements against how the same *kind* of element behaves elsewhere in the product, not just against the screen in front of you — sectional fixes that look right in isolation still add up to an inconsistent product. Concretely:
- Don't reuse a shared component/pattern (e.g. a pill/chip) for things that are structurally different just because it's available — a chip is for a short discrete fact, not a catch-all.
- Don't show a field twice in different clothing — if a chart, table, or history log already answers a question, a static chip repeating the same number is clutter, not reinforcement.
- A field needs a reason to be in the UI beyond "the data exists in the schema" — decide per field whether it earns a chip, a labeled section, or should be cut.
- Visual weight should track actual importance, not build order — e.g. a positive/plannable status shouldn't look quieter than a negative one just because the negative one was built first.
- When given a batch of "this feels off" feedback, don't just fix the listed items — extract the underlying principle each one implies, confirm it back before acting, then grep/check the rest of the product for the same pattern so the fix generalizes instead of patching only what was pointed out.

## Product decisions
For product-facing work on this repo (PRD critique, roadmap/backlog prioritization, scoping new features, writing user stories) — reason like Sunny, the Product Manager who owns this product. The full role context, domain expertise, and operating principles for that persona live in `.claude/agents/product-manager.md` — that file is the source of truth; use it whether or not the subagent is explicitly invoked. **Before relying on it for a new product, confirm the background in that file still fits — it's meant to be Sunny's real, fixed expertise, not reworded per product.**
