# Agent-native skill and visibility relaunch

## Summary

- adds one canonical portable NERV-UI skill, discovered in-repository by Codex and Claude Code and documented for Hermes Agent;
- verifies all 51 public component exports and installs the packaged library in real Vite and Next.js fixtures;
- makes the package CSS standalone so Tailwind remains optional for consumers;
- sharpens the README’s package/agent conversion paths and adds complete search/social metadata;
- adds a sourced baseline, competitive research, prioritized visibility strategy, submission tracker, and channel-specific launch kit.

## Visual proof

![NERV-UI social preview](https://raw.githubusercontent.com/mdrbx/nerv-ui/feat/agent-skill-visibility/docs/visibility/assets/nerv-ui-social-preview.png)

The README also includes the existing 1200×675, 474 KiB product-motion GIF with a static banner fallback.

## Verification

- `npm run lint` — pass, zero warnings
- `npm run type-check` — pass
- `npm run test` — 17 files and 59 tests passed
- `npm run check:skill` — 51 public exports matched
- `npm run test:skill` — canonical skill installation fixture passed
- `npm run test:skill-react` — local tarball installed, type-checked, and built with Vite 7 and Next.js 16
- `npm run build` — 79 static Next.js routes generated
- `npm run check:links` — 652 internal links across 76 exported HTML pages validated
- `npm pack --dry-run --json` — 14 files, 363,439-byte tarball, no media assets
- Browser QA — desktop and mobile layouts, no horizontal overflow, no application console errors, reduced-motion media query verified

## Positioning and external actions

The implementation keeps NERV-UI package-first while adding the low-friction agent discovery route that current skill ecosystems reward. All visual and written material is original; the competitor was studied only for distribution mechanics.

No merge, npm publish, GitHub Release, social post, or directory submission is part of this PR.
