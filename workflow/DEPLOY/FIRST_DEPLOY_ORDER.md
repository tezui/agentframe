# FIRST DEPLOY ORDER (RECOMMENDED)

1. `.gitignore` ve `.env.example` doğrula
2. Local `.env` doldur ve local test çalıştır
3. Secret scan çalıştır
4. İlk commit + GitHub push
5. GitHub Secrets ekle
6. Vercel env ekle (Preview + Production)
7. Deploy + smoke test + log update

## Kısa Cevap
"İlk adım GitHub'a yüklemek mi?"
- **Doğrudan değil.** Önce env güvenliğini kur, sonra push yap.
