const theme = {
  namespaced: true,
  state: {
    theme: {
      color: "indigo",
      shadow: "shadow"
    }
  },
  getters: {
    color: (state: { theme: { color: string } }) => {
      return state.theme.color;
    },
    shadow: (state: { theme: { shadow: string } }) => {
      return state.theme.shadow;
    }
  },
  actions: {
    setColor(
      context: { commit: (arg0: string, arg1: any) => void },
      color: string
    ) {
      context.commit("setColor", color);
    },
    setShadow(
      context: { commit: (arg0: string, arg1: any) => void },
      shadow: string
    ) {
      context.commit("setShadow", shadow);
    }
  },
  mutations: {
    setColor(state: { theme: { color: string } }, color: string) {
      state.theme.color = color;
    },
    setShadow(state: { theme: { shadow: string } }, shadow: string) {
      state.theme.shadow = shadow;
    }
  },
  modules: {}
};

export default theme;
