const config = require('./developer.json')
const siteTitle = `${config.name} | ${config.role}`


/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  compatibilityDate: '2025-02-28',
  devtools: { enabled: false },
  /**
   * * App Config
   * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   * meta config: https://nuxt.com/docs/getting-started/seo-meta
   * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
   * TODO: Add more meta tags for SEO
   * TODO: Add tags for social media sharing
   * TODO: Migrate apple-touch-icon config to manifest.json
   */
  ssr: true,
  app: {
    // 部署到 GitHub Pages 子路徑時由環境變數 NUXT_APP_BASE_URL 覆蓋（見 .github/workflows/pages.yml）
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW',
      },
      title: siteTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: config.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: config.description },
        { property: 'og:image', content: config.site_url + 'og.jpg' },
        { property: 'og:url', content: config.site_url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#010C15' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: (process.env.NUXT_APP_BASE_URL || '/') + 'favicon.svg' },
      ],
    },
  },

  /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  components: {
    dirs: [
      '~/components',
    ],
  },
  
  /**
   * * Tailwind CSS Config
   * Options: https://tailwindcss.nuxt.dev/getting-started/options/
   * Docs: https://tailwindcss.nuxt.dev
   */
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: false,
  }
})
