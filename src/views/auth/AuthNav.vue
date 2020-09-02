<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile -->
    <div class="md:hidden">
      <transition
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-show="showMobileNav" class="fixed inset-0 flex z-40">
          <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.

          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->

          <div class="fixed inset-0">
            <div
              @click="showMobileNav = !showMobileNav"
              class="absolute inset-0 bg-gray-600 opacity-75"
            ></div>
          </div>
          <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->

          <transition
            enter-active-class="transition ease-in-out duration-300 transform"
            enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition ease-in-out duration-300 transform"
            leave-from-class="translate-x-0"
            leave-to-class="-translate-x-full"
          >
            <div
              v-show="showMobileNav"
              class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800"
            >
              <div class="absolute top-0 right-0 -mr-14 p-1">
                <button
                  @click="showMobileNav = !showMobileNav"
                  class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                >
                  <svg
                    class="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex-shrink-0 flex items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                  alt="Workflow"
                />
              </div>
              <div class="flex-1 flex flex-col overflow-y-auto">
                <nav class="flex-1 py-4 bg-gray-800 space-y-1">
                  <div v-for="route in routes" :key="route">
                    <router-link
                      :to="{ name: route.name }"
                      v-slot="{ isActive }"
                    >
                      <div
                        :class="[
                          isActive
                            ? `bg-gray-900 text-white borded border-l-4 border-${color}-600`
                            : 'borded border-l-4 border-gray-800'
                        ]"
                        class="group flex items-center px-4 py-2 text-base leading-5 font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                      >
                        <span
                          class="iconify mr-2"
                          :data-icon="route.icon"
                          data-icon-inline="false"
                          aria-hidden="true"
                        ></span>
                        {{ route.title }}
                      </div>
                    </router-link>
                  </div>
                </nav>
              </div>
            </div>
          </transition>
          <div class="flex-shrink-0 w-14">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </transition>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col h-0 flex-1">
          <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
              alt="Workflow"
            />
          </div>
          <div class="flex-1 flex flex-col overflow-y-auto">
            <nav class="flex-1 py-4 bg-gray-800 space-y-1">
              <div v-for="route in routes" :key="route">
                <router-link :to="{ name: route.name }" v-slot="{ isActive }">
                  <div
                    :class="[
                      isActive
                        ? `bg-gray-900 text-white borded border-l-4 border-${color}-600`
                        : 'borded border-l-4 border-gray-800'
                    ]"
                    class="group flex items-center px-4 py-2 text-base leading-5 font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                  >
                    <span
                      class="iconify mr-2"
                      :data-icon="route.icon"
                      data-icon-inline="false"
                      aria-hidden="true"
                    ></span>
                    {{ route.title }}
                  </div>
                </router-link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          @click="showMobileNav = !showMobileNav"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          aria-label="Open sidebar"
        >
          <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 items-center flex">
            <div class="text-xl font-semibold text-gray-900">
              <!-- {{ $route.meta.headingName }} -->
            </div>
            <!-- <form class="w-full flex md:ml-0" action="#" method="GET">
            <label for="search_field" class="sr-only">Search</label>
            <div class="relative w-full text-gray-400 focus-within:text-gray-600">
              <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
              </div>
              <input id="search_field" class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search">
            </div>
          </form> -->
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <!-- Profile dropdown -->
            <dropdown>
              <div>
                <avatar
                  class="cursor-pointer"
                  :name="user.name"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                ></avatar>
              </div>

              <template v-slot:content>
                <div
                  class="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <router-link
                    :to="{ name: 'settings' }"
                    class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                    role="menuitem"
                    >Settings</router-link
                  >

                  <router-link
                    :to="{ name: 'profile' }"
                    class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                    role="menuitem"
                    >Profile</router-link
                  >

                  <a
                    @click="logout()"
                    class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                    role="menuitem"
                    >Logout</a
                  >
                </div>
              </template>
            </dropdown>
          </div>
        </div>
      </div>

      <main
        class="flex-1 relative overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="pt-2 pb-6 md:py-6">
          <div
            class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
          >
            <div class="mt-16 w-full">
              <div
                v-for="flash in flashes"
                :key="flash"
                class="flex sm:justify-end justify-center"
              >
                <flash
                  :status="flash.status"
                  :message="flash.message"
                  :headline="flash.headline"
                ></flash>
              </div>
            </div>
          </div>
          <div class="mx-auto px-4 sm:px-6 md:px-10">
            <!-- Replace with your content -->
            <slot></slot>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Avatar from "../../components/Avatar";
import Dropdown from "../../components/Dropdown";
import Flash from "../../components/Flash";
export default {
  name: "AuthNav",
  components: {
    Avatar,
    Dropdown,
    Flash
  },
  data() {
    return {
      showMobileNav: false,
      flashes: [],
      routes: [
        {
          title: "Dashboard",
          name: "dashboard",
          icon: "mdi-view-dashboard"
        },
        {
          title: "Theme",
          name: "theme",
          icon: "mdi-format-color-fill"
        },
        {
          title: "Settings",
          name: "settings",
          icon: "mdi-cog"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("user", ["isLoggedIn", "user"]),
    ...mapGetters("theme", ["color"]),
    ...mapGetters("flash", ["flash"])
  },
  watch: {
    flash: {
      //Watch the slash vuex state to display flash messages
      deep: true,
      handler(val) {
        if (val.headline) {
          //Check to see if the headline has been set. Ressetting vuex the state removes the headline so no need to display a blank flash
          this.flashes.unshift({
            status: val.status,
            message: val.message,
            headline: val.headline
          });
        }
      }
    }
  },
  methods: {
    ...mapActions("user", ["logout"])
  }
};
</script>
