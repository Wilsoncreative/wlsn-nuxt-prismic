import Vue from 'vue'

export const state = () => ({
  items: [],
  count: 0,
  total: 0,
})

export const mutations = {
  setItems(state, item) {
    state.items = item

    this.commit('cart/updateTotal')
  },
  setCount(state, item) {
    state.count = item
  },
  emptyCart(state) {
    state.items = []
    state.count = 0
    state.total = 0
  },
  increaseCount(state, item) {
    const foundProduct = state.items.findIndex(
      (product) => product.id === item.id
    )

    console.log(foundProduct)

    Vue.set(
      state.items[foundProduct],
      'quantity',
      state.items[foundProduct].quantity + 1
    )
    Vue.set(state, 'count', state.count + 1)

    this.commit('cart/saveCart')
  },
  decreaseCount(state, item) {
    const foundProduct = state.items.findIndex(
      (product) => product.id === item.id
    )

    if (state.items[foundProduct].quantity > 1) {
      Vue.set(
        state.items[foundProduct],
        'quantity',
        state.items[foundProduct].quantity - 1
      )
      Vue.set(state, 'count', state.count - 1)
    } else {
      Vue.set(state, 'count', state.count - 1)
      this.commit('cart/removeItem', item)
    }

    this.commit('cart/saveCart')
  },
  addItem(state, item) {
    const foundProduct = state.items.findIndex(
      (product) => product.id === item.id
    )

    console.log(foundProduct)

    if (foundProduct >= 0) {
      Vue.set(
        state.items[foundProduct],
        'quantity',
        state.items[foundProduct].quantity + item.quantity
      )
      Vue.set(state, 'count', state.count + 1)
    } else {
      state.items.unshift(item)
      Vue.set(state, 'count', state.count + item.quantity)
    }

    this.commit('cart/saveCart')
  },
  removeItem(state, item) {
    const index = state.items.indexOf(item)

    if (index > -1) {
      const product = state.items[index]
      Vue.set(state, 'count', state.count - product.quantity)

      state.items.splice(index, 1)

      this.commit('cart/saveCart')
    }
  },
  saveCart(state) {
    localStorage.setItem('cartItems', JSON.stringify(state.items))
    localStorage.setItem('cartCount', state.count)
    this.commit('cart/updateTotal')
  },
  updateTotal(state) {
    let total = 0

    for (const item of state.items) {
      total += item.price * item.quantity
    }

    state.total = total
  },
}
