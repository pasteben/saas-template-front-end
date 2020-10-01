<template>
  <span
    class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500"
  >
    <span class="text-sm font-medium leading-none text-gray-100">{{
      initals
    }}</span>
  </span>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    initals() {
      return this.name
        ? this.name
            .split(" ")
            .map(word => {
              return word[0];
            })
            .join("")
        : "";
    }
  }
};
</script>
