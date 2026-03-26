const fs = require('fs');
const path = require('path');

const root = process.cwd();
const out = path.join(root, 'AGENTFRAME_SYSTEM_MAP.generated.md');

const sections = [
  ['System Rules', 'workflow/00-system/SYSTEM_RULES.md'],
  ['Project Rules', 'workflow/00-system/PROJECT_RULES.md'],
  ['Current Task', 'workflow/02-planning/current-task.md'],
  ['Task Status', 'workflow/03-execution/task-status.md'],
  ['Global Dashboard', 'workflow/05-monitoring/GLOBAL_DASHBOARD.md'],
  ['llmadvice Protocol', 'workflow/llmadvice/PROTOCOL.md'],
  ['Research Rules', 'workflow/08-research/RESEARCH_RULES.md'],
];

let content = '# AgentFrame Generated System Map\n\n';

for (const [title, rel] of sections) {
  const file = path.join(root, rel);
  content += `## ${title}\n`;
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    const snippet = text.split(/\r?\n/).slice(0, 20).join('\n');
    content += `Source: \`${rel}\`\n\n`;
    content += '```md\n' + snippet + '\n```\n\n';
  } else {
    content += `Source missing: \`${rel}\`\n\n`;
  }
}

fs.writeFileSync(out, content, 'utf8');
console.log(`Generated: ${out}`);
