import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Tambahkan baris ini
  base: '/kartu-digital/',

  integrations: [tailwind()]
});