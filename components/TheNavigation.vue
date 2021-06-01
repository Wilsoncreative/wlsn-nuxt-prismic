<template>
  <nav
    id="TheNavigation"
    aria-labelledby="TheMenuToggle"
    role="menu"
    :class="menuClasses"
  >
    <nuxt-link role="menuitem" to="/">Link 1</nuxt-link>
    <nuxt-link role="menuitem" to="/">Link 2</nuxt-link>
    <nuxt-link role="menuitem" to="/">Link 3</nuxt-link>
  </nav>
</template>

<script>
export default {
  computed: {
    menuClasses() {
      const menuOpen = this.$store.getters['nav/menuOpen']
      let classes =
        'fixed top-20 right-0 transform transition-all p-6 flex flex-col bg-gray-500 '

      if (menuOpen) {
        classes += 'translate-x-0'
      } else {
        classes += 'translate-x-full'
      }

      return classes
    },
  },
}
</script>
