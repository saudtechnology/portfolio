# Security Policy

## Scope

This repository hosts the SAUD TECHNOLOGY site and its delivery toolchain
(Next.js application, dependencies, GitHub Actions, hooks, and secret
scanning).

Security covers source, dependencies, CI, secrets, generated artifacts, and
any future AI/MLOps surfaces added under `src/`.

## Supported versions

| Line                  | Supported |
| --------------------- | --------- |
| `main`                | Yes       |
| Latest GitHub Release | Yes       |
| Older releases        | No        |

## Reporting a vulnerability

Do not open a public GitHub Issue, Pull Request, or Discussion with exploit
details.

Use GitHub Private Vulnerability Reporting when it is enabled on
[saudtechnology/portfolio](https://github.com/saudtechnology/portfolio):

Repository → Security → Advisories → Report a vulnerability.

If that path is unavailable, email **<thiago@saudtechnology.com>** with:

- affected URL or file path;
- description and impact;
- reproduction steps or proof of concept;
- any suggested fix.

You should receive an acknowledgement within 5 business days.

## Secrets

Never commit credentials, tokens, private keys, or `.env` files with real
values. Use `.env.example` for names only. Gitleaks runs on pre-commit and in
CI (`pnpm test:sast:secrets`).

## Supply chain

- pnpm `allowBuilds` is explicit. Unknown install scripts stay blocked.
- `blockExoticSubdeps` rejects git/tarball transitive dependencies.
- CI installs with `--frozen-lockfile`.
- Dependabot watches npm and GitHub Actions weekly.

## Application headers

`next.config.ts` sets `X-Content-Type-Options`, `Referrer-Policy`,
`X-Frame-Options`, and `Permissions-Policy`. `X-Powered-By` is disabled.

## AI and model artifacts

Do not commit weights (`.pt`, `.onnx`, `.safetensors`), production prompts that
embed secrets, or datasets with personal data. Those paths are gitignored at
the repository root.
