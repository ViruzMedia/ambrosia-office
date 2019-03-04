import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    uid: '',
    isUserLoggedIn: false,
    token: null
  },
  mutations: {
    setUID(state, uid) {
      state.uid = uid
      if (uid) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    setUID({ commit }, uid) {
      commit('setUID', uid)
    },
    setToken({ commit }, token) {
      commit('setToken', token)
    }
  }

})
