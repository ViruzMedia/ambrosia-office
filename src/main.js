// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import { sync } from 'vuex-router-sync'
import store from '@/store'
import VueCookie from 'vue-cookie'
import VueNoty from 'vuejs-noty'

const cookie = Vue.use(VueCookie)

const noty = Vue.use(VueNoty, {
  theme: 'mint',
  layout: 'bottomRight'
})


sync(store, router)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  cookie,
  noty,
  components: { App },
  template: '<App/>'
})
