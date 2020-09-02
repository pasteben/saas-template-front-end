const flash = {
  namespaced: true,
  state: {
    flash: {
      headline: "",
      message: "",
      status: ""
    }
  },
  getters: {
    flash: (state: { flash: object }) => {
      return state.flash;
    }
  },
  actions: {
    flash(
      context: { commit: (arg0: string, arg1: object) => void },
      flash: { message: string; status: string; headline: string }
    ) {
      context.commit("flash", flash);
    }
  },
  mutations: {
    flash(
      state: { flash: { message: string; status: string; headline: string } },
      newflash: { message: string; status: string; headline: string }
    ) {
      state.flash.status = newflash.status;
      state.flash.message = newflash.message;
      state.flash.headline = newflash.headline;

      setTimeout(() => {
        //TODO change this to next tick
        state.flash = {
          headline: "",
          message: "",
          status: ""
        };
      }, 1);
    }
  },
  modules: {}
};

export default flash;
