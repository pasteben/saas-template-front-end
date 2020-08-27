<template>
  <div>
    <label
      v-if="label"
      :for="label"
      class="block text-sm font-medium leading-5 text-gray-700"
      >{{ label }}</label
    >
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        :id="label"
        :class="[
          error
            ? 'text-red-900 border-red-300 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
            : 'text-gray-900'
        ]"
        class="form-input block w-full pr-10 sm:text-sm sm:leading-5"
        :placeholder="placeholder"
        v-model="value"
        :type="type"
        aria-invalid="true"
        aria-describedby="email-error"
      />
    </div>
    <p v-if="error" class="mt-2 text-sm text-red-600" id="email-error">
      {{ error }}
    </p>
    <p
      v-if="helpText"
      class="mt-2 text-sm text-gray-500"
      id="email-description"
    >
      {{ helpText }}
    </p>
  </div>
</template>

<script>
//TODO Fix the aria-invalid="true" and aria-describedby="email-error" lines
export default {
  name: "Input",
  props: {
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    error: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    helpText: {
      type: String,
      required: false
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
</script>
