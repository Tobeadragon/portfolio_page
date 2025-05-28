// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  routeRules: {
    '/.well-known/**': { redirect: '/' }
  },
  app: {
    head: {
      title: 'Tatsuya Yamashita',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tatsuya Yamashita - Full-stack Developer' }
      ],
      link: [
        { rel: 'icon', href: 'data:,' }
      ]
    }
  }
})
