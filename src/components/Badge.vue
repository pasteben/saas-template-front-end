<template>
  <span
    :class="
      `inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-${color}-100 text-${color}-800`
    "
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "Badge",
  props: {
    color: {
      type: String,
      required: false,
      default: "teal"
    }
  }
};
</script>
