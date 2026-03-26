const fs = require('fs');
const path = require('path');

const root = process.cwd();
const projectsRoot = path.join(root, 'workflow', 'projects');
const dashboardFile = path.join(root, 'workflow', '05-monitoring', 'GLOBAL_DASHBOARD.md');

function listProjects() {
  if (!fs.existsSync(projectsRoot)) return [];
  return fs.readdirSync(projectsRoot, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('_'))
    .map(d => d.name);
}

function extractMetric(file, key) {
  if (!fs.existsSync(file)) return '-';
  const text = fs.readFileSync(file, 'utf8');
  const re = new RegExp(`-\\s+${key}:\\s*(.*)`);
  const m = text.match(re);
  return m ? (m[1].trim() || '-') : '-';
}

const projects = listProjects();
let content = '# GLOBAL WORKFLOW DASHBOARD\n\n';
content += 'Bu dosya tüm projelerin anlık/günlük başarı görünümünü tek yerde toplar.\n\n';
content += '## Active Projects\n';
content += '| Project | Status | Last Deploy | Test Pass | Visual Pass | API Validation Success | Notes |\n';
content += '|---|---|---|---|---|---|---|\n';

for (const project of projects) {
  const metrics = path.join(projectsRoot, project, 'metrics', 'success-metrics.md');
  const deploy = path.join(projectsRoot, project, 'deploy', 'deploy-history.md');
  const testPass = extractMetric(metrics, 'test_pass_rate');
  const visualPass = extractMetric(metrics, 'visual_regression_pass_rate');
  const apiPass = extractMetric(metrics, 'api_validation_success_rate');
  const lastDeploy = fs.existsSync(deploy) ? 'tracked' : '-';
  content += `| ${project} | active | ${lastDeploy} | ${testPass} | ${visualPass} | ${apiPass} | auto-sync |\n`;
}

content += '\n## Daily Summary (Today)\n';
content += `- total_projects: ${projects.length}\n`;
content += '- successful_deploys:\n';
content += '- failed_deploys:\n';
content += '- avg_test_pass_rate:\n';
content += '- avg_visual_pass_rate:\n';
content += '- avg_api_validation_success_rate:\n\n';
content += '## API Validation (Global)\n';
content += '- api_contract_checks_passed:\n';
content += '- api_contract_checks_failed:\n';
content += '- auth_validation_success_rate:\n';
content += '- webhook_validation_success_rate:\n';
content += '- payment_api_validation_success_rate:\n';

fs.writeFileSync(dashboardFile, content, 'utf8');
console.log('Global dashboard synced.');
