import store from "./store/index";
import http from "./http";

async function init(): Promise<void> {
  //TODO Loading screen waiting on api call
  try {
    const response = await http.get("/user");
    await store.dispatch("user/setUser", response.data);
  } catch (err) {
    console.log(err);
  }
}

export default init;
