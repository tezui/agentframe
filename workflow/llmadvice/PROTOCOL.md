# LLMADVICE PROTOCOL

## 1) Roller
- **orchestrator**: branch açar, commit/push yapar, merge/release yönetir.
- **reviewer**: sadece yorum/öneri bırakır (kod yazmaz).
- **specialist**: gerektiğinde PoC üretir (tercihen ayrı worktree/clone).

## 2) Tek Writer Kuralı
- **Tek repo/worktree = tek aktif yazan agent**
- Aynı anda birden fazla ajan yazma yapamaz.
- Diğer ajanlar sadece `threads/*/comments.json` alanına yorum ekler.

## 3) Lock Mekanizması
- Lock dosyası: `workflow/llmadvice/LOCK.md`
- Lock alınmadan write/branch/commit yapılmaz.
- Lock alan agent işlem bitince lock'u `released_at` ile kapatır.

## 4) Thread Yaşam Döngüsü
- `OPEN` → konu açıldı
- `ANSWERED` → yorumlar toplandı
- `DECIDED` → karar verildi
- `CLOSED` → uygulandı/kapatıldı

> Branch açma yalnızca `DECIDED` sonrası yapılır.

## 5) Thread Yapısı
Her konu için klasör:

`workflow/llmadvice/threads/<thread-id>/`

İçerik:
- `message.json`
- `comments.json`
- `summary.md`

## 6) message.json Örnek Alanlar
- `id`
- `topic` (`error|architecture|security|general`)
- `status` (`OPEN|ANSWERED|DECIDED|CLOSED`)
- `author_agent`
- `severity` (`low|medium|high|critical`)
- `content`
- `created_at`
- `updated_at`

## 7) Branch Kuralı
- `high/critical` + `status=DECIDED` ise orchestrator branch açabilir.
- Önerilen branch formatları:
  - `agent/<thread-id>-<short-desc>`
  - `backup/<date>-<note>`
  - `experiment/<date>-<note>`

## 8) Güvenlik
- `workflow/00-system/*` ve `workflow/SECURITY/*` dosyalarında değişiklik için owner-level onay gerekir.
- Onaysız kritik değişiklikler approval-gateway tarafından bloklanır.
