# AUTHORIZATION DASHBOARD (Terminal / Browser / Desktop)

Bu doküman, agent'in terminal komutu çalıştırması, tarayıcı kontrolü ve desktop otomasyonu için
**dashboard tabanlı yetkilendirme** modelini tanımlar.

## 1) Temel Prensip
- Agent hiçbir yüksek riskli aksiyonu doğrudan çalıştırmaz.
- Tüm hassas aksiyonlar Dashboard üzerinde onay kuyruğuna düşer.
- Onay olmadan "execute" yerine sadece "dry-run plan" üretilir.

## 2) Roller
- **Owner**: Tam yetki (policy değiştirebilir, acil override verebilir)
- **Admin**: Terminal/browser/desktop izinlerini yönetir
- **Developer**: Kendi proje scope'unda sınırlı komut onayı
- **Auditor**: Sadece log/rapor görür

## 3) Onay Seviyeleri
- **L0 (Auto-Allow)**: read-only işlemler (ls, cat, grep, test raporu okuma)
- **L1 (1-click approve)**: build/test, local dev server, browser screenshot
- **L2 (2-step approve)**: dosya yazma, git commit/tag/push, env güncelleme
- **L3 (Owner required)**: rm/destroy, production deploy, db migration down

## 4) Dashboard Akışı
1. Agent bir aksiyon üretir: `action_id`, `risk_level`, `reason`, `rollback_plan`
2. Dashboard "Pending Approval" kuyruğuna ekler
3. Yetkili kullanıcı approve/reject eder
4. Sonuç immutable audit log'a yazılır
5. Agent sonucu `workflow/04-validation/error-log.md` veya activity log'a işler

## 5) Zorunlu Alanlar (Onay İsteğinde)
- `action_id`
- `requested_by` (agent/tool)
- `command_or_task`
- `target_scope` (repo/path/url/window)
- `risk_level`
- `rollback_plan`
- `expires_at` (TTL)

## 6) Güvenlik Kontrolleri
- Session + MFA
- IP/device allowlist
- Just-in-time permission (süreli izin)
- Break-glass işlemler için ikinci onay
