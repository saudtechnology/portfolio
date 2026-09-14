#!/usr/bin/env bash
set -euo pipefail

args=(
  scan
  --config=.semgrep.yaml
  --config=p/security-audit
  --config=p/javascript
  --quiet
  --error
)

if command -v semgrep >/dev/null 2>&1; then
  exec semgrep "${args[@]}"
fi

if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
  exec docker run --rm -v "$PWD:/src" -w /src semgrep/semgrep semgrep "${args[@]}"
fi

echo "semgrep is required. Install: brew install semgrep"
echo "Or start Docker Desktop and reuse the container image."
exit 1
