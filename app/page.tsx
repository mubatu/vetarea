import { faqs, services, site } from "@/data/site.tr";

const heroImage =
  "https://images.unsplash.com/photo-1770836037289-e00e5f351d11?auto=format&fit=crop&fm=jpg&q=84&w=1800";
const catImage =
  "https://images.unsplash.com/photo-1733783506192-653df6185a7d?auto=format&fit=crop&fm=jpg&q=84&w=1400";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: site.legalName,
  url: site.url,
  telephone: "+90 312 223 80 83",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Emek Mah. Bişkek Cad. No:26/B",
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    addressCountry: "TR",
  },
  openingHours: "Mo-Su 00:00-23:59",
};

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Vet Area ana sayfa">
      <span className="brand-mark" aria-hidden="true">
        V
      </span>
      <span className="brand-copy">
        <strong>VET AREA</strong>
        <small>Emek Veteriner Kliniği</small>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>

      <div className="announcement" role="note">
        <div className="shell announcement-inner">
          <span>
            <i aria-hidden="true" /> Emek&apos;te 7 gün, 24 saat yanınızdayız
          </span>
          <a href={site.phone.href}>Acil durumlar için arayın</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Ana menü">
            {site.nav.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button-small header-cta" href={site.whatsapp.href}>
            Randevu al <span aria-hidden="true">↗</span>
          </a>
          <details className="mobile-menu">
            <summary aria-label="Menüyü aç">Menü</summary>
            <nav aria-label="Mobil menü">
              {site.nav.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
              <a href={site.whatsapp.href}>Randevu al</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span aria-hidden="true">●</span> Emek&apos;in mahalle kliniği
              </p>
              <h1>
                İyi bakılmak,
                <br /> onların da <em>hakkı.</em>
              </h1>
              <p className="hero-lead">
                Dostunuzun her döneminde, doğru bilgi ve sakin bir yaklaşımla
                yanınızdayız. Modern veteriner hizmeti, tanıdığınız bir ekip ve
                her zaman açık bir kapı.
              </p>
              <div className="hero-actions">
                <a className="button" href={site.whatsapp.href}>
                  Randevu oluştur <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href={site.phone.href}>
                  <span className="link-icon" aria-hidden="true">☎</span>
                  <span>
                    Bizi arayın
                    <strong>{site.phone.label}</strong>
                  </span>
                </a>
              </div>
              <div className="hero-note">
                <span className="avatar-stack" aria-hidden="true">
                  <b>CÇ</b><b>EB</b><b>+</b>
                </span>
                <p>
                  <strong>Güvendiğiniz ekip,</strong>
                  <br /> ihtiyaç duyduğunuz anda burada.
                </p>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img
                  src={heroImage}
                  alt="Veteriner kliniğinde muayene edilen bir köpek"
                  fetchPriority="high"
                />
              </div>
              <div className="open-card">
                <span className="open-icon" aria-hidden="true">+</span>
                <span>
                  <small>Kesintisiz hizmet</small>
                  <strong>7 / 24 Açığız</strong>
                </span>
              </div>
              <div className="paw-dots" aria-hidden="true">
                <i /><i /><i /><i />
              </div>
            </div>
          </div>
        </section>

        <section className="trust-bar" aria-label="Klinik bilgileri">
          <div className="shell trust-grid">
            <a href={site.phone.href}>
              <span className="trust-number">7/24</span>
              <span><strong>Kesintisiz ulaşın</strong><small>Acil durumlarda önce arayın</small></span>
              <b aria-hidden="true">↗</b>
            </a>
            <a href="#ekibimiz">
              <span className="trust-number">02</span>
              <span><strong>Tanıdığınız hekimler</strong><small>Şeffaf ve sakin iletişim</small></span>
              <b aria-hidden="true">↓</b>
            </a>
            <a href={site.address.maps}>
              <span className="trust-number">06</span>
              <span><strong>Emek, Çankaya</strong><small>Merkezi ve kolay ulaşım</small></span>
              <b aria-hidden="true">↗</b>
            </a>
          </div>
        </section>

        <section className="section services-section" id="hizmetler">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow dark"><span aria-hidden="true">●</span> Hizmetlerimiz</p>
                <h2>Her yaşam evresine<br />özenli destek.</h2>
              </div>
              <p>
                İlk kontrolden ileri tanı süreçlerine kadar ihtiyaca odaklanır,
                her adımı anlaşılır biçimde paylaşırız.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={site.whatsapp.href} aria-label={`${service.title} için bilgi alın`}>
                    Bilgi alın <b aria-hidden="true">↗</b>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="hakkimizda">
          <div className="shell about-grid">
            <div className="about-visual">
              <img
                src={catImage}
                alt="Veteriner hekim tarafından muayene edilen beyaz bir kedi"
                loading="lazy"
              />
              <p className="image-caption">Sakin yaklaşım, dikkatli muayene.</p>
            </div>
            <div className="about-copy">
              <p className="eyebrow light"><span aria-hidden="true">●</span> Vet Area hakkında</p>
              <h2>Aynı dikkat,<br />her ziyarette.</h2>
              <p className="about-lead">
                Kliniğe gelen her dostun kendine özgü olduğunu biliyoruz. Bu
                yüzden önce dinler, sonra muayene eder ve seçenekleri sizinle
                birlikte değerlendiririz.
              </p>
              <div className="principles">
                <div><span>01</span><p><strong>Açık iletişim</strong>Tedavi sürecini anlaşılır şekilde paylaşırız.</p></div>
                <div><span>02</span><p><strong>Bireysel yaklaşım</strong>Her planı dostunuzun ihtiyacına göre oluştururuz.</p></div>
                <div><span>03</span><p><strong>Süreklilik</strong>Kontrolden takibe aynı özenle yanınızda oluruz.</p></div>
              </div>
              <a className="button button-light" href={site.whatsapp.href}>
                Bizimle tanışın <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section team-section" id="ekibimiz">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow dark"><span aria-hidden="true">●</span> Ekibimiz</p>
              <h2>Dostunuz emin ellerde.</h2>
              <p>Dinleyen, açıklayan ve süreci birlikte yöneten bir ekip.</p>
            </div>
            <div className="team-grid">
              <article className="team-card team-card-red">
                <div className="team-initial">CÇ</div>
                <div><p>Veteriner Hekim</p><h3>Cihan Çulha</h3></div>
                <span aria-hidden="true">01</span>
              </article>
              <article className="team-card team-card-blue">
                <div className="team-initial">EB</div>
                <div><p>Veteriner Hekim</p><h3>Emin Bayram</h3></div>
                <span aria-hidden="true">02</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="iletisim">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow light"><span aria-hidden="true">●</span> İletişim</p>
              <h2>Bir telefon<br />kadar yakınız.</h2>
              <p>
                Randevu, acil durum ya da aklınıza takılanlar için bize
                ulaşın. Gelmeden önce aramanız, en doğru hazırlığı yapmamıza
                yardımcı olur.
              </p>
              <div className="contact-actions">
                <a className="button button-white" href={site.phone.href}>Hemen ara <span aria-hidden="true">↗</span></a>
                <a className="button button-outline-light" href={site.whatsapp.href}>WhatsApp</a>
              </div>
              <dl className="contact-list">
                <div><dt>Telefon</dt><dd><a href={site.phone.href}>{site.phone.label}</a></dd></div>
                <div><dt>Çalışma saatleri</dt><dd>{site.hours}</dd></div>
                <div><dt>Adres</dt><dd>{site.address.full}</dd></div>
              </dl>
            </div>
            <div className="map-card">
              <iframe
                title="Vet Area konumu"
                src="https://www.google.com/maps?q=VetArea%20Emek%20Veteriner%20Klini%C4%9Fi&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={site.address.maps}>
                <span><small>Vet Area</small><strong>Yol tarifi alın</strong></span>
                <b aria-hidden="true">↗</b>
              </a>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="sss">
          <div className="shell faq-grid">
            <div className="faq-heading">
              <p className="eyebrow dark"><span aria-hidden="true">●</span> Sık sorulanlar</p>
              <h2>Gelmeden önce<br />merak ettikleriniz.</h2>
              <p>Yanıtını bulamadığınız bir konu varsa bize dilediğiniz zaman ulaşabilirsiniz.</p>
              <a className="text-button" href={site.whatsapp.href}>Bize sorun <span aria-hidden="true">↗</span></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b aria-hidden="true">+</b></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-main">
          <div>
            <Brand />
            <p>Dostlarınız için modern, güvenilir ve ulaşılabilir veteriner hizmeti.</p>
          </div>
          <div className="footer-links">
            <div><h3>Keşfedin</h3>{site.nav.slice(0, 4).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
            <div><h3>Ulaşın</h3><a href={site.phone.href}>{site.phone.label}</a><a href={site.whatsapp.href}>WhatsApp</a><a href={site.address.maps}>Yol tarifi</a></div>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} Vet Area Emek Veteriner Kliniği</p>
          <p>Emek&apos;te dostlarınız için, her gün.</p>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Hızlı iletişim">
        <a href={site.phone.href}><span aria-hidden="true">☎</span>Ara</a>
        <a href={site.whatsapp.href}><span aria-hidden="true">●</span>WhatsApp</a>
        <a href={site.address.maps}><span aria-hidden="true">⌖</span>Yol tarifi</a>
      </nav>
    </>
  );
}
