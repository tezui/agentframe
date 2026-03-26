# HANDOVER CHECKLIST (Model / Agent Switch)

Model veya agent değiştiğinde bu adımlar zorunludur:

1. `workflow/01-memory/active-context.md` güncel mi?
2. Aktif task ID, son yapılanlar ve next step yazıldı mı?
3. İlgili thread'e handover notu eklendi mi?
4. Yeni model önce **read-only sync** yaptı mı?
5. Yazmaya geçmeden önce lock alındı mı?

## Handover Note Template
- from_agent:
- to_agent:
- task_id:
- last_completed_step:
- next_step:
- risks:
- timestamp:
