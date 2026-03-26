# CENTRAL ENV REGISTRY

Bu dosya **tek merkezi env referansı**dır. Gerçek secret içermez, sadece isim/purpose/nerede tutulacağını gösterir.

## Golden Rule
- Secret'lar kodda tutulmaz.
- `.env.example` versiyonlanır, `.env` asla versiyonlanmaz.
- Production secret'lar sadece Vercel/GitHub/Supabase dashboard secret store'larında tutulur.

## Provider Matrix

| Provider | Key | Local Dev | GitHub Secrets | Vercel Env | Not |
|---|---|---|---|---|---|
| Supabase | `SUPABASE_SERVICE_ROLE_KEY` | ✅ | ✅ | ✅ | server-only |
| Supabase | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | - | ✅ | public olabilir |
| Vercel | `VERCEL_TOKEN` | optional | ✅ | - | CI deploy için |
| Clerk | `CLERK_SECRET_KEY` | ✅ | ✅ | ✅ | server-only |
| Resend | `RESEND_API_KEY` | ✅ | ✅ | ✅ | email API |
| LemonSqueezy | `LEMONSQUEEZY_API_KEY` | ✅ | ✅ | ✅ | payment API |
| Gemini | `GEMINI_API_KEY` | ✅ | ✅ | ✅ | LLM provider |
| OpenRouter | `OPENROUTER_API_KEY` | ✅ | ✅ | ✅ | LLM routing |
| GitHub | `GITHUB_TOKEN` | optional | ✅ | - | release/automation |

## Rotation Policy
- Kritik key'ler: 30-90 günde bir rotate
- Incident sonrası hemen rotate
- Rotation sonrası smoke test zorunlu
