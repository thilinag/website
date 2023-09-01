import { defineConfig } from "astro/config";
import vercelServerless from '@astrojs/vercel/serverless';

import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://www.thilinag.com",
  integrations: [mdx(), sitemap()],
  output: 'server',
  adapter: vercelServerless(),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp']
    }
  }
});