# UI FIDELITY STRICT RULES

## Asla Bozma Kuralları
- Tasarım tokenları dışında renk/spacing kullanma
- Kritik componentlerde sınıf isimlerini rastgele değiştirme
- Visual test geçmeden merge etme

## Design Token Baseline (Default)
- Primary: `#3B82F6`
- Success: `#10B981`
- Danger: `#EF4444`
- Text Primary: `#111827`
- Surface: `#F9FAFB`
- Font: `Inter, system-ui, sans-serif`
- Spacing base unit: `4px`

## Zorunlu Süreç
1. Baseline snapshot al
2. Değişiklik yap
3. Visual diff çalıştır
4. Fark intentional değilse reddet

## Fail Kriteri
- Pixel diff > %0.5 => otomatik fail
