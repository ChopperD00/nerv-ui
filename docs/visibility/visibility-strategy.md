# Visibility strategy

## Positioning

**Promise:** NERV-UI gives React teams and coding agents a typed component library, not merely an aesthetic prompt: install the package, follow a complete example, and ship an original command-center flow.

The 30-day ambition is to exceed the competitor’s qualified visibility and reach 250 total GitHub stars. It is an operating target, never a promise. Success is judged by package installs, active referrers, demo engagement, and useful integrations—not stars alone.

## Prioritized actions

| Priority | Action | Expected impact | Effort | Risk | Dependency | Status | Channel | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P0 | Canonical agent skill + export check | High | Medium | Low | Public branch | Implemented | Codex / Claude Code / Hermes | Test packaged copy |
| P0 | README first-screen conversion | High | Medium | Low | Skill path | Implemented | GitHub / npm | Validate links |
| P0 | Original social preview + metadata | Medium | Medium | Low | Pages deploy | Implemented | GitHub / social cards | Set GitHub social preview manually |
| P1 | PR to Heilcheng index | Medium | Low | Low | Public branch + PR | Ready | Skill directory | Submit after upstream branch is public |
| P1 | Launch content with tagged UTM links | High | Medium | Medium | Maintainer approval | Ready | HN/X/Reddit/LinkedIn | Obtain approval before posting |
| P1 | Add factual GitHub topics | Low–medium | Low | Low | GitHub CLI/auth | Blocked | GitHub | Update after auth is available |
| P2 | VoltAgent listing | Medium | Low | Low | Community usage evidence | Queued | Skill directory | Reassess at J+14 |

## Measurement design

Use `npm run visibility:report` before launch and at J+1, J+3, J+7, J+14, and J+30. Record public GitHub and npm signals in a snapshot. When owner authentication is available, add GitHub’s 14-day views, clones, and referrers; keep the raw owner-only response private if it contains sensitive referrer detail.

Use short links with one campaign tag per channel, for example `?utm_source=github&utm_medium=readme&utm_campaign=agent-skill-launch`, `utm_source=hn`, `utm_source=x`, `utm_source=reddit`, and `utm_source=linkedin`. GitHub Pages may not expose analytics by default, so treat GitHub Traffic and npm downloads as the reliable first-party measures until a privacy-reviewed analytics decision is made.
