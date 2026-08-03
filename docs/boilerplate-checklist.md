# Boilerplate Checklist — Starting a New Product

This repo is a cloned starting point, not a finished product. Work through this in order before treating it as a real prototype.

1. **Fill in CLAUDE.md placeholders.** Every `[PLACEHOLDER]` section (Visual identity, the code-quality-audience note, Product decisions) needs a deliberate answer for this product — don't leave defaults inherited from the prior product.
2. **Define your product's visual identity.** Pick a reference product/design system, then encode it in `styles/tokens.css` (colors, spacing scale, type scale, radius) rather than hardcoding values inline. Update the Visual identity section of CLAUDE.md to match.
3. **Fill in the `.claude/agents/*.md` personas for your domain.** Each file has a "Repo-Specific Conventions" section with `[PLACEHOLDER]` markers — resolve them, especially `product-manager.md`'s persona name, scope, stakeholder map, and domain expertise.
4. **Write your PRD in `docs/prd.md`.** Problem statement, goals/metrics, non-goals, personas, and solution overview before any implementation work starts.
5. **Copy `data/example.js` per data model.** Rename the file and exported const per model (e.g. `users.js` / `USERS`), and rewrite the JSDoc header to document your actual field shape — treat that header as the schema, there's no runtime validation library here.
6. **Build out `index.html` and supporting scripts.** Zero-build, no framework, is the *default* here — add a real framework or live integration only if your product genuinely needs one, and note that deviation in CLAUDE.md's Code organization section.
7. **Populate `docs/backlog.md`** with real prioritized work once the PRD exists — don't backfill fake urgency, evaluate each item against the PRD's stated scope.
8. **Re-check cross-screen consistency** (CLAUDE.md's section on this) once more than one screen exists — it's a review principle, not a one-time setup step.

Once these are done, this repo behaves the same as the prior product it was cloned from: PRD-driven, convincingly mocked, judged on both product and engineering craft.
