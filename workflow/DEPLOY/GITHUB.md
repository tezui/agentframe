# GITHUB DEPLOY & VERSION FLOW

## Zorunlu Git Akışı
1. Feature branch aç
2. Conventional commit kullan
3. PR aç
4. CI geçmeden merge etme

## Her Versiyon Politikası
- Merge sonrası otomatik versiyon bump
- Otomatik tag oluşturma (`vX.Y.Z`)
- GitHub Release + changelog güncelleme

## GitHub Upload / Release Akışı
1. `feature/*` branch üzerinde geliştirme
2. PR açılır, zorunlu kontroller çalışır
3. Merge sonrası otomatik tag + release oluşur
4. Release bilgisi proje deploy geçmişine yazılır:
   - `workflow/projects/<proje-adi>/deploy/deploy-history.md`

## Branch Politikası (Mevcut Durum)
- Şu an: **Her sürüm için otomatik ayrı branch açma yok**.
- Şu anki model: feature branch -> PR -> main merge -> otomatik tag/release.
- İstersen ek politika: her release öncesi `release/vX.Y.Z` branch otomatik açılabilir.

## İsteğe Bağlı Branch Açma (Rollback / Deneme / Fork / Kayıt)
İstenildiğinde manuel veya script ile branch açılabilir:

- `backup/<tarih>-<not>` → geri dönmek için anlık güvenli kayıt
- `experiment/<konu>` → deneme/PoC
- `archive/<konu>` → kalıcı snapshot/kayıt
- `hotfix/<konu>` → acil düzeltme
- `forksync/<repo>` → fork senkronu için çalışma branch'i

Örnek:
- `backup/20260326-before-payment-refactor`
- `experiment/llm-router-a-b-test`

Not: Bu branch'ler PR açılmadan `main` ile birleştirilmez.

## PR Zorunlu Kontroller
- lint
- unit/integration test
- visual regression
- security scan

## Secrets Yönetimi
- GitHub'a gerçek secret gönderilmez.
- Sadece GitHub Secrets store kullanılır.
- `.env.example` repo'da, `.env` localde kalır.
- Push öncesi secret scan zorunludur.


## Kayıt ve İzleme
- Release/Tag sonuçları günlük dashboard'a özetlenir
- Hata varsa `workflow/04-validation/error-log.md` güncellenir

## Koruma
- `main` branch protection
- Required checks: lint, test, visual, security
