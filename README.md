# SˆUD TECHNOLOGY

[![CI](https://github.com/saudtechnology/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/saudtechnology/portfolio/actions/workflows/ci.yml)
[![Security](https://img.shields.io/badge/security-Gitleaks%20%7C%20Semgrep%20%7C%20CodeQL-2ea44f)](SECURITY.md)
[![Node.js](https://img.shields.io/badge/node.js-%3E%3D24.14.0-339933?logo=node.js&logoColor=white)](package.json)
[![pnpm](https://img.shields.io/badge/pnpm-12.4.1-F69220?logo=pnpm&logoColor=white)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)](package.json)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**Embrace a Vision of Innovation and Excellence.**

**Think Big. Build Smart.**

**SAUD TECHNOLOGY** stands as the professional identity under which **THIAGO SAUD** operates on mission-critical platforms—the user interface and the underlying system.

Our focus lies in the development of high-reliability and high-traffic digital systems for fintech, banking, and regulated operations, where technical decisions directly impact latency, availability, security posture, and business indicators.

**Frontend:** Architecture of web platforms, design systems, and micro-frontends. Rendering and caching strategies, reliability standards for critical journeys, measurable performance (Core Web Vitals / Real User Monitoring), progressive delivery, and user experience prepared for failures: elegant degradation and error isolation.

**AI & MLOps:** Model engineering in production, not just in the demonstration phase. Use of Python and Deep Learning; implementation of RAG and Agentic AI with LangChain / LangGraph; training cycle, registration, testing, and observability with MLflow. Models undergo the same rigorous release process as interfaces—versioned, monitored, and recoverable in case of failure.

The criterion of excellence remains consistent in both areas: platforms that remain fast, secure, and operational as complexity increases.

Elevate your business to new heights with professional-quality software!

This repository is a **single Next.js application**, not a monorepo. The
root package is private. It is not published to npm. GitHub Pages serves the
static export from `out/`.

## 🎯 Goals

- Publish the official SAUD TECHNOLOGY presence as a static site.
- Keep the App Router contract explicit: reserved files in `src/app/`,
  shared UI in `src/components/`, constants in `src/lib/`.
- Apply frontend and delivery practices that hold in production: Core Web
  Vitals, SEO document metadata, deterministic installs, and quality gates
  before `main`.
- Automate linting, tests, SAST, versioning, and Pages deployment.
- Keep local hooks and GitHub Actions aligned so the same rules run on the
  workstation and on the PR.

## 🏗️ Repository role

```text
Developer
│
├── Corepack / pnpm 12.4.1
│   └── Locked install
│
├── Lefthook
│   └── Local Git quality gates
│
├── ESLint / Stylelint / Prettier / Markdownlint
│   └── Code, CSS, and documentation quality
│
├── Gitleaks / Semgrep / CodeQL / pnpm audit
│   └── Secrets, SAST, and production-dependency audit
│
├── Node test runner / Playwright / Lighthouse CI
│   └── Unit, export e2e, SEO assertions
│
├── Act
│   └── Local GitHub Actions
│
└── Changesets
    └── Versioning and GitHub Release (vX.Y.Z)
```

## 🗂️ Structure

```text
portfolio/
├── CHANGELOG.md              # Release history consumed by Changesets
├── CODE_OF_CONDUCT.md        # Expected conduct for anyone touching the repo
├── CONTRIBUTING.md           # Branch, commit, lint, test, and changeset rules
├── LICENSE                   # MIT terms
├── README.md                 # Repository operating guide
├── SECURITY.md               # Vulnerability reporting
│
├── .actrc                    # Default flags for local Act runs
├── .editorconfig             # Editor-agnostic indent and newline rules
├── .env.example              # Documented env names (no production values)
├── .env.production           # NEXT_PUBLIC_SITE_URL for `next build`
├── .gitignore                # Generated trees and secrets stay untracked
├── .git-blame-ignore-revs    # Revisions omitted from git blame
├── .gitleaks.toml            # Secret-scan rules
├── .markdownlint.json        # Markdownlint rule set
├── .markdownlintignore       # Paths Markdownlint skips
├── .node-version             # Node 24.14 pin for version managers
├── .npmrc                    # pnpm/npm client policy
├── .prettierignore           # Paths Prettier skips
├── .prettierrc.mjs           # Prettier options
├── .semgrep.yaml             # Repository Semgrep rules
├── .stylelintignore          # Paths Stylelint skips
├── commitlint.config.mjs     # Conventional Commits
├── eslint.config.mjs         # ESLint flat config + eslint-config-next
├── lefthook.yml              # pre-commit, commit-msg, pre-push
├── lighthouserc.json         # Lighthouse CI assertions on out/
├── next.config.ts            # Static export and Next options
├── next-env.d.ts             # Next-generated TypeScript references
├── package.json              # Private package, engines, scripts
├── playwright.config.ts      # E2E against the static preview
├── pnpm-lock.yaml            # Locked dependency graph
├── postcss.config.mjs        # Tailwind v4 PostCSS pipeline
├── stylelint.config.mjs      # CSS rules + Tailwind v4 at-rules
├── tsconfig.json             # TypeScript + `@/*` → `src/*`
│
├── .vscode/
│   ├── extensions.json       # Recommended workspace extensions
│   ├── launch.json           # Debug launch configs
│   └── settings.json         # Formatter, ESLint, Stylelint, TS SDK
│
├── .github/
│   ├── CODEOWNERS            # Default review ownership
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── dependabot.yml        # Dependency update PRs
│   ├── ISSUE_TEMPLATE/       # Bug, feature, and support forms
│   ├── actions/
│   │   └── setup-pnpm/       # Node 24.14 + Corepack + frozen install
│   └── workflows/
│       ├── reusable-ci.yml   # Shared quality jobs (lint, SAST, tests, export)
│       ├── ci.yml            # PR / merge queue → reusable-ci
│       ├── cd.yml            # main → reusable-ci then GitHub Pages
│       ├── release.yml       # Changesets PR + unified tag vX.Y.Z
│       └── codeql.yml        # Scheduled and PR CodeQL
│
├── .changeset/
│   └── config.json           # Changesets base branch, changelog, access
│
├── scripts/
│   ├── setup.sh              # Local bootstrap via Corepack pnpm
│   ├── prepare-lefthook.mjs  # Safe Lefthook install from `prepare`
│   ├── validate-branch-name.sh
│   └── validate-commit-message.sh
│
├── src/
│   ├── app/                  # App Router reserved files (URL map)
│   │   ├── layout.tsx        # Root layout, metadata, font, JSON-LD
│   │   ├── globals.css       # Design tokens + Tailwind entry
│   │   ├── error.tsx         # Root-segment error boundary
│   │   ├── loading.tsx       # Root-segment loading UI
│   │   ├── not-found.tsx     # Site 404
│   │   ├── robots.ts         # /robots.txt
│   │   ├── sitemap.ts        # /sitemap.xml
│   │   ├── manifest.ts       # /manifest.webmanifest
│   │   ├── opengraph-image.tsx
│   │   ├── twitter-image.tsx
│   │   ├── favicon.ico
│   │   └── (home)/           # Route group — no extra URL segment
│   │       └── page.tsx      # `/`
│   ├── components/           # Shared UI (not a route)
│   │   └── json-ld.tsx       # Schema.org graph in the document
│   └── lib/
│       └── site.ts           # URL, wordmark, motto, mailbox
│
├── public/                   # Static files at site root (sibling of src/)
│   ├── CNAME                 # GitHub Pages custom-domain file in the export
│   ├── .nojekyll             # Present if publishing from a branch
│   └── .well-known/
│       └── security.txt      # RFC 9116 contact
│
├── e2e/                      # Playwright specs
│   └── home.spec.ts
└── tests/                    # Node.js unit tests
    └── site.test.mjs
```

`public/` is a sibling of `src/`. Next.js does not serve `src/public`.

Generated trees such as `node_modules/`, `.next/`, `out/`,
`playwright-report/`, `test-results/`, `.lighthouseci/`, and `.act/` are
gitignored and recreated as required.

## 🧰 Technology stack

| Area               | Technology                                  | Responsibility             |
| ------------------ | ------------------------------------------- | -------------------------- |
| Runtime            | Node.js `>=24.14.0`                         | Application and toolchain  |
| Package manager    | pnpm `12.4.1` (Corepack)                    | Locked dependency install  |
| Application        | Next.js 16 App Router, React 19, TypeScript | Site                       |
| Output             | `output: 'export'` → `out/`                 | GitHub Pages               |
| Styles             | Tailwind CSS v4, Stylelint                  | Visual system and CSS gate |
| Fonts              | Montserrat (`next/font`)                    | Official typeface          |
| Git hooks          | Lefthook                                    | Local gates                |
| JS/TS lint         | ESLint + `eslint-config-next`               | Static analysis            |
| Formatting         | Prettier                                    | Source format              |
| Documentation lint | Markdownlint                                | Markdown quality           |
| CSS lint           | Stylelint + `stylelint-config-standard`     | CSS / Tailwind at-rules    |
| Commits            | Commitlint                                  | Conventional Commits       |
| Branches           | validate-branch-name                        | Branch pattern             |
| Unit tests         | Node.js test runner                         | `tests/`                   |
| E2E                | Playwright                                  | Static `out/`              |
| SEO audit          | Lighthouse CI                               | Assertions on `out/`       |
| Secrets            | Gitleaks                                    | Secret scan                |
| SAST               | Semgrep, CodeQL                             | Static security            |
| Supply chain       | `pnpm audit --prod`, lockfile               | Production advisories      |
| CI/CD              | GitHub Actions                              | PR quality and Pages       |
| Local CI           | Act                                         | Workflow rehearsal         |
| Release            | Changesets                                  | SemVer + GitHub Release    |

## 📦 Package configuration

### Identity

| Property     | Value                        |
| ------------ | ---------------------------- |
| Package name | `saudtechnology-portfolio`   |
| Visibility   | Private (`"private": true`)  |
| License      | MIT                          |
| Homepage     | <https://saudtechnology.com> |

The package is not intended for npm publication. The site is the artifact.

### Branch naming

```text
<type>/<short-description-in-kebab-case>
```

Allowed types: `feat`, `fix`, `docs`, `style`, `perf`, `test`, `chore`,
`ci`, `revert`, `release`, `refactor`, `changeset-release`. `main` is the
default branch.

Example: `feat/home-hero`

The rule lives in `package.json` (`validate-branch-name`) and runs in
Lefthook and CI.

## 🚀 Setup

### Prerequisites

- Node.js `>=24.14.0`
- pnpm `12.4.1` via Corepack (do not use the standalone installer under
  `~/Library/pnpm` against this `packageManager` field)
- Git
- Docker when running Semgrep locally
- Act when rehearsing workflows

Authoritative versions: [`package.json`](package.json), [`.node-version`](.node-version).

### Installation

```bash
corepack enable
corepack prepare pnpm@12.4.1 --activate
pnpm infra:script:setup
```

`setup.sh` calls **Corepack** `pnpm`, not the standalone shim.

### Development and preview

```bash
pnpm dev          # http://localhost:3000
pnpm build        # writes out/
pnpm preview      # http://127.0.0.1:4173 — same artifact Pages serves
```

`pnpm start` is an alias of `preview`. It does not run `next start`.

## ✅ Quality gates

Run every command from the repository root.

### Complete lint

```bash
pnpm lint:check:all
```

1. Branch name
2. ESLint (`--max-warnings 0`)
3. Stylelint
4. Commitlint (range vs `origin/main` or `COMMIT_*_SHA`)
5. Markdownlint
6. Prettier `--check`
7. `next typegen` + `tsc --noEmit`

### Automatic fixes

```bash
pnpm lint:fix:all
```

ESLint, Stylelint, Prettier, Markdownlint.

### Tests

```bash
pnpm test:unit
pnpm test:e2e
pnpm test:lighthouse
```

Playwright requires `pnpm exec playwright install chromium` once per
machine. Lighthouse and Playwright both target `out/`.

### 🔐 Security

```bash
pnpm test:audit
pnpm test:sast:all
```

`test:sast:all` runs Gitleaks then Semgrep.

## 🔐 Security

Independent controls:

- Gitleaks on commit and in CI
- Semgrep (`p/security-audit`, `p/javascript`, `.semgrep.yaml`)
- CodeQL on a dedicated workflow
- `pnpm audit --prod`
- Dependabot
- Frozen lockfile in CI
- `public/.well-known/security.txt` (RFC 9116)

See [SECURITY.md](SECURITY.md).

## 🪝 Git hooks

Lefthook is installed by the `prepare` lifecycle after `pnpm install`.

| Hook       | Enforces                                                     |
| ---------- | ------------------------------------------------------------ |
| pre-commit | Prettier, ESLint, Stylelint, Markdownlint, Gitleaks (staged) |
| commit-msg | Commitlint                                                   |
| pre-push   | Branch name, full lint set, SAST, unit tests                 |

Build, Playwright, Lighthouse, and `pnpm audit` stay in CI.

Definition: [`lefthook.yml`](lefthook.yml).

## 🚚 Delivery

```text
PR → CI (reusable-ci) → merge main → CD (reusable-ci + Pages) + Release
```

- **CI** (`ci.yml`): pull request to `main`. Requires a changeset except on
  Version Packages PRs.
- **CD** (`cd.yml`): after quality on `main`, rebuilds `out/` and deploys
  with `actions/upload-pages-artifact` + `actions/deploy-pages`.
- **Release** (`release.yml`): Changesets opens Version Packages; the tag
  `vX.Y.Z` and GitHub Release are created when that PR is merged.

Pages source must be **GitHub Actions**. Custom domain and HTTPS are set in
the repository Pages settings. `public/CNAME` is the file in the export, not
the DNS panel.

## 🤝 Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) first.

Expected:

- branch naming
- Conventional Commits
- formatting, ESLint, Stylelint, Markdownlint
- security checks
- unit tests
- a changeset when the change is releasable

## 🏷️ Versioning

Changesets + Semantic Versioning. Contributors record intent; the release
workflow consumes it.

```bash
pnpm infra:release:changeset
pnpm infra:release:changeset:status
```

| Increment | When                                           |
| --------- | ---------------------------------------------- |
| `patch`   | Backward-compatible fix                        |
| `minor`   | Backward-compatible capability                 |
| `major`   | Breaking change to the published site contract |

Prerelease tags:

```bash
pnpm infra:release:changeset:pre-enter:alpha
pnpm infra:release:changeset:pre-enter:beta
pnpm infra:release:changeset:pre-enter:rc
pnpm infra:release:changeset:pre-exit
```

Version application:

```bash
pnpm infra:release:changeset:version:packages
```

The site is not published to npm. `changeset publish` is not the Pages path.

## 🧪 Local GitHub Actions

```bash
pnpm infra:test:workflow:ci
```

```bash
act push -W .github/workflows/cd.yml -j quality
act push -W .github/workflows/release.yml --dryrun
```

Flags live in [`.actrc`](.actrc). Do not attach a real `GITHUB_TOKEN` when
rehearsing deploy or release.

## 🛠️ Package scripts

Run from the repository root: `pnpm <script>`.

### Application

| Script              | Responsibility            |
| ------------------- | ------------------------- |
| `dev`               | Next.js + Turbopack       |
| `build`             | Static export to `out/`   |
| `start` / `preview` | Serve `out/` on port 4173 |

### Infrastructure

| Script                               | Responsibility                                |
| ------------------------------------ | --------------------------------------------- |
| `prepare`                            | Installs Lefthook when a Git work tree exists |
| `infra:script:setup`                 | Corepack pnpm install + Lefthook              |
| `infra:script:lint:check:branchname` | Branch-name script                            |
| `infra:script:lint:check:commitmsg`  | Commitlint range or edit file                 |
| `infra:test:workflow:ci`             | Act against `ci.yml` (`pull_request`)         |

### Changesets

| Script                                     | Responsibility                        |
| ------------------------------------------ | ------------------------------------- |
| `infra:release:changeset`                  | Interactive CLI                       |
| `infra:release:changeset:status`           | Pending changesets                    |
| `infra:release:changeset:pre-enter:*`      | Enter prerelease                      |
| `infra:release:changeset:pre-exit`         | Leave prerelease                      |
| `infra:release:changeset:version:packages` | Apply versions                        |
| `infra:release:changeset:publish:packages` | Build + changeset publish (not Pages) |

### Quality

| Script                                   | Responsibility           |
| ---------------------------------------- | ------------------------ |
| `eslint:check` / `eslint:fix`            | ESLint                   |
| `lint:check:stylelint` / `stylelint:fix` | Stylelint                |
| `lint:check:prettier` / `prettier:fix`   | Prettier                 |
| `lint:check:markdown` / `markdown:fix`   | Markdownlint             |
| `lint:check:code:ts`                     | Typegen + `tsc --noEmit` |
| `lint:check:branchname`                  | Current branch           |
| `lint:check:commit`                      | Commitlint               |
| `lint:check:all`                         | Full lint gate           |
| `lint:fix:all`                           | Safe automatic fixes     |

### Tests and security

| Script                   | Responsibility                        |
| ------------------------ | ------------------------------------- |
| `test:unit`              | Node tests in `tests/`                |
| `test:e2e`               | Build + Playwright                    |
| `test:lighthouse`        | Build + LHCI                          |
| `test:audit`             | `pnpm audit --prod`                   |
| `test:sast:secrets`      | Gitleaks                              |
| `test:sast:semgrep`      | Semgrep (Docker)                      |
| `test:sast:all`          | Secrets + Semgrep                     |
| `test:report:playwright` | HTML report (`--reporter=html` first) |

## 📄 License

MIT. See [LICENSE](LICENSE).
