// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@vueuse/nuxt', "@nuxt/image"],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&Noto+Sans+JP:wght@400;500;700&Noto+Sans+Thai:wght@400;500;700',
          as: 'style',
        },
      ],
    },
  },
})