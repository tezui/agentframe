const fs = require('fs');
const path = require('path');

const projectsRoot = path.join(process.cwd(), 'workflow', 'projects');
const output = path.join(process.cwd(), 'workflow', '05-monitoring', 'PROJECT_METRICS_REGISTRY.md');

function readProjectDirs(root) {
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
    .map((d) => d.name);
}

const projects = readProjectDirs(projectsRoot);
let body = '# PROJECT METRICS REGISTRY\n\n';
body += '| Project | Metrics File | Status |\n|---|---|---|\n';

for (const project of projects) {
  const metricsFile = `workflow/projects/${project}/metrics/success-metrics.md`;
  const exists = fs.existsSync(path.join(process.cwd(), metricsFile));
  body += `| ${project} | ${metricsFile} | ${exists ? 'present' : 'missing'} |\n`;
}

body += '\n## Konsolidasyon\n- Bu dosya `scripts/monitoring/aggregate-metrics.js` ile üretildi.\n';
fs.writeFileSync(output, body, 'utf8');
console.log('Metrics registry updated.');
