import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import http from "./http";
import init from "./init";

init().then(() => {
  const app = createApp(App);

  app.config.globalProperties.$http = http;

  app
    .use(store)
    .use(router)
    .mount("#app");
});
