<template>
  <span class="inline-flex rounded-md shadow-sm">
    <button
      type="button"
      :class="
        `inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-${buttonColor}-600 hover:bg-${buttonColor}-500 focus:outline-none focus:border-${buttonColor}-700 focus:shadow-outline-${buttonColor} active:bg-${buttonColor}-700 transition ease-in-out duration-150`
      "
    >
      <slot></slot>
    </button>
  </span>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ThemeButton",
  props: {
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    buttonColor() {
      if (this.color) {
        return this.color;
      } else {
        //Override the color to the theme color if one is not provided as a prop
        return this.themeColor;
      }
    },
    ...mapGetters("theme", { themeColor: "color", shadow: "shadow" })
  },
  methods: {
    ...mapActions("theme", ["setColor", "setShadow"])
  }
};
</script>
