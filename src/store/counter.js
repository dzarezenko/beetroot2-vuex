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
  }
};

export default counter;
