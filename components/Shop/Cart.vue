<template>
  <div
    class="fixed w-full h-full max-w-3xl top-0 right-0 bg-white shadow-2xl p-20 flex flex-col justify-between z-50"
  >
    <div>
      <div
        class="flex w-full items-end justify-between pb-10 border-b border-gray-200"
      >
        <h4 class="text-3xl">Cart</h4>
        <div class="underline cursor-pointer">Close</div>
      </div>
      <div
        v-for="(product, index) in this.$store.state.cart.items"
        :key="index"
        class="py-7 border-b border-gray-200 flex justify-between items-center"
      >
        <div class="flex items-center">
          <div class="w-20 h-20 relative mr-4">
            <img
              :src="product.image.src"
              :alt="product.image.altText"
              class="w-full h-full object-cover"
            />
          </div>
          <div>{{ product.title }}</div>
        </div>

        <div class="flex items-center">
          <div class="px-3 text-center">-</div>
          <div class="py-1 w-8 text-center text-sm border border-gray-200">
            {{ product.quantity }}
          </div>
          <div class="px-3 text-center">+</div>
        </div>
        <div class="text-right">
          <div>{{ product.price }} SEK</div>
          <div class="text-xs underline mt-2 cursor-pointer">Delete</div>
        </div>
      </div>
    </div>

    <a
      href="#"
      class="block bg-black w-full px-5 py-7 text-white text-xl text-center"
    >
      Checkout
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
