<template>
  <div>
    <MenuContents :open="menuOpen" />
    <header class="py-3 bg-gray-400">
      <div class="container flex items-center justify-between">
        Header
        <MenuToggle @menuToggle="toggleMenu" />
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
