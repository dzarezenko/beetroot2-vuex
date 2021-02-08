import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(Vuex);
const store = new Vuex.Store({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    }
  },
  mutations: {
    increment(state, val) {
      state.counter += val;
    },
    decrement(state, _) {
      state.counter -= 7;
    },
    setAuth(state, payload) { // isAuth
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    async increment(context, payload) {
      //console.log(context);
      if (payload) {
        context.commit('increment', payload.value);
      }
    },
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      if (getters.counter < 0) {
        return 0;
      }
      if (getters.counter > 50) {
        return 50;
      }

      return getters.counter;
    },
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  store: store
}).$mount('#app')
