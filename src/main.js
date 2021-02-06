import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state, paylod) {
      if (paylod) {
        state.counter += paylod.value;
      }
    },
    decrement(state, paylod) {
      state.counter -= 7;
    }
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    normalizedCounter(state, getters) {
      if (getters.counter < 0) {
        return 0;
      }
      if (getters.counter > 50) {
        return 50;
      }

      return getters.counter;
    },
  },
});

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  store: store
}).$mount('#app')
