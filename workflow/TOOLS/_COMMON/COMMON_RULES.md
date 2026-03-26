# COMMON TOOL RULES

Bu dosya tüm AI IDE'ler için ortak çalışma sözleşmesidir.

## 1) Zorunlu Okuma Sırası (Her prompt öncesi)
1. `workflow/00-system/SYSTEM_RULES.md`
2. `workflow/00-system/PROJECT_RULES.md`
3. `workflow/01-memory/active-context.md`
4. `workflow/02-planning/current-task.md`
5. `workflow/04-validation/error-log.md` (son 10 kayıt)

## 2) Zorunlu Çıktı Formatı
- What
- Why
- Impact
- Next Step

## 3) Kalite Kapıları
- Lint: 0 hata
- Test: kritik akışlar geçmeli
- Güvenlik: secret sızıntısı yok
- UI değiştiyse: visual regression zorunlu

## 4) Commit Standardı
- Conventional commit kullan: `feat:`, `fix:`, `chore:`, `docs:`
- Task id ekle: `[TASK-XXX] feat: ...`

## 5) Yasaklar
- Secret/api key commit etmek
- Mimari sınırları by-pass etmek
- Dokunulmaz dosyaları değiştirmek (SYSTEM_RULES)
