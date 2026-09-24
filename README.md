# SAUD TECHNOLOGY

[![CI](https://github.com/saudtechnology/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/saudtechnology/portfolio/actions/workflows/ci.yml)
[![Security](https://img.shields.io/badge/security-Gitleaks%20%7C%20Semgrep%20%7C%20CodeQL-2ea44f)](SECURITY.md)
[![Node.js](https://img.shields.io/badge/node.js-%3E%3D24.14.0-339933?logo=node.js&logoColor=white)](package.json)
[![pnpm](https://img.shields.io/badge/pnpm-12.4.1-F69220?logo=pnpm&logoColor=white)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)](package.json)
[![Vitest](https://img.shields.io/badge/Vitest-Unit-6E9F18?logo=vitest&logoColor=white)](package.json)
[![Playwright](https://img.shields.io/badge/Playwright-E2E-2EAD33?logo=playwright&logoColor=white)](package.json)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> **Embrace a Vision of Innovation and Excellence.**
>
> **Think Big. Build Smart.**
>
> **Engineering Intelligence. Architecting the Future.**

**SAUD TECHNOLOGY** is an independent technology engineering practice and portfolio by **THIAGO SAUD**, focused on the intersection of **Artificial Intelligence, Machine Learning, Software Architecture, Front-End Engineering and high-scale distributed systems**.

The portfolio explores the architecture and implementation of **AI-native systems, Generative AI applications, Large Language Models, RAG pipelines, Agentic AI, Multimodal Intelligence, Computer Vision, MLOps, intelligent Front-End applications and distributed systems**.

It is built around a simple engineering philosophy:

> **Architecture defines scale.**
>
> **Intelligence defines advantage.**
>
> **Engineering turns both into reality.**

This repository contains selected **projects, experiments, architectures and engineering work** spanning **AI Engineering, Machine Learning, MLOps, production infrastructure, cloud platforms, Front-End architecture, software architecture and advanced digital products**.

The goal is not simply to build software.

It is to **engineer intelligent systems designed for scale, resilience and real-world impact.**

This repository is a **single Next.js application**, not a monorepo. The
root package is private. It is not published to npm. GitHub Pages serves
the static export from `out/`.

## 🎯 Goals

- Publish the official SAUD TECHNOLOGY presence as a static site.
- Keep the App Router contract explicit: reserved files in `src/app/`,
  shared UI in `src/components/`, constants in `src/lib/`, global CSS in
  `src/styles/`.
- Apply Front-End and delivery practices that hold in production: Core
  Web Vitals, SEO document metadata, deterministic installs, and quality
  gates before `main`.
- Automate linting, tests, SAST, versioning, and Pages deployment.
- Keep local hooks and GitHub Actions aligned so the same rules run on
  the workstation and on the PR.

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
├── ESLint / Stylelint / Prettier / Markdownlint / Taplo
│   └── Code, CSS, YAML, TOML, and documentation quality
│
├── ShellCheck
│   └── POSIX / Bash lint (scripts/*.sh) — host binary, not npm
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

Tree taken from the repository on disk. Generated trees
(`node_modules/`, `.next/`, `out/`, `playwright-report/`,
`test-results/`, `.lighthouseci/`, `.act/`, `coverage/`,
`hint-report/`) and macOS `.DS_Store` files are omitted.

```text
portfolio/
├── AGENTS.md                          # Agent operating notes for this repo
├── CHANGELOG.md                       # Release history consumed by Changesets
├── CLAUDE.md                          # Pointer for Claude Code
├── CODE_OF_CONDUCT.md                 # Expected conduct
├── CONTRIBUTING.md                    # Branch, commit, lint, test, changeset
├── LICENSE                            # MIT terms
├── README.md                          # Repository operating guide
├── SECURITY.md                        # Vulnerability reporting
│
├── .actrc                             # Default flags for local Act runs
├── .editorconfig                      # Editor-agnostic indent and newlines
├── .env.example                       # Documented env names (no secrets)
├── .git-blame-ignore-revs             # Revisions omitted from git blame
├── .gitignore                         # Generated trees and secrets untracked
├── .gitleaks.toml                     # Secret-scan rules
├── .hintrc                            # webhint audit config
├── .markdownlint.json                 # Markdownlint rule set
├── .markdownlintignore                # Paths Markdownlint skips
├── .mcp.json                          # MCP server config for agents
├── .node-version                      # Node 24.14 pin for version managers
├── .npmrc                             # pnpm / npm client policy
├── .prettierignore                    # Paths Prettier skips
├── .prettierrc.mjs                    # Prettier options
├── .semgrep.yaml                      # Repository Semgrep rules
├── .stylelintignore                   # Paths Stylelint skips
├── .stylelintrc                       # Stylelint RC companion
├── .taplo.toml                        # TOML lint (Taplo)
│
├── commitlint.config.mjs              # Conventional Commits
├── eslint.config.mjs                  # Flat ESLint + eslint-config-next
├── lefthook.yml                       # pre-commit, commit-msg, pre-push
├── lighthouserc.json                  # Lighthouse CI assertions on out/
├── next-env.d.ts                      # Next-generated TypeScript references
├── next.config.ts                     # Static export and Next options
├── package.json                       # Private package, engines, scripts
├── playwright.config.ts               # E2E against the static preview
├── pnpm-lock.yaml                     # Locked dependency graph
├── pnpm-workspace.yaml                # Workspace declaration (single package)
├── postcss.config.mjs                 # Tailwind v4 PostCSS pipeline
├── stylelint.config.mjs               # CSS rules + Tailwind v4 at-rules
├── tsconfig.json                      # TypeScript + @/* → src/*
│
├── .changeset/
│   └── config.json                    # Base branch, changelog, access
│
├── .claude/
│   └── skills/
│       ├── README.md                  # Skill index
│       ├── changeset-release/SKILL.md # How to cut a Changesets release
│       └── next-static-export/SKILL.md# How the Pages export is produced
│
├── .vscode/
│   ├── extensions.json                # Recommended workspace extensions
│   ├── launch.json                    # Debug launch configs
│   └── settings.json                  # Formatter, ESLint, Stylelint, TS SDK
│
├── .github/
│   ├── CODEOWNERS                     # Default review ownership
│   ├── PULL_REQUEST_TEMPLATE.md       # PR body contract
│   ├── dependabot.yml                 # Dependency update PRs
│   ├── ISSUE_TEMPLATE/
│   │   ├── config.yml                 # Issue form routing
│   │   ├── 01-bug-report.yml          # Bug form
│   │   ├── 02-feature-request.yml     # Feature form
│   │   └── 03-support-request.yml     # Support form
│   ├── actions/
│   │   └── setup-pnpm/
│   │       └── action.yml             # Node 24.14 + Corepack + frozen install
│   └── workflows/
│       ├── reusable-ci.yml            # Shared quality jobs
│       ├── ci.yml                     # PR / merge queue → reusable-ci
│       ├── cd.yml                     # main + workflow_dispatch → Pages
│       ├── release.yml                # Changesets PR + tag vX.Y.Z
│       └── codeql.yml                 # Scheduled and PR CodeQL
│
├── scripts/
│   ├── setup.sh                       # Local bootstrap via Corepack pnpm
│   ├── lint-shell.sh                  # Local ShellCheck runner (host binary)
│   ├── prepare-lefthook.mjs           # Lefthook install from prepare
│   ├── validate-branch-name.sh        # Branch pattern
│   └── validate-commit-message.sh     # Commitlint range or edit file
│
├── src/
│   ├── app/                           # App Router reserved files (URL map)
│   │   ├── layout.tsx                 # Root layout, metadata, font
│   │   ├── error.tsx                  # / error boundary (en-US)
│   │   ├── loading.tsx                # / loading UI
│   │   ├── not-found.tsx              # / 404
│   │   ├── robots.ts                  # /robots.txt
│   │   ├── sitemap.ts                 # /sitemap.xml
│   │   ├── manifest.ts                # /manifest.webmanifest
│   │   ├── opengraph-image.tsx        # Generated OG image (App Router)
│   │   ├── opengraph-image.png        # Static OG fallback in the segment
│   │   ├── opengraph-image.alt.txt    # OG alt text
│   │   ├── twitter-image.tsx          # Generated Twitter card
│   │   ├── twitter-image.png          # Static Twitter fallback
│   │   ├── twitter-image.alt.txt      # Twitter alt text
│   │   ├── icon.png                   # App icon (Next metadata file)
│   │   ├── apple-icon.png             # Apple touch icon
│   │   ├── favicon.ico                # Browser favicon
│   │   ├── (home)/
│   │   │   └── page.tsx               # / — route group, no URL segment
│   │   └── pt-BR/
│   │       ├── layout.tsx             # Portuguese document segment
│   │       ├── page.tsx               # /pt-BR
│   │       ├── error.tsx              # /pt-BR error boundary
│   │       ├── loading.tsx            # /pt-BR loading UI
│   │       └── not-found.tsx          # /pt-BR 404
│   ├── components/                    # Shared UI (not a route)
│   │   ├── i18n/
│   │   │   ├── html-lang.tsx          # html lang alignment
│   │   │   ├── LocaleType-document.tsx    # LocaleType document shell
│   │   │   └── LocaleType-gate.tsx        # LocaleType entry / preference
│   │   ├── pages/
│   │   │   ├── home/page.tsx          # Home composition
│   │   │   ├── error/page.tsx         # Shared error view
│   │   │   └── loading/page.tsx       # Shared loading view
│   │   ├── seo/
│   │   │   └── json-ld.tsx            # Schema.org graph
│   │   └── theme/
│   │       └── brand-styles.tsx       # Brand tokens applied to the tree
│   ├── lib/
│   │   ├── i18n/
│   │   │   └── messages.ts            # en-US / pt-BR copy
│   │   └── site/
│   │       ├── index.ts               # Public site module barrel
│   │       ├── identity.ts            # Wordmark, motto, mailbox, URLs
│   │       ├── schema.ts              # JSON-LD data
│   │       └── tokens.ts              # Colour and type tokens
│   └── styles/
│       └── globals.css                # Design tokens + Tailwind entry
│
├── public/                            # Static files at site root
│   ├── CNAME                          # Custom domain in the Pages export
│   ├── .nojekyll                      # Disable Jekyll on Pages
│   ├── .well-known/
│   │   └── security.txt               # RFC 9116 contact
│   └── icons/
│       ├── icon.png                   # Source mark
│       ├── icon-192.png               # PWA 192
│       ├── icon-192-maskable.png      # PWA 192 maskable
│       ├── icon-512.png               # PWA 512
│       └── icon-512-maskable.png      # PWA 512 maskable
│
├── e2e/                               # Playwright against the export
└── tests/                             # Node.js unit tests
```

`public/` is a sibling of `src/`. Next.js does not serve `src/public`.
Global CSS lives in `src/styles/globals.css`, not under `src/app/`.

## 🧰 Technology stack

| Area               | Technology                                  | Responsibility             |
| ------------------ | ------------------------------------------- | -------------------------- |
| Runtime            | Node.js `>=24.14.0`                         | Application and toolchain  |
| Package manager    | pnpm `12.4.1` (Corepack)                    | Locked dependency install  |
| Application        | Next.js 16 App Router, React 19, TypeScript | Site                       |
| Output             | `output: 'export'` → `out/`                 | GitHub Pages               |
| Locales            | `en-US` (`/`) and `pt-BR` (`/pt-BR`)        | Document language          |
| Styles             | Tailwind CSS v4, Stylelint                  | Visual system and CSS gate |
| Fonts              | Montserrat (`next/font`)                    | Official typeface          |
| Git hooks          | Lefthook                                    | Local gates                |
| JS/TS lint         | ESLint + `eslint-config-next` + SonarJS     | Static analysis            |
| YAML / JSON lint   | `eslint-plugin-yml`, `@eslint/json`         | Workflows and manifests    |
| TOML lint          | Taplo                                       | `.taplo.toml` targets      |
| Shell lint         | ShellCheck                                  | `scripts/*.sh`             |
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
- ShellCheck when running `pnpm lint:check:sh` or Lefthook **pre-push**
- Docker when running Semgrep locally
- Act when rehearsing workflows

Authoritative versions: [`package.json`](package.json),
[`.node-version`](.node-version).

Host binaries (ShellCheck, Docker, Act) are **not** installed by
`pnpm infra:script:setup`. That script only bootstraps Corepack pnpm
and Lefthook.

### Installation

```bash
corepack enable
corepack prepare pnpm@12.4.1 --activate
pnpm infra:script:setup
```

`setup.sh` calls **Corepack** `pnpm`, not the standalone shim.

### Development and preview

```bash
pnpm dev       # Next.js + Turbopack
pnpm build     # writes out/
pnpm preview   # serve out/ on port 4173 — same artifact Pages serves
```

`pnpm start` is an alias of `preview`. It does not run `next start`.

## ✅ Quality gates

Run every command from the repository root.

### Complete lint

```bash
pnpm lint:check:all
```

1. Branch name
2. ESLint (`--max-warnings 0`) — JS/TS plus JSON and YAML
   (empty mapping values in workflows fail here;
   `workflow_dispatch:` must be `workflow_dispatch: {}`)
3. Stylelint
4. JSON / YAML / TOML
5. ShellCheck via `pnpm lint:check:sh`
6. Commitlint (range vs `origin/main` or `COMMIT_*_SHA`)
7. Markdownlint
8. Prettier `--check`
9. `next typegen` + `tsc --noEmit`

### Automatic fixes

```bash
pnpm lint:fix:all
```

ESLint, Stylelint, Prettier, Markdownlint. ShellCheck has no `--fix`.

### 🧪 Tests

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

## Host binaries versus Actions

Some gates are Node packages (`eslint`, `prettier`, `stylelint`). Others
are binaries on the workstation. `pnpm install` does not provide them.

| Binary     | Local command                                  | GitHub Actions                        |
| ---------- | ---------------------------------------------- | ------------------------------------- |
| ShellCheck | `pnpm lint:check:sh` → `scripts/lint-shell.sh` | not a dedicated workflow in this tree |
| Docker     | `pnpm test:sast:semgrep`                       | reusable-ci / dedicated SAST job      |
| Act        | `pnpm infra:test:workflow:ci`                  | not applicable                        |

If ShellCheck is missing, the local runner exits 1:

```text
shellcheck is required. Install: https://www.shellcheck.net/
```

That is expected. Lefthook **pre-commit** warns and continues
(`shellcheck not installed`). Lefthook **pre-push** and
`pnpm lint:check:all` fail — they call `lint:check:sh` with no fallback.

Install on macOS:

```bash
brew install shellcheck
command -v shellcheck
pnpm lint:check:sh
```

Apple's `/bin/bash` is 3.2. `scripts/lint-shell.sh` uses `mapfile`, which
requires Bash >= 4. After installing ShellCheck, either run the script
with Homebrew Bash (`$(brew --prefix)/bin/bash ./scripts/lint-shell.sh`)
or keep `mapfile` off the 3.2 code path.

YAML in `.github/workflows/` is linted by ESLint (`eslint-plugin-yml`),
not by ShellCheck. An empty mapping such as `workflow_dispatch:` with no
value fails `yml/no-empty-mapping-value`. The valid form for a manual
dispatch with no inputs is `workflow_dispatch: {}`.

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

| Hook       | Enforces                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| pre-commit | Prettier, ESLint, Stylelint, Markdownlint, Gitleaks (staged). ShellCheck if the binary exists; otherwise a warning |
| commit-msg | Commitlint                                                                                                         |
| pre-push   | Branch name, full lint set including `lint:check:sh`, SAST, unit tests                                             |

Build, Playwright, Lighthouse, and `pnpm audit` stay in CI.

Definition: [`lefthook.yml`](lefthook.yml).

## 🚚 Delivery

```text
PR → CI (reusable-ci) → merge main → CD (reusable-ci + Pages) + Release
```

- **CI** (`ci.yml`): pull request to `main`. Requires a changeset except
  on Version Packages PRs.
- **CD** (`cd.yml`): `push` to `main` and `workflow_dispatch: {}`. After
  quality, rebuilds `out/` and deploys with
  `actions/upload-pages-artifact` + `actions/deploy-pages`.
- **Release** (`release.yml`): Changesets opens Version Packages; the
  tag `vX.Y.Z` and GitHub Release are created when that PR is merged.

Pages source must be **GitHub Actions**. Custom domain and HTTPS are set
in the repository Pages settings. `public/CNAME` is the file in the
export, not the DNS panel.

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

Changesets + Semantic Versioning. Contributors record intent; the
release workflow consumes it.

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

The site is not published to npm. `changeset publish` is not the Pages
path.

## 🧪 Local GitHub Actions

```bash
pnpm infra:test:workflow:ci
```

```bash
act push -W .github/workflows/cd.yml -j quality
act push -W .github/workflows/release.yml --dryrun
```

Flags live in [`.actrc`](.actrc). Do not attach a real `GITHUB_TOKEN`
when rehearsing deploy or release.

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

| Script                                   | Responsibility                              |
| ---------------------------------------- | ------------------------------------------- |
| `eslint:check` / `eslint:fix`            | ESLint (JS/TS, JSON, YAML)                  |
| `lint:check:stylelint` / `stylelint:fix` | Stylelint                                   |
| `lint:check:prettier` / `prettier:fix`   | Prettier                                    |
| `lint:check:markdown` / `markdown:fix`   | Markdownlint                                |
| `lint:check:json`                        | ESLint JSON                                 |
| `lint:check:yaml`                        | ESLint YAML (includes workflows)            |
| `lint:check:toml`                        | Taplo                                       |
| `lint:check:sh`                          | ShellCheck via `scripts/lint-shell.sh`      |
| `lint:check:code:ts`                     | Typegen + `tsc --noEmit`                    |
| `lint:check:branchname`                  | Current branch                              |
| `lint:check:commit`                      | Commitlint                                  |
| `lint:check:all`                         | Full lint gate (fails if ShellCheck absent) |
| `lint:fix:all`                           | ESLint, Stylelint, Prettier, Markdownlint   |

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
| `test:report:unit`       | Node coverage report                  |

## 📄 License

MIT. See [LICENSE](LICENSE).
