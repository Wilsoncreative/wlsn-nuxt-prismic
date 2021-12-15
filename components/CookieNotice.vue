<template>
  <div
    v-if="!currentCookieSettings"
    class="bg-gray-200 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 p-6 max-w-xl drop-shadow-2xl"
  >
    <div>
      <h3 class="text-2xl">Cookies policy</h3>
      <p class="mt-4">
        We use our own cookies, as well as those of third parties, for
        individual as well as repeated sessions, in order to create the best
        experience for our visitors.
      </p>
      <p class="mt-4">
        In turn, we use cookies to measure and obtain statistical data about the
        navigation of the users. You can configure and accept the use of the
        cookies, and modify your consent options, at any time. You can read more
        information about our Cookie Policy.
      </p>
      <div v-if="settings" class="mt-6">
        <div
          v-for="(cookie, index) in cookies"
          :key="index"
          class="py-3 border-t border-gray-300"
        >
          <header class="flex justify-between items-center">
            <h3
              class="cursor-pointer flex items-center"
              @click="cookie.open = !cookie.open"
            >
              <Chevron
                class="mr-2 w-4 h-4"
                :class="cookie.open ? 'transform rotate-90' : ''"
              />
              {{ cookie.title }}
            </h3>
            <span
              v-if="!cookie.toggle"
              class="text-sm font-medium text-green-500"
            >
              Always active
            </span>
            <div v-else>
              <input
                id="check"
                v-model="cookie.value"
                type="checkbox"
                class="hidden"
              />
              <label
                for="check"
                class="bg-red-500 h-6 w-10 rounded-full block p-1 cursor-pointer transition-colors"
              >
                <div
                  class="rounded-full h-4 w-4 bg-white transition-transform"
                />
              </label>
            </div>
          </header>
          <p v-if="cookie.open" class="my-4 text-sm ml-6">
            {{ cookie.description }}
          </p>
        </div>
      </div>

      <div class="mt-10 flex justify-between items-center text-white">
        <button class="py-2 px-4 bg-gray-500" @click="acceptAllCookies">
          Accept all cookies
        </button>
        <button
          v-if="!settings"
          class="py-2 px-4 bg-gray-500"
          @click="showSettings"
        >
          Manage settings
        </button>
        <button
          v-if="settings"
          class="py-2 px-4 bg-gray-500"
          @click="saveConfiguration"
        >
          Save configuration
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { setOptions, bootstrap } from 'vue-gtag'
import Chevron from '~/assets/svg/chevron.svg?inline'

export default {
  components: {
    Chevron,
  },
  data() {
    return {
      currentCookieSettings: true,
      settings: false,
      cookies: {
        strict: {
          title: 'Strictly necessary cookies',
          description:
            'This website uses cookies to allow it to function correctly and safely. These cookies, classified as essential, are necessary for the functionality of the website and are automatically saved in the browser.',
          toggle: false,
          value: true,
          open: false,
        },
        analytics: {
          title: 'Analytics cookies',
          description:
            'Allow your navigation of our website to be analyzed, to carry out studies about its use.',
          toggle: true,
          value: false,
          open: false,
        },
      },
    }
  },
  mounted() {
    this.currentCookieSettings = this.$cookies.get('enableCookies')

    if (this.currentCookieSettings === 'all') {
      this.enableTracking()
    }
  },
  methods: {
    enableTracking() {
      bootstrap().then((gtag) => {})
    },
    disableTracking() {
      setOptions({
        enabled: false,
      })
      bootstrap().then((gtag) => {})
    },
    acceptAllCookies() {
      this.enableTracking()
      this.$cookies.set('enableCookies', 'all', {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
      this.currentCookieSettings = 'all'
    },
    saveConfiguration() {
      if (this.cookies.analytics.value) {
        this.enableTracking()
        this.$cookies.set('enableCookies', 'all', {
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        })
        this.currentCookieSettings = 'all'
      } else {
        this.$cookies.set('enableCookies', 'strict', {
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        })
        this.currentCookieSettings = 'strict'
      }
    },
    showSettings() {
      this.settings = true
    },
  },
}
</script>

<style lang="postcss" scoped>
input:checked + label {
  @apply bg-green-500;
}
input:checked + label div {
  @apply transform translate-x-4;
}
</style>
