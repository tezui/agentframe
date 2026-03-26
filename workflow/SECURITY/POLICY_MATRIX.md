# POLICY MATRIX (Terminal / Browser / Desktop)

## Amaç
Bu matris, hangi rolün hangi aksiyonu hangi onay seviyesiyle çalıştırabileceğini belirler.

## Role x Action Matrix

| Action | Owner | Admin | Developer | Auditor | Approval |
|---|---|---|---|---|---|
| Terminal read-only (`ls`, `cat`, `grep`) | ✅ | ✅ | ✅ | ✅(read log) | L0 |
| Terminal build/test (`npm test`, `pnpm lint`) | ✅ | ✅ | ✅ | ❌ | L1 |
| File write / patch | ✅ | ✅ | ✅(scope-limited) | ❌ | L2 |
| Git commit/tag/push | ✅ | ✅ | ✅(branch-limited) | ❌ | L2 |
| Browser screenshot / smoke | ✅ | ✅ | ✅ | ❌ | L1 |
| Browser form submit / state-changing action | ✅ | ✅ | ✅(sandbox) | ❌ | L2 |
| Desktop automation (click/type hotkey) | ✅ | ✅ | ❌(default) | ❌ | L2/L3 |
| Production deploy | ✅ | ✅(with owner policy) | ❌ | ❌ | L3 |
| Destructive commands (`rm -rf`, `drop`) | ✅(2nd approver) | ❌ | ❌ | ❌ | L3 |

## Scope-Limit Kuralları
- Developer sadece kendi repo/branch/path içinde write aksiyonu alabilir.
- Desktop aksiyonları sadece allowlist edilmiş uygulamalarda (VSCode, browser) çalışabilir.
- Browser'da production ortamında "state-changing" aksiyonlar çift onay ister.
