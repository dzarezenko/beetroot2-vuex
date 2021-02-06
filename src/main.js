import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter += 5;
    },
    decrement(state) {
      state.counter -= 7;
    }
  },
});

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  store: store
}).$mount('#app')
