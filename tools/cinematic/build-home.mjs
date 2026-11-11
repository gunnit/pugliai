import { spawnSync } from 'node:child_process';

// macOS can still expose Python 3.9 as python3; the generator requires 3.11+.
const candidates = process.env.PUGLIAI_PYTHON
  ? [process.env.PUGLIAI_PYTHON]
  : ['python3', 'python3.14', 'python3.13', 'python3.12', 'python3.11'];
const python = candidates.find((command) => spawnSync(command, [
  '-c', 'import sys; sys.exit(0 if sys.version_info >= (3, 11) else 1)',
], { stdio: 'ignore' }).status === 0);
if (!python) throw new Error('Python 3.11+ is required. Set PUGLIAI_PYTHON to its executable.');
for (const args of [
  ['tools/site-generator/build.py', 'pages_home'],
  ['tools/site-generator/sitemap.py'],
]) {
  const result = spawnSync(python, args, { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
