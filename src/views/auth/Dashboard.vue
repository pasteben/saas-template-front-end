<template>
  <div>
    <div class="">
      Dashboard Here
    </div>
    <div class="mt-4">
      <theme-button @click="alert()">Alert</theme-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import themeButton from "../../components/form/Button";
export default {
  name: "Dashboard",
  components: {
    themeButton
  },
  data() {
    return {
      number: 0
    };
  },
  created() {
    this.flash({
      status: "warning",
      message: "This api response alert",
      headline: "Success"
    });
  },
  methods: {
    ...mapActions("flash", ["flash"]),
    alert() {
      this.number = this.number + 1;
      this.flash({ status: "info", headline: "The number is " + this.number });
    }
  }
};
</script>
