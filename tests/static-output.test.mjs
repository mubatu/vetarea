import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("builds the complete Turkish homepage as static HTML", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

  assert.match(html, /<html lang="tr">/i);
  assert.match(html, /<title>Vet Area \| Emek Veteriner Kliniği<\/title>/i);
  assert.match(html, /İyi bakılmak/);
  assert.match(html, /Hizmetlerimiz/);
  assert.match(html, /Cihan Çulha/);
  assert.match(html, /\+90 \(312\) 223 80 83/);
  assert.match(html, /https:\/\/vetarea\.com\.tr\/og\.png/);
  assert.doesNotMatch(html, /react|vinext|drizzle|wrangler|codex-preview/i);
});
