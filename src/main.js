import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(Vuex);
const store = new Vuex.Store({
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state, val) {
      state.counter += val;
    },
    decrement(state, payload) {
      state.counter -= 7;
    }
  },
  actions: {
    async increment(context, payload) {
      //console.log(context);
      if (payload) {
        context.commit('increment', payload.value);
      }
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
