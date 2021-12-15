<template>
  <transition
    enter-class="translate-x-full"
    enter-active-class="transition-transform duration-300 ease-out"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-150 ease-in"
    leave-to-class="translate-x-full"
  >
    <nav
      v-if="open"
      id="mainNav"
      role="menu"
      aria-labelledby="mainNavButton"
      class="w-96 p-6 h-full fixed top-0 right-0 bottom-0 bg-gray-200 transform drop-shadow-2xl"
    >
      Menu
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
