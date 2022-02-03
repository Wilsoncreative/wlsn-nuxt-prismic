<template>
  <div class="flex flex-col min-h-screen py-20 lg:py-32">
    <h1
      class="mx-auto text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
    >
      {{ error.message }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
html,
body {
  @apply min-h-screen;
}
</style>
