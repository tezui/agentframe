# BROWSER CONTROL CONNECTION

## Amaç
Agent'in tarayıcıyla güvenli ve izlenebilir şekilde etkileşmesini sağlamak.

## Bağlantı Modları
1. **Local Dev**: Playwright headed (debug kolay)
2. **CI Mode**: Playwright headless (hızlı)
3. **Persistent Session**: `storageState.json` ile login korunur

## Örnek Akış
1. App çalışıyor mu kontrol et (`/health`)
2. Playwright instance başlat
3. Hedef sayfaya git
4. Snapshot al
5. Gerekirse aksiyon yap (onay seviyesi kontrol)

## Yetkilendirme
- Read-only browser aksiyonları: L1
- State-changing aksiyonlar (submit/delete): L2/L3
- Tüm aksiyonlar `AUTHORIZATION_DASHBOARD` kurallarına bağlıdır
