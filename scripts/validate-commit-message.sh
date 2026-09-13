#!/usr/bin/env bash
set -euo pipefail

print_result() {
  local status="$1"
  echo "Result: \"${status}\""
  echo "Checker: \"commitlint (conventional commits)\""
}

if [[ -n "${1:-}" && -f "$1" ]]; then
  echo "Mode: \"edit-file\""
  echo "File: \"$1\""
  pnpm exec commitlint --edit "$1" --verbose
  print_result "passed"
  exit 0
fi

FROM="${COMMIT_FROM_SHA:-}"
TO="${COMMIT_TO_SHA:-HEAD}"

if [[ -z "$FROM" ]]; then
  if git rev-parse --verify origin/main >/dev/null 2>&1; then
    FROM="origin/main"
  else
    FROM="$(git rev-list --max-parents=0 HEAD)"
  fi
fi

echo "Mode: \"range\""
echo "From: \"${FROM}\""
echo "To: \"${TO}\""

RANGE_COUNT="$(git rev-list --count "${FROM}..${TO}" 2>/dev/null || echo 0)"
echo "Commits in range: \"${RANGE_COUNT}\""

if [[ "${RANGE_COUNT}" == "0" ]]; then
  echo "Note: \"no commits in range; commitlint has nothing to lint.\""
  print_result "passed"
  exit 0
fi

pnpm exec commitlint --from "$FROM" --to "$TO" --verbose
print_result "passed"
