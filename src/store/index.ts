import { createStore } from "vuex";
import user from "./modules/user";
import theme from "./modules/theme";

const store = createStore({
  state: {
    init: false,
    loading: false
  },
  mutations: {},
  actions: {},
  modules: {
    user: user,
    theme: theme
  },
  devtools: true
});

export default store;
