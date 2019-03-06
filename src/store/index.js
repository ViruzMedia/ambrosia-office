import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    uid: '',
    isUserLoggedIn: false,
    token: null,
    key: null,
    role: [{
      name: null,
      id: null,
      priority: null
    }]
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
    },
    setRole(state, role){
      state.role = role
    },
    setKey(state, key){
      state.key = key
    }
  },
  actions: {
    setUID({ commit }, uid) {
      commit('setUID', uid)
    },
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    
    setKey({ commit }, key) {
      commit('setKey', key)
    },
    setRole({ commit }, role) {
      commit('setRole', role)
    }
  }

})
