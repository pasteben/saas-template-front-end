import { createStore } from "vuex";
import user from "./modules/user";
import theme from "./modules/theme";
import flash from "./modules/flash";

const store = createStore({
  state: {
    init: false,
    loading: false
  },
  mutations: {},
  actions: {},
  modules: {
    user: user,
    theme: theme,
    flash: flash
  },
  devtools: true
});

export default store;
