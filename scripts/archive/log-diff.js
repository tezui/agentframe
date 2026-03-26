const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const file = path.join(process.cwd(), 'workflow', '09-archive', 'DIFF_HISTORY.md');
let commit = 'working-tree';
try { commit = execSync('git rev-parse --short HEAD', { stdio: ['ignore','pipe','ignore'] }).toString().trim(); } catch {}
let changed = '';
try { changed = execSync('git diff --name-only HEAD~1 HEAD', { stdio: ['ignore','pipe','ignore'] }).toString().trim(); } catch {}

const entry = `\n- timestamp: ${new Date().toISOString()}\n- commit: ${commit}\n- files_changed: ${changed || 'n/a'}\n- summary: \n- risk: \n`;
fs.appendFileSync(file, entry, 'utf8');
console.log('Diff archived.');
