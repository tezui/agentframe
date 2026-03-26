# AI Agent Workflow Framework (TR)

Bu repo, her projede LLM agent'lerin **kendi kendini yönetebileceği** bir çalışma iskeleti sunar.

## Hedef
- Daha hızlı ve net üretim
- Daha az hata, daha çok otomasyon
- Kurallı geliştirme (genel + projeye özel)
- Hafıza, plan, doğrulama, deploy ve versiyonlama disiplinini standartlaştırma

## Hızlı Başlangıç
1. Bu klasörü proje köküne kopyala
2. `workflow/00-system/architecture-constraints.md` ve `project-rules.md` dosyalarını projene göre doldur
3. Kullandığın IDE'ye göre `.cursor`, `.cline`, `.roo`, `.kilocode` dosyalarını aktive et
4. Her task öncesi `workflow/01-memory/active-context.md` + `workflow/02-planning/current-task.md` güncelle

## LLM Entry Files
- `AGENTCLAW_SYSTEM_MAP.md` → kısa teknik harita
- `AGENTCLAW_QUICKSTART.md` → yeni agent için hızlı giriş

## Temel Dizinler
- `workflow/00-system`: dokunulmaz çekirdek kurallar + proje standartları
- `workflow/01-memory`: aktif bağlam + kısa/uzun dönem hafıza
- `workflow/02-planning`: PRD + aktif görev planı
- `workflow/03-execution`: icra planı + task status
- `workflow/04-validation`: hata log, mimari review, çapraz kontrol
- `workflow/05-monitoring`: global dashboard, günlük log, proje metrik registry
- `workflow/06-llm-advice`: eski llm advice alanı (geri uyumluluk)
- `workflow/07-mcp`: MCP server yönetimi
- `workflow/08-research`: internet araştırmaları, kurulum notları, güncel çözüm kayıtları
- `workflow/BROWSER_CONTROL`: browser bağlantısı, Playwright, monitoring görevleri
- `workflow/DEPLOY`: GitHub, Vercel, branch ve version politikaları
- `workflow/SECURITY`: env, authorization, policy, dashboard güvenliği
- `workflow/TOOLS`: Cursor/Cline/RooCode/KiloCode/Windsurf/Antigravity araç ayarları
- `workflow/UI_FIDELITY`: strict UI kuralları + visual regression
- `workflow/llmadvice`: **canonical** ajanlar arası iletişim, handover ve lock protokolü
- `workflow/projects`: proje bazlı izole çalışma alanları

## Proje Yerleşim Standardı
Artık her proje aşağıdaki düzende açılır:

```text
workflow/
  projects/
    <proje-adi>/
      src/
      tests/
      dist/              # derleme çıktısı gerekiyorsa
      logs/
      metrics/
      deploy/
```

- Her proje kendi klasöründe izole edilir.
- Build gerektiren projelerde `dist/` zorunludur.
- Proje bazlı log/metrikler günlük olarak tutulur.

## Canonical Notlar
- Ajanlar arası iletişim için ana klasör: `workflow/llmadvice`
- `workflow/06-llm-advice` klasörü geriye dönük uyumluluk / eski referanslar içindir.
- Güvenli operasyon sırası: env -> secret scan -> git -> GitHub -> Vercel -> deploy
