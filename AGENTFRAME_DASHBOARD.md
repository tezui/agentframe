# AgentFrame Dashboard

Bu dosya tüm sistemi **kuşbakışı ve sade** görmen için hazırlanmıştır.

---

## 1) Şu an durum
- Repo: `agentframe`
- Sürüm: `v0.1.0-beta1`
- Genel seviye: **beta / güçlü iskelet / geliştiriliyor**

### Genel Başarım
- Modülerlik: **9.5/10**
- LLM dostuluğu: **9/10**
- Az hata üretme: **8.5/10**
- Prompt-based çalışma: **8.5/10**
- Genel skor: **9.4/10**

---

## 2) Ana kontrol paneli

### Görevler
- Aktif görev: `workflow/02-planning/current-task.md`
- Görev panosu: `workflow/03-execution/task-status.md`

### Kurallar
- Sistem kuralları: `workflow/00-system/SYSTEM_RULES.md`
- Proje kuralları: `workflow/00-system/PROJECT_RULES.md`
- Ortak tool kuralları: `workflow/TOOLS/_COMMON/COMMON_RULES.md`

### Skills / Araçlar
- Tool ayarları: `workflow/TOOLS/`
- MCP: `workflow/07-mcp/mcp-config.json`
- Research: `workflow/08-research/`

### Hata / Kalite
- Hata logu: `workflow/04-validation/error-log.md`
- Mimari review: `workflow/04-validation/architecture-review.md`
- Visual rapor: `workflow/04-validation/visual-regression-report.md`

### Monitoring
- Global dashboard: `workflow/05-monitoring/GLOBAL_DASHBOARD.md`
- Günlük log: `workflow/05-monitoring/DAILY_LOG.md`
- Metrik registry: `workflow/05-monitoring/PROJECT_METRICS_REGISTRY.md`

### Arşiv
- Konuşmalar: `workflow/09-archive/CONVERSATION_LOG.md`
- Diff geçmişi: `workflow/09-archive/DIFF_HISTORY.md`
- Kararlar: `workflow/09-archive/DECISION_HISTORY.md`
- Hatalar: `workflow/09-archive/ERROR_HISTORY.md`
- Prompt geçmişi: `workflow/09-archive/PROMPT_HISTORY.md`

---

## 3) Sadece bakman gereken dosyalar

### Çok hızlı başlamak için
1. `AGENTFRAME_DASHBOARD.md`
2. `AGENTFRAME_QUICKSTART.md`
3. `AGENTFRAME_SYSTEM_MAP.md`

### Üretim öncesi
1. `workflow/02-planning/current-task.md`
2. `workflow/03-execution/task-status.md`
3. `workflow/04-validation/error-log.md`

### Git / sürüm / beta
1. `workflow/DEPLOY/OPERATOR_RUNBOOK.md`
2. `workflow/DEPLOY/BETA_RELEASE_FLOW.md`
3. `workflow/DEPLOY/GITHUB.md`

---

## 4) Senin için sade rehber

### Sen ne yapacaksın?
- Prompt yaz
- Öneriyi incele
- Onay ver / düzeltme iste
- Gerekirse repo/secrets/vercel ayarlarını yap

### Agent ne yapacak?
- Analiz edecek
- Plan oluşturacak
- Gerekirse research yapacak
- Üretim yapacak
- Hata/log/başarım takibi yapacak
- Yeni beta sürüm hazırlayacak

---

## 5) Şu an eksik kalanlar
- Dashboard backend/frontend gerçek çalışan MVP değil
- Browser otomasyonu hâlâ gerçek Playwright pipeline seviyesinde değil
- Arşivleme scriptleri hazır ama tam otomatik bağlı değil

---

## 6) En sade dosya yolu
Eğer karışıklık olursa sadece buradan ilerle:

`AGENTFRAME_DASHBOARD.md`
