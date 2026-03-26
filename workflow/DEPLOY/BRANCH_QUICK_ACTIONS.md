# BRANCH QUICK ACTIONS

Amaç: İstendiğinde hızlıca geri dönüş/deneme/fork/kayıt branch'i açmak.

## Türler
- backup
- experiment
- archive
- hotfix
- forksync

## Linux/Mac/Git Bash
```bash
bash scripts/git/open-branch.sh backup before-auth-refactor
bash scripts/git/open-branch.sh experiment llm-eval-v2
```

## PowerShell
```powershell
powershell -ExecutionPolicy Bypass -File scripts/git/open-branch.ps1 -Type backup -Name before-auth-refactor
powershell -ExecutionPolicy Bypass -File scripts/git/open-branch.ps1 -Type experiment -Name llm-eval-v2
```

## Kural
- Branch açıldıktan sonra değişiklikler PR üzerinden ilerler.
- `main` doğrudan merge/push yapılmaz.
