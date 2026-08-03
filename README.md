# Claude Vibe Boilerplate

A zero-build boilerplate for vibe-coded, frontend-only prototype products — cloned from a prior product and stripped down to a reusable starting point.

This repo is not a product yet. It's a foundation: a design-token system, a component stylesheet, a mock-data pattern, a PRD/backlog structure, and a set of `.claude/agents/*.md` personas — all with `[PLACEHOLDER]` markers where the next product needs to make deliberate decisions instead of inheriting the prior product's defaults.

---

## Getting started

Work through [`docs/boilerplate-checklist.md`](docs/boilerplate-checklist.md) in order before treating this as a real prototype. In short: fill in `CLAUDE.md`'s placeholders, define your visual identity in `styles/tokens.css`, fill in the agent personas for your domain, write your PRD, replace `data/example.js` per data model, then build out `index.html`.

## Running it locally

This is a zero-build, zero-dependency static site — no `npm install`, no bundler.

```bash
git clone <this-repo-url>
cd <repo-directory>
python3 -m http.server 8080
```

Then open **http://localhost:8080** in your browser. (Any static file server works — `npx serve`, VS Code's Live Server, etc.)

## Project structure

```
index.html            Welcome/demo page showing the design system — replace with your product's screens
data/example.js        Mock-dataset template — copy per data model, rewrite the JSDoc schema
styles/tokens.css      Design tokens — colors, spacing, type scale, radius
styles/components.css  Reusable component classes (buttons, cards, tables, etc.)
docs/prd.md            Product requirements doc — blank template, source of truth for scope once filled in
docs/backlog.md        Prioritized/deferred work — blank template
docs/boilerplate-checklist.md   Step-by-step guide for turning this into a real product
.claude/agents/*.md    Reusable persona templates (PM, Brand & UI Designer, UX Architect, Frontend Developer, Whimsy Injector)
```

## Philosophy

See `CLAUDE.md` for the full set of working conventions (workflow rules, prototype philosophy, code organization, cross-screen consistency). It's written to travel with this repo across products — genericized sections apply as-is, `[PLACEHOLDER]` sections need a deliberate answer per product.
