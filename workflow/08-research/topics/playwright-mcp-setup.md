# Playwright MCP Setup

## Neden Araştırıldı
Browser automation ve visual regression için standart kurulum oluşturmak.

## Kısa Sonuç
Playwright headless/headed kullanımına göre smoke + visual + monitoring ayrılmalı.

## Resmi Dokümantasyon
- Playwright docs

## Resmi Repo / Kaynak Kod
- official Playwright examples

## Ek Kaynaklar (Issue / Blog / Video)
- MCP browser adapter örnekleri

## Çözüm Seçenekleri
1. Pure Playwright test runner
2. MCP bridge + Playwright server

## Riskler / Dikkat Noktaları
- Dinamik elementler false-positive üretebilir
- Screenshot baseline yönetimi gerekir

## Proje İçin Önerilen Karar
Policy + visual baseline + scheduled monitoring bir arada kullanılmalı.

## Bağlantılı Task / Plan
- workflow/BROWSER_CONTROL/PLAYWRIGHT_CONFIG.md

## Son Güncelleme
- 2026-03-26
