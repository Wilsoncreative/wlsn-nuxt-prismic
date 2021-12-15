<template>
  <section class="container mx-auto">
    <prismic-rich-text :field="slice.primary.content" class="content" />
  </section>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
.content /deep/ p {
  @apply my-6;
}

.content /deep/ h1 {
  @apply text-6xl mb-6;
}
</style>
