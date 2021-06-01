<template>
  <button
    id="TheMenuToggle"
    :aria-expanded="ariaExpanded"
    aria-haspopup="true"
    aria-controls="TheNavigation"
    @click="$store.dispatch('nav/toggleMenu')"
  >
    <MenuToggle v-show="!iconState" />
    <MenuClose v-show="iconState" />
    <span class="sr-only">Toggle menu</span>
  </button>
</template>

<script>
import MenuToggle from '~/assets/svg/menu-toggle.svg?inline'
import MenuClose from '~/assets/svg/menu-close.svg?inline'

export default {
  components: { MenuToggle, MenuClose },
  computed: {
    ariaExpanded() {
      return this.$store.getters['nav/menuOpen'] ? 'true' : 'false'
    },
    iconState() {
      return this.$store.getters['nav/menuOpen']
    },
  },
}
</script>
