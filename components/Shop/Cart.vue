<template>
  <transition
    enter-class="translate-x-full"
    enter-active-class="transition-transform duration-300 ease-out"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-150 ease-in"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="open"
      class="fixed w-full h-full max-w-3xl top-0 right-0 bg-white shadow-2xl px-5 py-10 md:p-10 lg:p-20 flex flex-col justify-between z-50"
    >
      <div>
        <div
          class="flex w-full items-end justify-between pb-10 border-b border-gray-200"
        >
          <h4 class="text-xl md:text-2xl lg:text-3xl">Cart</h4>
          <div
            class="underline cursor-pointer text-sm md:text-base"
            @click="toggleCart"
          >
            Close
          </div>
        </div>
        <div
          v-for="(product, index) in $store.state.cart.items"
          :key="index"
          class="py-4 lg:py-7 border-b border-gray-200 flex justify-between items-center"
        >
          <div class="flex items-center">
            <div class="w-14 lg:w-20 h-14 lg:h-20 relative mr-4">
              <img
                :src="product.image.src"
                :alt="product.image.altText"
                class="w-full h-full object-cover"
              />
            </div>
            <div>{{ product.title }}</div>
          </div>

          <div class="flex items-center">
            <div
              class="px-3 text-center cursor-pointer"
              @click="decrease(product)"
            >
              -
            </div>
            <div class="py-1 w-8 text-center text-sm border border-gray-200">
              {{ product.quantity }}
            </div>
            <div
              class="px-3 text-center cursor-pointer"
              @click="increase(product)"
            >
              +
            </div>
          </div>
          <div class="text-right">
            <div>{{ product.price }} SEK</div>
            <div
              class="text-xs underline mt-2 cursor-pointer"
              @click="remove(product)"
            >
              Delete
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-between items-end mb-5 lg:mb-10">
          <div class="text-xl md:text-3xl">Total</div>
          <div class="md:text-xl">{{ $store.state.cart.total }} SEK</div>
        </div>

        <a
          :href="generateCheckoutUrl"
          class="block bg-black w-full px-5 py-4 lg:py-7 text-white text-lg lg:text-xl text-center"
        >
          Checkout
        </a>
      </div>
    </div>
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
  computed: {
    generateCheckoutUrl() {
      const cart = this.$store.state.cart.items
      let cartString = ''

      cart.forEach((item) => {
        if (cartString === '') {
          cartString =
            item.id.replace('gid://shopify/ProductVariant/', '') +
            ':' +
            item.quantity
        } else {
          cartString =
            cartString +
            ',' +
            item.id.replace('gid://shopify/ProductVariant/', '') +
            ':' +
            item.quantity
        }
      })

      return 'https://wilson-creative-test.myshopify.com/cart/' + cartString
    },
  },
  methods: {
    increase(product) {
      this.$store.commit('cart/increaseCount', product)
    },
    decrease(product) {
      this.$store.commit('cart/decreaseCount', product)
    },
    remove(product) {
      this.$store.commit('cart/removeItem', product)
    },
    toggleCart() {
      this.$emit('cartToggle')
    },
  },
}
</script>

<style></style>
