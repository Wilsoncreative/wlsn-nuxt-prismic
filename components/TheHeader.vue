<template>
  <div>
    <MenuContents :open="menuOpen" />
    <header class="py-3 bg-gray-400">
      <div class="container flex items-center justify-between">
        <nuxt-link to="/">Header</nuxt-link>
        <div class="flex items-center">
          <div class="mr-5 cursor-pointer">
            Cart ({{ this.$store.state.cart.count }})
          </div>
          <MenuToggle @menuToggle="toggleMenu" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>
