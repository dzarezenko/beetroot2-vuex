import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(Vuex);

const counter = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state, val) {
      state.counter += val;
    },
    decrement(state, _) {
      state.counter -= 7;
    },
  },
  actions: {
    async increment(context, payload) {
      //console.log(context);
      if (payload) {
        context.commit('increment', payload.value);
      }
    },
  },
  getters: {
    counter(state, _, rootState, rootGetters) {
      //console.log(rootGetters)
      //console.log(rootState.isLoggedIn);
      return `${state.counter} ` + (rootState.isLoggedIn ? "yes" : "no");
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
  }
};

const store = new Vuex.Store({
  modules: {
    counter
  },

  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: {
    setAuth(state, payload) { // isAuth
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login({ commit }) { // get just commit
      commit("setAuth", { isAuth: true });
    },
    logout(context) { // get context
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
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
