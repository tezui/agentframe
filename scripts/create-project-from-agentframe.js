const fs = require('fs');
const path = require('path');

const projectName = process.argv[2];

if (!projectName) {
  console.error('Usage: node scripts/create-project-from-agentframe.js <project-name>');
  process.exit(1);
}

const root = process.cwd();
const out = path.join(root, 'workflow', 'projects', projectName);

if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true });

const subdirs = ['src', 'tests', 'deploy', 'logs', 'metrics'];
for (const dir of subdirs) {
  const full = path.join(out, dir);
  if (!fs.existsSync(full)) fs.mkdirSync(full, { recursive: true });
}

const readme = path.join(out, 'README.md');
fs.writeFileSync(readme, `# ${projectName}\n\nThis project was bootstrapped from AgentFrame.\n`, 'utf8');

console.log(`Project scaffold created: ${out}`);
