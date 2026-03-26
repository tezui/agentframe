# llmadvice

Bu klasör, LLM ajanları arası güvenli iletişim ve karar akışını yönetir.

## Ana Dosyalar
- `PROTOCOL.md` → roller, lock, thread lifecycle, branch kuralı
- `HANDOVER-CHECKLIST.md` → model/ajan değişiminde zorunlu adımlar
- `LOCK.md` → tek aktif yazan agent lock kaydı
- `schema/comments.schema.json` → yorum veri şeması

## Yardımcı Scriptler
- `scripts/llm-advice.ps1` → open/comment/decide/close
- `scripts/llmadvice-lock.ps1` → acquire/release/status

## Hızlı Kural
- Aynı repo/worktree üzerinde aynı anda **tek yazan agent**.
- Diğer ajanlar sadece yorum bırakır.
- Branch açma/merge/release yalnızca **orchestrator** rolündedir.
