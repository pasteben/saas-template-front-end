<template>
  <span class="inline-flex rounded-md shadow-sm">
    <button
      type="button"
      :class="
        `inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} active:bg-${color}-700 transition ease-in-out duration-150`
      "
    >
      <slot></slot>
    </button>
  </span>
</template>

<script>
export default {
  name: "ThemeButton",
  props: {
    color: {
      type: String,
      required: false,
      default: "indigo"
    }
  }
};
</script>
