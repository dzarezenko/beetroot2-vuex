export default {
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
