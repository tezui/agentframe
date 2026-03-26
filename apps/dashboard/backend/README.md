# Dashboard Backend (MVP)

## Responsibilities
- RBAC kontrolü
- Onay kuyruğu yönetimi
- Immutable audit log yazımı

## API Validation Metrics Endpoint (MVP)
- `GET /metrics/api-validation`

Örnek response:
```json
{
  "project": "saas-invoice-app",
  "api_validation_success_rate": 98.2,
  "api_contract_checks_passed": 56,
  "api_contract_checks_failed": 1,
  "auth_api_validation_success_rate": 99.1,
  "webhook_validation_success_rate": 97.4,
  "payment_api_validation_success_rate": 96.8,
  "llm_api_validation_success_rate": 98.9
}
```

Veri kaynağı (MVP):
- `workflow/projects/<proje-adi>/metrics/success-metrics.md`
