<template>
  <div class="flex">
    <div v-if="data.compareAtPrice" class="mr-3 line-through">
      {{ data.compareAtPrice.replace('.00', '') }}
      {{ data.compareAtPriceV2.currencyCode }}
    </div>
    <div>
      {{ data.price.replace('.00', '') }} {{ data.priceV2.currencyCode }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
