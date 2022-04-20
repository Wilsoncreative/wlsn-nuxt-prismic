<template>
  <div
    @click="addToCart(product)"
    class="bg-black w-10 h-10 pt-1.5 px-2 inline-block text-white cursor-pointer rounded-full"
  >
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('cart/addItem', {
        id: this.product.id,
        title: this.product.title,
        image: this.product.images[0],
        price: parseInt(this.product.variants[0].price),
        sku: this.product.sku,
        quantity: 1,
      })
    },
  },
}
</script>

<style></style>
