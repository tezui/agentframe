# SYSTEM RULES (IMMUTABLE)

Bu dosya çekirdek güvenlik/kalite sözleşmesidir. İnsan onayı olmadan değiştirilmez.

## 1) Security Non-Negotiables
- Secret/API key/token asla repoya yazılmaz.
- Destructive komutlar insan onayı olmadan çalıştırılmaz.
- Input validation ve output sanitization zorunludur.

## 2) Prompt Lifecycle (Mandatory)
Her prompt öncesi:
1. `workflow/01-memory/active-context.md`
2. `workflow/02-planning/current-task.md`
3. `workflow/04-validation/error-log.md`
4. `workflow/00-system/PROJECT_RULES.md`

Her aksiyon sonrası:
1. `workflow/01-memory/short-term.md` güncelle
2. `workflow/03-execution/task-status.md` güncelle
3. Hata varsa `workflow/04-validation/error-log.md` yaz

## 3) Quality Gates
- Lint: 0 error
- Type safety: strict
- Test: kritik pathler geçmeli
- UI değişiminde visual regression zorunlu

## 4) Git Discipline
- Conventional commit zorunlu
- `main`e direkt push yasak
- PR + CI geçişi zorunlu
- Her sürüm tag ile versiyonlanır

## 5) Proje Dizin Standardı
- Tüm işler `workflow/projects/<proje-adi>/` altında yürütülür.
- Build çıktısı üreten projelerde `dist/` klasörü zorunludur.
- Her projede `logs/` ve `metrics/` klasörleri bulunmalıdır.

## 6) İzlenebilirlik
- Önemli aksiyonlar proje loguna yazılmalı.
- Başarı metrikleri günlük olarak güncellenmeli.
- Dağıtım kayıtları (GitHub/Vercel) proje bazında saklanmalı.
