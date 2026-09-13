#!/usr/bin/env bash
set -euo pipefail
BRANCH="${BRANCH_NAME:-}"
if [[ -z "$BRANCH" ]]; then
  BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || true)"
fi
if [[ -z "$BRANCH" || "$BRANCH" == "HEAD" ]]; then
  echo "Unable to resolve branch name." >&2
  exit 1
fi
pnpm exec validate-branch-name -t "$BRANCH"
