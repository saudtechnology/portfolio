#!/usr/bin/env bash
set -euo pipefail

if ! command -v shellcheck >/dev/null 2>&1; then
  echo "shellcheck is required. Install: https://www.shellcheck.net/"
  exit 1
fi

found=0
while IFS= read -r file; do
  found=1
  shellcheck --severity=warning "$file"
done < <(find scripts -type f -name '*.sh')

if [ "$found" -eq 0 ]; then
  echo "No shell scripts found."
  exit 0
fi

echo "Result: \"passed\""
