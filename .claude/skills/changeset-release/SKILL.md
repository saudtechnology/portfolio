---
name: changeset-release
description: Add a changeset, merge Version Packages, or create the git tag and GitHub Release for this private site. Never publish to npm.
---

# Changeset release

## Train

1. After a releasable change: `pnpm infra:release:changeset`, commit `.changeset/*.md`.
2. Open PR into `main`. CI requires that file except on Version Packages PRs.
3. Merge the product PR. `release.yml` opens Version Packages.
4. Merge Version Packages. Then tag `vX.Y.Z` and `gh release create` on `main`.

Omit the `publish` input on `changesets/action`. `"publish: false"` runs `/usr/bin/false`. This package is `"private": true`; the artifact is Pages HTML.

Do not tag from `release/*`. Do not attach a real `GITHUB_TOKEN` to Act when rehearsing:

```bash
act push -W .github/workflows/release.yml --dryrun
```
