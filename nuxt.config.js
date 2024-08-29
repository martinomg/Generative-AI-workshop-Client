import Aura from '@primevue/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxt/icon'
  ],
  primevue: {
      options: {
          theme: {
              preset: Aura
          }
      }
  },
  // routeRules: {
  //   '/**': { cors: true },
  // }
})