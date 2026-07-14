import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://vetarea.com.tr",
  output: "static",
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
