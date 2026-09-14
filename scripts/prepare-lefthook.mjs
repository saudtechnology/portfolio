import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const LEFTHOOK = join(ROOT, 'node_modules', '.bin', 'lefthook');
const GIT = ['/usr/bin/git', '/opt/homebrew/bin/git', '/usr/local/bin/git'].find((bin) => existsSync(bin));

if (!GIT) {
	process.exit(0);
}

try {
	execFileSync(GIT, ['rev-parse', '--is-inside-work-tree'], { stdio: 'ignore' });
} catch {
	process.exit(0);
}

if (!existsSync(LEFTHOOK)) {
	process.exit(0);
}

execFileSync(LEFTHOOK, ['install'], { stdio: 'inherit' });
