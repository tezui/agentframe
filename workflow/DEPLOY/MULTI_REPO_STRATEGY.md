# MULTI REPO STRATEGY

## Ana Prensip
- `agentframe` repo = framework / işletim sistemi
- yeni proje repo = gerçek ürün / uygulama kodu

## Repo Rolleri

### 1. AgentFrame Repo
Bu repoda kalır:
- workflow sistemi
- kurallar
- reusable scripts
- reusable docs
- templates
- onboarding dosyaları

### 2. Proje Repo
Bu repoda olur:
- gerçek app kodu
- proje özel workflow
- proje özel env/deploy
- proje özel log/metrics

## Karar
Üretim artık AgentFrame repo içinde değil, **ayrı proje repo** içinde yapılır.

## Akış
1. AgentFrame referans alınır
2. Yeni repo açılır
3. Workflow seed kopyalanır
4. Üretim proje repo’sunda başlar
