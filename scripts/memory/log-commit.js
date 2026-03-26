const fs = require('fs');
const { execSync } = require('child_process');

const outFile = 'workflow/01-memory/short-term.md';

function get(cmd) {
  try { return execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); }
  catch { return 'n/a'; }
}

const hash = get('git rev-parse --short HEAD');
const msg = get('git log -1 --pretty=%s');
const date = new Date().toISOString();

const line = `- [${date}] commit ${hash}: ${msg}\n`;

let content = '# SHORT TERM MEMORY\n\n## Session Notes\n';
if (fs.existsSync(outFile)) {
  content = fs.readFileSync(outFile, 'utf8');
  if (!content.includes('## Session Notes')) content += '\n## Session Notes\n';
}

content += line;
fs.writeFileSync(outFile, content, 'utf8');
console.log('short-term memory updated');
