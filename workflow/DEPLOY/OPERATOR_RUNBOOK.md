# OPERATOR RUNBOOK

Bu dosya, AgentFrame içinde Git/GitHub/sürüm/branch akışında
**senin ne yapacağın** ve **agent'in ne yapacağı** konularını netleştirir.

---

## 1) Senin Yapacakların

### Repo / Hesap İşleri
1. AgentFrame repo ile üretilecek proje repo’yu ayır
2. Yeni proje için boş repo aç
3. Repo URL'sini paylaş
3. Gerekirse visibility (private/public) seç
4. Gerekirse owner-level onay ver

### Prompt / Karar İşleri
1. Hedef prompt'u yaz
2. Agent'in önerisini incele
3. Onayla / düzelt / reddet
4. Beta mı stable mı çıkacağına karar ver

### Dış Sistem İşleri
1. Gerekirse GitHub Secrets gir
2. Gerekirse Vercel env gir
3. Gerekirse provider dashboard (Supabase/Clerk/Resend vb.) ayarlarını yap

---

## 2) Agent'in Yapacakları

1. Prompt'u analiz eder
2. Gerekirse planning + research + llmadvice thread açar
3. Uygulama önerisi çıkarır
4. Onay sonrası **ayrı proje repo** için scaffold önerir / branch açar / kod yazar / test eder
5. Memory, task, log, monitoring dosyalarını günceller
6. Gerekirse tag/release hazırlar
7. Feedback'e göre beta2 / beta3 iterasyonlarını oluşturur

## Multi-Repo Kuralı
- AgentFrame repo = framework
- Project repo = gerçek üretim
- Üretim ana olarak proje repo’da yürür

---

## 3) Git İş Akışı

### Ana Model
- `main` = ana hat
- `feature/*` = yeni iş
- `release/betaX` = beta hazırlığı
- `backup/*` = güvenli geri dönüş noktası
- `experiment/*` = deneme / PoC
- `hotfix/*` = acil düzeltme

### Commit
- küçük ve anlamlı commit
- örnek:
  - `feat: add approval dashboard mvp`
  - `fix: llmadvice lock handling`
  - `chore: beta2 release prep`

### Tag
- `v0.1.0-beta1`
- `v0.1.0-beta2`
- `v0.1.0-beta3`
- stable olursa: `v0.1.0` veya `v1.0.0`

---

## 4) Prompt Sonrası Çalışma Akışı

1. **Sen prompt yazarsın**
2. **Agent öneri çıkarır**
3. **Sen onaylarsın**
4. **Agent uygular**
5. **Agent test/log/feedback toplar**
6. **Yeni beta sürümü hazırlanır**

---

## 5) Hata Olduğunda

1. `workflow/04-validation/error-log.md` güncellenir
2. Gerekirse `llmadvice` thread açılır
3. Gerekirse `backup/*` veya `hotfix/*` branch açılır
4. Sorun çözülür
5. Yeni beta tag'i hazırlanır

---

## 6) Beta Sürüm Akışı

### Beta1
- framework iskeleti
- temel kurallar
- memory/planning/deploy/research/llmadvice katmanları

### Beta2
- gerçek kullanım sonrası iyileştirme
- bugfix
- daha sağlam scriptler

### Beta3+
- otomasyon derinleşmesi
- dashboard/browser/monitoring olgunlaşması

### Stable
- dashboard gerçek MVP
- browser pipeline gerçek
- llmadvice ve monitoring tam oturmuş

---

## 7) Çok Hızlı “Ben Ne Yapacağım?” Checklist

- [ ] Repo aç
- [ ] Repo URL ver
- [ ] Prompt yaz
- [ ] Öneriyi onayla / düzelt
- [ ] Gerekirse secrets/env gir
- [ ] Beta/stable kararını ver

## 8) Çok Hızlı “Agent Ne Yapacak?” Checklist

- [ ] Analiz
- [ ] Plan
- [ ] Research gerekirse oluştur
- [ ] Kod / config / doc üret
- [ ] Test / validation / log
- [ ] Tag / release hazırlığı
- [ ] Sonraki beta iterasyonu

---

## 9) Kural
- Kritik dosyalar owner onayı olmadan değişmez
- Tek repo/worktree üzerinde tek writer agent çalışır
- Secrets asla repoya yazılmaz
- Main doğrudan kirletilmez; kontrollü akış esastır
