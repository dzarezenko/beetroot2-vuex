import getters from "./getters";

export default {
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
  getters: getters
};
