import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("builds the Turkish static pages", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  const services = await readFile(new URL("../dist/hizmetlerimiz/index.html", import.meta.url), "utf8");
  const about = await readFile(new URL("../dist/hakkimizda/index.html", import.meta.url), "utf8");
  const contact = await readFile(new URL("../dist/iletisim/index.html", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../dist/sitemap.xml", import.meta.url), "utf8");

  assert.match(html, /<html lang="tr">/i);
  assert.match(html, /<title>[^<]*Vet ?Area[^<]*<\/title>/i);
  assert.match(html, /Dostlarınızın sağlığı için her an yanınızdayız,/);
  assert.match(html, /siz sevin yeter/);
  assert.doesNotMatch(html, /İyi bakılmak|onların da|hakkı\./);
  assert.match(html, /<meta property="og:title" content="[^"]*Vet ?Area[^"]*"/i);
  assert.match(html, /href="\/"[^>]*aria-label="VetArea ana sayfa"/);
  assert.match(html, /src="\/logo\.(svg|png|webp)"/);
  assert.match(html, /src="\/logo-white\.png"/);
  assert.match(html, /src="\/hero\.png"/);
  assert.match(html, /<link rel="icon" href="\/logo\.png"/);
  assert.doesNotMatch(html, /sağlıkları için gerekli adımları|biz planlayalım/);
  assert.match(html, /Biz dostunuzun her döneminde/);
  assert.doesNotMatch(html, /İyi bakılmak|hakkı\./);
  assert.match(html, /href="\/"[^>]*>Ana Sayfa<\/a>/);
  assert.match(html, /href="\/hizmetlerimiz\/"[^>]*>Hizmetlerimiz<\/a>/);
  assert.match(html, /href="\/hakkimizda\/"[^>]*>[\s\S]*lucide-users/i);
  assert.doesNotMatch(html, /href="\/sss\/"/);
  assert.doesNotMatch(html, /href="\/ekibimiz\/"/);
  assert.match(html, /href="\/iletisim\/"[^>]*>[\s\S]*lucide-map-pin/i);
  assert.doesNotMatch(html, /lucide-message-circle/);
  assert.match(html, /src="\/whatsapp\.png"/);
  assert.match(html, /src="\/gmaps\.png"/);
  assert.doesNotMatch(html, />06<\/span>/);
  assert.doesNotMatch(html, /CC|EÇ|Güvendiğiniz ekip|ihtiyaç duyduğunuz anda burada/);
  assert.doesNotMatch(html, /İhtiyacınız olan sayfaya geçin/);
  assert.doesNotMatch(services, /Her yaşam evresine özenli destek/);
  assert.doesNotMatch(services, /İlk kontrolden ileri tanı süreçlerine/);
  for (const page of [html, services, about, contact]) {
    assert.doesNotMatch(page, /class="eyebrow/);
  }
  assert.match(services, /<title>Hizmetlerimiz \| VetArea<\/title>/i);
  assert.match(services, /Muayene \(teşhis - tedavi\)/);
  assert.match(services, /src="https:\/\/images\.unsplash\.com\/photo-[^"]+"/);
  assert.match(services, /src="\/pasaport\.jpeg"/);
  assert.match(services, /alt="Veteriner hekim tarafından muayene edilen bir köpek"/);
  assert.doesNotMatch(services, />0[1-9]<\/span>/);
  assert.match(about, /Aynı dikkat/);
  assert.match(about, /src="\/klinik-dış\.png"[\s\S]*src="\/klinik-iç\.png"/);
  assert.doesNotMatch(about, /images\.unsplash\.com\/photo-1733783506192/);
  assert.doesNotMatch(about, /Bizimle tanışın/);
  assert.match(about, /Ekibimiz/);
  assert.match(about, /Dostunuzun sürecini dinleyen, açıklayan ve birlikte yöneten veteriner hekimlerimizle tanışın/);
  assert.match(about, /Cihan Culha/);
  assert.match(about, /class="team-card-image" src="\/cihan-culha\.png"/);
  assert.match(about, /alt="Veteriner Hekim Cihan Culha"/);
  assert.match(about, /Emin Çiftçi/);
  assert.doesNotMatch(about, /team-card[\s\S]*>0[12]<\/span>/);
  assert.match(html, /Sık Sorulanlar/);
  assert.match(html, /Randevu almadan gelebilir miyim/);
  assert.doesNotMatch(html, /Gelmeden önce|merak ettikleriniz|Bize sorun|Yanıtını bulamadığınız/);
  assert.match(contact, /\+90 \(538\) 253 80 83/);
  assert.match(contact, /Her gün 09\.00-21\.00/);
  assert.doesNotMatch(html, /7\/24|7 \/ 24|7 gün,? 24 saat/i);
  assert.match(html, /https:\/\/vetarea\.com\.tr\/og\.png/);
  assert.doesNotMatch(sitemap, /\/ekibimiz\//);
  assert.doesNotMatch(sitemap, /\/sss\//);
  for (const page of [html, services, about, contact]) {
    assert.doesNotMatch(page, /react|vinext|drizzle|wrangler|codex-preview/i);
  }

  await assert.rejects(access(new URL("../dist/ekibimiz/index.html", import.meta.url)));
  await assert.rejects(access(new URL("../dist/sss/index.html", import.meta.url)));
});
