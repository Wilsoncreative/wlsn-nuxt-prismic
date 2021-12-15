<template>
  <button
    id="mainNavButton"
    class="w-12 h-12 relative"
    aria-haspopup="true"
    aria-controls="mainNav"
    :aria-expanded="menuOpen"
    @click="toggleMenu"
  >
    <transition-group
      enter-class="-rotate-90 opacity-0"
      enter-active-class="transition-all duration-300 ease-in-out"
      enter-to-class="rotate-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-in-out"
      leave-to-class="rotate-90 opacity-0"
    >
      <ToggleIcon
        v-if="!menuOpen"
        key="open"
        class="w-6 h-6 absolute top-3 left-3 transform"
      />
      <CloseIcon
        v-else
        key="close"
        class="w-6 h-6 absolute top-3 left-3 transform"
      />
    </transition-group>
  </button>
</template>

<script>
import ToggleIcon from '~/assets/svg/menu-toggle.svg?inline'
import CloseIcon from '~/assets/svg/menu-close.svg?inline'

export default {
  components: {
    ToggleIcon,
    CloseIcon,
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      this.$emit('menuToggle', this.menuOpen)
    },
  },
}
</script>
