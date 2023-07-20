// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@pinia/nuxt",],
  devtools: { enabled: true }
})
