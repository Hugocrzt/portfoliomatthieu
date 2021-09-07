export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: { lang: 'en' },
    title: 'Matthieu Fortin - Editorial strategy and Media consultant',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "I'm Matt, an editorial strategy and media consultant. I create stuff with Adobe and I'm passionate about media, sport, fonts, brutalism, old magazines and tashen books." },

      { hid: 'og:title', name: 'og:title', content: 'Matthieu Fortin - Editorial strategy and Media consultant' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.matthieufortin.me/' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.matthieufortin.me/ShareImage.jpg' },
      { hid: 'og:description', name: 'og:description', content: "I'm Matt, an editorial strategy and media consultant. I create stuff with Adobe and I'm passionate about media, sport, fonts, brutalism, old magazines and tashen books." },
      { hid: 'og:site_name', name: 'og:site_name', content: 'MattPortfolio' },

      { hid: 'twitter:title', name: 'twitter:title', content: 'Matthieu Fortin - Editorial strategy and Media consultant' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.matthieufortin.me/ShareImage.jpg' },
      { hid: 'twitter:description', name: 'twitter:description', content: "I'm Matt, an editorial strategy and media consultant. I create stuff with Adobe and I'm passionate about media, sport, fonts, brutalism, old magazines and tashen books." },

      { hid: 'author', name: 'author', content: 'Matthieu Fortin' },
    ],
    link: [
      { rel: 'icon', type: '/static', href: '/favicon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/both.js' },
    { src: '~/plugins/client.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/color-mode',
    ['@nuxtjs/google-analytics', {
      id: 'UA-XXXXXX-X'
    }]
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    'nuxt-clipboard2',
    '@nuxtjs/redirect-module',
    ['nuxt-font-loader-strategy', { 
      ignoreLighthouse: true,
      ignoredEffectiveTypes: ['2g', 'slow-2g'],
      fonts: [
        // Surt
        {
          fileExtensions: ['woff2'],
          fontFamily: 'Surt',
          fontFaces: [
            // Medium
            {
              preload: true,
              localSrc: ['Surt Medium', 'Surt-Medium'],
              src: '@/assets/fonts/Surt/Surt-MediumExp',
              fontWeight: 500,
              fontStyle: 'normal'
            },
            // DemiBold
            {
              preload: true,
              localSrc: ['Surt DemiBold', 'Surt-DemiBold'],
              src: '@/assets/fonts/Surt/Surt-DemiBoldExp',
              fontWeight: 550,
              fontStyle: 'normal'
            },
            // Bold
            {
              preload: true,
              localSrc: ['Surt Bold', 'Surt-Bold'],
              src: '@/assets/fonts/Surt/Surt-BoldExp',
              fontWeight: 600,
              fontStyle: 'normal'
            },
            // Light
            {
              preload: true,
              localSrc: ['Surt Light', 'Surt-Light'],
              src: '@/assets/fonts/Surt/Surt-Light',
              fontWeight: 300,
              fontStyle: 'normal'
            },
          ],
          fontDisplay: 'swap'
        }
      ],
    }],
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://localhost:3000/',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/'
    ].map(route => ({
      url: route,
      changefreq: 'monthly',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      "gsap"
    ]
  },
  pwa: {
    icon: {
      source: '@/static/favicon.png',
      fileName: 'favicon.png',
    },
    meta: {
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      mobileAppIOS: true,
    }
  }
}
