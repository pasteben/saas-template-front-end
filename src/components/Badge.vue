<template>
  <span
    :class="
      `inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-${badgeColor}-200 text-${badgeColor}-800`
    "
  >
    <slot>Badge</slot>
  </span>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Badge",
  props: {
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    badgeColor() {
      if (this.color) {
        return this.color;
      } else {
        //Override the color to the theme color if one is not provided as a prop
        return this.themeColor;
      }
    },
    ...mapGetters("theme", {
      themeColor: "color"
    })
  }
};
</script>
