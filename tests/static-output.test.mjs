import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("builds the Turkish static pages", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  const services = await readFile(new URL("../dist/hizmetler/index.html", import.meta.url), "utf8");
  const about = await readFile(new URL("../dist/hakkimizda/index.html", import.meta.url), "utf8");
  const team = await readFile(new URL("../dist/ekibimiz/index.html", import.meta.url), "utf8");
  const faq = await readFile(new URL("../dist/sss/index.html", import.meta.url), "utf8");
  const contact = await readFile(new URL("../dist/iletisim/index.html", import.meta.url), "utf8");

  assert.match(html, /<html lang="tr">/i);
  assert.match(html, /<title>Vet Area \| Emek Veteriner Kliniği<\/title>/i);
  assert.match(html, /İyi bakılmak/);
  assert.match(html, /href="\/hizmetler\/"/);
  assert.doesNotMatch(html, /Her yaşam evresine/);
  assert.match(services, /<title>Hizmetler \| Vet Area<\/title>/i);
  assert.match(services, /Genel muayene/);
  assert.match(about, /Aynı dikkat/);
  assert.match(team, /Cihan Culha/);
  assert.match(faq, /Randevu almadan gelebilir miyim/);
  assert.match(contact, /\+90 \(312\) 223 80 83/);
  assert.match(html, /https:\/\/vetarea\.com\.tr\/og\.png/);
  for (const page of [html, services, about, team, faq, contact]) {
    assert.doesNotMatch(page, /react|vinext|drizzle|wrangler|codex-preview/i);
  }
});
