# GITHUB REPO SETUP (Manual)

Sen GitHub üzerinde yeni repo açarken şu adımları uygula:

## 1) Yeni Repo Aç
- Repo adı öneri: `agentframe`
- Visibility: private veya public (tercihine göre)
- README oluşturma: **kapalı** (boş repo daha iyi)
- `.gitignore` seçme: **yok**
- License: opsiyonel

## 2) Repo açıldıktan sonra URL’yi al
Örnek:
- `https://github.com/<kullanici>/<repo>.git`

## 3) Sonra burada şu adımı yapacağız
```bash
git remote add origin <REPO_URL>
git add .
git commit -m "chore: beta1 initial agentframe framework"
git branch -M main
git push -u origin main
git tag v0.1.0-beta1
git push origin v0.1.0-beta1
```

## 4) Sonraki Döngü
- Prompt verirsin
- Agent öneri çıkarır
- Onay sonrası üretim yapılır
- Sonuç `beta2` branch/tag ile yüklenir
