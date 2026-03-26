#!/usr/bin/env node
/**
 * MVP approval gateway placeholder.
 * Gerçek dashboard API gelene kadar policy kontrolünü tek noktada toplar.
 */

const riskMap = {
  read: 'L0',
  test: 'L1',
  write: 'L2',
  deploy: 'L3',
};

function isProtectedPath(targetPath = '') {
  const protectedRoots = [
    'workflow/00-system/',
    'workflow/SECURITY/',
  ];
  return protectedRoots.some((p) => targetPath.startsWith(p));
}

function evaluate(actionType = 'read', targetPath = '') {
  const protectedChange = actionType === 'write' && isProtectedPath(targetPath);
  const override = process.env.APPROVAL_OVERRIDE === 'true';

  if (protectedChange && !override) {
    return {
      allowed: false,
      requiredApproval: 'L3',
      message: 'Protected rules cannot be changed without explicit owner override.',
      targetPath,
    };
  }

  return {
    allowed: actionType === 'read' || actionType === 'test',
    requiredApproval: riskMap[actionType] || 'L2',
    message: 'Dashboard onayı gerekli olabilir.',
    targetPath,
  };
}

if (require.main === module) {
  const type = process.argv[2] || 'read';
  const targetPath = process.argv[3] || '';
  console.log(JSON.stringify(evaluate(type, targetPath), null, 2));
}

module.exports = { evaluate };
