<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-grow">
      <Nuxt />
    </main>
    <TheFooter />
    <GdprNotice />
    <ShopCart />
  </div>
</template>
<script>
export default {
  mounted() {
    const cartItems = localStorage.getItem('cartItems')
    const cartCount = localStorage.getItem('cartCount')
    this.$store.commit('cart/setItems', cartItems ? JSON.parse(cartItems) : [])
    this.$store.commit('cart/setCount', cartCount ? parseInt(cartCount) : 0)
  },
}
</script>

<style lang="postcss" scoped>
html,
body {
  @apply min-h-screen;
}

.default-enter-active,
.default-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
}
.default-enter,
.default-leave-to {
  opacity: 0;
}
</style>
