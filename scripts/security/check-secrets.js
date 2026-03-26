#!/usr/bin/env node
/**
 * Basic secret leak guard (MVP).
 * Gerçek projede gitleaks/trufflehog ile güçlendirin.
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const blocked = [/AIza[0-9A-Za-z\-_]{35}/, /sk-[A-Za-z0-9]{20,}/, /ghp_[A-Za-z0-9]{30,}/];
const ignore = new Set(['node_modules', '.git', 'dist', '.next']);

function walk(dir) {
  const out = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignore.has(item.name)) continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const files = walk(root).filter((f) => !f.endsWith('.png') && !f.endsWith('.jpg'));
let found = 0;
for (const file of files) {
  const txt = fs.readFileSync(file, 'utf8');
  for (const re of blocked) {
    if (re.test(txt)) {
      found++;
      console.error(`Potential secret in: ${file}`);
      break;
    }
  }
}

if (found > 0) process.exit(1);
console.log('Secret scan passed (basic).');
