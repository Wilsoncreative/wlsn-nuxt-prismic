<template>
  <div class="px-5 my-10">
    <div class="-mx-2.5 flex flex-wrap">
      <div
        class="w-full sm:w-1/3 px-2.5"
        v-for="(product, index) in products"
        :key="index"
      >
        <ShopProductCard :product="product" />
      </div>
    </div>
    <a
      href="https://wilson-creative-test.myshopify.com/cart/40319083675788:2,40318351573132:6"
      class="p-5 bg-black text-white inline-block mt-20"
      >Go to checkout</a
    >
  </div>
</template>

<script>
export default {
  transition: 'default',
  async asyncData({ $shopify }) {
    const products = await $shopify.product.fetchAll()
    return { products }
  },
}
</script>

<style></style>
