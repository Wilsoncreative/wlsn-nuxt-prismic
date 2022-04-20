<template>
  <div>
    <nuxt-link
      :to="'/shop/product/' + product.handle"
      class="block w-full pb-[120%] relative mb-2.5"
    >
      <img
        :src="product.images[0].src"
        :alt="product.images[0].altText"
        class="w-full h-full object-cover absolute inset-0"
      />
    </nuxt-link>
    <div class="flex justify-between w-full">
      <div>
        <h3 class="text-xl">
          <nuxt-link :to="'/shop/product/' + product.handle">{{
            product.title
          }}</nuxt-link>
        </h3>
        <ShopProductPrice :data="product.variants[0]" />
      </div>
      <ShopAddToCart :product="product" />
    </div>
  </div>
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
