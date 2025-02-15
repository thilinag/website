import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://www.thilinag.com",
  integrations: [sitemap(), mdx()],
  output: 'server',
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp']
    }
  },
  experimental: {
    responsiveImages: true
  },
  image: {
    experimentalLayout: 'responsive'
  }
});