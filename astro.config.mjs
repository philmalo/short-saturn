import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  i18n: {
    defaultLocale: "fr-CA",
    locales: ['fr-CA', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  image: {
    domains: ["astro.build"],
  }
});