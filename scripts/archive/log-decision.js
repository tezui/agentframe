const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'workflow', '09-archive', 'DECISION_HISTORY.md');
const decision = process.argv[2] || 'n/a';
const rationale = process.argv[3] || 'n/a';

const entry = `\n- timestamp: ${new Date().toISOString()}\n- decision: ${decision}\n- rationale: ${rationale}\n- impact: \n- related_files: \n`;
fs.appendFileSync(file, entry, 'utf8');
console.log('Decision archived.');
