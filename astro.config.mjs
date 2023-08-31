import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.thilinag.com",
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: netlify({
    functionPerRoute: true
 }),
});
