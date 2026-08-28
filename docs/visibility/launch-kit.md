# NERV-UI launch kit

All claims below are grounded in the repository at the time of writing: 48 component directories and component docs, a TypeScript React package on npm, live examples, and a portable skill. Replace only the UTM source per channel. Do not post without maintainer approval.

## Descriptions

**Short:** Typed React components and a portable agent skill for original command-center interfaces.

**Medium:** NERV-UI is a TypeScript React component library with 48 documented components, live examples, package CSS, and a portable `SKILL.md` that helps coding agents install and use the real package.

**Long:** NERV-UI turns a sharp command-center visual grammar into importable React components: forms, data grids, charts, overlays, dashboards, and monitoring views. Install `@mdrbx/nerv-ui`, browse the live examples, or give a compatible coding agent the repository’s canonical skill. It is an independent, fan-inspired project and produces original interfaces rather than copied screens.

## Channel-specific drafts

### Hacker News

**Title:** Show HN: NERV-UI – typed React command-center components with a portable agent skill

**Text:** I built NERV-UI as an npm package for original command-center interfaces in React. It has 48 documented components, live examples, TypeScript declarations, and a `SKILL.md` that directs coding agents to install and use the actual package instead of generating a lookalike CSS pile. Demo: https://mdrbx.github.io/nerv-ui/?utm_source=hn&utm_medium=post&utm_campaign=agent-skill-launch — feedback on the API, accessibility, and examples is welcome.

### X thread

1. NERV-UI is now a typed React component library **and** a portable coding-agent skill for original command-center interfaces. Demo: https://mdrbx.github.io/nerv-ui/?utm_source=x&utm_medium=social&utm_campaign=agent-skill-launch
2. The package exposes 48 documented components, with live dashboard, monitoring, form, and authentication examples. Install: `npm install @mdrbx/nerv-ui framer-motion`
3. The skill steers compatible agents toward the real exports, recipes, accessibility checks, and reduced-motion support instead of a visual imitation. Source: https://github.com/mdrbx/nerv-ui/tree/master/skills/nerv-ui?utm_source=x&utm_medium=social&utm_campaign=agent-skill-launch

### Reddit variants

Before posting, verify the current self-promotion rule of the selected subreddit and adapt the post to a useful technical discussion.

- **r/reactjs:** “I published a typed React command-center component library with 48 documented components. I’m looking for feedback on the public API and what examples would make it more useful: [demo link].”
- **r/webdev:** “How would you structure a reusable visual language for operational dashboards without turning it into a giant CSS copy/paste? I used TypeScript components and live examples here: [demo link].”
- **r/opensource:** “NERV-UI is an MIT React component library plus an agent-readable skill. Interested in contribution/packaging feedback: [repo link].”

### LinkedIn

I’ve expanded NERV-UI from a visual experiment into a typed React component library with live examples and a portable coding-agent skill. The goal is practical: install a package, compose a complete dashboard or terminal flow, and retain a clear accessibility baseline. Explore the demo: https://mdrbx.github.io/nerv-ui/?utm_source=linkedin&utm_medium=social&utm_campaign=agent-skill-launch

### Discord

Sharing NERV-UI: an MIT React/TypeScript component library for original command-center interfaces, now with a portable agent skill and live examples. Demo: https://mdrbx.github.io/nerv-ui/?utm_source=discord&utm_medium=community&utm_campaign=agent-skill-launch

### Skill directory

NERV-UI is a typed React component library for original command-center dashboards, terminals, forms, and overlays. Its portable `SKILL.md` guides compatible coding agents to install `@mdrbx/nerv-ui`, use verified exports, follow recipes, and check accessibility/reduced motion.

### Proposed GitHub release text — v1.0.8

## Agent-native NERV-UI

- Adds a canonical portable `SKILL.md` with React/Vite/Next.js guidance and complete UI recipes.
- Adds an automated catalogue check against public component exports.
- Improves README conversion paths, package metadata, social cards, sitemap, robots, and manifest metadata.
- Includes original social preview art and a ready-to-review launch kit.

No npm publish is included in this change.

## UTM matrix

| Channel | `utm_source` | `utm_medium` | `utm_campaign` |
| --- | --- | --- | --- |
| Hacker News | `hn` | `post` | `agent-skill-launch` |
| X | `x` | `social` | `agent-skill-launch` |
| Reddit | `reddit` | `community` | `agent-skill-launch` |
| LinkedIn | `linkedin` | `social` | `agent-skill-launch` |
| Discord | `discord` | `community` | `agent-skill-launch` |
| Skill directories | directory slug | `referral` | `agent-skill-launch` |

Keep one source value per placement; do not add user-level identifiers. For Reddit drafts, replace `[demo link]` with the demo URL plus the row’s tags only after the selected community’s current self-promotion rules have been reviewed.

## Visual assets

- Social/GitHub preview: `docs/visibility/assets/nerv-ui-social-preview.png` (1731×909, original artwork).
- Product motion: `docs/references/readme-surveillance-preview.gif` (1200×675, 474 KiB).
- Static fallback: `banner.png`, displayed directly before the GIF in the README.

## Mini article

### How NERV-UI turns the Evangelion command-center aesthetic into a typed React design system

The hard part of a high-contrast interface is not choosing orange and black. It is making that visual language repeatable across a dense dashboard, a monitoring terminal, and a form without every screen becoming a one-off. NERV-UI packages the structural pieces—data grids, status views, charts, overlays, inputs, and navigation—as typed React exports, then demonstrates how they fit into full routes.

The new skill makes that same constraint useful to coding agents. It says when the library is appropriate, asks the agent to install the package, names the actual exports, and directs it to recipes. That keeps generated work anchored to a maintainable component API rather than a screenshot-shaped pile of CSS. The visual references remain original: command-center grammar, not copied screens.

## Calendar

| Day | Action | Success signal |
| --- | --- | --- |
| J0 | Merge/publish the approved PR; set GitHub social preview; submit one eligible index PR | README clicks and validated index PR |
| J1 | Publish one approved technical launch post; answer comments | Referral source recorded |
| J3 | Share the most useful example to one permitted community | Demo traffic and qualitative feedback |
| J7 | Publish a short implementation note; review documentation friction | Install questions reduced |
| J14 | Review usage evidence and decide whether VoltAgent is eligible | Qualifying evidence or defer |
| J30 | Compare baseline, referrers, npm downloads, stars, and integrations | Next 30-day experiment selected |

## Follow-up checklist

At J+1, J+3, J+7, J+14, and J+30: run `npm run visibility:report`; record GitHub stars/forks/watchers, npm downloads, views/clones/referrers if owner access exists, top UTM/referrer source, issues, integration links, and the action taken. Label observed data separately from hypotheses.
