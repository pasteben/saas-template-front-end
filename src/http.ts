import axios from "axios";
import router from "./router/index";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL + "/api";

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Check if the error is an auth error and if so then logout the user out
    if (error.response.status == 401) {
      //TODO log the user out via the api and redirect back to login screen. Use the vue router.
      if (!(router.currentRoute.value.name === "login")) {
        //If its not the login page then send the user to the login page
        router.push({
          name: "login"
        });
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
