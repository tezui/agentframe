# BETA RELEASE FLOW

Bu dosya AgentFrame / AgentClaw için beta sürüm akışını tanımlar.

## Hedef Akış
1. **beta1**: framework iskeleti GitHub'a yüklenir
2. Kullanıcı prompt verir
3. Agent bu framework'e göre öneri üretir
4. Kullanıcı onaylarsa üretim başlar
5. Agent hata/geri bildirim toplar
6. İyileştirilmiş sürüm **beta2** olarak yüklenir

## Beta Branch / Tag Önerisi
- Branch: `release/beta1`, `release/beta2`
- Tag: `v0.1.0-beta1`, `v0.1.0-beta2`

## Beta1 İçeriği
- sistem kuralları
- memory/planning/validation yapısı
- llmadvice / research / monitoring / deploy katmanları

## Beta2 İçeriği
- feedback sonrası iyileştirmeler
- hata düzeltmeleri
- yeni otomasyon/script entegrasyonları
