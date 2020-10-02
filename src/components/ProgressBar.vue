<template>
  <div :class="`w-full bg-${barColor}-200 ${rounded} h-${height}`">
    <div
      :style="`width: ${value}%`"
      :class="
        `bg-${barColor}-600 ${rounded} h-${height} transition-all duration-1000 ease-in-out`
      "
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Progress Bar",
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: false
    },
    height: {
      type: Number,
      required: false,
      default: 4
    }
  },
  computed: {
    barColor() {
      if (this.color) {
        return this.color;
      } else {
        //Override the color to the theme color if one is not provided as a prop
        return this.themeColor;
      }
    },
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    ...mapGetters("theme", {
      themeColor: "color",
      rounded: "rounded"
    })
  }
};
</script>
