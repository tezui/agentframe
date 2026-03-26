# BROWSER MONITORING TASKS

## Periyodik Kontroller
- Her deploy sonrası smoke test
- Saatlik health-check + kritik sayfa yükleme
- Günlük visual drift kontrolü

## Alarm Kriterleri
- Login/Checkout akışı fail
- Visual fark > %0.5
- LCP/CLS eşiği ihlali

## Kayıt
- Sonuçlar: `workflow/05-monitoring/activity-log.md`
- Hatalar: `workflow/04-validation/error-log.md`
