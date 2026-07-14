# Vet Area içerik düzenleme rehberi

Sitedeki tekrar kullanılan klinik bilgileri `data/site.tr.ts` dosyasında tutulur. Telefon, WhatsApp, adres, çalışma saatleri ve menü bağlantıları bu dosyadan güncellenmelidir.

Ana sayfadaki başlıklar, açıklamalar, ekip ve bölüm sıralaması `app/page.tsx` dosyasındadır. Hizmet kartları ile sık sorulan sorular yine `data/site.tr.ts` içinde ayrı listeler halinde bulunur.

## Yayına almadan önce kontrol listesi

1. Telefon ve WhatsApp bağlantılarını gerçek bir cihazdan kontrol edin.
2. Adres bağlantısının doğru Google Maps konumunu açtığını doğrulayın.
3. Çalışma saatlerindeki değişiklikleri aynı gün güncelleyin.
4. Yeni bir hizmet eklerken tıbbi kapsamı ve kullanılan ifadeleri klinik ekibine onaylatın.
5. Ekip isimleri veya unvanları değiştiğinde ana sayfadaki ekip bölümünü güncelleyin.
6. Logo ve klinik fotoğrafları hazır olduğunda stok fotoğrafların yerine optimize edilmiş WebP veya AVIF dosyaları ekleyin.

İngilizce sayfalar eklenene kadar Türkçe içerik varsayılan ve tek dil olarak kalır.
