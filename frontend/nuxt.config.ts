// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  imports: {
    dirs: ['store'],
  },
})