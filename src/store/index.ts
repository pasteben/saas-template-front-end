import { createStore } from "vuex";
import router from "../router/index";

const store = createStore({
  state: {
    init: false,
    loading: false
  },
  mutations: {},
  actions: {},
  modules: {},
  devtools: true
});

store.registerModule("user", {
  namespaced: true,
  state: {
    user: {}
  },
  getters: {
    user: state => {
      return state.user;
    },
    isLoggedIn: state => {
      return Object.keys(state.user).length ? true : false;
    }
  },
  actions: {
    setUser(context, user) {
      context.commit("setUser", user);
    },
    logout(context) {
      context.commit("logout");
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = {};
      router.push({ name: "login" });
    }
  },
  modules: {}
});

export default store;
