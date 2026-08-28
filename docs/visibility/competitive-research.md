# Competitive research — 2026-08-28

## Verified facts

| Signal | NERV-UI | TheGreatGildo/nerv-ui |
| --- | ---: | ---: |
| GitHub stars | 81 | 215 |
| Forks | 5 | 12 |
| Created | 2026-03-08 07:52 UTC | 2026-03-08 01:59 UTC |
| Latest release | v1.0.7, 2026-08-28 | none returned by GitHub API |
| npm downloads, recent 30 days | 285 | Not asserted |

The figures come from the [NERV-UI GitHub API record](https://api.github.com/repos/mdrbx/nerv-ui), the [competitor GitHub API record](https://api.github.com/repos/TheGreatGildo/nerv-ui), and the [npm downloads API](https://api.npmjs.org/downloads/point/last-month/@mdrbx/nerv-ui). The competitor is currently about 2.65× ahead in stars; that is a baseline, not a forecast.

NERV-UI is package- and examples-first: the repository and npm package expose a TypeScript React library, 48 component directories, documentation, and a GitHub Pages demo. The competitor is skill-first: its [repository README](https://github.com/TheGreatGildo/nerv-ui) foregrounds copying a skill and pairs CSS/HTML demos with its design material. This is an observation about positioning, not a claim about quality.

The competitor has visible discovery routes through [AgentSkillsHub](https://agentskillshub.top/skill/TheGreatGildo/nerv-ui/), [All4OpenClaw](https://all4openclaw.ai/), and a pinned reference in [rhettg/agent-skills](https://github.com/rhettg/agent-skills). GitHub code-search hit counts observed during the research were 79 for NERV-UI and 12 for the competitor; code-search hits are not backlink totals and should not be presented as such.

## Plausible inference

The most credible explanation for the competitor’s early star velocity is launch distribution combined with immediate agent framing, rather than repository activity alone. Most forks arrived in the first week and its last repository push was in March. A third-party archive records launch-related X posts with large view/engagement figures on [March 8](https://github.com/AAARRRCCC/vault-context/blob/main/library/tweets/2026-03-08-nerv-ui-a-claude-code-skill-css-library-for-eva-aesthetic-te/metadata.json) and [March 10](https://github.com/AAARRRCCC/vault-context/blob/main/library/tweets/2026-03-10-nerv-ui-evangelion-themed-claude-code-skill-cssthreejs-compo/metadata.json). Those archive figures are unverified third-party records, so they are evidence of a likely launch channel—not a measured causal attribution.

Topics alone do not explain the gap: NERV-UI already has relevant GitHub topics while the competitor has none in its current API record.

## Recommendations

1. Lead with the actual npm package, live product evidence, and the new canonical skill in the first README screen.
2. Earn a small number of relevant skill-index links only after the public skill is live; do not submit to low-quality directories.
3. Distinguish an indexed listing from adoption. Track GitHub referral traffic and npm downloads after every tagged launch link.
4. Use a channel-specific, original asset and copy focused on verified capabilities; do not imitate the competitor’s words, CSS, layout, or media.

## Distribution channels checked

- [OpenAI skill documentation](https://learn.chatgpt.com/docs/build-skills) states that Codex skills follow the Agent Skills standard, use `SKILL.md` frontmatter, discover repository skills under `.agents/skills`, and support symlinks. It also recommends plugins as the reusable public-distribution route.
- [Heilcheng/awesome-agent-skills](https://github.com/heilcheng/awesome-agent-skills) documents fork-and-PR contribution in its [contribution guide](https://github.com/heilcheng/awesome-agent-skills/blob/main/CONTRIBUTING.md). It is eligible after the branch is public and the skill is reachable.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) accepts link entries but its [guide](https://github.com/VoltAgent/awesome-agent-skills/blob/main/CONTRIBUTING.md) asks for real community usage. Queue it until that evidence exists.
- [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills/blob/main/CONTRIBUTING.md) prohibits AI-assisted/generated submissions. Do not submit through this workflow.
