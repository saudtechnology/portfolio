---
name: next-static-export
description: Edit Next.js 16 App Router routes, metadata, Tailwind v4, JSON-LD, brand tokens, or the GitHub Pages static export (out/).
---

# Next.js static export

## Contract

- `output: 'export'` in `next.config.ts`. Pages has no Node server.
- Preview the artifact: `pnpm build && pnpm preview` → `http://127.0.0.1:4173/`.
- `images.unoptimized: true`.
- SEO and Hint run on `out/` (`/`). Never on `next dev` (`noindex`) or on `404.html`.

## App Router

Keep reserved files at `src/app/`: `layout`, `error`, `loading`, `not-found`, `robots`, `sitemap`, `manifest`, `opengraph-image`, `twitter-image`, `favicon`.

Product UI lives in route groups. `src/app/(home)/page.tsx` is `/`. A folder named `pages/` without parentheses is the URL `/pages`.

- UI: `src/components/`
- Identity: `src/lib/site/identity.ts`
- JSON-LD: `buildSiteJsonLd()` in `src/lib/site/schema.ts`
- Palette: `src/lib/site/tokens.ts` only
- CSS maps: `src/styles/globals.css`

Consult current Next and Tailwind docs (Context7) before changing reserved filenames.

## Theme

Hex exists in **one** place: `COLOR` in `src/lib/site/tokens.ts`.

`BrandStyles` (`src/components/theme/brand-styles.tsx`) injects `:root { --plate; --neon; … }` from `brandCssCustomProperties()`. `globals.css` must not repeat hex. It only composes `var(--plate)` into `--background`, `--foreground`, `--surface`, `--border`.

Dark-first. `html` ships with class `dark`. Light is `html.light` or `prefers-color-scheme: light`.

| Token  | Hex       | Role                                          |
| ------ | --------- | --------------------------------------------- |
| neon   | `#10F300` | Accent — links, bars, CTA. Never a page fill. |
| forest | `#071B08` | Dark surface                                  |
| void   | `#000000` | Pure black, rare                              |
| pine   | `#021500` | Light text / deepest field                    |
| plate  | `#061308` | Dark canvas (logo plate)                      |
| snow   | `#FAFBFA` | Dark text / light canvas                      |
| mute   | `#8AA08C` | Supporting text (light uses `muteOnLight`)    |

Tailwind utilities: `bg-background`, `text-foreground`, `bg-surface`, `text-mute`, `text-neon`, `bg-plate`. Viewport `themeColor` uses `THEME_COLOR` from the same module.

Do not add a purple/blue “AI” palette. Do not duplicate the mailbox or origin outside `identity.ts`.
