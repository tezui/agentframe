# PLAYWRIGHT CONFIG GUIDELINE

## Standartlar
- Viewport: 1920x1080 (desktop), 390x844 (mobile)
- Animation disable (stabil screenshot)
- Retry: 2
- Trace: on-first-retry

## Zorunlu Test Seti
- smoke
- critical user journey
- visual snapshot

## Örnek Komutlar
- `npx playwright test --project=chromium`
- `npx playwright test --headed`
- `npx playwright test tests/visual --update-snapshots` (sadece onaylı değişiklikte)
