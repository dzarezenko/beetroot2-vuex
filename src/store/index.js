import counter from "./counter/index";

export default {
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
};
