import { defineConfig } from "astro/config";
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://www.thilinag.com",
  integrations: [sitemap()],
  output: 'server',
  adapter: vercelServerless(),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp']
    }
  }
});