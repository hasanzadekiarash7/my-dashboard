// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  runtimeConfig:{
    NUXT_APP_BASE_URL: "/my-dashboard/"
  },

  modules: [
    '@pinia/nuxt',
    '@formkit/auto-animate',
    '@nuxtjs/i18n',
    'magic-regexp',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    "@tresjs/nuxt",
    'nuxt-viewport',
    'nuxt-aos',
    '@dargmuesli/nuxt-cookie-control',
    "nuxt-auth-utils",
    'nuxt-file-storage',
    'nuxt-mongoose' 
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})