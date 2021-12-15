import smConfig from './sm.json'
import { getStoriesPaths } from 'slice-machine-ui/helpers/storybook'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wlsn-nuxt-prismic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/gtag.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/prismic',
      {
        endpoint: smConfig.apiEndpoint || '',
      },
    ],
    ['nuxt-sm'],
    '@nuxtjs/svg',
    'cookie-universal-nuxt',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
  },

  storybook: {
    // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
    stories: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],
  },

  // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
  ignore: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],

  generate: {
    fallback: '404.html', // Netlify reads a 404.html, Nuxt will load as an SPA
  },
}
