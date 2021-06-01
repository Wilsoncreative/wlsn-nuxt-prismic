// States
export const state = () => ({
  menuOpen: false,
})

// mutations
export const mutations = {
  TOGGLE_MENU(state) {
    state.menuOpen = !state.menuOpen
  },
}

// actions
export const actions = {
  toggleMenu({ commit }) {
    commit('TOGGLE_MENU')
  },
}

// Getters
export const getters = {
  menuOpen: (state) => state.menuOpen,
}
