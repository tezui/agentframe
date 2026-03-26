# WRITER LOCK

## Status
- state: UNLOCKED
- writer_agent:
- role:
- task_id:
- thread_id:
- acquired_at:
- released_at:

## Rules
- `state=LOCKED` iken yalnızca `writer_agent` yazabilir.
- Lock sahibi değişecekse önce `released_at` doldurulur, sonra yeni lock alınır.
