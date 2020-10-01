import router from "../../router/index";

const user = {
  namespaced: true,
  state: {
    user: {}
  },
  getters: {
    user: (state: { user: object }) => {
      return state.user;
    },
    isLoggedIn: (state: { user: {} }) => {
      return Object.keys(state.user).length ? true : false;
    }
  },
  actions: {
    setUser(
      context: { commit: (arg0: string, arg1: object) => void },
      user: object
    ) {
      context.commit("setUser", user);
    },
    logout(context: { commit: (arg0: string) => void }) {
      context.commit("logout");
    }
  },
  mutations: {
    setUser(state: { user: object }, user: object) {
      state.user = user;
    },
    logout(state: { user: {} }) {
      router.push({ name: "login" }); //TODO Make sure this works
      state.user = {};
    }
  },
  modules: {}
};

export default user;
