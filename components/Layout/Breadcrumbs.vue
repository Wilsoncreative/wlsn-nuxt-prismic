<template>
  <div class="container my-5">
    <ul class="breadcrumbs">
      <li class="breadcrumb">
        <nuxt-link :to="homeDoc.path">{{ homeDoc.title }}</nuxt-link>
      </li>
      <li class="separator">/</li>
      <li v-if="hasGrandparent" class="breadcrumb">
        <prismic-link :field="currentDoc.data.parent.data.parent">
          {{ $prismic.asText(currentDoc.data.parent.data.parent.data.title) }}
        </prismic-link>
      </li>
      <li v-if="hasGrandparent" class="separator">/</li>
      <li v-if="hasParent" class="breadcrumb">
        <prismic-link :field="currentDoc.data.parent">
          {{ $prismic.asText(currentDoc.data.parent.data.title) }}
        </prismic-link>
      </li>
      <li v-if="hasParent" class="separator">/</li>
      <li class="breadcrumb">
        <span>{{ $prismic.asText(currentDoc.data.title) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentDoc: {
      type: Object,
      required: true,
    },
    homeDoc: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasGrandparent() {
      if (this.hasProp(this.currentDoc.data.parent, 'data')) {
        if (this.hasProp(this.currentDoc.data.parent.data, 'parent')) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    hasParent() {
      return this.hasProp(this.currentDoc.data.parent, 'data')
    },
  },
  methods: {
    hasProp(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop)
    },
  },
}
</script>

<style lang="postcss" scoped>
.breadcrumbs {
  @apply flex space-x-2;
}

.breadcrumb span {
  @apply text-black opacity-40;
}

.breadcrumb span {
  @apply text-black;
}
</style>
