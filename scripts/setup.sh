#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if ! command -v corepack >/dev/null 2>&1; then
  echo "corepack is required (ships with Node.js)." >&2
  exit 1
fi

corepack enable
corepack prepare pnpm@12.4.1 --activate

# Never call a standalone pnpm under ~/Library/pnpm — it reads packageManager
# and looks for ~/Library/pnpm/.tools/pnpm/12.4.1/bin, which Corepack does not fill.
corepack pnpm install
corepack pnpm exec lefthook install

echo "Ready. corepack pnpm dev"
