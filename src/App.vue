<template>
  <div id="app">
    <div v-if="!$route.meta.requiresAuth">
      <Nav />
      <router-view />
      <Footer />
    </div>
    <div v-if="$route.meta.requiresAuth">
      <AuthNav>
        <router-view />
      </AuthNav>
    </div>
  </div>
</template>

<script>
import Nav from "./views/public/Nav";
import AuthNav from "./views/auth/AuthNav";
import Footer from "./views/public/Footer";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Nav,
    AuthNav,
    Footer
  },
  computed: {
    ...mapGetters("user", ["isLoggedIn"])
  }
};
</script>
