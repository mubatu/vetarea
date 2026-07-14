import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://vetarea.com.tr/", {
      headers: { accept: "text/html", host: "vetarea.com.tr" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Vet Area homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="tr">/i);
  assert.match(html, /<title>Vet Area \| Emek Veteriner Kliniği<\/title>/i);
  assert.match(html, /İyi bakılmak/);
  assert.match(html, /Hizmetlerimiz/);
  assert.match(html, /Cihan Çulha/);
  assert.match(html, /\+90 \(312\) 223 80 83/);
  assert.match(html, /https:\/\/vetarea\.com\.tr\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});
