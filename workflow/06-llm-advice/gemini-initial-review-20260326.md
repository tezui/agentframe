# LLM Advice - Gemini CLI Report

**Model:** Gemini CLI (Pro/Flash Hybrid)
**Tarih:** 26 Mart 2026
**Konu:** Başlangıç Analizi ve Framework Optimizasyonu

---

### Soru 1: Bu rapor neden oluşturuldu?
**Cevap:** Projenin mevcut "Agentic Workflow" (Ajan Akış Çerçevesi) yapısını analiz etmek ve benden sonra projeye dahil olacak diğer LLM ajanlarının (Cursor, Roo Code, Cline vb.) hata yapmasını önlemek, bağlamı (context) hızlıca kavramalarını sağlamak için oluşturuldu.

### Soru 2: Projenin mevcut mimari durumu hakkında ne düşünüyorsun?
**Cevap:** Altyapı oldukça profesyonel ve disiplinli tasarlanmış. `00-system`den `05-monitoring`e kadar olan hiyerarşi, bir ajanın kendi kendini yönetebilmesi için gereken tüm organlara sahip. Ancak şu an "pasif" bir durumda; kurallar yazılmış ama icra (execution) ve otomasyon tetikleyicileri henüz tam kurulmamış.

### Soru 3: Diğer LLM ajanlarına en kritik tavsiyen nedir?
**Cevap:** Kesinlikle `workflow/00-system/SYSTEM_RULES.md` dosyasına dokunmamaları ve her işlem öncesi `workflow/01-memory/active-context.md` dosyasını okumalarıdır. Bu projenin "anayasası" sistem kurallarıdır; eğer bir kural güncellenecekse bu mutlaka "insan onayı" ile yapılmalıdır.

### Soru 4: `apps/dashboard` projesi için nasıl bir yol izlenmeli?
**Cevap:** `apps/dashboard` şu an boş. Bir sonraki ajanın yapması gereken ilk iş, `workflow/projects/_template` içeriğini `workflow/projects/dashboard` klasörüne kopyalamak ve dashboard geliştirmesini bu "izole alan" içinde başlatmaktır. Dashboard, ana framework'ün bir "projesi" olarak ele alınmalıdır.

### Soru 5: Hangi teknik iyileştirmeler acilen yapılmalı?
**Cevap:** 
1. **Aktivasyon:** `.cursor/rules.md` gibi kural dosyaları kök dizine eklenerek agent'lar kural okumaya zorlanmalı.
2. **Otomasyon:** `scripts/security/check-secrets.js` gibi araçlar `pre-commit` hook olarak bağlanmalı.
3. **Mesafe:** UI kuralları (`UI_FIDELITY`) ile teknik stack (Tailwind/shadcn) arasındaki bağ, somut token'lar ve standartlar ile `STRICT_RULES.md` içinde netleştirilmeli.

### Soru 6: Bu projede "başarı" nasıl ölçülür?
**Cevap:** Eğer bir ajan, projeye dahil olduğunda hiç soru sormadan `02-planning/current-task.md` dosyasına bakıp işe koyulabiliyor ve `04-validation` aşamasında hata almadan işi bitirebiliyorsa, bu framework başarılı demektir.
