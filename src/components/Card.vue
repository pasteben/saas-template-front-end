<template>
  <div
    class="bg-white"
    :class="[padding ? '' : 'overflow-hidden', shadow ? shadow : '', rounded]"
  >
    <div class="px-4 py-2" v-if="showHeading">
      <div
        class="-ml-4 -mt-2 flex justify-between items-center flex-wrap sm:flex-no-wrap"
      >
        <div class="ml-4 mt-4">
          <h3 class="text-xl leading-6 font-medium text-gray-900">
            {{ heading }}
          </h3>
          <p class="mt-1 text-sm leading-5 text-gray-500">
            {{ subheading }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="text-gray-600"
      :class="[
        padding ? 'p-4' : '',
        showHeading ? 'border-t border-gray-200' : ''
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Card",
  props: {
    showHeading: {
      type: Boolean,
      required: false,
      default: true
    },
    heading: {
      type: String,
      required: false
    },
    subheading: {
      type: String,
      required: false
    },
    padding: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    ...mapGetters("theme", ["color", "shadow", "rounded"])
  }
};
</script>
