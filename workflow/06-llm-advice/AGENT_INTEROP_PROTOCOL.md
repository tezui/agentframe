# AGENT INTEROP PROTOCOL (Ajanlar Arası İletişim)

> Canonical/prod protocol dosyaları artık `workflow/llmadvice/` altında tutulur.
> Bu dosya geriye dönük referans içindir.

Amaç: Bir ajan yazsın, diğer ajanlar okuyup altına yorum eklesin, gerekirse branch açsın.

## Önerilen Format
- **İlk katman: JSON dosya** (makine-okunur, otomasyon kolay)
- **İkinci katman: Markdown özet** (insan okunur)

## Klasör Yapısı
`workflow/06-llm-advice/threads/<topic-id>/`

İçerik:
- `message.json` → ilk mesaj + durum
- `comments.json` → ajan yorumları (append)
- `summary.md` → kısa insan özeti

## message.json alanları
- `id`
- `topic` (`error`, `architecture`, `security`, `general`)
- `author_agent`
- `severity` (`low|medium|high|critical`)
- `content`
- `status` (`open|in_review|resolved`)
- `created_at`, `updated_at`

## comments.json alanları
- `comment_id`
- `agent`
- `comment`
- `decision` (`agree|disagree|needs_data`)
- `timestamp`

## Branch Açma Kuralı
- `high/critical` ve `decision=agree` ise branch açılır.
- Branch adı: `agent/<topic-id>-<short-desc>`
