# AGENTS.md

Facts every coding agent must hold for this repository. Procedures live in `.claude/skills/`.

## Product

Private Next.js 16 App Router site for SAUD TECHNOLOGY. Static export to `out/`, published by GitHub Pages at <https://saudtechnology.com>. Not a monorepo. Not published to npm.

Wordmark: `SAUD TECHNOLOGY`. Motto: `Think Big. Build Smart.` Do not invent names, slogans, or logos. Neon `#10F300` is accent only.

## Toolchain

- Node.js `>=24.14.0` (`.node-version`)
- pnpm via Corepack only (`packageManager` in `package.json`)
- `pnpm start` / `pnpm preview` serve `out/` on port 4173 — not `next start`

```bash
pnpm infra:script:setup
pnpm dev
pnpm build && pnpm preview
pnpm lint:check:all
pnpm test:unit
pnpm test:e2e
pnpm test:hint
pnpm test:lighthouse
```
