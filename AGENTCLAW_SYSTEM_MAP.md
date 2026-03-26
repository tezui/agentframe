# 🧠 AgentClaw System Map

Bu dosya, tüm sistemin LLM-friendly kısa teknik haritasıdır.

## 1. Amaç
- Agentic yazılım geliştirme
- Daha az hata, daha çok otomasyon
- Kural tabanlı, hafızalı, izlenebilir çalışma

## 2. Ana Katmanlar
- `workflow/00-system` → immutable sistem ve proje kuralları
- `workflow/01-memory` → aktif bağlam + kısa/uzun dönem hafıza
- `workflow/02-planning` → task ve PRD planlama
- `workflow/03-execution` → icra planı ve görev durumu
- `workflow/04-validation` → error log, architecture review, cross-check
- `workflow/05-monitoring` → dashboard, günlük log, metrikler
- `workflow/07-mcp` → MCP bağlantıları
- `workflow/08-research` → internet araştırma hafızası
- `workflow/llmadvice` → ajanlar arası iletişim, lock, handover
- `workflow/projects` → proje bazlı izole çalışma alanı

## Repo Modeli
- `agentframe` = framework repo
- üretilecek her gerçek ürün = ayrı repo

## 3. Ana Davranışlar
- Her aksiyon öncesi context okunur
- Tek repo/worktree üzerinde tek writer agent çalışır
- Riskli aksiyonlar approval/policy ile korunur
- UI değişiklikleri visual regression ile kontrol edilir
- Commit sonrası hafıza/log güncellemesi yapılır

## 4. Git Modeli
- `feature/* -> PR -> main -> tag/release`
- İsteğe bağlı: `backup/*`, `experiment/*`, `archive/*`, `hotfix/*`, `forksync/*`

## 5. Güvenlik
- `.env` commit edilmez
- Secrets GitHub/Vercel/provider dashboard’larında tutulur
- Secret scan CI ve pre-commit’e bağlıdır

## 6. LLM İlk Okuma Sırası
1. `workflow/00-system/SYSTEM_RULES.md`
2. `workflow/01-memory/active-context.md`
3. `workflow/02-planning/current-task.md`
4. `workflow/04-validation/error-log.md`
5. Bu dosya (`AGENTCLAW_SYSTEM_MAP.md`)

## 7. Canonical Not
- Ajanlar arası iletişim için canonical klasör: `workflow/llmadvice`
- `workflow/06-llm-advice` legacy/geri uyumluluk içindir
