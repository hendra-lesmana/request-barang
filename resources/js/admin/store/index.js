import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      text: '',
      color: ''
    }
  },
  mutations: {
    SET_SNACKBAR(state, payload) {
      state.snackbar = payload
    }
  },
  actions: {
    showSnackbar({ commit }, payload) {
      commit('SET_SNACKBAR', {
        show: true,
        text: payload.text || 'Operation completed',
        color: payload.color || 'success'
      })

      // Auto-hide snackbar after 3 seconds
      setTimeout(() => {
        commit('SET_SNACKBAR', {
          show: false,
          text: '',
          color: ''
        })
      }, 3000)
    }
  },
  getters: {
    snackbar: state => state.snackbar
  }
})