<template>
  <div
    class="bg-white rounded-lg"
    :class="[padding ? '' : 'overflow-hidden', shadow ? shadow : '']"
  >
    <div class="px-4 py-2">
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
        <!-- <div class="ml-4 mt-4 flex-shrink-0">
          <span class="inline-flex rounded-md shadow-sm">
            <slot name="action"></slot>
            <button
              type="button"
              class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
            >
              Create new job
            </button>
          </span>
        </div> -->
      </div>
    </div>
    <div
      class="text-gray-600 border-t border-gray-200"
      :class="[padding ? 'p-4' : '']"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Card",
  props: {
    heading: {
      type: String,
      required: true
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
    ...mapGetters("theme", ["color", "shadow"])
  },
  methods: {
    ...mapActions("theme", ["setColor", "setShadow"])
  }
};
</script>
