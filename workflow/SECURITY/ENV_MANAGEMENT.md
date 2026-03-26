# ENV MANAGEMENT PLAYBOOK

## Güvenli mi? Evet, şu modelle güvenli olur:
1. Local: `.env` (gitignore'da)
2. Repo: sadece `.env.example`
3. CI: GitHub Secrets
4. Prod: Vercel Environment Variables
5. DB/Auth provider secret'ları kendi dashboard'unda (Supabase/Clerk)

## İlk adım GitHub'a yüklemek mi?
**Hayır.** Önce şu sıralama:
1. `.gitignore` + `.env.example` hazırla
2. Local `.env` doldur (asla commit etme)
3. Secret scan çalıştır
4. Sonra GitHub'a push
5. GitHub Secrets ekle
6. Vercel env ekle
7. Deploy et

## Minimum Kurulum Sırası (Önerilen)
1. `cp .env.example .env`
2. Local test çalıştır
3. Git init + first commit (secretsiz)
4. Remote GitHub'a push
5. GitHub Secrets tanımla
6. Vercel project link + env tanımla
7. Production deploy

## Yasaklar
- Secret'ı README, md, code snippet içine yazmak
- `NEXT_PUBLIC_` prefix ile gizli key yayınlamak
- Service role key'i client tarafına taşımak
