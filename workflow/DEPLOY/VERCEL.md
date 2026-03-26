# VERCEL DEPLOY FLOW

Bu dosya Vercel'e yükleme akışını ayrı yönetir.

## 1) Hazırlık
- Vercel project linklenir (`vercel link`)
- Environment variables dashboard üzerinden set edilir
- Preview ve Production ortamları ayrılır

## 2) CI Akışı
1. PR -> preview deploy
2. `main` merge -> production deploy
3. Deploy sonrası smoke + visual check

## 3) Kayıt
- Her deploy sonucu `workflow/projects/<proje>/deploy/deploy-history.md` dosyasına yazılır.
- Başarısız deploy `workflow/04-validation/error-log.md`a da düşülür.
