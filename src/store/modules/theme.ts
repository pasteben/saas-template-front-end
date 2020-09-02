const theme = {
  namespaced: true,
  state: {
    theme: {
      color: "indigo",
      shadow: "shadow",
      rounded: "rounded"
    }
  },
  getters: {
    color: (state: { theme: { color: string } }) => {
      return state.theme.color;
    },
    shadow: (state: { theme: { shadow: string } }) => {
      return state.theme.shadow;
    },
    rounded: (state: { theme: { rounded: string } }) => {
      return state.theme.rounded;
    }
  },
  actions: {
    setColor(
      context: { commit: (arg0: string, arg1: string) => void },
      color: string
    ) {
      context.commit("setColor", color);
    },
    setShadow(
      context: { commit: (arg0: string, arg1: string) => void },
      shadow: string
    ) {
      context.commit("setShadow", shadow);
    },
    setRounded(
      context: { commit: (arg0: string, arg1: string) => void },
      rounded: string
    ) {
      context.commit("setRounded", rounded);
    }
  },
  mutations: {
    setColor(state: { theme: { color: string } }, color: string) {
      state.theme.color = color;
    },
    setShadow(state: { theme: { shadow: string } }, shadow: string) {
      state.theme.shadow = shadow;
    },
    setRounded(state: { theme: { rounded: string } }, rounded: string) {
      state.theme.rounded = rounded;
    }
  },
  modules: {}
};

export default theme;
