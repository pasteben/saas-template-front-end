<template>
  <div>
    <card heading="Profile">
      <div class="">
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
          <label
            for="username"
            class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            Name
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex rounded-md shadow-sm">
              <theme-input
                v-model="user.name"
                :required="true"
                class="w-full"
              ></theme-input>
            </div>
          </div>
        </div>

        <div
          class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="about"
            class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            Email
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex rounded-md shadow-sm">
              <theme-input
                v-model="user.email"
                :required="true"
                class="w-full"
              ></theme-input>
            </div>
          </div>
        </div>

        <!-- <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="about" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
            About
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex rounded-md shadow-sm">
              <textarea id="about" rows="3" class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
            </div>
            <p class="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
          </div>
        </div> -->

        <div
          class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="avatar"
            class="block text-sm leading-5 font-medium text-gray-700"
          >
            Avatar
          </label>
          <div class="mt-2 sm:mt-0 sm:col-span-2">
            <div class="flex items-center">
              <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <span class="ml-5 rounded-md shadow-sm">
                <button
                  type="button"
                  class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                >
                  Change
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-6 sm:mt-5 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
      >
        <theme-button @click="save()">Save</theme-button>
      </div>
    </card>
  </div>
</template>

<script>
import card from "../../components/Card";
import themeInput from "../../components/form/Input";
import themeButton from "../../components/form/Button";
import { mapGetters } from "vuex";
export default {
  components: {
    card,
    themeInput,
    themeButton
  },
  computed: {
    ...mapGetters("user", ["user"])
  },
  methods: {
    save() {
      this.$http
        .patch("/user", {
          name: this.user.name,
          email: this.user.email
        })
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>
