// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image'
  ],
  fonts: {
    google: {
      families: {
        'Space Mono': true
      }
    }
  }
})