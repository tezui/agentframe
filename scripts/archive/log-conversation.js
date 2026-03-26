const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'workflow', '09-archive', 'CONVERSATION_LOG.md');
const topic = process.argv[2] || 'general';
const userQuestion = process.argv[3] || 'n/a';
const agentSummary = process.argv[4] || 'n/a';

const entry = `\n- timestamp: ${new Date().toISOString()}\n- topic: ${topic}\n- user_question: ${userQuestion}\n- agent_answer_summary: ${agentSummary}\n- related_files: \n`;
fs.appendFileSync(file, entry, 'utf8');
console.log('Conversation archived.');
