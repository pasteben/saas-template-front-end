<template>
  <span
    :class="[fullWidth ? 'w-full' : '', `inline-flex ${shadow} ${rounded}`]"
  >
    <button
      type="button"
      :class="[
        fullWidth ? 'flex justify-center w-full' : '',
        `inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium ${rounded} text-white bg-${buttonColor}-600 hover:bg-${buttonColor}-500 focus:outline-none focus:border-${buttonColor}-700 focus:shadow-outline-${buttonColor} active:bg-${buttonColor}-700 transition ease-in-out duration-150`
      ]"
    >
      <slot></slot>
    </button>
  </span>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      required: false
    },
    fullWidth: {
      type: Boolean,
      default: false
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
    ...mapGetters("theme", {
      themeColor: "color",
      shadow: "shadow",
      rounded: "rounded"
    })
  }
};
</script>
