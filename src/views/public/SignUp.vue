<template>
  <div class="py-12 bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
        >
          Transactions
        </p>
        <h3
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          A better way to send money
        </h3>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="mt-10">
        <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
          <li>
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  Competitive exchange rates
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  No hidden fees
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  Transfers are instant
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  Mobile notifications
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-gray-50" v-if="products">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-12 align-middle flex justify-center">
        <div class="flex items-center">
          <div class="px-4 text-gray-500">
            Monthly
          </div>
          <toggle v-model="toggle"></toggle>
          <div class="px-4 text-gray-500">
            Yearly
          </div>
        </div>
      </div>
      <div class="flex flex-wrap py-8">
        <input type="hidden" name="plan_id" :value="selectedPlan.id" />
        <div
          v-for="product in products"
          :key="product"
          class="p-2 lg:w-1/3 md:w-full sm:w-full w-full relative"
        >
          <div v-for="plan in product.plans" :key="plan">
            <card
              :padding="false"
              :showHeading="false"
              class="text-center cursor-pointer"
              :class="activeClasses(plan)"
              @click="select(plan)"
              v-if="plan.time_frame === time_frame"
            >
              <div class="bg-white py-8 px-4">
                <h3
                  class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                  id="tier-standard"
                >
                  {{ product.name }}
                </h3>
                <div class="flex" v-if="selectedPlan.id === plan.id">
                  <div class="flex-1"></div>
                  <div class="flex">
                    <div class="absolute right-0 top-0 p-4">
                      <span
                        :class="`iconify text-${themeColor}-500 text-2xl`"
                        data-icon="mdi-check-circle"
                        data-icon-inline="false"
                        aria-hidden="true"
                      ></span>
                    </div>
                  </div>
                </div>

                <div class="">
                  <span class="text-xl text-gray-500">$</span>
                  <span class="text-3xl text-gray-700">{{
                    plan.price / 100
                  }}</span>
                  <span
                    v-if="time_frame === 'monthly'"
                    class="text-sm text-gray-500"
                    >/mo</span
                  >
                  <span
                    v-if="time_frame === 'yearly'"
                    class="text-sm text-gray-500"
                    >/year</span
                  >
                </div>
              </div>

              <!-- <div class="p-4">
                <ul>
                  <li
                    class="flex items-start p-1"
                    v-for="feature in product.features"
                    :key="feature"
                  >
                    <p
                      :class="[
                        feature.enabled
                          ? 'text-gray-800'
                          : 'text-gray-500 line-through',
                        'flex items-center text-base leading-6 ml-3 font-medium'
                      ]"
                    >
                      <template v-if="feature.enabled">
                        <span
                          :class="
                            `iconify text-teal-500 text-xl leading-6 mr-2 font-medium`
                          "
                          data-icon="mdi-check"
                          data-icon-inline="false"
                          aria-hidden="true"
                        ></span>
                      </template>
                      <template v-if="!feature.enabled">
                        <span
                          :class="
                            `iconify text-gray-500 text-xl leading-6 mr-2 font-medium`
                          "
                          data-icon="mdi-close"
                          data-icon-inline="false"
                          aria-hidden="true"
                        ></span>
                      </template>
                      {{ feature.description }}
                    </p>
                  </li>
                </ul>
              </div> -->
            </card>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-6">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <card :showHeading="false">
          <form>
            <div class="my-2">
              <theme-input
                v-model="name"
                :required="true"
                label="Name"
                type="text"
                placeholder="John Doe"
              ></theme-input>
            </div>
            <div class="my-2">
              <theme-input
                v-model="email"
                :required="true"
                label="Email"
                type="email"
                placeholder="john@doe.com"
              ></theme-input>
            </div>
            <div class="my-2">
              <theme-input
                v-model="password"
                :required="true"
                label="Password"
                type="password"
                placeholder="Password"
              ></theme-input>
            </div>
            <div class="my-2">
              <theme-input
                v-model="password_confirmation"
                :required="true"
                label="Confirm Password"
                type="password"
                placeholder="Password"
              ></theme-input>
            </div>
            <div class="my-2">
              <credit-card
                :submit="submit"
                @card-success="cardSuccess"
                @card-error="cardError"
              ></credit-card>
            </div>
            <div class="mt-4">
              <theme-button @click.prevent="submitCard()">Submit</theme-button>
            </div>
          </form>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
import axios from 'axios';
import Toggle from "../../components/form/Toggle";
import Card from "../../components/Card";
import ThemeInput from "../../components/form/Input";
import ThemeButton from "../../components/form/Button";
import CreditCard from "../../components/form/CreditCard";
import router from '@/router';
export default {
  name: "SignUp",
  components: {
    Toggle,
    Card,
    ThemeInput,
    ThemeButton,
    CreditCard
  },
  data() {
    return {
      time_frame: "monthly",
      selectedPlan: 1,
      toggle: false,
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      submit: false,
      cardToken: '',
      products: []
    };
  },
  created() {
    const baseUrl = process.env.VUE_APP_API_BASE_URL;
    axios.get(baseUrl + '/products')
      .then(response => {
        this.products = response.data
        this.selectedPlan = this.products[0].plans[0];
      })
  },
  methods: {
    activeClasses: function(plan) {
      if (this.selectedPlan.id === plan.id) {
        return `border-2 border-${this.themeColor}-500 ${this.shadow}`;
      } else {
        return "border-2 border-gray-100";
      }
    },
    select: function(plan) {
      this.selectedPlan = plan;
    },
    submitCard() {
      this.submit = true;
      //TODO validate the form imputs
    },
    cardSuccess(token) {
      this.cardToken = token;
      this.submit = false;
      this.signUp();
    },
    cardError(error) {
      console.log(error); //TODO Display errors in ui
    },
    signUp() {
      const baseUrl = process.env.VUE_APP_API_BASE_URL;
      axios.post(baseUrl + '/sign-up', {
        email: this.email,
        name: this.name,
        password: this.password,
        password_confirmation: this.password_confirmation,
        paymentMethod: this.cardToken,
        planId: this.selectedPlan.id
      }).then(response => {
        router.push({ name: "dashboard" });
      }).catch(error => {
        console.log(error);
      });
    }
  },
  watch: {
    toggle() {
      this.toggle ? (this.time_frame = "yearly") : (this.time_frame = "monthly");
    }
  },
  computed: {
    ...mapGetters("theme", {
      themeColor: "color",
      shadow: "shadow"
    })
  }
};
</script>
