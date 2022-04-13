import smConfig from './sm.json'
import axios from 'axios'
import {
  getPrismicRedirects,
  prismicRedirects,
} from './plugins/createRedirects'
getPrismicRedirects()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wlsn-nuxt-prismic',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/gtag.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/Layout',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/netlify-files',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/prismic',
      {
        endpoint: smConfig.apiEndpoint || '',
        modern: true,
        apiOptions: {
          routes: [
            {
              type: 'homepage',
              path: '/:lang?/',
            },
            {
              type: 'page',
              path: '/:lang?/:grandparent?/:parent?/:uid',
              resolvers: {
                grandparent: 'parent.parent',
                parent: 'parent',
              },
            },
          ],
        },
      },
    ],
    ['nuxt-sm'],
    '@nuxtjs/svg',
    'cookie-universal-nuxt',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm', '@prismicio/vue'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  generate: {
    fallback: '404.html', // Netlify reads a 404.html, Nuxt will load as an SPA
    routes: async function () {
      const ref = await axios.get(smConfig.apiEndpoint).then((res) => {
        for (let index = 0; index < res.data.refs.length; index++) {
          if (res.data.refs[index].isMasterRef) {
            return res.data.refs[index].ref
          }
        }
      })

      const pages = axios
        .get(
          smConfig.apiEndpoint +
            '/documents/search?ref=' +
            ref +
            '&pageSize=100&q=[[at(document.type,"page")]]#format=json'
        )
        .then((res) => {
          return res.data.results.map((doc) => `/${doc.uid}`)
        })

      // generate routes
      return Promise.all([pages]).then((values) => {
        let array = values.join().split(',')
        return array
      })
    },
  },

  netlifyFiles: {
    netlifyToml: {
      headers: [
        {
          for: '/*',
          values: { 'X-XSS-Protection': '1; mode=block' },
        },
      ],
      redirects: prismicRedirects,
    },
  },
}
