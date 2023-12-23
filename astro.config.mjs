import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://alexhrindii.github.io',
  integrations: [
      mdx(),
      astroI18next(),
      sitemap(
        {
          i18n: {
            defaultLocale: 'en',
            locales: {
              en: 'en-US',
              ru: 'ru-RU',
            },
          },
        }
      ),
      tailwind()
  ]
});