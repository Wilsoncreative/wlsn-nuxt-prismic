<template>
  <div>
    <header class="py-3 bg-gray-400 relative z-20">
      <div class="container flex items-center justify-between">
        <nuxt-link to="/">Header</nuxt-link>
        <div class="flex items-center">
          <div class="mr-5 cursor-pointer" @click="toggleCart">
            Cart ({{ $store.state.cart.count }})
          </div>
          <MenuToggle @menuToggle="toggleMenu" />
        </div>
      </div>
    </header>
    <MenuContents :open="menuOpen" />
    <ShopCart @cartToggle="toggleCart" :open="cartOpen" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      cartOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    toggleCart() {
      this.cartOpen = !this.cartOpen
    },
  },
}
</script>
