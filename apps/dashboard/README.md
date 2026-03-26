# Approval Dashboard (MVP Skeleton)

Bu klasör terminal/browser/desktop yetkilendirmesi için dashboard iskeletidir.

## Bileşenler
- `apps/dashboard/backend`: approval API + audit log endpoint
- `apps/dashboard/frontend`: pending approvals arayüzü

## MVP Endpoints (öneri)
- `POST /approvals/request`
- `POST /approvals/:id/approve`
- `POST /approvals/:id/reject`
- `GET /approvals/pending`
- `GET /audit/logs`

## API Validation Metrics (Dashboard Widget)
- `GET /metrics/api-validation`
  - `api_validation_success_rate`
  - `api_contract_checks_passed`
  - `api_contract_checks_failed`
  - `auth_api_validation_success_rate`
  - `webhook_validation_success_rate`
  - `payment_api_validation_success_rate`
  - `llm_api_validation_success_rate`

Veri kaynağı:
- `workflow/projects/<proje-adi>/metrics/success-metrics.md`
- `workflow/05-monitoring/GLOBAL_DASHBOARD.md`
