# PROJECT RULES (CUSTOMIZABLE)

Bu dosya proje özel kararları içerir (stack, domain, sınırlar).

## Varsayılan Referans Stack
- Next.js 15 (App Router)
- TypeScript + Tailwind + shadcn/ui
- Supabase (Auth/DB/Storage)
- Vercel deploy
- GitHub Actions CI/CD
- Playwright E2E + visual regression
- Opsiyonel: Clerk, Resend, Stripe

## Mimari Politikalar
- Domain logic UI'dan bağımsız olmalı.
- API sınırında Zod benzeri doğrulama zorunlu.
- Ortak UI tokenları `UI_FIDELITY` altında yönetilir.

## Performans Hedefleri
- API p95 < 300ms
- LCP < 2.5s
- Lighthouse >= 90

## Güvenlik Hedefleri
- RLS/authorization zorunlu
- Audit trail (kritik aksiyonlar) zorunlu
