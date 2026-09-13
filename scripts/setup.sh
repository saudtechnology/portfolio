#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
corepack enable
corepack prepare pnpm@12.4.1 --activate
pnpm install
pnpm exec lefthook install
echo "Ready. pnpm dev"
