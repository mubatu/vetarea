# VetArea içerik düzenleme rehberi

Sitedeki tekrar kullanılan klinik bilgileri `src/data/site.tr.ts` dosyasında tutulur. Telefon, WhatsApp, adres, çalışma saatleri, menü bağlantıları, logo yolu, üst duyuru, footer metinleri, sosyal paylaşım görsel bilgileri ve yapılandırılmış adres bilgileri bu dosyadan güncellenmelidir.

Sayfa başlıkları, sekme başlıkları, açıklamalar, hero metinleri ve sayfa içi çağrı metinleri `src/content/pages/tr/` altındaki Markdown dosyalarındadır. Hizmetler sayfasında hero metni gösterilmez; bu sayfada yalnızca hizmet kartı çağrı metinleri düzenlenir.

- Ana sayfa: `src/content/pages/tr/ana-sayfa.md`
- Hizmetler sayfası: `src/content/pages/tr/hizmetler.md`
- Hakkımızda sayfası: `src/content/pages/tr/hakkimizda.md`
- Ekibimiz sayfası: `src/content/pages/tr/ekibimiz.md`
- Sık Sorulanlar sayfası: `src/content/pages/tr/sss.md`
- İletişim sayfası: `src/content/pages/tr/iletisim.md`

Hizmet kartları `src/content/services/tr/`, ekip üyeleri `src/content/team/tr/`, sık sorulan sorular ise `src/data/site.tr.ts` altında tutulur.

Hizmetlerin sayfadaki sırası tek bir dosyadan yönetilir: `src/content/service-lists/tr/services.md`. Bu dosyadaki `services` listesinde yer alan dosya adlarını yukarı veya aşağı taşımanız yeterlidir. Her hizmet listede tam olarak bir kez bulunmalıdır.

Her hizmetin başlığı, açıklaması, görsel bağlantısı ve görsel alternatif metni kendi `src/content/services/tr/*.md` dosyasındadır. Yeni bir hizmet eklerken ilgili Markdown dosyasını oluşturup dosya adını `services.md` sıralamasına da ekleyin.

Sayfa şablonları `src/pages/` altındadır. Normal içerik düzenlemelerinde bu dosyalara dokunulmamalıdır:

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
6. Logo değiştiğinde dosyayı `public/` altına koyun ve `src/data/site.tr.ts` içindeki `brand.logoSrc` değerini güncelleyin. Footer için ayrı beyaz logo kullanılacaksa `brand.footerLogoSrc` değerini güncelleyin.
7. Klinik fotoğrafları hazır olduğunda sayfa Markdown dosyalarındaki stok fotoğraf URL'lerini optimize edilmiş WebP veya AVIF dosyalarıyla değiştirin.

İngilizce sayfalar eklenene kadar Türkçe içerik varsayılan ve tek dil olarak kalır.
