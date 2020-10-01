<template>
  <div
    class="bg-gray-50 flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
        alt="Workflow"
      />
      <h2
        class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
      >
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
        Or
        <a
          href="#"
          :class="
            `font-medium text-${color}-600 hover:text-${color}-500 focus:outline-none focus:underline transition ease-in-out duration-150`
          "
        >
          start your 14-day free trial
        </a>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
        <form>
          <div class="">
            <theme-input
              id="email"
              name="email"
              type="email"
              label="Email"
              :required="true"
              v-model="email"
            />
            <div v-for="error in emailErrors" :key="error">
              <span class="text-sm leading-6 text-red-500">{{ error }}</span>
            </div>
          </div>

          <div class="mt-6">
            <theme-input
              id="password"
              name="password"
              type="password"
              label="Password"
              :required="true"
              v-model="password"
            />
            <div v-for="error in passwordErrors" :key="error">
              <span class="text-sm leading-6 text-red-500">{{ error }}</span>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                name="remember"
                v-model="remember"
                :class="
                  `form-checkbox h-4 w-4 text-${color}-600 transition duration-150 ease-in-out`
                "
              />
              <label
                for="remember_me"
                class="ml-2 block text-sm leading-5 text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div class="text-sm leading-5">
              <a
                href="#"
                :class="
                  `font-medium text-${color}-600 hover:text-${color}-500 focus:outline-none focus:underline transition ease-in-out duration-150`
                "
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div class="mt-6">
            <theme-button @click="login()" :full-width="true">
              Sign in
            </theme-button>
            <!-- <button
                @click="login()"
                :class="
                  `w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} active:bg-${color}-700 transition duration-150 ease-in-out`
                "
              >
                Sign in
              </button> -->
          </div>
          <div v-if="loginError" class="text-base leading-6 text-red-500 mt-2">
            The credientals didnt match our records.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import themeInput from "../../components/form/Input";
import themeButton from "../../components/form/Button";
import router from "@/router";
export default {
  components: {
    themeInput,
    themeButton
  },
  data() {
    return {
      loading: false,
      email: "",
      emailErrors: [],
      password: "",
      passwordErrors: [],
      loginError: false,
      remember: true
    };
  },
  computed: {
    ...mapGetters("theme", ["color"])
  },
  methods: {
    ...mapActions("user", ["setUser"]),
    login() {
      this.validate();

      if (this.emailErrors.length) {
        return;
      }

      if (this.passwordErrors.length) {
        return;
      }

      this.loginError = false;
      const baseUrl = process.env.VUE_APP_API_BASE_URL;
      axios.defaults.withCredentials = true;
      axios
        .get(baseUrl + "/sanctum/csrf-cookie")
        .then(() => {
          axios
            .post(baseUrl + "/login", {
              email: this.email,
              password: this.password,
              remember: this.remember
            })
            .then(response => {
              console.log(response);
              this.getUser();
            })
            .catch(e => {
              this.loginError = true;
              console.log(e);
            });
        })
        .catch(e => {
          console.log("Error getting csrf token from server");
          console.log(e);
        });
    },
    validate() {
      this.emailErrors = [];

      if (!this.email || !this.validEmail(this.email)) {
        this.emailErrors.push("Email must be a valid email");
      }

      this.passwordErrors = [];

      if (!this.password) {
        this.passwordErrors.push("Password required");
      }
      if (this.password) {
        if (this.password.length <= 6) {
          this.passwordErrors.push("Password must be at least 6 characters");
        }
      }
    },
    validEmail: function(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    getUser() {
      this.$http
        .get("/user")
        .then(response => {
          this.setUser(response.data);
          router.push({ name: "dashboard" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
