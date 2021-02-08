import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

import store from "./store/index"

Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  store: new Vuex.Store(store)
}).$mount('#app')
