import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },
});
