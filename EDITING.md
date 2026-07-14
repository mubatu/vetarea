# Vet Area içerik düzenleme rehberi

Sitedeki tekrar kullanılan klinik bilgileri `src/data/site.tr.ts` dosyasında tutulur. Telefon, WhatsApp, adres, çalışma saatleri ve menü bağlantıları bu dosyadan güncellenmelidir.

Ana sayfanın başlık ve açıklamaları `src/content/pages/tr/ana-sayfa.md` dosyasındadır. Hizmet kartları `src/content/services/tr/`, ekip üyeleri `src/content/team/tr/`, sık sorulan sorular ise `src/data/site.tr.ts` altında tutulur.

Sayfa düzenleri `src/pages/` altındadır:

- Ana sayfa: `src/pages/index.astro`
- Hizmetler: `src/pages/hizmetler/index.astro`
- Hakkımızda: `src/pages/hakkimizda/index.astro`
- Ekibimiz: `src/pages/ekibimiz/index.astro`
- Sık Sorulanlar: `src/pages/sss/index.astro`
- İletişim: `src/pages/iletisim/index.astro`

## Yayına almadan önce kontrol listesi

1. Telefon ve WhatsApp bağlantılarını gerçek bir cihazdan kontrol edin.
2. Adres bağlantısının doğru Google Maps konumunu açtığını doğrulayın.
3. Çalışma saatlerindeki değişiklikleri aynı gün güncelleyin.
4. Yeni bir hizmet eklerken tıbbi kapsamı ve kullanılan ifadeleri klinik ekibine onaylatın.
5. Ekip isimleri veya unvanları değiştiğinde `src/content/team/tr/` altındaki ilgili dosyayı güncelleyin.
6. Logo ve klinik fotoğrafları hazır olduğunda stok fotoğrafların yerine optimize edilmiş WebP veya AVIF dosyaları ekleyin.

İngilizce sayfalar eklenene kadar Türkçe içerik varsayılan ve tek dil olarak kalır.
