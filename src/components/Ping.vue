<template>
  <span
    :class="
      `animate-ping absolute inline-flex h-full w-full rounded-full bg-${pingColor}-400 opacity-75`
    "
  ></span>
  <span
    :class="
      `relative inline-flex rounded-full h-${size} w-${size} bg-${pingColor}-500`
    "
  ></span>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Ping",
  props: {
    size: {
      type: Number,
      required: false,
      default: 3
    },
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    pingColor() {
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
