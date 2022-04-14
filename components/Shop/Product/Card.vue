<template>
  <nuxt-link :to="'/shop/product/' + product.handle">
    <div class="w-full pb-[100%] relative mb-5">
      <img
        :src="product.images[0].src"
        :alt="product.images[0].altText"
        class="w-full h-full object-cover absolute inset-0"
      />
    </div>
    <h3 class="text-xl">{{ product.title }}</h3>
    <ShopProductPrice :data="product.variants[0]" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      requried: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style></style>
