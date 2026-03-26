#!/usr/bin/env node
const fs = require('fs');

const path = 'workflow/01-memory/active-context.md';
const out = fs.existsSync(path) ? fs.readFileSync(path, 'utf8') : 'active-context not found';
console.log(out);
