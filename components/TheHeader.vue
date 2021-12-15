<template>
  <div>
    <MenuContents :open="menuOpen" />
    <header class="p-3 bg-gray-400 flex items-center justify-between">
      Header
      <MenuToggle @menuToggle="toggleMenu" />
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
