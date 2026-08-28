# Visibility strategy

## Positioning

**Promise:** NERV-UI gives React teams and coding agents a typed component library, not merely an aesthetic prompt: install the package, follow a complete example, and ship an original command-center flow.

The 30-day ambition is to exceed the competitor’s qualified visibility and reach 250 total GitHub stars. It is an operating target, never a promise. Success is judged by package installs, active referrers, demo engagement, and useful integrations—not stars alone.

## Prioritized actions

| Priority | Action | Expected impact | Effort | Risk | Dependency | Status | Channel | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P0 | Canonical agent skill + export check | High | Medium | Low | Public branch | Implemented and verified | Codex / Claude Code / Hermes | Review after PR CI |
| P0 | README first-screen conversion | High | Medium | Low | Skill path | Implemented and verified | GitHub / npm | Review rendered PR diff |
| P0 | Original social preview + metadata | Medium | Medium | Low | Pages deploy | Implemented | GitHub / social cards | Set GitHub social preview manually |
| P1 | PR to Heilcheng index | Medium | Low | Low | Project PR merged | Ready after merge | Skill directory | Submit once the canonical skill is on the default branch |
| P1 | Launch content with tagged UTM links | High | Medium | Medium | Maintainer approval | Ready | HN/X/Reddit/LinkedIn | Obtain approval before posting |
| P1 | Add factual GitHub topics | Low–medium | Low | Low | Maintainer confirmation | Prepared | GitHub | Await separate approval to change repository metadata |
| P2 | VoltAgent listing | Medium | Low | Low | Community usage evidence | Queued | Skill directory | Reassess at J+14 |

## Repository metadata change set

The public repository description and topics require a GitHub-authenticated write. The precise, factual change is prepared for maintainer confirmation:

- Description: “Typed React command-center components, live examples, and a portable coding-agent skill.”
- Website: `https://mdrbx.github.io/nerv-ui/`
- Topics: `react`, `typescript`, `design-system`, `component-library`, `agent-skills`, `claude-code`, `codex`, `evangelion`, `nerv`, `nerv-ui`, `dashboard`, `hud`, `framer-motion`, `tailwindcss`.

This replaces generic or ambiguous topics such as `impact` while staying below GitHub’s topic limit. Apply it only through the authenticated repository settings after explicit confirmation.

## Measurement design

Use `npm run visibility:report` before launch and at J+1, J+3, J+7, J+14, and J+30. Record public GitHub and npm signals in a snapshot. When owner authentication is available, add GitHub’s 14-day views, clones, and referrers; keep the raw owner-only response private if it contains sensitive referrer detail.

Use short links with one campaign tag per channel, for example `?utm_source=github&utm_medium=readme&utm_campaign=agent-skill-launch`, `utm_source=hn`, `utm_source=x`, `utm_source=reddit`, and `utm_source=linkedin`. GitHub Pages may not expose analytics by default, so treat GitHub Traffic and npm downloads as the reliable first-party measures until a privacy-reviewed analytics decision is made.
