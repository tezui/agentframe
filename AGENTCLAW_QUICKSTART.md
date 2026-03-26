# AgentClaw Quickstart

Yeni bir agent bu repo içinde çalışmaya başlamadan önce şunları yapar:

## 1) Oku
1. `AGENTCLAW_SYSTEM_MAP.md`
2. `workflow/00-system/SYSTEM_RULES.md`
3. `workflow/00-system/PROJECT_RULES.md`
4. `workflow/01-memory/active-context.md`
5. `workflow/02-planning/current-task.md`

## 2) Kontrol Et
- Aktif writer lock var mı? → `workflow/llmadvice/LOCK.md`
- Hata geçmişi var mı? → `workflow/04-validation/error-log.md`
- Aynı konuda research var mı? → `workflow/08-research/index.md`

## 3) Ne yapabilirsin?
- Task planı oluştur
- Kod yaz
- Yorum bırak
- Research kaydı oluştur

## Repo Kuralı
- Framework geliştirme bu repoda yapılır
- Gerçek ürün/proje üretimi ayrı repo’da yapılır

## 4) Ne yapamazsın?
- Owner onayı olmadan kritik kural dosyalarını değiştiremezsin
- Lock almadan write/branch/commit yapamazsın
- Secret’ları repo içine yazamazsın

## 5) İş Bittiğinde
- `short-term.md` güncelle
- `task-status.md` güncelle
- gerekiyorsa `error-log.md` veya `llmadvice` thread güncelle
