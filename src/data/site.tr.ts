// Locale-specific labels and clinic details shared by every page.
export const site = {
  name: "Vet Area",
  legalName: "VetArea Emek Veteriner Kliniği",
  brand: {
    displayName: "VetArea",
    subtitle: "Emek Veteriner Kliniği",
    homeAriaLabel: "Vet Area ana sayfa",
    logoSrc: "/logo.png",
  },
  description:
    "Emek, Çankaya'da muayene, koruyucu sağlık, tanı ve cerrahi hizmetleri sunan veteriner kliniği.",
  url: "https://vetarea.com.tr",
  locale: {
    htmlLang: "tr",
    ogLocale: "tr_TR",
  },
  themeColor: "#08396a",
  phone: {
    label: "+90 (312) 223 80 83",
    href: "tel:+903122238083",
  },
  whatsapp: {
    label: "+90 (554) 243 00 33",
    href: "https://wa.me/905542430033?text=Merhaba%20Vet%20Area%2C%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  },
  address: {
    short: "Emek, Çankaya",
    full: "Emek Mah. Bişkek Cad. No:26/B, Çankaya / Ankara",
    streetAddress: "Emek Mah. Bişkek Cad. No:26/B",
    locality: "Çankaya",
    region: "Ankara",
    country: "TR",
    maps:
      "https://www.google.com/maps/search/?api=1&query=VetArea%20Emek%20Veteriner%20Klini%C4%9Fi",
    embed:
      "https://www.google.com/maps?q=VetArea%20Emek%20Veteriner%20Klini%C4%9Fi&output=embed",
  },
  hours: "7 gün, 24 saat",
  schemaHours: "Mo-Su 00:00-23:59",
  socialImage: {
    src: "/og.png",
    alt: "Vet Area Emek Veteriner Kliniği",
    width: 1200,
    height: 630,
  },
  nav: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/hizmetler/" },
    { label: "Hakkımızda", href: "/hakkimizda/" },
    { label: "Ekibimiz", href: "/ekibimiz/" },
    { label: "Sık Sorulanlar", href: "/sss/" },
    { label: "İletişim", href: "/iletisim/" },
  ],
  ui: {
    skipLink: "İçeriğe geç",
    mainNavAriaLabel: "Ana menü",
    mobileNavAriaLabel: "Mobil menü",
    mobileMenuLabel: "Menüyü aç",
    announcementText: "Emek'te 7 gün, 24 saat yanınızdayız",
    announcementCta: "Acil durumlar için arayın",
    appointmentCta: "Randevu al",
    footerDescription: "Dostlarınız için modern, güvenilir ve ulaşılabilir veteriner hizmeti.",
    footerExploreHeading: "Keşfedin",
    footerContactHeading: "Ulaşın",
    footerCopyrightName: "Vet Area Emek Veteriner Kliniği",
    footerTagline: "Emek'te dostlarınız için, her gün.",
    whatsappLabel: "WhatsApp",
    directionsLabel: "Yol tarifi",
    mobileActionAriaLabel: "Hızlı iletişim",
    mobileActions: {
      phone: "Ara",
      whatsapp: "WhatsApp",
      directions: "Yol tarifi",
    },
  },
} as const;

export const faqs = [
  {
    question: "Randevu almadan gelebilir miyim?",
    answer:
      "Acil durumlarda doğrudan gelebilirsiniz. Rutin muayene ve uygulamalarda bekleme süresini azaltmak için önceden telefon veya WhatsApp üzerinden haber vermenizi öneririz.",
  },
  {
    question: "Acil durumlarda ne yapmalıyım?",
    answer:
      "Yola çıkmadan önce bizi arayın. Ekibimiz ilk adımları paylaşır, kliniğe gelişiniz için hazırlık yapar ve durumun aciliyetine göre sizi yönlendirir.",
  },
  {
    question: "İlk muayeneye gelirken ne getirmeliyim?",
    answer:
      "Varsa aşı karnesi, önceki tetkik sonuçları, kullandığı ilaçların listesi ve son günlerde gözlemlediğiniz değişikliklerle gelmeniz değerlendirmeyi kolaylaştırır.",
  },
  {
    question: "Kedi ve köpek dışında hayvan kabul ediyor musunuz?",
    answer:
      "Dostunuzun türünü ve ihtiyacını telefonda paylaşın. Uygun hekim ve hizmet durumuna göre sizi net şekilde yönlendirelim.",
  },
] as const;
